export const metadata = {
  title: `Home ✦ ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

import HomePage from "@/app/home/_components/HomePage/HomePage";

export default function Home() {
  return <HomePage />
}
