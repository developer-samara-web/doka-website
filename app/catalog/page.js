export const metadata = {
  title: `Catalog ✦ ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

import CatalogPage from "@/app/catalog/_components/CatalogPage/CatalogPage";

export default function Catalog() {
  return <CatalogPage />
}