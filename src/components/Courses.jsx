import { Sparkles, Paintbrush, Gem, Flower2 } from 'lucide-react'

const courses = [
  {
    Icon: Sparkles,
    title: 'תיקון מבנה אנטומי',
    subtitle: 'ארכיטקטורה מושלמת לציפורן',
    description: 'הקורס המקיף לתיקון ובניית מבנה ציפורן תקין — שיפוע, רפלקס אור ועיצוב מדויק.',
    bullets: [
      'הבנת אנטומיה של הציפורן',
      'שיטות תיקון מבנה ואנגל',
      'ניתוח רפלקס אור',
      'תרגול ידני מודרך',
    ],
  },
  {
    Icon: Paintbrush,
    title: "לק ג'ל",
    subtitle: 'יישום מקצועי ונקי',
    description: "טכניקות יישום לק ג'ל לתוצאה מושלמת — כיסוי מלא, קצוות נקיים ועמידות מרבית.",
    bullets: [
      'הכנת ציפורן נכונה',
      "טכניקות ציפוי ג'ל",
      'עבודה עם פיגמנטים',
      'שגיאות נפוצות ותיקוניהן',
    ],
  },
  {
    Icon: Gem,
    title: 'בנייה',
    subtitle: 'הארכה וחיזוק מתקדמים',
    description: "שיטות בנייה מתקדמות עם אקריל וג'ל קשיח — לציפורן ארוכה, חזקה ומדויקת.",
    bullets: [
      'עבודה עם תבנית ושפיץ',
      "בנייה עם אקריל וג'ל",
      'עיצוב קצה חופשי',
      'חיזוק ותחזוקה',
    ],
  },
  {
    Icon: Flower2,
    title: 'פדיקור יבש',
    subtitle: 'עבודה בטיחותית עם כלי קצה',
    description: 'שיטת פדיקור ללא מים — עבודה אינסטרומנטלית מקצועית, בטוחה ויעילה.',
    bullets: [
      'עקרונות אנטומיה של כף הרגל',
      'עבודה עם פרזה ומכשור',
      'הסרת עור קשה וקצוות',
      'פרוטוקול היגיינה ובטיחות',
    ],
  },
]

function CourseCard({ Icon, title, subtitle, description, bullets }) {
  return (
    <article className="bg-white rounded-2xl shadow-md border border-brand-pink hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col p-7 gap-4">
      <div className="w-12 h-12 rounded-xl bg-brand-pink/30 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-brand-burgundy" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="font-boldtext-xl text-brand-graphite font-semibold leading-snug">{title}</h3>
      <p className="text-brand-burgundy text-sm font-medium tracking-wide">{subtitle}</p>
      <p className="text-brand-graphite/65 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-2 mt-auto pt-4 border-t border-brand-pink" role="list">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-brand-graphite/75">
            <span className="text-brand-burgundy mt-0.5 flex-shrink-0 text-xs">◆</span>
            {b}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="bg-brand-cream py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-burgundy font-semibold text-sm tracking-widest uppercase mb-2">
            מה לומדים
          </p>
          <h2 className="font-boldtext-3xl sm:text-4xl text-brand-graphite mb-3">
            הקורסים המקצועיים שלנו
          </h2>
          <div className="w-16 h-0.5 bg-brand-pink mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
