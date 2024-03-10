import React from "react";
import {
  AdjustmentsVerticalIcon,
  ChartPieIcon,
  GlobeAmericasIcon,
  BoltIcon,
  PuzzlePieceIcon,
  UsersIcon,
  HomeIcon, BuildingStorefrontIcon
} from "@heroicons/react/24/solid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import FeatureIcon from "components/FeatureIcon";

function FeaturesSection(props) {
  const features = [
    {
      title: "Home Loan",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: HomeIcon,
      iconColor: "orange",
    },
    // {
    //   title: "Rich Statistics",
    //   description:
    //     "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
    //   icon: ChartPieIcon,
    //   iconColor: "red",
    // },

    // {
    //   title: "Works globally",
    //   description:
    //     "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
    //   icon: GlobeAmericasIcon,
    //   iconColor: "emerald",
    // },
    // {
    //   title: "Lighting fast UI",
    //   description:
    //     "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
    //   icon: BoltIcon,
    //   iconColor: "purple",
    // },
    {
      title: "Business Loan",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: BuildingStorefrontIcon,
      iconColor: "blue",
    },
    // {
    //   title: "Auto Auth",
    //   description:
    //     "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
    //   icon: UsersIcon,
    //   iconColor: "pink",
    // },
  ];

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="space-y-16 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              className="group p-5 transition ease-out duration-200 rounded-2xl text-center"
              key={index}
            >
              <FeatureIcon
                color={feature.iconColor}
                size="large"
                className="mb-12"
              >
                <feature.icon />
              </FeatureIcon>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
