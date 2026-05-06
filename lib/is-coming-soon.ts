function truthyEnv(v: string | undefined): boolean {
  if (v == null || v === "") return false;
  const s = v.trim().toLowerCase();
  return s === "true" || s === "1" || s === "yes" || s === "on";
}

/**
 * Önce sunucu değişkeni (Vercel’de güvenilir; istek zamanında okunur).
 * Yerelde hâlâ NEXT_PUBLIC_COMING_SOON kullanılabilir.
 */
export function isComingSoonEnabled(): boolean {
  return (
    truthyEnv(process.env.COMING_SOON) ||
    truthyEnv(process.env.NEXT_PUBLIC_COMING_SOON)
  );
}
