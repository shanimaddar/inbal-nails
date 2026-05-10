import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function PrivacyModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-7 py-5 border-b border-brand-pink sticky top-0 bg-white">
          <h2 id="privacy-title" className="font-boldtext-xl text-brand-graphite font-semibold">
            מדיניות פרטיות
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="סגור חלון מדיניות פרטיות"
            className="text-brand-graphite/50 hover:text-brand-burgundy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-burgundy rounded-lg p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto px-7 py-6 text-right text-brand-graphite/80 text-sm leading-relaxed space-y-5">
          <p className="text-brand-graphite/50 text-xs">עדכון אחרון: מאי 2025</p>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">1. כללי</h3>
            <p>
              Inbal Nails Academy ("האקדמיה", "אנו") מחויבת לשמירה על פרטיות המשתמשים. מדיניות זו מסבירה
              כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">2. מידע שאנו אוספים</h3>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>שם מלא ומספר טלפון שמסרת בטופס יצירת הקשר</li>
              <li>הקורס המבוקש</li>
              <li>מידע טכני: כתובת IP, סוג דפדפן, עמודים שביקרת</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">3. שימוש במידע</h3>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>מידע על קורסים והדרכות בתגובה לפנייתך</li>
              <li>תיאום שיעורים ומפגשים</li>
              <li>שיפור השירות וחוויית הגלישה באתר</li>
              <li>עמידה בדרישות חוקיות</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">4. עוגיות (Cookies)</h3>
            <p>
              האתר משתמש בעוגיות לצורך שמירת העדפות גלישה וניתוח תנועה. ניתן לבטל עוגיות דרך הגדרות הדפדפן שלך.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">5. שיתוף מידע עם צדדים שלישיים</h3>
            <p>
              אנו לא מוכרים, מסחרים או מעבירים לצדדים שלישיים מידע אישי מזהה, למעט ספקי שירות הפועלים
              בשמנו ועל פי הוראותינו (כגון אחסון אתר).
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">6. אבטחת מידע</h3>
            <p>
              אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע. עם זאת, אין ביכולתנו להבטיח אבטחה מוחלטת
              של כל מידע המועבר דרך האינטרנט.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">7. זכויות המשתמש</h3>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>זכות עיון במידע האישי שנאסף עליך</li>
              <li>זכות תיקון מידע שגוי</li>
              <li>זכות מחיקת המידע בכפוף להוראות החוק</li>
            </ul>
            <p className="mt-2">לפניות בנושא פרטיות: ניתן לפנות אלינו דרך WhatsApp.</p>
          </section>

          <section>
            <h3 className="font-semibold text-brand-graphite mb-2">8. שינויים במדיניות</h3>
            <p>
              אנו רשאים לעדכן מדיניות זו מעת לעת. המשך השימוש באתר לאחר הפרסום מהווה הסכמה לשינויים.
            </p>
          </section>
        </div>

        <div className="px-7 py-5 border-t border-brand-pink bg-white">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-brand-burgundy text-white font-bold py-3 rounded-xl hover:bg-brand-burgundy-dark transition-colors focus:outline-none focus:ring-4 focus:ring-brand-burgundy/40"
          >
            הבנתי
          </button>
        </div>
      </div>
    </div>
  )
}
