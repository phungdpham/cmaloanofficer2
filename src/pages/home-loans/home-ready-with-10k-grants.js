import React from 'react';
import Meta from 'components/Meta';
import LoanDetails from 'components/LoanDetails';
import ContactSection from 'components/ContactSection';
import {
  AdjustmentsVerticalIcon,
  ChartPieIcon,
  GlobeAmericasIcon,
  BoltIcon,
  CheckIcon
} from '@heroicons/react/24/solid';

const features = {
  // Left column
  left: [
    {
      title: "First time Home Buyer",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi",
   
    },
    {
      title: 'Receive $10,000 Grant',
      description:
        'Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi',
     
    },
    
  ],
  // Right column
  right: [
    {
      title: '$500 Appraisal Credit',
      description:
        'test on the right',
    },
    {
      title: '$500 Home Warranty Credit',
      description:
        'test on the right',
    },
  ],
};

function homeReady10Grants(props) {
  return (
    <>
      <Meta title="Loan Details" />
      <LoanDetails
        // title="Receive $10,000 Grant"
        // subtitle="You will love working with your newly updated and customized dashboard."
        strapline="Introducing"
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&w=800"
        features={features}
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-amber-700"
      />
      <ContactSection
        title="Get in touch"
        subtitle="Free Consultation for Your Home Loan"
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

export default homeReady10Grants;
