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
  }, []); // Run only once on component mount

  return (
    <Base>
      {/* Banner */}
      {/* Your banner section code goes here */}

      {/* Script and HTML elements */}
      <section className="section banner relative pb-0">
        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className="mt-12 text-center lg:mt-0 lg:text-left lg:col-6">
              <div className="banner-title">
                Mint Now
              </div>
              <div>Counter: <div id="mint-counter"/></div>
              <button className="btn btn-primary mt-6" id="mint-button-container">MINT NOW</button>
            </div>
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
