export const metadata = {
  title: `Home ✦ ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

import PageView from "@/app/home/HomeContainer";

export default function Home() {
  return <PageView />
}
