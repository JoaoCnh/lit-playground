import { Image } from "$/components/Image";
import { CardLink } from "$/components/CardLink";
import { PageHeader } from "$/components/PageHeader";
import { AspectRatio } from "$/components/AspectRatio";

import cardLinkImg from "$/assets/card-link.jpg";

const data = Array.from({ length: 10 }, (_, i) => {
  let number = i + 1;
  let prefix = number < 10 ? 0 : "";
  return `${prefix}${number}`;
});

export default function CardLinkPage() {
  return (
    <section id="aspect-ratio" className="relative isolate px-6 pt-28 lg:px-8">
      <PageHeader
        title="aspect ratio"
        description="Exploring animations and styling in Lit with a card component."
        githubUrl="https://github.com/JoaoCnh/lit-playground/blob/main/src/custom-elements/card-link.ts"
      />

      <ul className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        {data.map((item) => (
          <li className="w-full h-full">
            <AspectRatio ratio={1}>
              <CardLink title={item} href="/playground/card-link">
                <Image
                  src={cardLinkImg}
                  sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
                />
              </CardLink>
            </AspectRatio>
          </li>
        ))}
      </ul>
    </section>
  );
}
