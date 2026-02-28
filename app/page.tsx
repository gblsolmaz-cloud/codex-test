const navItems = ["Yarışmalar", "Nasıl Çalışır?", "Kurallar", "Bilimsel Amaç"];

const trustItems = [
  { label: "Veli Onayı Gerekmez", icon: <CheckIcon /> },
  { label: "Eğitim Odaklı", icon: <LeafIcon /> },
  { label: "Şeffaf Kurallar", icon: <ShieldIcon /> },
];

const categoryPills = [
  "Liseler için Proje Yarışması",
  "Proje Yarışması",
  "Ortaokullar için Kompozisyon Yarışması",
];

const contestCards = [
  {
    title: "Lise Proje Yarışması",
    description: "Yaratıcı proje fikirlerini bizimle paylaş!",
    gradient: "from-sky-200 via-blue-200 to-indigo-200",
    shape: <RocketPlaceholder />,
  },
  {
    title: "Ortaokul Kompozisyon Yarışması",
    description: "En iyi kompozisyonunu yaz, ödülü kazan!",
    gradient: "from-cyan-100 via-blue-100 to-slate-200",
    shape: <NotebookPlaceholder />,
  },
  {
    title: "İlkokul Resim & Şiir Yarışması",
    description: "Resmini çiz, şiirini yaz, yeteneğini göster!",
    gradient: "from-orange-100 via-amber-100 to-yellow-100",
    shape: <PalettePlaceholder />,
  },
];

const baseButton =
  "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold transition duration-200 ease-out hover:-translate-y-0.5";
const primaryButton = `${baseButton} bg-gradient-to-b from-amber-400 to-amber-500 text-white shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:from-amber-500 hover:to-amber-600`;
const secondaryButton = `${baseButton} border border-white/30 bg-white text-blue-900 shadow-[0_8px_24px_rgba(2,56,140,0.12)] hover:bg-slate-100`;

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <Header />
      <Hero />
      <section className="mx-auto -mt-7 max-w-[1200px] px-4 sm:px-6">
        <TrustStrip />
        <CategoryPills />
      </section>
      <ContestsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#033991] via-[#0a4eb0] to-[#0758be] text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:py-5">
        <a className="flex items-center gap-2" href="#" aria-label="HayalEt ve Üret ana sayfa">
          <BulbLogo />
          <span className="text-2xl font-bold tracking-tight">HayalEt ve Üret!</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`text-lg font-medium text-white/95 hover:text-white ${
                index === 0 ? "inline-flex items-center gap-1" : ""
              }`}
            >
              {item}
              {index === 0 && <ChevronDown />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Giriş Yap" className={`${baseButton} border border-white/25 bg-white/10 text-white hover:bg-white/20`}>
            Giriş Yap
          </button>
          <button aria-label="Kayıt Ol" className={primaryButton}>
            Kayıt Ol
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-[#edf3ff] pb-16 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-balance text-5xl font-extrabold leading-tight text-[#0b3d93] sm:text-6xl">HayalEt ve Üret!</h1>
          <p className="mt-4 text-xl font-medium text-[#1a4f9e]">Fikirlerini paylaş, yeteneklerini göster, ödülü kap!</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button aria-label="Hemen Katıl" className={primaryButton}>
              Hemen Katıl
            </button>
            <button aria-label="Detayları Öğren" className={secondaryButton}>
              Detayları Öğren
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] rounded-3xl border border-blue-100 bg-gradient-to-br from-[#e8f2ff] via-[#dcecff] to-[#f8fbff] p-6 shadow-[0_20px_50px_rgba(11,61,147,0.18)]">
          <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-amber-300/70 blur-xl" />
          <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-blue-400/30 blur-xl" />
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(12,49,117,0.10)] sm:px-6">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-[#24509d] sm:text-base">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-amber-100 text-amber-500">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryPills() {
  return (
    <div className="mt-4 flex flex-wrap gap-2 pb-4 sm:justify-end">
      {categoryPills.map((pill, index) => (
        <button
          aria-label={pill}
          key={pill}
          className={`rounded-2xl px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
            index === 0 ? "bg-[#0d4ca8] text-white shadow-lg" : "bg-white text-[#24509d] border border-slate-200"
          }`}
        >
          {pill}
        </button>
      ))}
    </div>
  );
}

function ContestsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 pt-10 sm:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#0b3d93] sm:text-5xl">Yarışmalar</h2>
        <p className="mt-3 text-lg font-semibold text-[#244f9a]">Senin yaş grubuna özel yarışmalar!</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {contestCards.map((card) => (
          <article key={card.title} className="relative">
            <div className="absolute -bottom-3 left-2 right-2 top-14 rounded-3xl bg-[#0b4aa8] opacity-20" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_12px_26px_rgba(12,49,117,0.15)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(12,49,117,0.24)]">
              <div className={`h-56 rounded-2xl bg-gradient-to-br ${card.gradient} p-4`}>{card.shape}</div>
              <h3 className="mt-5 text-3xl font-extrabold leading-tight text-[#0b3d93]">{card.title}</h3>
              <p className="mt-2 min-h-[48px] text-[17px] font-medium text-[#35599c]">{card.description}</p>
              <button aria-label={`${card.title} yarışmasına katıl`} className={`${primaryButton} mt-5 w-full`}>
                Katıl
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-14 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0945a4] via-[#0d57be] to-[#07357f] px-6 py-12 text-center text-white shadow-[0_16px_48px_rgba(7,53,127,0.35)] sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_30%)]" />
        <div className="absolute -bottom-16 left-0 h-44 w-full rounded-[50%] bg-gradient-to-r from-blue-400/20 via-blue-300/15 to-indigo-400/20" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-4xl font-extrabold">Hayal Gücünüzü Destekliyoruz!</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-50">
            Platformumuz, çocukların ve gençlerin yaratıcılığını geliştirmek, düşünme becerilerini artırmak ve özgüvenlerini yükseltmek için tasarlandı.
          </p>
          <button aria-label="Metodolojimizi İncele" className={`${baseButton} mt-7 border border-white/40 bg-white text-[#0a4eb0] hover:bg-blue-50`}>
            Metodolojimizi İncele
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#28529c] sm:text-base">
          <a href="#" className="hover:underline">
            Kurallar
          </a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:underline">
            Gizlilik ve KVKK
          </a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:underline">
            İletişim
          </a>
        </div>

        <div className="flex items-center gap-3">
          <SocialIcon label="Facebook" />
          <SocialIcon label="Twitter" />
          <SocialIcon label="Instagram" />
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[1200px] px-4 text-center text-sm text-slate-600 sm:px-6">
        Bu platform, bilgi ve yetenek odaklıdır. Şans unsuru içermez.
      </p>
    </footer>
  );
}

function HeroIllustration() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-xl" />
      <div className="absolute left-16 top-24 h-10 w-48 rounded-full bg-amber-700/20 blur-sm" />
      <div className="absolute right-12 top-14 h-24 w-16 rotate-[25deg] rounded-t-full bg-gradient-to-b from-red-500 to-orange-500" />
      <div className="absolute right-[55px] top-36 h-20 w-6 rounded-b-full bg-slate-100" />
      <div className="absolute right-36 top-20 h-16 w-20 rounded-lg bg-green-500/70" />
      <div className="absolute right-24 top-30 h-16 w-20 -rotate-6 rounded-lg bg-green-600/80" />
      <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full border-[14px] border-amber-500" />
      <div className="absolute bottom-10 right-10 h-20 w-20 rounded-2xl bg-white/90 shadow-lg" />
      <div className="absolute bottom-8 left-[44%] h-12 w-24 rounded-xl bg-blue-300/80" />
      <div className="absolute left-4 top-6 text-amber-400">
        <Sparkle />
      </div>
      <div className="absolute bottom-3 right-36 text-blue-500">
        <Sparkle />
      </div>
    </div>
  );
}

function RocketPlaceholder() {
  return (
    <div className="grid h-full place-items-center rounded-xl border border-white/70 bg-white/40">
      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden>
        <ellipse cx="55" cy="84" rx="24" ry="10" fill="#93C5FD" />
        <path d="M55 16C72 28 78 51 74 63L55 54L36 63C32 51 38 28 55 16Z" fill="#2563EB" />
        <path d="M48 71L55 54L62 71L55 88L48 71Z" fill="#F59E0B" />
      </svg>
    </div>
  );
}

function NotebookPlaceholder() {
  return (
    <div className="grid h-full place-items-center rounded-xl border border-white/70 bg-white/40">
      <svg width="120" height="90" viewBox="0 0 120 90" fill="none" aria-hidden>
        <rect x="18" y="10" width="78" height="68" rx="8" fill="#0EA5E9" />
        <rect x="24" y="18" width="66" height="52" rx="6" fill="#E0F2FE" />
        <path d="M80 64L104 82" stroke="#1D4ED8" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function PalettePlaceholder() {
  return (
    <div className="grid h-full place-items-center rounded-xl border border-white/70 bg-white/40">
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none" aria-hidden>
        <path d="M60 14C34 14 14 30 14 52C14 73 30 88 48 88C56 88 58 80 58 74C58 67 62 62 69 62H74C93 62 106 51 106 36C106 23 89 14 60 14Z" fill="#FCD34D" />
        <circle cx="42" cy="40" r="7" fill="#EF4444" />
        <circle cx="58" cy="34" r="7" fill="#3B82F6" />
        <circle cx="78" cy="41" r="7" fill="#22C55E" />
        <circle cx="74" cy="56" r="7" fill="#F97316" />
      </svg>
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  return (
    <button
      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-slate-50 text-[#0c4ca8] transition hover:-translate-y-0.5 hover:bg-blue-50"
      aria-label={label}
    >
      <span className="text-sm font-bold">{label.charAt(0)}</span>
    </button>
  );
}

function BulbLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#F8B400" />
      <path d="M24 10C17.9 10 13 14.9 13 21C13 24.4 14.6 27.4 17 29.4V33C17 34.1 17.9 35 19 35H29C30.1 35 31 34.1 31 33V29.4C33.4 27.4 35 24.4 35 21C35 14.9 30.1 10 24 10Z" fill="white" />
      <rect x="20" y="36" width="8" height="3" rx="1.5" fill="white" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20 4C13 5 8 9 6 16C8 18 11 19 14 18C19 16 20 11 20 4Z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 14C9 14 12 14 15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3L19 6V12C19 16.4 16.2 20.4 12 22C7.8 20.4 5 16.4 5 12V6L12 3Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
    </svg>
  );
}
