import React, {useEffect, lazy, Suspense} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataStart} from "./Redux/StateSlices/Shop/ShopSlice";
import {setCurrentUser} from "./Redux/StateSlices/User/userSlice";
import {
  onAuthStateChangedListener,
  createUserDoc,
} from "./Firebase/Firebase-config";
import {onSnapshot} from "firebase/firestore";
import Loading from "./Components/Items/Loading/Loading";
import Layout from "./Components/Layout/Layouts/Layout";
import "./App.scss";
///////////////////////////////////////////////
const Home = lazy(() => import("./Pages/Pg-Home/Home"));
const Shop = lazy(() => import("./Pages/Pg-Shop/Shop"));
const Sign = lazy(() => import("./Pages/Pg-Sign/Sign"));
const Checkout = lazy(() => import("./Pages/Pg-Checkout/Checkout"));
const Product = lazy(() => import("./Pages/Pg-Product/Product"));
const FAQ = lazy(() => import("./Pages/Pg-FAQ/FAQ"));
const About = lazy(() => import("./Pages/Pg-About/About"));
const Returns = lazy(() => import("./Pages/Pg-Returns/Returns"));
const Shipping = lazy(() => import("./Pages/Pg-Shipping/Shipping"));
const TermsAndCondition = lazy(() =>
  import("./Pages/Pg-TermsAndCondition/TermsAndCondition")
);
const OrderingForCompanies = lazy(() =>
  import("./Pages/Pg-OrderingForCompanies/OrderingForCompanies")
);
const User = lazy(() => import("./Pages/Pg-User/User"));
const DesignProcess = lazy(() =>
  import("./Pages/Pg-DesignProcess/DesignProcess")
);
const LegalNotice = lazy(() => import("./Pages/Pg-LegalNotice/LegalNotice"));
//////////////////////////////////////////////
const App = () => {
  const {currentUser} = useSelector((state) => state.user);
  const {isLoading} = useSelector((state) => state.shop);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchDataStart());
    const unsubscribe = onAuthStateChangedListener(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDoc(userAuth);
        onSnapshot(userRef, (snapshot) => {
          Dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        Dispatch(setCurrentUser(userAuth));
      }
    });
    return unsubscribe;
  }, [Dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="product/:productId"
              element={<Product isLoading={isLoading} />}
            />
            <Route path="shop/*" element={<Shop />} />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="user"
              element={
                !currentUser ? <Navigate to={`/`} replace={true} /> : <User />
              }
            />
            <Route
              path="sign-in"
              element={
                !currentUser ? <Sign /> : <Navigate to={`/`} replace={true} />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="design-process" element={<DesignProcess />} />
            <Route path="returns" element={<Returns />} />
            <Route path="faq" element={<FAQ />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndCondition />}
            />
            <Route
              path="ordering-for-companies"
              element={<OrderingForCompanies />}
            />
            <Route path="legal-notice" element={<LegalNotice />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
