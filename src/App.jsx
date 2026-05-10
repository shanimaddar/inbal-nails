import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyModal from './components/PrivacyModal'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [cookieDismissed, setCookieDismissed] = useState(
    () => !!localStorage.getItem('inbal-cookies-accepted')
  )

  return (
    <div className="font-sans bg-brand-cream" dir="rtl">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Courses />
        <Gallery />
        <ContactForm onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <CookieBanner
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onAccept={() => setCookieDismissed(true)}
      />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <WhatsAppButton cookieBannerVisible={!cookieDismissed} />
    </div>
  )
}
