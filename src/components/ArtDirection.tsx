import { ImageProps } from "next/image";

import { getImgProps } from "@/lib/getImgProps";

type Src = ImageProps["src"];

type ArtDirectionProps = {
  src: {
    desktop: Src;
    mobile: Src;
  };
} & Omit<ImageProps, "src">;

function ArtDirection({ src, ...props }: ArtDirectionProps) {
  const { props: imgProps } = getImgProps({ ...props, src: src.mobile });
  const {
    props: { srcSet: desktopSrcSet },
  } = getImgProps({ ...props, src: src.desktop });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <img {...imgProps} />
    </picture>
  );
}

export default ArtDirection;
