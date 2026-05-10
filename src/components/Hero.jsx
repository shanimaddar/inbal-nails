export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero-gradient min-h-[88vh] flex items-center justify-center px-4 py-20 text-center"
      aria-label="Hero - ענבל נייל אקדמי"
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h1 className="font-black text-6xl sm:text-7xl text-white drop-shadow-lg leading-tight">
            ענבל נייל
          </h1>
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-white/70 mt-2">
            Nails Academy
          </p>
        </div>

        <p className="text-2xl sm:text-3xl text-white font-semibold mb-3 leading-snug">
          מריחה מדויקת, קריירה מושלמת
        </p>

        <p className="text-white/80 text-base sm:text-lg mb-4 leading-relaxed">
          הדרכות מקצועיות לציפורניים
        </p>
        <p className="text-white/60 text-sm mb-10">
          בסטודיו הבוטיק שלנו בקיבוץ שער העמקים
        </p>

        <p className="text-white/75 text-base mb-10 max-w-md mx-auto leading-relaxed">
          למדי את האמנות של ציפורניים מושלמות —
          מקורסי יסוד ועד טכניקות מתקדמות,
          בהדרכה אישית וצמודה.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-brand-burgundy font-black text-lg px-9 py-4 rounded-full shadow-xl hover:bg-brand-pink-light transition-colors duration-200 w-full sm:w-auto text-center focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            לפרטים והרשמה
          </a>
          <a
            href="#courses"
            className="border-2 border-white text-white font-bold text-lg px-9 py-4 rounded-full hover:bg-white hover:text-brand-burgundy transition-colors duration-200 w-full sm:w-auto text-center focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            הקורסים שלנו
          </a>
        </div>
      </div>
    </section>
  )
}
