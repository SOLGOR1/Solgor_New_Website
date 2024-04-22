import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog = async ({ slice }: BlogProps): Promise<JSX.Element> => {

  const client = createClient();

  const Blog = await Promise.all(
    slice.items.map(async (item)=>{
      if (isFilled.contentRelationship(item.blog)) {
        return await client.getByID<Content.BlogDocument>(
          item.blog.id
        )
      }
    })
  )
  return (
<Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
<h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
      <PrismicText field={slice.primary.heading} />
</h2>

<div className="mx-auto mt-6 mb-8 max-w-md text-balance text-center text-slate-300">
      <PrismicRichText field={slice.primary.body} />
</div>

  <div className="mt20 grid gap-16">
  {Blog.map(
    (blog, index)=>
      blog && (
        <div key={blog.id} 
        className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div className="col-span-1 flex flex-col justify-center gap-4">
            <h3 className="text-4xl">
              <PrismicText field={blog.data.header} />
            </h3>
            <div className="max-w-md">
            <PrismicRichText field={blog.data.description} />
            </div>
            <PrismicNextLink document={blog} className="after:absolute after:inset-0 hover:underline hover:text-yellow-500 active:text-yellow-400 transition-colors duration-300">
              Read <PrismicText field={blog.data.header} /> blog
            </PrismicNextLink>
            </div>
          <PrismicNextImage 
            field={blog.data.logoimage} 
            quality={100} 
            className={clsx(
              "rounded-xl lg:col-span-2",
              index % 2 && "md:-order-1",
              )}
          />
        </div>
        ),  
    )}
  </div>
</Bounded>
  );
};

export default Blog;
