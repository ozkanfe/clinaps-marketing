import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "#";

const features = [
  {
    title: "Haftalık eğitim akışı",
    body: "Oturumları hafta ekseninde düzenleyin; ileri / geri hafta gezintisi ve tarih seçimi ile plan tek bakışta.",
    icon: "calendar",
  },
  {
    title: "Çok merkez, tek düzen",
    body: "Kurum içi birimleri ve şubeleri aynı çatı altında toplayın; roller net, yetkiler kontrolünüzde.",
    icon: "building",
  },
  {
    title: "Esnek sekmeler",
    body: "Eğitim hatlarına göre sekmeleri özelleştirin; kullanıcı hangi akışı göreceğini seçsin.",
    icon: "layers",
  },
  {
    title: "Anlık bildirimler",
    body: "Program değişikliği ve duyuruları push ile iletin; PWA ile ana ekrandan erişim.",
    icon: "bell",
  },
  {
    title: "Güvenli oturum",
    body: "Kurumsal giriş, şifre politikası ve güvenli çıkış ile içerik yalnızca yetkili ekibe açılır.",
    icon: "shield",
  },
  {
    title: "Yönetim görünürlüğü",
    body: "Merkez, kullanıcı ve içerik kontrollerini yönetici panelinde toplayın.",
    icon: "chart",
  },
];

const steps = [
  {
    title: "Planı dijitalleştirin",
    body: "Haftalık tabloyu platforma taşıyın; oturum ve etiketler netleşsin.",
  },
  {
    title: "Paydaşları bağlayın",
    body: "Öğretim üyesi, asistan ve idari roller aynı takvimde buluşsun.",
  },
  {
    title: "Döngüyü kısaltın",
    body: "Değişiklikler anında yansısın; herkes güncel kalsın.",
  },
  {
    title: "Ölçekleyin",
    body: "Yeni merkez veya modül eklemek büyümeyi yavaşlatmasın.",
  },
];

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5 text-lab-cyan";
  switch (name) {
    case "calendar":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
        </svg>
      );
    case "building":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6v12h-6v-8.25H9V21H3V9z" />
        </svg>
      );
    case "layers":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L12 6l5.571 3.75M6.429 14.25L12 18l5.571-3.75M6.429 12L12 15.75 17.571 12" />
        </svg>
      );
    case "bell":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 01-5.454 0 2 2 0 01-1.85-1.98V10.5a6 6 0 1112 0v4.602a2 2 0 01-1.85 1.98zM12 21a2 2 0 002-2H10a2 2 0 002 2z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h3.75c.621 0 1.125.504 1.125 1.125v6.75C9 20.496 8.496 21 7.875 21h-3.75A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-3.75a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h3.75C21.504 3 22 3.504 22 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-3.75a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ambient */}
      <div
        className="pointer-events-none fixed -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-lab-magenta/35 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -bottom-40 -left-32 h-[460px] w-[460px] rounded-full bg-lab-cyan/20 blur-[100px]"
        aria-hidden
      />
      <div className="lab-grid-bg pointer-events-none fixed inset-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-6 lg:px-8">
        {/* Nav */}
        <header className="flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-lab-cyan/30 to-lab-magenta/40 text-sm font-extrabold tracking-tight text-white ring-1 ring-white/20">
              LE
            </div>
            <div className="leading-tight">
              <span className="block text-[0.65rem] font-bold tracking-[0.2em] text-lab-muted">CLINAPS</span>
              <span className="text-lg font-extrabold text-lab-cyan drop-shadow-[0_0_18px_rgba(20,241,242,0.25)]">
                Lab Eğitim
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-lab-muted md:flex">
            <a className="transition-colors hover:text-white" href="#vizyon">
              Vizyon
            </a>
            <a className="transition-colors hover:text-white" href="#ozellikler">
              Özellikler
            </a>
            <a className="transition-colors hover:text-white" href="#akis">
              Akış
            </a>
            <a className="transition-colors hover:text-white" href="#fiyat">
              Kurumsal
            </a>
            <a className="transition-colors hover:text-white" href="#iletisim">
              İletişim
            </a>
          </nav>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={APP_URL}
              className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:border-lab-cyan/50 hover:text-lab-cyan"
            >
              Uygulamaya giriş
            </Link>
            <a
              href="#iletisim"
              className="rounded-xl bg-gradient-to-br from-teal-500 to-lab-cyan px-4 py-2.5 text-sm font-bold text-[#041016] shadow-[0_4px_24px_rgba(20,241,242,0.25)] transition hover:-translate-y-0.5"
            >
              Demo talep et
            </a>
          </div>
        </header>

        {/* Hero */}
        <section id="vizyon" className="py-14 text-center md:py-20">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-lab-cyan/35 bg-lab-cyan/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-lab-cyan">
            <span className="text-base" aria-hidden>
              🔬
            </span>
            Akademik eğitim altyapısı
          </p>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
            <span className="gradient-text">Eğitim programınız</span>
            <br />
            <span className="text-white">tek akışta, her merkezde,</span>
            <br />
            <span className="text-lab-muted">aynı netlikte.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-lab-muted md:text-lg">
            Lab Eğitim; patoloji ve laboratuvar eğitimlerinde haftalık programı, rotasyonları ve kurum içi iletişimi tek
            platformda toplar. Kağıt tablo ve dağınık takvimler yerine, eğitimcinin ve yöneticinin ortak dilini sunar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-teal-500 to-lab-cyan px-6 py-3.5 text-sm font-bold text-[#041016] shadow-[0_4px_24px_rgba(20,241,242,0.25)] transition hover:-translate-y-0.5"
            >
              Satış / demo için yazın
            </a>
            <Link
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:border-lab-cyan/50"
            >
              Canlı uygulamayı aç
            </Link>
          </div>

          {/* preview */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="rounded-[1.25rem] bg-gradient-to-br from-lab-cyan/40 via-lab-magenta/35 to-lab-cyan/40 p-[2px] shadow-2xl">
              <div className="overflow-hidden rounded-[1.15rem] glass-panel">
                <div className="flex items-center gap-2 border-b border-white/10 bg-black/25 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="flex-1 text-center font-mono text-[0.65rem] text-lab-muted">lab-egitim · haftalık görünüm</span>
                </div>
                <div className="grid min-h-[220px] md:grid-cols-[200px_1fr]">
                  <aside className="hidden flex-col gap-1 border-r border-white/10 p-4 md:flex">
                    {["Program", "Sekmeler", "Merkezler", "Bildirimler"].map((item, i) => (
                      <span
                        key={item}
                        className={`rounded-lg px-3 py-2 text-xs font-semibold ${i === 0 ? "bg-lab-cyan/15 text-lab-cyan" : "text-lab-muted"}`}
                      >
                        {item}
                      </span>
                    ))}
                  </aside>
                  <div className="flex flex-col gap-4 p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {["Pzt", "Sal", "Çar", "Per", "Cum"].map((d, i) => (
                        <div
                          key={d}
                          className={`min-w-[3.25rem] flex-1 rounded-lg border px-1 py-2 text-center text-[0.65rem] text-lab-muted ${i === 2 ? "border-lab-cyan/40 shadow-[0_0_0_1px_rgba(20,241,242,0.15)]" : "border-white/10"}`}
                        >
                          {d}
                          <strong className="mt-1 block text-xs text-white">—</strong>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 rounded-lg border border-lab-magenta/30 bg-lab-magenta/10 px-3 py-2.5 text-left text-xs text-lab-muted">
                        <time className="font-bold text-lab-cyan">09:00</time>
                        <span>Göğüs PAT morfoloji / doku bankası oturumu</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-lg border border-lab-cyan/25 bg-lab-cyan/5 px-3 py-2.5 text-left text-xs text-lab-muted">
                        <time className="font-bold text-lab-cyan">13:30</time>
                        <span>Asistan vaka sunumu — çok merkezli ortak slot</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="ozellikler" className="border-t border-white/10 py-16">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Akademik koordinasyon için <span className="gradient-text">tasarlandı</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lab-muted">
            Lab uygulamanızla aynı görsel dil: koyu zemin, turkuaz vurgu, cam paneller. Özellik seti doğrudan eğitim
            gerçeğine göre.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-lab-cyan/35"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-lab-cyan/25 to-lab-magenta/20 ring-1 ring-white/10">
                  <Icon name={f.icon} />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lab-muted">{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section id="akis" className="border-t border-white/10 py-16">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Nasıl bir <span className="text-lab-cyan">yolculuk?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lab-muted">
            Dağınık iletişimi kaldırıp müfredatı yaşayan bir akışa dönüştürmek.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="glass-panel relative rounded-2xl p-6 pt-10">
                <span className="absolute left-6 top-4 text-3xl font-extrabold text-lab-cyan/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-lab-cyan">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-lab-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="fiyat" className="border-t border-white/10 py-16">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Kurumsal <span className="gradient-text">lisans</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lab-muted">
            Kullanıcı ve merkez sayısına göre teklif; barındırma tercihinize göre esnek sözleşme.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="glass-panel rounded-2xl p-8 text-center">
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-lab-muted">Başlangıç</p>
              <p className="mt-2 text-3xl font-extrabold">Tek merkez</p>
              <p className="mt-3 text-sm text-lab-muted">Pilot veya tek kampüs.</p>
              <ul className="mt-6 space-y-2 text-left text-sm text-lab-muted">
                <li className="flex gap-2">
                  <span className="text-lab-cyan">✓</span> Çekirdek program modülü
                </li>
                <li className="flex gap-2">
                  <span className="text-lab-cyan">✓</span> Temel yönetici paneli
                </li>
                <li className="flex gap-2">
                  <span className="text-lab-cyan">✓</span> E-posta desteği
                </li>
              </ul>
              <a
                href="#iletisim"
                className="mt-8 inline-flex w-full justify-center rounded-xl border border-white/15 py-3 text-sm font-bold hover:border-lab-cyan/50"
              >
                Teklif iste
              </a>
            </div>
            <div className="rounded-2xl border border-lab-cyan/40 bg-gradient-to-b from-lab-cyan/10 to-transparent p-8 text-center shadow-xl">
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-lab-cyan">Kurumsal</p>
              <p className="mt-2 text-3xl font-extrabold text-white">Ağ</p>
              <p className="mt-3 text-sm text-lab-muted">Çok merkez, hastane–üniversite iş birlikleri.</p>
              <ul className="mt-6 space-y-2 text-left text-sm text-white/85">
                <li className="flex gap-2">
                  <span className="text-lab-cyan">✓</span> Ölçeklenebilir merkez yapısı
                </li>
                <li className="flex gap-2">
                  <span className="text-lab-cyan">✓</span> Öncelikli destek ve eğitim
                </li>
                <li className="flex gap-2">
                  <span className="text-lab-cyan">✓</span> SLA / uyumluluk görüşmeleri
                </li>
                <li className="flex gap-2">
                  <span className="text-lab-cyan">✓</span> İsteğe bağlı entegrasyonlar
                </li>
              </ul>
              <a
                href="#iletisim"
                className="mt-8 inline-flex w-full justify-center rounded-xl bg-gradient-to-br from-teal-500 to-lab-cyan py-3 text-sm font-bold text-[#041016]"
              >
                Satış ile görüş
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="iletisim" className="border-t border-white/10 py-16">
          <div className="rounded-3xl border border-lab-cyan/30 bg-gradient-to-br from-lab-cyan/15 to-lab-magenta/10 px-6 py-12 text-center md:px-14">
            <h2 className="text-2xl font-extrabold md:text-3xl">Lab Eğitim’i kurumunuza taşımak için</h2>
            <p className="mx-auto mt-3 max-w-lg text-lab-muted">
              Demo, lisans veya mimari konular için iletişime geçin. Aşağıdaki adresi kendi satış e-postanızla
              değiştirin (.env).
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={process.env.NEXT_PUBLIC_SALES_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_SALES_EMAIL}` : "mailto:satis@kurumunuz.edu.tr?subject=Lab%20E%C4%9Fitim%20demo"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-teal-500 to-lab-cyan px-6 py-3.5 text-sm font-bold text-[#041016]"
              >
                E-posta ile yazın
              </a>
              <Link
                href={APP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:border-lab-cyan/50"
              >
                Uygulamayı dene
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-10 text-center text-sm text-lab-muted">
          <p>
            <strong className="text-white">Lab Eğitim</strong> — Akademik eğitim ve program yönetimi · Clinaps
          </p>
          <p className="mt-3 text-xs opacity-80">
            Bu sayfa tanıtım amaçlıdır. Akademik ve idari kararların sorumluluğu ilgili kuruma aittir.
          </p>
          <p className="mt-4 text-xs">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
