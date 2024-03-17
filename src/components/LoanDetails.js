import React from "react";
import {
  AdjustmentsVerticalIcon,
  ChartPieIcon,
  GlobeAmericasIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import FeatureIcon from "components/FeatureIcon";

function LoanDetails(props) {

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">
          <div className="lg:w-5/12 xl:w-5/12 md:py-12 space-y-10">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              strapline={props.strapline}
              image={props.image}

            />
          </div>
          <div className="lg:w-7/12 xl:w-7/12 flex-none relative">
            <div className="pattern-dots opacity-10 absolute top-0 left-0 w-48 h-64 md:mt-20 transform -translate-x-10 -translate-y-10" />
            <div className="pattern-dots opacity-10 absolute bottom-0 right-0 w-48 h-64 md:mb-20 transform translate-x-10 translate-y-10" />
            <div className="relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className="md:w-1/2 md:mt-24 space-y-6">
                {props.features.left.map((feature, index) => (
                  <div
                    className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300"
                    key={index}
                  >
                    {/* <FeatureIcon color={feature.iconColor} className="mb-6">
                      <feature.icon />
                    </FeatureIcon> */}
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="md:w-1/2 space-y-6">
                {props.features.right.map((feature, index) => (
                  <div
                    className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300"
                    key={index}
                  >
                    {/* <FeatureIcon color={feature.iconColor} className="mb-6">
                      <feature.icon />
                    </FeatureIcon> */}
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default LoanDetails;
