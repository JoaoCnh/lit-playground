const Sources = ({ sources, sizes }: SourcesProps) => {
  return (
    <>
      {Object.entries(sources).map(([ext, srcSet]) => (
        <source key={ext} srcSet={srcSet} sizes={sizes} />
      ))}
    </>
  );
};

export const Image = ({ src, sizes = "100vw", ...delegated }: ImageProps) => {
  return (
    <picture>
      <Sources sources={src.sources} sizes={sizes} />
      <img
        src={src.img.src}
        width={src.img.w}
        height={src.img.h}
        {...delegated}
      />
    </picture>
  );
};

type SourcesProps = {
  sources: Record<string, string>;
  sizes: string;
};

type ImageToolsSrc = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

type ImageProps = Omit<React.ComponentProps<"img">, "src"> & {
  src: ImageToolsSrc;
};
