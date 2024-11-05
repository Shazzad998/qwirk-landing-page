"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

type AccordionProps ={
    children :ReactNode
    title : string 
    id : number 
    active : number 
    setActive : (id:number) => void
}
const Accordion = ({ children, title, id, active, setActive } :AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(active == id);

  useEffect(() => {
    setAccordionOpen(active == id);
  }, [active]);

  return (
    <div className={cn(" border-border p-4 rounded-md", accordionOpen && " bg-primary/5 border border-primary/30")}>
      <h3 className={cn(" text-foreground text-lg", accordionOpen && "text-primary")}>
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
            setActive(accordionOpen == true ? 0 : id)
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg
            className="fill-primary shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`ttransform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </h3>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-foreground/60 overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className=" text-start font-light pt-2 pl-2">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;