import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from 'react';

const { blog_folder, pagination } = config.settings;

const Home = ({
  banner,
  posts,
  featured_posts,
  categories,
  imageLinks
}) => {
  // Define state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
    }, 5000); // Change the duration (in milliseconds) for slower rotation
    return () => clearInterval(interval);
  }, []);

  // Define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter((post) => post.frontmatter.featured);
  const showPosts = pagination;

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        {/* Your banner section code here */}
      </section>

      {/* Image links section */}
      <section className="section image-links">
        <div className="container">
          <div className="row justify-content-center">
            {imageLinks.map((link, index) => (
              <div
                className={`col-md-5 mb-4 ${index === currentIndex ? 'show' : 'hide'}`} // Apply classes based on current index
                key={index}
              >
                <div className="d-flex justify-content-center">
                  <a href={link.url} className="image-link">
                    <Image
                      src={link.image}
                      alt={link.alt}
                      width={400}
                      height={300}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home main */}
    </Base>
  );
};

export default Home;

// For homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const imageLinks = [
    {
      image: "/images/tradejup.png",
      url: "https://jup.ag/swap/SOL-GOR_BG745juV1EHRUk2SxsuZ2JmCzDgeBVcUXioLSTDvhSpF",
      alt: "Jupiter"
    },
    {
      image: "/images/liquidity.png",
      url: "https://v1.orca.so/liquidity/browse?tokenMint=BG745juV1EHRUk2SxsuZ2JmCzDgeBVcUXioLSTDvhSpF",
      alt: "Orca"
    }
  ];

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      categories: categoriesWithPostsCount,
      imageLinks:  imageLinks,
    },
  };
};
