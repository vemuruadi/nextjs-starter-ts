import React from "react";

import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMedium } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>NextJS/TailWind/Typescript starter for websites</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://twitter.com/vemuruadi"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiOutlineTwitter></AiOutlineTwitter>
                        </a>
                        
                        <a
                            href="https://www.linkedin.com/in/vemuruadi/"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiOutlineLinkedin></AiOutlineLinkedin>
                        </a>
                        <a
                            href="https://github.com/vemuruadi"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiOutlineGithub></AiOutlineGithub>
                        </a>
                        <a
                            href="https://medium.com/@vemuruadi"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiOutlineMedium></AiOutlineMedium>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;