import { redirect } from "next/navigation";

// WhatsApp group invite codes are alphanumeric. Strip everything else so this
// route can only ever redirect to a chat.whatsapp.com group link — never an
// attacker-controlled destination (no open redirect).
function cleanCode(raw = "") {
  return raw.replace(/[^A-Za-z0-9]/g, "").slice(0, 40);
}

// Keep these redirect URLs out of search results.
export const metadata = {
  robots: { index: false, follow: false },
};

export default async function JoinRedirect({ params }) {
  const { code } = await params;
  const clean = cleanCode(code);

  // Valid code → straight into the WhatsApp group. Otherwise back home.
  redirect(clean ? `https://chat.whatsapp.com/${clean}` : "/");
}
