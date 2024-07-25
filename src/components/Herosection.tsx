
"use client";
"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link"
import { Button } from "./ui/moving-border"
import { Vortex } from "./ui/vortex"

const words = `Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.`
function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
      
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <TextGenerateEffect words={words} />;
            <div className="mt-4">
                <Link href={"/courses"}>                 
                <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button>
                </Link>
            </div>
        </div>
        </Vortex>
        </div>
  )
}

export default HeroSection