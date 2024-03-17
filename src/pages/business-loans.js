import React from "react";
import Meta from "components/Meta";
import Loans from "components/LoanPrograms";
import ContactSection from "components/ContactSection";
const loans = [
  {
    image:
      'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?fit=crop&w=800&h=600',
    title: 'Equipment Loans',
    description:
      'Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.',
    url: '/business-loans/home-ready-with-10k-grants',

  },
  {
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=800&h=600',
    title: 'Working Capital',

    description:
      'Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.',
    url: '/business-loans/20-best-places-star-gazing',
  
  },
  {
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=800&h=600',
    title: 'Cash Advance',
    description:
      'Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.',
    url: '/business-loans/how-to-explore-beautiful-lake',
  },
];

function BusinessLoansPage(props) {
  return (
    <>
      <Meta title="Business Loans" />
      <Loans
        title="Business Loan Program"
        subtitle=""
        strapline=""
        loans={loans}
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
