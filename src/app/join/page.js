import { redirect } from "next/navigation";

export const metadata = {
  robots: { index: false, follow: false },
};

// No group code supplied — send visitors back to the homepage.
export default function JoinFallback() {
  redirect("/");
}
