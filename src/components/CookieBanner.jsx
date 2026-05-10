import { useState, useEffect } from 'react'

const STORAGE_KEY = 'inbal-cookies-accepted'

export default function CookieBanner({ onOpenPrivacy, onAccept }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
    onAccept?.()
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="הודעת עוגיות"
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-graphite text-white px-6 py-5 shadow-2xl border-t-2 border-brand-burgundy"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p className="text-sm text-white/85 leading-relaxed text-center sm:text-right">
          אתר זה משתמש בעוגיות לשיפור חוויית הגלישה.{' '}
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-brand-pink underline underline-offset-2 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded"
          >
            מדיניות פרטיות
          </button>
        </p>
        <button
          type="button"
          onClick={accept}
          aria-label="אישור קבלת עוגיות"
          className="flex-shrink-0 bg-brand-burgundy text-white font-bold px-6 py-2.5 rounded-full hover:bg-brand-burgundy-dark transition-colors focus:outline-none focus:ring-4 focus:ring-brand-burgundy/40 text-sm"
        >
          הבנתי, אישור
        </button>
      </div>
    </div>
  )
}
