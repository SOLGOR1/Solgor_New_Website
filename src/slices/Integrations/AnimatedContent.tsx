"use client";

import { Content } from '@prismicio/client';
import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import StylizedLogoMark from './StylizedLogoMark';
import clsx from 'clsx';
import { FaTwitter, FaInstagram, FaTelegram, FaDiscord, FaFacebook, FaReddit } from "react-icons/fa6";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrismicNextLink } from '@prismicio/next';

export default function AnimatedContent({slice}: {slice: Content.IntegrationsSlice}) {

    const container = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    gsap.registerPlugin(useGSAP, ScrollTrigger );

    
  const icons = {
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    telegram: <FaTelegram />,
    discord: <FaDiscord />,
    facebook: <FaFacebook />,
    reddit: <FaReddit />
  };

  useGSAP(()=>{
       const tl = gsap.timeline({
            repeat:-1,
             defaults:{ease: "power2.inOut"},
       });

       tl.to(" .pulsing-logo", {
        keyframes:[
            {
                filter: "brightness(2)",
                opacity: 1,
                duration: 0.4,
                ease: "power2.in",
            },
            {
                filter: "brightness(1)",
                opacity: 0.7,
                duration: 0.9,
            },
        ],
       });

       tl.to(".signal-line", {
        keyframes:[
            {backgroundPosition: "0% 0%"},
            {
                backgroundPosition: "100% 100%",
                stagger: { from: "center", each: 0.3 },
                duration: 1,
            },
        ],
       }, "-=1.4",
    );

        tl.to(".pulsing-icon", {
            keyframes:[
                {
                    opacity:1,
                    stagger: {
                        from:"center",
                        each:0.3
                    },
                    duration:1
                },
                {
                    opacity:0.4,
                    duration: 1,
                    stagger: {
                        from:"center",
                        each:0.3
                    },
                },
            ],

        },"-=2",);

  }, {scope: container},
);



  return (
    <div className="mt-20 flex flex-col items-center md:flex-row" ref={container}>
    {slice.items.map((item, index)=>(
        <React.Fragment key={index}>
            {index == Math.floor(slice.items.length / 2) && (
              <>
              <StylizedLogoMark />
              <div className="signal-line rotate-180 bg-gradient-to-t" />
              </>
            )}
             <PrismicNextLink field={item.icon_link}>
            <div className="pulsing-icon flex aspect-square shrink-l items-center justify-center rounded-full border-gray-50/30 bg-gray-50/25 p-3 text-3xl text-gray-100 opacity-40 md:text-4xl lg:text-5xl hover:text-yellow-500 active:text-yellow-400 transition-colors duration-300">
                {item.icon && icons[item.icon]}

            </div>
            </PrismicNextLink>
              {index !== slice.items.length -1 && (
            <div className={clsx("signal-line", index >= Math.floor(slice.items.length / 2) ? "rotate-180" : "rotate-0")} />
              ) }        

        </React.Fragment>

    ))}
  
  </div> 
  )
}
