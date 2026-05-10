const INSTAGRAM_URL = 'https://www.instagram.com/inbalma_nails?igsh=eW81OXM4YjBuc2py'

const photos = [
  { id: 1, alt: 'עיצוב ציפורניים מקצועי - ענבל נייל' },
  { id: 2, alt: "לק ג'ל מקצועי" },
  { id: 3, alt: 'בנייה מתקדמת' },
  { id: 4, alt: 'פדיקור יבש מקצועי' },
  { id: 5, alt: 'תיקון מבנה אנטומי' },
  { id: 6, alt: 'סטודיו בוטיק - שער העמקים' },
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-burgundy font-semibold text-sm tracking-widest uppercase mb-2">
            הגלריה שלנו
          </p>
          <h2 className="font-boldtext-3xl sm:text-4xl text-brand-graphite mb-3">
            עבודות מהסטודיו
          </h2>
          <div className="w-16 h-0.5 bg-brand-pink mx-auto mt-4 mb-6" />
          <p className="text-brand-graphite/60 text-base">
            הצצה לעבודות הסטודנטיות והעיצובים מהסטודיו
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {photos.map(({ id, alt }) => (
            <a
              key={id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alt} — לחצי לצפייה באינסטגרם`}
              className="block aspect-square rounded-xl overflow-hidden hover:opacity-85 transition-opacity duration-200 group focus:outline-none focus:ring-4 focus:ring-brand-burgundy/40"
            >
              <div className="w-full h-full bg-gradient-to-br from-brand-pink/40 via-brand-pink/20 to-brand-burgundy/10 flex items-center justify-center">
                <span
                  className="font-boldtext-4xl text-brand-burgundy/30 group-hover:scale-110 transition-transform duration-300 select-none"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="בקרי בפרופיל האינסטגרם של ענבל נייל"
            className="inline-flex items-center gap-3 bg-brand-burgundy text-white font-bold px-8 py-4 rounded-full hover:bg-brand-burgundy-dark transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-brand-burgundy/40"
          >
            <InstagramIcon />
            <span>@inbalma_nails באינסטגרם</span>
          </a>
        </div>
      </div>
    </section>
  )
}
