import Image from "next/image";

export function MainSectionImage({ image }) {
  return (
    <div>
      <figure>
        <Image width={300} height={300} src={image} alt="nan" />
      </figure>
    </div>
  );
}
