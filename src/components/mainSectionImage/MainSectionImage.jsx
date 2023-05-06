import Image from "next/image";

export function MainSectionImage({ image, width, height }) {
  return (
    <div>
      <figure>
        <Image width={width} height={height} src={image} alt="nan" />
      </figure>
    </div>
  );
}