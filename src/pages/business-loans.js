import React from "react";
import Meta from "components/Meta";
import Loans from "components/Loans";
import ContactSection from "components/ContactSection";

function BusinessLoansPage(props) {
  return (
    <>
      <Meta title="Business Loans" />
      <Loans
        title="Business Loan Program"
        subtitle=""
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <ContactSection
        title="Get in touch"
        subtitle="If something does not make sense, feel free to contact us and we will get back to you as soon as possible."
        strapline=""
        size="md"
        bgColor="bg-amber-900"
        bgImage="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&fit=crop&h=800&q=80&w=1280"
        bgImageOpacity={0.17}
        textColor="text-white"
      />
    </>
  );
}

export default BusinessLoansPage;
