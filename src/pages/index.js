import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import ContactSection from "components/ContactSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        title={
          <>
            <span className="font-light text-2xl text-amber-700">
              Greatings!{" "}
            </span> 
            <br />
            I'm Phung
          </>
        }
        subtitle="A True  Advisor Delivering Values and Expertise for your home & business loans"
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        leftImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&fit=crop&h=800&w=1280"
        rightImage="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?crop=entropy&fit=crop&h=800&q=80&w=600"
      />
      <FeaturesSection
        title="The best tech under the hood"
        subtitle="Build user friendly and modern dashboards using the latest tech. Now is the time with a best selling UI framework."
        strapline="Created with passion"
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

export default IndexPage;
