import { Image } from "$/components/Image";
import { PageHeader } from "$/components/PageHeader";
import "$/custom-elements/aspect-ratio";

import aspectRatioImg from "$/assets/aspect-ratio.jpg";

const ratios = [
  {
    value: 3 / 4,
    text: "3 / 4",
  },
  {
    value: 16 / 9,
    text: "16 / 9",
  },
  {
    value: 1,
    text: "1 / 1",
  },
];

export default function AspectRatioPage() {
  return (
    <section id="aspect-ratio" className="relative isolate px-6 pt-28 lg:px-8">
      <PageHeader
        title="aspect ratio"
        description="Displays content within the desired ratio."
        githubUrl="https://github.com/JoaoCnh/lit-playground/blob/main/src/custom-elements/aspect-ratio.ts"
      />

      <ul className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        {ratios.map((ratio) => (
          <li key={ratio.text} className="w-full h-full">
            <aspect-ratio ratio={ratio.value}>
              <figure className="w-full h-full">
                <Image
                  src={aspectRatioImg}
                  alt={`${ratio.text} ratio`}
                  className="w-full h-full object-cover"
                  sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500">
                  {ratio.text}
                </figcaption>
              </figure>
            </aspect-ratio>
          </li>
        ))}
      </ul>
    </section>
  );
}
