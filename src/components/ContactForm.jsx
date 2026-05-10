import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const inputClass =
  'w-full border border-brand-pink rounded-xl px-4 py-3 text-brand-graphite bg-white placeholder-brand-graphite/40 focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-brand-burgundy transition-colors text-sm'

const labelClass = 'block text-sm font-semibold text-brand-graphite mb-1.5'

export default function ContactForm({ onOpenPrivacy }) {
  const [form, setForm] = useState({ name: '', phone: '', course: '', consent: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'נא למלא שם מלא'
    if (!form.phone.trim()) e.phone = 'נא למלא מספר טלפון'
    if (!form.course) e.course = 'נא לבחור קורס'
    if (!form.consent) e.consent = 'נדרשת הסכמה לתנאים'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-brand-cream py-20 px-4">
        <div className="max-w-lg mx-auto text-center bg-white rounded-2xl shadow-md border border-brand-pink p-12">
          <CheckCircle className="w-16 h-16 text-brand-burgundy mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-boldtext-2xl text-brand-graphite mb-3">תודה רבה!</h2>
          <p className="text-brand-graphite/70">קיבלנו את פנייתך ונחזור אלייך בהקדם.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-brand-cream py-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="text-brand-burgundy font-semibold text-sm tracking-widest uppercase mb-2">
            נשמח לשמוע ממך
          </p>
          <h2 className="font-boldtext-3xl sm:text-4xl text-brand-graphite mb-3">
            צרי קשר
          </h2>
          <div className="w-16 h-0.5 bg-brand-pink mx-auto mt-4" />
          <p className="text-brand-graphite/60 text-sm mt-4">
            השאירי פרטים ונחזור אלייך בהקדם
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl shadow-md border border-brand-pink p-8 flex flex-col gap-5"
          aria-label="טופס יצירת קשר"
        >
          <div>
            <label htmlFor="name" className={labelClass}>שמך המלא *</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="הכניסי שם מלא"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>מספר טלפון *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="050-0000000"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              dir="ltr"
              aria-required="true"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="course" className={labelClass}>קורס מבוקש *</label>
            <select
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
              className={inputClass}
              aria-required="true"
              aria-describedby={errors.course ? 'course-error' : undefined}
            >
              <option value="">בחרי קורס</option>
              <option value="anatomy">תיקון מבנה אנטומי</option>
              <option value="gel">לק ג&apos;ל</option>
              <option value="build">בנייה</option>
              <option value="pedicure">פדיקור יבש</option>
              <option value="other">אחר / ייעוץ</option>
            </select>
            {errors.course && <p id="course-error" className="text-red-500 text-xs mt-1" role="alert">{errors.course}</p>}
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="relative mt-0.5 flex-shrink-0">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="sr-only peer"
                  aria-required="true"
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                />
                <div className="w-5 h-5 border-2 border-brand-pink rounded peer-checked:bg-brand-burgundy peer-checked:border-brand-burgundy transition-colors" />
                {form.consent && (
                  <svg className="absolute inset-0 w-5 h-5 text-white p-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-brand-graphite/70 leading-snug">
                מסכימה/מסכים ל
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-brand-burgundy underline underline-offset-2 hover:text-brand-burgundy-dark focus:outline-none focus:ring-1 focus:ring-brand-burgundy rounded mx-1"
                >
                  מדיניות הפרטיות
                </button>
                ולקבלת פרטים על הקורסים
              </span>
            </label>
            {errors.consent && <p id="consent-error" className="text-red-500 text-xs mt-1" role="alert">{errors.consent}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-brand-burgundy text-white font-black text-lg py-4 rounded-xl hover:bg-brand-burgundy-dark transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-brand-burgundy/40 mt-2"
          >
            שלחי פנייה
          </button>
        </form>
      </div>
    </section>
  )
}
