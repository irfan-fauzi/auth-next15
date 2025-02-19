import Image from "next/image";
import { FC } from "react";

interface ResponsiveImageProps {
  src: string;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ src }) => {
  return (
    <section className='w-2/5 hidden relative lg:block h-[750px]'>
      <Image
        src={src}
        alt='woman in office'
        fill
        className='object-cover'
        priority
      />
    </section>
  );
};

export default ResponsiveImage;
