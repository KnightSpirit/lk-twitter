import Image from "next/image";
import { MouseEventHandler } from "react";
export default function FunctionalIcon(props: {
  src: any;
  type: string;
  onClick: MouseEventHandler<HTMLImageElement> | undefined;
}) {
  const { src, type, onClick } = props;
  return (
    <Image
      alt={type}
      src={src}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick(e);
      }}
      width={30}
      height={30}
    />
  );
}
