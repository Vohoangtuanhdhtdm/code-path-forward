
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  CodeBracketIcon,
  CloudIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-gray-900 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Timeline of My Journey
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-sm">
          Here's a chronological overview of my professional and educational journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-gray-500 dark:text-gray-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-500 dark:text-gray-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 dark:via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-gray-800 via-gray-600 to-transparent from-[0%] via-[10%] rounded-full dark:from-gray-200 dark:via-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export const TimelineDemo = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <CodeBracketIcon className="w-6 h-6 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Software Development</span>
          </div>
          <p className="text-gray-800 dark:text-gray-200 text-xs md:text-sm font-normal mb-8">
            Currently working as a Software Developer, focusing on .NET backend development
            and Clean Architecture principles. Building scalable and maintainable systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
              alt="Modern software development workspace"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
              alt="Circuit board representing technology"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <CloudIcon className="w-6 h-6 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Technology Expansion</span>
          </div>
          <p className="text-gray-800 dark:text-gray-200 text-xs md:text-sm font-normal mb-8">
            Expanded expertise in modern web technologies and cloud computing.
            Focused on building responsive applications with React and TypeScript.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
              alt="Laptop showing code development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
              alt="Person using MacBook Pro for development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="flex items-center mb-4">
            <AcademicCapIcon className="w-6 h-6 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Learning Journey</span>
          </div>
          <p className="text-gray-800 dark:text-gray-200 text-xs md:text-sm font-normal mb-8">
            Started my journey in software development, learning programming fundamentals
            and exploring various technologies. Built my first web applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop"
              alt="Woman learning programming on laptop"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
              alt="Java programming on monitor"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
};
