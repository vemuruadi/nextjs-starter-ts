import Link from "next/link"
import React from "react"
import cx from "clsx"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Adi Vemuru 
                    </a>
                </Link>
                <div className="flex items-center -ml-5 text-gray-900 lg:-ml-8">
          <Link href="/#about">
            <a
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
              )}
            >
              About
            </a>
          </Link>

          <Link href="/blog">
            <a
              className={cx(
                "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
              )}
            >
              Blog
            </a>
          </Link>

        </div>

            </div>
        </div>
    )
}

export default Navigation;