"use client";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import SectionWrapper from "../SectionWrapper";
import Accordion from "../Accordion";

type FaqSectionProps = {};

const FaqSection = (props: FaqSectionProps) => {
  const [active, setActive] = useState(1);
  const data = [
    {
      id: 1,
      title: "What services do you offer?",
      content:
        "We offer a wide range of services including website design, development, e-commerce solutions, custom web application development, website maintenance, SEO (Search Engine Optimization), and web hosting.",
      active: true,
    },

    {
      id: 2,
      title: "How long will it take to complete my website?",
      content:
        "The timeline for completing a website project can vary based on its complexity, features, and client requirements. Typically, we provide an estimated timeline after thoroughly discussing your project needs. Factors such as revisions, content gathering, and feedback can also influence the timeline.",
      active: false,
    },

    {
      id: 3,
      title:
        "Do you provide ongoing support and maintenance after the website is launched?",
      content:
        "Yes, we offer ongoing support and maintenance services to ensure your website runs smoothly post-launch. Our support includes regular updates, security checks, bug fixes, and assistance with any technical issues that may arise.",
      active: false,
    },

    {
      id: 4,
      title:
        "Can you help with SEO to improve my website's visibility on search engines?",
      content:
        "Absolutely. Our team includes SEO specialists who can optimize your website's content, structure, and performance to enhance its visibility on search engines like Google. We employ various techniques such as keyword research, on-page optimization, link building, and performance optimization to improve your website's search engine rankings.",
      active: false,
    },

    {
      id: 5,
      title: "How do you ensure my website is responsive and mobile-friendly?",
      content:
        "We prioritize responsive web design, ensuring that your website looks and functions seamlessly across various devices and screen sizes, including desktops, laptops, tablets, and smartphones. We employ industry best practices such as fluid grids, flexible images, and CSS media queries to create a consistent user experience across all devices.",
      active: false,
    },
  ];
  return (
    <SectionWrapper>
      <SectionHeader
        headerText="Find Answers to Common Questions"
        subHeaderText="Our FAQ section provides quick answers to common questions about our product. Find information on getting started, feature details, and technical support - all in one place!"
      />

      <div className=" max-w-6xl mx-auto">
        {data.map((item, index) => {
          return (
            <Accordion
              key={index}
              title={item.title}
              id={item.id}
              active={active}
              setActive={setActive}
            >
              {item.content}
            </Accordion>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
