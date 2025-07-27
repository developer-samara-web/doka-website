export const metadata = {
  title: `Gallery ✦ ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

import GalleryPage from "@/app/gallery/_components/GalleryPage/GalleryPage";

export default function Gallery() {
  return <GalleryPage />
}
