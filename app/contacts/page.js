export const metadata = {
  title: `Contacts ✦ ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

import ContactsPage from "@/app/contacts/_components/ContactsPage/ContactsPage";

export default function Contacts() {
  return <ContactsPage />
}
