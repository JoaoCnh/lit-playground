import { PageHeader } from "$/components/PageHeader";
import { ImageSequence } from "$/components/ImageSequence";

const airpodsMax = Array.from({ length: 45 }, (_, i) => i).map((i) => {
  const paddedIndex = i.toString().padStart(4, "0");
  return `https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/turn/small/small_${paddedIndex}.jpg`;
});

export default function ImageSequencePage() {
  return (
    <section
      id="apple-sequence"
      className="relative isolate px-6 pt-28 lg:px-8"
    >
      <PageHeader
        title="apple sequence"
        description="Trying to replicate a scroll animation usually present in Apple websites."
        githubUrl="https://github.com/JoaoCnh/lit-playground/blob/main/src/custom-elements/image-sequence.ts"
      />

      <ImageSequence images={airpodsMax} duration={200} threshold={100} />
    </section>
  );
}
