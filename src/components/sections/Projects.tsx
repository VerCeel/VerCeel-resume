import { useTranslations } from "next-intl";
import React from "react";

interface Data {
  category: string;
  type: string;
  description: string;
  projects: string[];
}

const Projects = () => {
  const { markup, raw } = useTranslations("projets");

  return (
    <div className="mb-16 cursor-default">
      <h1 className="mb-4 font-medium text-neutral-800 dark:text-neutral-200">
        {markup("title")}
      </h1>
      {raw("items").map((item: Data, index: number) => (
        <div className="flex flex-row mb-6 gap-4" key={index}>
          <div className="md:w-30 w-20">
            <p className="text-neutral-600 text-md dark:text-neutral-400">
              {item.type}
            </p>
          </div>
          <div className="flex-1">
            <span className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
              {item.category}
            </span>
            <p className="text-neutral-600 mb-2 text-sm dark:text-neutral-400">
              {item.description}
            </p>
            <div className="space-y-1">
              {item.projects.map((project: string, projectIndex: number) => (
                <p
                  key={projectIndex}
                  className="text-neutral-600 text-sm dark:text-neutral-400"
                >
                  {project}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;