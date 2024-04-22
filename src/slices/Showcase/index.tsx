import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { FaRegNewspaper, FaRegMessage, FaGift, FaGhost, FaGear, FaCoins, FaChartPie, FaChartSimple, } from "react-icons/fa6";
import AnimatedContent from "./AnimatedContent";

const icons = {
  News: <FaRegNewspaper />,
  Message: <FaRegMessage />,
  Gift: <FaGift />,
  Ghost: <FaGhost />,
  Gear: <FaGear />,
  Coins: <FaCoins />,
  Chartpie: <FaChartPie />,
  Chart: <FaChartSimple />

}
/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-yellow-400/20 blur-3xl filter"/>

    <AnimatedContent>
    <PrismicRichText field={slice.primary.heading} 
    components={{
      heading2: ({children})=>(
        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
          {children}
        </h2>
      ),
    }}
    />
    </AnimatedContent>
    
<div className="grid mt-16 items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12 gap-8 lg:gap-0">
  <div>
    <div className="w-fit rounded-lg bg-yellow-500/35 p-4 text-3xl">
    <>{slice.primary.icon && icons [slice.primary.icon]}</>
    </div>
    <div className="mt-6 text-2xl font-normal">
    <PrismicRichText field={slice.primary.subheading} />
    </div>
    <div className="prose prose-invert mt-4 max-w-xl">
    <PrismicRichText field={slice.primary.body} />
    </div>
      <ButtonLink field={slice.primary.button_link} className="mt-6">
      {slice.primary.button_text || "Learn More"}
      </ButtonLink>
  </div>
    <PrismicNextImage 
    alt=""
    field={slice.primary.image} 
    className={clsx(
      "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 rounded-xl", 
      slice.variation == "reverse" ? 
      "lg:order-1 lg:translate-x-[15%] rounded-xl" :
      "lg:-order-1 lg:translate-x-[-15%] rounded-xl",
      )} />  
</div>
    </Bounded>
  );
};

export default Showcase;
