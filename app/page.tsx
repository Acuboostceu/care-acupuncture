'use client'

import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', phone: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = { background: '#2A4A38', border: '0.5px solid #3A5E48', borderRadius: '6px', padding: '10px 14px', color: '#FAF8F4', fontSize: '13px', outline: 'none', width: '100%' }
  const labelStyle = { color: '#C4A84A', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' as const }
  const tagStyle = { display: 'inline-block', background: '#E8F0EC', color: '#2A4A38', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '3px 14px', borderRadius: '20px', marginBottom: '16px' }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .nav { display: flex; justify-content: space-between; align-items: center; padding: 16px 48px; background: #1C3328; position: sticky; top: 0; z-index: 50; border-bottom: 0.5px solid #2A4A38; }
        .nav-links { display: flex; gap: 32px; }
        .nav-logo { font-family: 'Playfair Display', Georgia, serif; color: #FAF8F4; font-size: 18px; font-weight: 500; letter-spacing: 0.02em; text-decoration: none; }
        .nav-logo span { color: #C4A84A; }
        .section-pad { padding-left: 48px; padding-right: 48px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .herbal-span { grid-column: span 2; }
        .footer { background: #111E18; padding: 24px 48px; display: flex; justify-content: space-between; align-items: center; }
        .hero-pad { padding: 100px 48px 72px; }
        .nav-contact { display: none; }
        @media (max-width: 768px) {
          .nav { padding: 12px 20px; }
          .nav-links { gap: 18px; }
          .nav-links a { font-size: 11px !important; }
          .hero-pad { padding: 56px 20px 48px; }
          .hero-h1 { font-size: 34px !important; }
          .section-pad { padding-left: 20px; padding-right: 20px; }
          .grid-2, .grid-3, .contact-grid, .form-grid { grid-template-columns: 1fr; }
          .contact-grid { gap: 32px; }
          .herbal-span { grid-column: span 1; }
          .footer { padding: 20px; flex-direction: column; gap: 8px; text-align: center; }
        }
        @media (max-width: 480px) {
          .nav-links { display: none; }
          .nav-contact { display: block !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">Care <span>Acupuncture</span></a>
        <div className="nav-links">
          {['About', 'Services', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#A8C4B4', fontSize: '12px', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}>{item}</a>
          ))}
        </div>
        <a className="nav-contact" href="#contact" style={{ color: '#C4A84A', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', border: '0.5px solid #C4A84A', padding: '6px 14px', borderRadius: '20px' }}>Contact</a>
      </nav>

      {/* HERO */}
      <section className="hero-pad" style={{ background: 'linear-gradient(180deg, #111E18 0%, #1C3328 30%, #2A4A38 70%, #4A7058 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
        <span style={{ color: '#C4A84A', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Acupuncture & Eastern Medicine</span>
        <h1 className="serif hero-h1" style={{ color: '#FAF8F4', fontSize: '52px', fontWeight: 500, lineHeight: 1.1 }}>Care Acupuncture Clinic</h1>
        <p style={{ color: '#A8C4B4', fontSize: '15px', lineHeight: 1.8, maxWidth: '420px' }}>
          Compassionate, evidence-informed Eastern medicine. Serving Orange County for over 20 years.
        </p>
        <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#C4A84A', fontSize: '12px', letterSpacing: '0.04em' }}>Call or text to schedule</span>
          <a href="tel:7149745588" style={{ color: '#FAF8F4', fontWeight: 500, fontSize: '16px', textDecoration: 'none', letterSpacing: '0.02em' }}>714-974-5588</a>
        </div>
      </section>

      {/* HERO→ABOUT gradient bridge */}
      <div style={{ height: '140px', background: 'linear-gradient(180deg, #4A7058 0%, #618870 12%, #84A890 28%, #AAC4B4 46%, #CCDDD4 63%, #E0EDE8 78%, #EDF4F0 90%, #F0F5F2 100%)' }} />

      {/* ABOUT */}
      <section id="about" className="section-pad" style={{ background: 'linear-gradient(180deg, #F0F5F2 0%, #FAF8F4 60%, #F0EDE5 100%)', paddingTop: '40px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={tagStyle}>Who we are</span>
          <h2 className="serif" style={{ color: '#1A2420', fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>Healing rooted in<br />experience & care</h2>
          <p style={{ color: '#4A5E54', fontSize: '15px', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 40px' }}>
            Care Acupuncture Clinic brings over two decades of dedicated practice to Orange County. Our practitioners combine classical Eastern medicine with a compassionate, patient-centered approach.
          </p>

          <div className="grid-2" style={{ marginBottom: '20px' }}>
            {[
              { name: 'Sally Kwon, L.Ac.', title: 'Founder & Lead Practitioner', bio: 'With over 20 years of clinical experience, Dr. Kwon has dedicated her career to Eastern medicine — including years serving as a clinical practitioner and educator at a university teaching hospital, training the next generation of acupuncturists.' },
              { name: 'Susan Park, L.Ac.', title: 'Practitioner', bio: 'Susan Park brings thoughtful, patient-centered care to every visit. Her approach integrates classical acupuncture techniques with a deep commitment to each patient\'s individual health journey.' },
            ].map(p => (
              <div key={p.name} style={{ background: 'rgba(255,255,255,0.75)', borderRadius: '12px', padding: '28px', textAlign: 'left' }}>
                <div style={{ width: '36px', height: '3px', background: '#C4A84A', borderRadius: '2px', marginBottom: '16px' }} />
                <h3 style={{ color: '#1A2420', fontSize: '15px', fontWeight: 500, marginBottom: '4px' }}>{p.name}</h3>
                <p style={{ color: '#C4A84A', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>{p.title}</p>
                <p style={{ color: '#4A5E54', fontSize: '13px', lineHeight: 1.7 }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad" style={{ background: 'linear-gradient(180deg, #EAF0EC 0%, #D8E8DE 50%, #C8DEDA 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ ...tagStyle, background: '#D0E8DC', color: '#1C3328' }}>What we offer</span>
          <h2 className="serif" style={{ color: '#1A2420', fontSize: '32px', fontWeight: 500, marginBottom: '32px' }}>Our services</h2>
          <div className="grid-3">
            {[
              { name: 'Acupuncture', desc: 'Classical and contemporary needling techniques for a wide range of conditions' },
              { name: 'Electroacupuncture', desc: 'Enhanced stimulation for pain management and neurological conditions' },
              { name: 'Moxibustion', desc: 'Warming therapy using moxa to tonify qi and promote circulation' },
              { name: 'Cupping', desc: 'Myofascial release and circulation support through suction therapy' },
            ].map(m => (
              <div key={m.name} style={{ background: 'rgba(255,255,255,0.7)', border: '0.5px solid #B8D4C4', borderRadius: '12px', padding: '24px', textAlign: 'left' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C4A84A', marginBottom: '14px' }} />
                <h3 style={{ color: '#1A2420', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}>{m.name}</h3>
                <p style={{ color: '#4A6858', fontSize: '12px', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
            <div className="herbal-span" style={{ background: 'rgba(255,255,255,0.7)', border: '0.5px solid #B8D4C4', borderRadius: '12px', padding: '24px', textAlign: 'left' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C4A84A', marginBottom: '14px' }} />
              <h3 style={{ color: '#1A2420', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}>Herbal Medicine</h3>
              <p style={{ color: '#4A6858', fontSize: '12px', lineHeight: 1.6 }}>Custom formulas tailored to your constitution and condition</p>
              <p style={{ color: '#C4A84A', fontSize: '11px', marginTop: '8px' }}>Available as Powder · Capsule · Decoction</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES→CONTACT gradient bridge */}
      <div style={{ height: '140px', background: 'linear-gradient(180deg, #C8DEDA 0%, #B0CEC8 12%, #8AADA4 28%, #608878 46%, #426858 63%, #304E3C 78%, #2C4838 90%, #2A4A38 100%)' }} />

      {/* CONTACT */}
      <section id="contact" className="section-pad" style={{ background: 'linear-gradient(180deg, #2A4A38 0%, #1C3328 40%, #111E18 100%)', paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="contact-grid">
            <div>
              <span style={{ display: 'inline-block', background: '#2A4A38', color: '#C4A84A', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '3px 12px', borderRadius: '20px', marginBottom: '16px' }}>Get in touch</span>
              <h2 className="serif" style={{ color: '#FAF8F4', fontSize: '32px', fontWeight: 500, marginBottom: '16px', lineHeight: 1.2 }}>Send us a message</h2>
              <p style={{ color: '#A8C4B4', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px' }}>We&apos;ll get back to you as soon as possible.</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                <a href="tel:7149745588" style={{ color: '#C4A84A', fontSize: '13px', textDecoration: 'none' }}>714-974-5588</a>
                <p style={{ color: '#A8C4B4', fontSize: '13px', lineHeight: 1.7 }}>1516 E Lincoln Ave<br />Orange, CA 92865</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
              <div className="form-grid">
                {[
                  { label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Phone', key: 'phone', type: 'tel', placeholder: '(714) 000-0000' },
                ].map(f => (
                  <div key={f.key} style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                    <label style={labelStyle}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      style={inputStyle} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                <label style={labelStyle}>Email</label>
                <input type="email" placeholder="your@email.com" value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  style={inputStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                <label style={labelStyle}>Message</label>
                <textarea placeholder="Tell us how we can help..." value={form.message} rows={4}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'none' as const, fontFamily: 'inherit' }} />
              </div>
              <button type="submit" disabled={status === 'sending'}
                style={{ background: '#C4A84A', color: '#1A2420', border: 'none', padding: '12px 28px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' as const, cursor: 'pointer', alignSelf: 'flex-start' }}>
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              {status === 'sent' && <p style={{ color: '#C4A84A', fontSize: '13px' }}>Message sent! We&apos;ll be in touch soon.</p>}
              {status === 'error' && <p style={{ color: '#F09595', fontSize: '13px' }}>Something went wrong. Please call us directly.</p>}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span style={{ color: '#4A5E54', fontSize: '11px' }}>© 2026 Care Acupuncture Clinic · Licensed Acupuncture & Eastern Medicine</span>
        <span style={{ color: '#C4A84A', fontSize: '11px' }}>Orange, CA</span>
      </footer>
    </div>
  )
}
