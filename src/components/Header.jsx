const WA_HREF = `https://wa.me/972509800777?text=${encodeURIComponent('היי ענבל, הגעתי מהאתר ואשמח לשמוע פרטים על ההדרכות המקצועיות שלך ב-Inbal Nails Academy')}`

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-brand-cream border-b border-brand-pink shadow-sm"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" aria-label="Inbal Nails Academy - דף הבית" className="no-underline">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-semibold text-brand-burgundy tracking-wide">
              ענבל
            </span>
            <span className="font-sans text-[10px] font-light tracking-[0.25em] uppercase text-brand-burgundy/70 mt-0.5">
              Nails Academy
            </span>
          </div>
        </a>

        <nav aria-label="ניווט ראשי">
          <ul className="hidden md:flex gap-6 items-center list-none m-0 p-0">
            <li>
              <a href="#about" className="text-brand-graphite/70 hover:text-brand-burgundy text-sm font-medium transition-colors">
                אודות
              </a>
            </li>
            <li>
              <a href="#courses" className="text-brand-graphite/70 hover:text-brand-burgundy text-sm font-medium transition-colors">
                קורסים
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-brand-graphite/70 hover:text-brand-burgundy text-sm font-medium transition-colors">
                גלריה
              </a>
            </li>
            <li>
              <a href="#contact" className="text-brand-graphite/70 hover:text-brand-burgundy text-sm font-medium transition-colors">
                צרי קשר
              </a>
            </li>
          </ul>
        </nav>

        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שלחי הודעה ב-WhatsApp"
          className="bg-brand-burgundy text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-brand-burgundy-dark transition-colors focus:outline-none focus:ring-4 focus:ring-brand-burgundy/40"
        >
          שלחי הודעה
        </a>
      </div>
    </header>
  )
}
