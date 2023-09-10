import { getImgProps } from "@/lib/getImgProps";
import { ImageProps } from "next/image";

type BackgroundImageProps = Omit<ImageProps, "sizes" | "placeholder">;

function BackgroundImage(props: BackgroundImageProps) {
  const backgroundImageUrl = getImgProps(props)
    // Split into image candidate strings for each resolution
    .props.srcSet?.split(", ")
    // Split into image URL and resolution
    .map((src) => src.split(" "))
    // Format to CSS `image-set` format
    .map(([src, width]) => `url(${src}) ${width}`)
    .join(",");

  return (
    <div
      className="w-full aspect-[3/2] bg-cover bg-center"
      style={{
        backgroundImage: `-webkit-image-set(${backgroundImageUrl})`,
      }}
    />
  );
}

export default BackgroundImage;
