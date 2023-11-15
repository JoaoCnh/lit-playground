import { GithubIcon } from "$/components/icons/GithubIcon";
import { ArrowLeftIcon } from "$/components/icons/ArrowLeftIcon";

export const PageHeader = ({
  title,
  description,
  githubUrl,
}: PageHeaderProps) => {
  return (
    <div className="mb-16 md:mb-28">
      <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl uppercase break-words">
        <mark className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 rounded">
          {title}
        </mark>
      </h1>

      <p className="text-lg font-normal text-gray-500 lg:text-xl">
        {description}
      </p>

      <div className="mt-4 flex gap-6">
        <a
          href={githubUrl}
          className="group -m-1 p-1"
          target="_blank"
          aria-label="Check source code on GitHub"
        >
          <GithubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
        </a>
        <a
          href="/playground"
          className="flex items-center text-zinc-500 transition group-hover:text-zinc-600 capitalize"
        >
          <ArrowLeftIcon className="h-4 w-4 md:h-6 md:w-6 mr-2 fill-zinc-500 transition group-hover:fill-zinc-600" />
          <span>go back</span>
        </a>
      </div>
    </div>
  );
};

type PageHeaderProps = {
  title: string;
  description: string;
  githubUrl: string;
};
