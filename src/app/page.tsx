import ArtDirection from "@/components/ArtDirection";
import BackgroundImage from "@/components/BackgroundImage";
import ImgTag from "@/components/ImgTag";

import imgMobileSrc from "@/images/sample-mobile.jpg";
import imgSrc from "@/images/sample.jpg";

export default function Home() {
  return (
    <main className="p-24 gap-10 flex flex-col">
      <section>
        <h1 className="text-4xl font-bold mb-4">`img` tag only</h1>
        <ImgTag src={imgSrc} alt="" sizes="100vw" />
      </section>
      <section>
        <h1 className="text-4xl font-bold mb-4">Art direction</h1>
        <ArtDirection
          src={{ desktop: imgSrc, mobile: imgMobileSrc }}
          alt=""
          sizes="100vw"
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold mb-4">`background-image`</h1>
        <BackgroundImage src={imgSrc} alt="" />
      </section>
    </main>
  );
}
