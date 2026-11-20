import type { ImgHTMLAttributes } from "react";
import type { Photo } from "@/lib/images";

type ImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "alt"> & {
  photo: Photo;
  priority?: boolean;
};

/** Responsive image for the pre-optimised 828 / 1600 webp pairs. */
export const Img = ({ photo, priority = false, sizes = "100vw", className, ...rest }: ImgProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={photo.src}
    srcSet={photo.srcSet}
    sizes={sizes}
    alt={photo.alt}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    fetchPriority={priority ? "high" : "auto"}
    className={className}
    {...rest}
  />
);
