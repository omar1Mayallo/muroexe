import React from "react";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import PgHead from "../../Components/Layout/PgHead/PgHead";
const Shipping = () => {
  return (
    <SectionContainer Tag="section" className="returns-page">
      <PgHead title="Shipping" />

      <p className="text-muroexe strongBold">Is shipping free of charge?</p>
      <p className="text-muroexe">
        Orders delivered to spanish mainland, Balearic Islands or Portugal over
        65€ are have free shipping. For orders under 65€, the shipping costs
        will be 2.99€ .
        <br />
        Orders delivered to countries within EC, rest of Europe and the rest of
        the world over €85 have free shipping. For orders under 85€, shipping
        costs can range from €2.99 to the nearest countries and €19.99 to the
        farthest.
        <br />
        <br />
        Keep in mind that orders delivered outside EC may be subject to
        additional expenses (import taxes, customs duties and/or fees applied by
        the authorities of each country) that will have to be paid by the
        customer. Customs policies are variable, so we recommend that you
        contact the local customs office to have all the information.
      </p>
      <p className="text-muroexe strongBold">
        How long does it take to deliver an order?
      </p>
      <p className="text-muroexe">
        EC countries
        <br />
        Except for special circumstances, deliveries may take between 3 and 7
        business days once the order is shipped. Deliveries may take some days
        longer than usual, especially in some more complicated times of the year
        such as Christmas, Easter, holidays, and sales.
        <br />
        <br />
        Other countries out of the EC and worldwide
        <br />
        Except for special circumstances, deliveries may take between 3 and 10
        working days once the order is shipped. Deliveries may take some days
        longer than usual, especially in some more complicated times of the year
        such as Christmas, Easter, holidays, and sales.
      </p>
      <p className="text-muroexe strongBold">Where do we ship our products?</p>
      <p className="text-muroexe">
        We deliver all over Europe and to the main countries worldwide as: Usa,
        Canada, CostaRice, Mexico, Australia, Japan, Singapore and China.
      </p>
      <p className="text-muroexe strongBold">
        Terms and conditions of delivery
      </p>
      <p className="text-muroexe">
        Once the product is shipped, you will receive an email with the tracking
        number. In the event that within 7 working days of placing the order we
        have not yet sent you this email with the tracking number, please
        contact us at userexperience@muroexe.com and we will get it for you.
        <br />
        Different billing and delivery addresses Remember that if you want to
        put a different delivery address from the billing one, you have to
        specify it when you give us the shipping details. Once the order is
        placed, it will always be more difficult to change the delivery details
        (although we will try, of course). To do this, please contact us.
      </p>
      <p className="text-muroexe strongBold">Nobody at destination</p>
      <p className="text-muroexe">
        The courier will try to deliver your order a second time, and if they
        are still unable to deliver, the package will be returned to our
        offices. This is why it is important to specify a shipping address where
        there will surely be someone who can pick it up.
      </p>
    </SectionContainer>
  );
};

export default Shipping;
