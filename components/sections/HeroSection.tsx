import { Button } from "../ui/button";

type HeroSectionProps = {};

const HeroSection = (props: HeroSectionProps) => {
  return (
    <div
      className=" py-8 lg:pt-16 text-center"
      style={{
        backgroundImage: `linear-gradient(#4040407a 1px, transparent 1px), linear-gradient(to right, #4040407a 1px, transparent 1px)`,
        backgroundSize: `60px 60px`,
      }}
    >
      <div>
        <div className=" bg-muted rounded-full p-0.5 text-sm flex items-center gap-x-3 max-w-96 mx-auto mb-2">
          {" "}
          <span className=" bg-foreground text-background rounded-full px-2 py-0.5">
            New
          </span>{" "}
          <p className="pr-4 block truncate">
            How Pallet uses Qwirk to power their GMT{" "}
          </p>
        </div>

        <h1 className=" text-4xl font-black font-dosis max-w-xl 2xl:max-w-4xl mx-auto md:text-5xl 2xl:text-6xl mb-4 lg:mb-6">
          Effortless task management, anytime, anywhere.
        </h1>
        <p className=" mx-auto max-w-md text-foreground/80 mb-4 lg:mb-6">
          Manage tasks and projects easily with an all-in-one platform designed
          for seamless collaboration
        </p>

        <div className=" flex gap-2 justify-center items-center flex-wrap">
          <Button>Start for free</Button>
          <Button variant={"outline"}> Talk to sales</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
