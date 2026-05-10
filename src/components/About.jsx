export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 text-right">
          <p className="text-brand-burgundy font-semibold text-sm tracking-widest uppercase mb-3">
            על ענבל
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl text-brand-graphite mb-6 leading-snug">
            אמנות הציפורניים<br />מלב השרון
          </h2>
          <div className="w-12 h-0.5 bg-brand-pink mb-6" />
          <p className="text-brand-graphite/80 text-lg leading-relaxed mb-4">
            ענבל ירדני היא מדריכה מוסמכת ואמנית ציפורניים עם ניסיון של שנים
            בתחום הטיפוח המקצועי. הסטודיו הבוטיק שלה שוכן בלב הטבע הירוק
            של קיבוץ שער העמקים — מקום שבו שקט, יצירתיות ומקצועיות נפגשים.
          </p>
          <p className="text-brand-graphite/80 text-lg leading-relaxed mb-8">
            כל קורס מועבר בקבוצות קטנות ואינטימיות, עם ליווי אישי צמוד,
            כדי שכל תלמידה תצא עם ביטחון מלא ומיומנויות מקצועיות אמיתיות.
          </p>
          <a
            href="#courses"
            className="inline-block bg-brand-burgundy text-white font-bold px-7 py-3 rounded-full hover:bg-brand-burgundy-dark transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-brand-burgundy/40"
          >
            לרשימת הקורסים
          </a>
        </div>

        <div
          className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-brand-pink/50 to-brand-burgundy/20 flex items-center justify-center shadow-inner"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl text-brand-burgundy/40">✦</span>
            <span className="text-sm text-brand-burgundy/30 tracking-widest uppercase">Inbal Nails</span>
          </div>
        </div>

      </div>
    </section>
  )
}
