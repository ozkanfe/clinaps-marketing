import Link from "next/link";

/**
 * Yayına hazır değilken gösterilen tek sayfa.
 * Vercel → Environment Variables → NEXT_PUBLIC_COMING_SOON=true
 */
export function ComingSoon() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden px-6 py-16 text-center">
      <div
        className="pointer-events-none fixed -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-lab-magenta/30 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -bottom-40 -left-32 h-[460px] w-[460px] rounded-full bg-lab-cyan/15 blur-[100px]"
        aria-hidden
      />
      <div className="lab-grid-bg pointer-events-none fixed inset-0" aria-hidden />

      <div className="relative z-10 max-w-lg">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-lab-cyan/30 to-lab-magenta/40 text-lg font-extrabold text-white ring-1 ring-white/20">
          LE
        </div>
        <p className="mb-2 text-[0.65rem] font-bold tracking-[0.25em] text-lab-muted">CLINAPS</p>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          <span className="gradient-text">Lab Eğitim</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-lab-muted">
          Web sitemiz şu an güncelleniyor. Kısa süre içinde buradayız.
        </p>
        <p className="mt-2 text-sm text-lab-muted/80">
          Kurumsal iletişim için e-posta kullanıyorsanız, ekibinizle paylaşılan kanalı tercih edebilirsiniz.
        </p>
      </div>

      <footer className="relative z-10 mt-16 text-xs text-lab-muted/70">
        © {new Date().getFullYear()} Clinaps
      </footer>
    </div>
  );
}
