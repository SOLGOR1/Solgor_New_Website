"use client";

import { useState } from "react";
import { Content, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/Wordmark";
import {MdMenu, MdClose} from "react-icons/md";
import clsx from "clsx";
import { usePathname } from "next/navigation";


type NavBarProps = {
    settings: Content.SettingsDocument
}

export default function Navbar({settings}: NavBarProps) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
    <nav className="px-4 py4 md:px-6 md:py-6" aria-label="Main">
        <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">  
            
            
            <div className="flex items-center justify-between">

            <Link href="/" className="z-50" onClick={() => setOpen(false)}>
                <WordMark />
                <span className="sr-only">Solgor GOR</span>
            </Link>
            <button type="button" 
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            >
                <MdMenu />
                <span className="sr-only">Open menu</span>
            </button>
            </div>

            <div className={clsx("fixed bottom-0 right-0 left-0 top-0 z-40 flex flex-col items-end gap-4 bg-[#000000] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden", 
                                open ? "translate-x-0" : "translate-x-[100%]",
                                )}>

                <button type="button" 
                        className="block p-2 text-3xl text-white md:hidden fixed right-4 top-4 mb-4"
                        aria-expanded={open}
                        onClick={() => setOpen(false)}
                        >
                            <MdClose />
                            <span className="sr-only">Close menu</span>
                </button>
                <div className="grid justify-items-end gap-8">
                    {settings.data.navigation.map((item)=>{
                        if (item.cta_button){
                            return (
                                <ButtonLink key={item.label} field={item.link} onClick={()=> setOpen(false)}  aria-current={
                                    pathname.includes(asLink(item.link) as string) 
                                        ? "page" 
                                        : undefined
                                }>
                                    {item.label}
                                </ButtonLink>
                            )
                        }
                        return (
                            <PrismicNextLink
                            key={item.label}
                            className="block px-3 text-3xl first:mt-8"
                            field={item.link}
                            onClick={()=> setOpen(false)}
                            aria-current={
                                pathname.includes(asLink(item.link) as string)
                                 ? "page" 
                                 : undefined
                            }>
                                {item.label}
                            </PrismicNextLink>
                        )

                    })}

                </div>

            </div>


            <ul className="gap-6 hidden md:flex">
                {settings.data.navigation.map((item) => (
                item.cta_button ? (
                    <li key={item.label}>
                    <ButtonLink field={item.link}                            aria-current={
                                pathname.includes(asLink(item.link) as string)
                                 ? "page" 
                                 : undefined
                            }>
                                {item.label}
                            </ButtonLink>
                    </li>
                    ) : (
                    <li key={item.label}>
                    <PrismicNextLink field={item.link} className="inline-flex min-h-11 items-center hover:text-yellow-500" 
                                                aria-current={
                                                    pathname.includes(asLink(item.link) as string)
                                                     ? "page" 
                                                     : undefined
                                                }
                    >
                    {item.label}
                    </PrismicNextLink>
                    </li>
                    )
                ))}
            </ul>
        </div>  
      </nav>
    )
  }

