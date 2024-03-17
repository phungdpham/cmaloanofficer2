import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function Loans(props) {
  // const loans = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?fit=crop&w=800&h=600",
  //     title:
  //       "$10,000 Grants for First Time Home Buyers",
  //     description:
  //       "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
  //     url: "/home-loans/home-ready-with-10k-grants",
  //     tags: ["travel", "adventure"],
  //     authorName: "Joe Smith",
  //     authorUrl: "/author/joe-smith",
  //     date: "March 3, 2021",
  //     readTime: "12 min",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=800&h=600",
  //     title: "1% Down Payment 2% Grants",
  //     description:
  //       "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
  //     url: "/loan/20-best-places-star-gazing",
  //     tags: ["travel", "astronomy"],
  //     authorName: "Lia Baker",
  //     authorUrl: "/author/lia-baker",
  //     date: "February 23, 2021",
  //     readTime: "20 min",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=800&h=600",
  //     title:
  //       "How to explore one of the most beautiful lakes in the whole world",
  //     description:
  //       "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
  //     url: "/loan/how-to-explore-beautiful-lake",
  //     tags: ["travel", "adventure"],
  //     authorName: "Mark Jones",
  //     authorUrl: "/author/mark-jones",
  //     date: "February 15, 2021",
  //     readTime: "5 min",
  //   },
  // ];

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 md:grid-cols-2">
          {props.loans.map((loan, index) => (
            <div
              className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-sm"
              key={index}
            >
              <Link href={loan.url}>
                <a className="block relative group">
                  <div className="flex items-center justify-center absolute inset-0 bg-amber-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                    <ArrowUpRightIcon className="text-white inline-block w-10 h-10" />
                  </div>
                  <img src={loan.image} alt="" />
                </a>
              </Link>
              <div className="p-5 lg:p-6">
                <h4 className="font-bold text-lg sm:text-xl mb-2">
                  <Link href={loan.url}>
                    <a className="leading-7 text-gray-800 hover:text-gray-600">
                      {loan.title}
                    </a>
                  </Link>
                </h4>
                {/* <p className="text-gray-600 text-sm mb-3">
                  <Link href={loan.authorUrl}>
                    <a className="font-medium text-blue-600 hover:text-blue-400">
                      {loan.authorName}
                    </a>
                  </Link>{" "}
                  on <span className="font-medium">{loan.date}</span> ·{" "}
                  {loan.readTime} read
                </p> */}
                {/* <p className="prose">{loan.description}</p> */}

                {/* {loan.tags && loan.tags.length && (
                  <div className="space-x-2 mt-3">
                    {loan.tags.map((tag, index) => (
                      <Link href={`/tag/${tag}`} key={index}>
                        <a className="font-semibold inline-flex px-2 leading-4 rounded-full text-blue-700 bg-blue-200 hover:opacity-80 text-xs py-0.5">
                          {tag}
                        </a>
                      </Link>
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Loans;
