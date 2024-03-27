import { useEffect, useState } from 'react';
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";

const { blog_folder, pagination } = config.settings;

const Home = ({
  banner,
}) => {
  const [mintHtml, setMintHtml] = useState("");

  useEffect(() => {
    // Load external script asynchronously
    const loadScript = async () => {
      const script = document.createElement('script');
      script.src = "https://storage.googleapis.com/scriptslmt/0.1.3/solana.js";
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);

      // Load stylesheet asynchronously
      const link = document.createElement('link');
      link.href = "https://storage.googleapis.com/scriptslmt/0.1.3/solana.css";
      link.rel = "stylesheet";
      link.async = true;
      document.head.appendChild(link);

      // Fetch and set HTML content
      fetch("/content/mint.html")
        .then(response => response.text())
        .then(html => setMintHtml(html))
        .catch(error => console.error('Error fetching mint HTML:', error));
    };

    loadScript();

    // Clean up function to remove the script and link elements when component unmounts
    return () => {
      const script = document.querySelector('script[src="https://storage.googleapis.com/scriptslmt/0.1.3/solana.js"]');
      const link = document.querySelector('link[href="https://storage.googleapis.com/scriptslmt/0.1.3/solana.css"]');
      if (script) {
        script.remove();
      }
      if (link) {
        link.remove();
      }
    };
  }, []); // Run only once on component mount

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />
        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className={banner.image_enable ? "mt-12 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-6"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
            </div>
            {banner.image_enable && (
              <div className="col-9 lg:col-6">
                <ImageFallback
                  className="mx-auto object-contain"
                  src={banner.image}
                  width={548}
                  height={443}
                  priority={true}
                  alt="Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mint HTML content */}
      <section className="section">
        <div className="container" dangerouslySetInnerHTML={{ __html: mintHtml }} />
      </section>
    </Base>
  );
};

export default Home;
