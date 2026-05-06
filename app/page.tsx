import { ComingSoon } from "@/components/ComingSoon";
import MarketingHome from "@/components/MarketingHome";
import { isComingSoonEnabled } from "@/lib/is-coming-soon";

/**
 * Vercel → Settings → Environment Variables → Production:
 * COMING_SOON = true  →  "yakında" (önerilen)
 * Yerel: NEXT_PUBLIC_COMING_SOON=true da çalışır.
 * Değişiklikten sonra mutlaka Production için Redeploy.
 */
export const dynamic = "force-dynamic";

export default function Home() {
  if (isComingSoonEnabled()) {
    return <ComingSoon />;
  }
  return <MarketingHome />;
}
