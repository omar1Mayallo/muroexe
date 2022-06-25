import {initializeApp} from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmbF90qiw_e-UOxkk7wuPD8WUegJgPS6I",
  authDomain: "muroexeecommerce.firebaseapp.com",
  projectId: "muroexeecommerce",
  storageBucket: "muroexeecommerce.appspot.com",
  messagingSenderId: "40487279145",
  appId: "1:40487279145:web:6f3d96f60bd9d500e51a38",
  measurementId: "G-ZFL2YGCDMS",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//1- Authentication
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// select_account
//The authorization server prompts the user to select a user account. This allows a user who has multiple accounts at the authorization server to select amongst the multiple accounts that they may have current sessions for.
googleProvider.setCustomParameters({
  prompt: "select_account",
});
const facebookProvider = new FacebookAuthProvider();
// ---- Sign In POPUPS ----
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};
export const signInWithFacebook = async () =>
  await signInWithPopup(auth, facebookProvider);
// ---- Sign Out ----
export const signOutFunc = async () => await signOut(auth);
//2- Database
export const db = getFirestore(app);
// ---- Create User_Document Into DATABASE ----
export const createUserDoc = async (userAuth, restData = {}) => {
  if (!userAuth) return;
  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    const {displayName, email} = userAuth;
    const creationDate = new Date();
    try {
      await setDoc(docRef, {
        displayName,
        email,
        creationDate,
        ...restData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return docRef;
};
//---- Sign Up With Email And Password ----
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
//---- Sign In With Email And Password ----
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
//---- Authentication ----
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//---- Adding ShopData To DATABASE ----
export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};
//---- Get shopData from DATABASE ----
export const getAllCollectionsObjects = async () => {
  const shopDataRef = collection(db, "shopData");
  const q = query(shopDataRef);
  const querySnapshot = await getDocs(q);
  const getAllCollections = querySnapshot.docs.map((doc) => doc.data());

  return getAllCollections.reduce((acc, collection) => {
    //final >> {collectionTitle: {collectionObject}}
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};
