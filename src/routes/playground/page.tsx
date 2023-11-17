import { useNavigate } from "react-router-dom";
import { Image } from "$/components/Image";
import { CardLink } from "$/components/CardLink";
import { AspectRatio } from "$/components/AspectRatio";

import cardLinkImg from "$/assets/card-link.jpg";
import aspectRatioImg from "$/assets/aspect-ratio.jpg";
import appleSequenceImg from "$/assets/apple-sequence.jpg";

const experiments = [
  {
    url: "/playground/aspect-ratio",
    title: "aspect ratio",
    image: aspectRatioImg,
  },
  {
    url: "/playground/card-link",
    title: "card link",
    image: cardLinkImg,
  },
  {
    url: "/playground/apple-sequence",
    title: "apple sequence",
    image: appleSequenceImg,
  },
];

export default function PlaygroundPage() {
  const navigate = useNavigate();

  return (
    <section id="experiments" className="relative isolate px-6 pt-28 lg:px-8">
      <ul className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        {experiments.map((experiment, idx) => (
          <li key={idx} className="w-full h-full">
            <AspectRatio ratio={1}>
              <CardLink
                href={experiment.url}
                title={experiment.title}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(experiment.url);
                }}
              >
                <Image
                  src={experiment.image}
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
