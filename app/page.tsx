import { ComingSoon } from "@/components/ComingSoon";
import MarketingHome from "@/components/MarketingHome";

/**
 * Vercel → Environment Variables → Production:
 * NEXT_PUBLIC_COMING_SOON = true  →  ziyaretçilere sadece "yakında" sayfası
 * NEXT_PUBLIC_COMING_SOON = false veya sil  →  tam tanıtım sitesi
 */
export default function Home() {
  if (process.env.NEXT_PUBLIC_COMING_SOON === "true") {
    return <ComingSoon />;
  }
  return <MarketingHome />;
}
