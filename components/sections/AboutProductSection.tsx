import Image from "next/image";
import SectionHeader from "../SectionHeader";
import SectionWrapper from "../SectionWrapper";

type AboutProductSectionProps = {};

const AboutProductSection = (props: AboutProductSectionProps) => {
  return (
    <SectionWrapper>
      <SectionHeader
        headerText="Key Features to boost your productivity"
        subHeaderText="Explore the essential tools designed to streamline your workglow,
          enhance team collaboration, and ensure your projects run smoothly from
          start to finish."
      />
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className=" flex flex-col sm:shrink-0 max-w-96 sm:max-w-[unset] mx-auto bg-green-500/10 rounded-md transition-all hover:scale-[1.02] duration-200 ease-in">
          <div className=" p-6 space-y-2">
            <span className=" w-8 h-8 flex items-center justify-center rounded-md bg-green-700 text-green-100">
              {" "}
              01
            </span>
            <h3 className=" text-2xl font-semibold">To-do List</h3>
            <p className=" text-xs text-foreground/80">
              Organize your daily tasks efforlessly with out intuatuve to-do
              list. Stay focused and prioritize what matters most achiving the
              goal
            </p>
          </div>
          <div className=" relative w-full aspect-[4/3]">
            <Image
              src="/images/task-feature.png"
              className=" object-cover"
              alt="Task Feature"
              fill
            />
          </div>
        </div>
        <div className=" flex flex-col sm:shrink-0 max-w-96 sm:max-w-[unset] mx-auto bg-rose-500/10 rounded-md transition-all hover:scale-[1.02] duration-200 ease-in">
          <div className=" p-6 space-y-2">
            <span className=" w-8 h-8 flex items-center justify-center rounded-md bg-rose-700 text-rose-100">
              {" "}
              02
            </span>
            <h3 className=" text-2xl font-semibold">Team Member Tracking</h3>
            <p className=" text-xs text-foreground/80">
              Easily Track your team member&apos;s progress and stay connected.
              Ensure everyone is engaged and working towards shared goals.
            </p>
          </div>
          <div className=" relative w-full aspect-[4/3]">
            <Image
              src="/images/member-feature.png"
              className=" object-cover"
              alt="Member Feature"
              fill
            />
          </div>
        </div>
        <div className=" flex flex-col sm:shrink-0 max-w-96 sm:max-w-[unset] mx-auto bg-yellow-500/10 rounded-md transition-all hover:scale-[1.02] duration-200 ease-in">
          <div className=" p-6 space-y-2">
            <span className=" w-8 h-8 flex items-center justify-center rounded-md bg-yellow-700 text-yellow-100">
              {" "}
              03
            </span>
            <h3 className=" text-2xl font-semibold">Project Tracking</h3>
            <p className=" text-xs text-foreground/80">
              Monitor project timelines and milestones in real-time. keep
              projects on track and meet your deadlines with confidence.
            </p>
          </div>
          <div className=" relative w-full aspect-[4/3]">
            <Image
              src="/images/project-feature.png"
              className=" object-cover"
              alt="Project Feature"
              fill
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutProductSection;
