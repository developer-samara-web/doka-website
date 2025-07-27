export const metadata = {
  title: `Fabrics ✦ ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

import FabricsPage from "@/app/fabrics/_components/FabricsPage/FabricsPage";

export default function Fabrics() {
  return <FabricsPage />
}