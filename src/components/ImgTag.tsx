import { getImgProps } from "@/lib/getImgProps";
import { ImageProps } from "next/image";

function ImgTag(props: ImageProps) {
  return <img {...getImgProps(props).props} />;
}

export default ImgTag;
