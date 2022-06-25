import React from "react";
import PgHead from "../../Components/Layout/PgHead/PgHead";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
const LegalNotice = () => {
  return (
    <SectionContainer Tag="section" Class="legal-notice-page">
      <PgHead title="Legal" />
      <p className="text-muroexe">
        We have to follow the law and offer you a classic "legal notice", the
        least read page in the entire history of the Internet. Surely no living
        being would ever willingly read a legal notice but, seeing as you're
        here, intentionally or by accident, we'll try to give you a pleasant
        read and, above all, try to help you understand (almost) everything we
        tell you, after we've run it by our interpreter for humans who aren’t
        lawyers.
      </p>
      <p className="text-muroexe strongBold">Owner identification</p>
      <p className="text-muroexe">
        The owner of the website: http://muroexe.com is Muro.exe Industries S.L.
        (hereafter Muroexe or "we"), Spanish company with CIF B-86372695,
        registered in the Companies Register of Madrid, tome 29.561, folder 34,
        section 8, page number M-532016, registration 1, registered address:
        Called Paseo de los Melancholics 9, 28005, Madrid. You can get in touch
        with us by emailing to userexperience@muroexe.com
      </p>
      <p className="text-muroexe strongBold">
        Acceptance of the general conditions
      </p>
      <p className="text-muroexe">
        Access to or use of this website implies the acceptance of these present
        general conditions, and any additions or modifications that may be made
        in the future. We understand that our customers are responsible for
        reading the general conditions of use that are in force at all times.
        <br />
        <br />
        The conditions of use for this website have an indefinite character. We
        reserve the right to modify its content at any time without prior
        warning.
      </p>
      <p className="text-muroexe strongBold">Privacy policy</p>
      <p className="text-muroexe">
        On the occasion of the entry into force of the new General Data
        Protection Regulation (GRPC), which came into force for all of Europe on
        May 25, 2018, we have updated our privacy and data protection
        conditions.
        <br />
        <br />
        Muroexe is a brand that allows its users ("you") to acquire any of the
        products available through its website. Muro.exe Industries S.L. ("We"),
        as the owner and responsible for data processing, manages and processes
        our website and our mobile website. By accessing our website and
        following our purchase process, you agree that you have read and
        understand this Privacy Policy, as well as the practices for the
        collection and management of the information described therein. The
        conditions of use for this website have an indefinite character. We
        reserve the right to modify its content at any time without prior
        warning.
      </p>
    </SectionContainer>
  );
};

export default LegalNotice;
