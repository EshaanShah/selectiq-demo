import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, ChevronRight, Clock3, FileImage,
  Heart, Image as ImageIcon, RotateCcw, ShieldCheck, Sparkles, X, XCircle,
} from 'lucide-react'
import { comparisons, fallbackImage, initialPhotos } from './data/photos'

const briefDefault = 'Prioritize candid emotion, meaningful family interactions, and authentic moments over traditional posed portraits.'

function Brand({ inverse = false }) {
  return (
    <div className="flex items-center gap-3" aria-label="SelectIQ home">
      <div className={`grid h-9 w-9 place-items-center rounded-full ${inverse ? 'bg-white text-forest' : 'bg-forest text-white'}`}>
        <Sparkles size={17} strokeWidth={1.8} />
      </div>
      <div>
        <div className={`text-[18px] font-semibold tracking-[-.03em] ${inverse ? 'text-white' : 'text-forest'}`}>SelectIQ</div>
        <div className={`hidden text-[9px] uppercase tracking-[.18em] sm:block ${inverse ? 'text-white/55' : 'text-forest/50'}`}>Your eye, amplified</div>
      </div>
    </div>
  )
}

function Header({ screen, onReset, onGuide }) {
  return (
    <header className="relative z-20 flex h-[76px] items-center justify-between border-b border-forest/10 px-5 md:px-10 lg:px-14">
      <Brand />
      <div className="flex items-center gap-5">
        <span className="hidden items-center gap-2 text-xs font-medium text-forest/50 md:flex"><ShieldCheck size={15} /> Local demo · no uploads</span>
        <button onClick={onGuide} className="flex items-center gap-2 rounded-full border border-gold/40 bg-[#f1eadb] px-4 py-2 text-xs font-semibold text-forest transition hover:border-gold hover:bg-white">
          <BookOpen size={14} /> <span className="hidden sm:inline">Presenter Guide</span><span className="sm:hidden">Guide</span>
        </button>
        {screen === 4 && (
          <button onClick={onReset} className="flex items-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2 text-xs font-semibold text-forest transition hover:border-forest/35 hover:bg-forest hover:text-white">
            <RotateCcw size={14} /> Start New Demo
          </button>
        )}
      </div>
    </header>
  )
}

function PresenterGuide({ onClose }) {
  const picks = [
    { number: '01', title: 'Candid emotion', detail: 'Pick the left photo — the bride and her mother holding hands.' },
    { number: '02', title: 'Natural laughter', detail: 'Pick the left photo — the newlyweds laughing with friends.' },
    { number: '03', title: 'Family connection', detail: 'Pick the left photo — the bride entering with her parents.' },
  ]

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-[#081f19]/70 p-4 backdrop-blur-sm fade-in" role="dialog" aria-modal="true" aria-label="Presenter guide" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="relative max-h-[94vh] w-full max-w-2xl overflow-auto rounded-[28px] bg-white p-6 shadow-2xl md:p-9">
        <button onClick={onClose} aria-label="Close presenter guide" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ivory text-forest transition hover:bg-forest hover:text-white"><X size={17} /></button>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-gold"><BookOpen size={15} /> Private presentation cheat sheet</div>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-.03em] text-forest">The 60-second demo path</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-forest/55">Use these choices so the final gallery clearly learns “candid emotion, natural laughter, and family connection.” Close this panel before presenting.</p>

        <div className="mt-7 space-y-3">
          {picks.map((pick) => (
            <div key={pick.number} className="flex gap-4 rounded-2xl border border-forest/10 bg-ivory/70 p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-xs font-bold text-white">{pick.number}</span>
              <div><p className="text-sm font-semibold text-forest">Choose “{pick.title}”</p><p className="mt-1 text-xs leading-5 text-forest/55">{pick.detail}</p></div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-forest p-5 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#d8c189]">Best results-screen moment</p>
          <p className="mt-2 text-sm leading-6 text-white/75">Point out the learned-style chips and the five emotional Keep images. Then open <strong className="text-white">Review → “Walking in together”</strong> and move it to Keep. The counts update from 5/4/15 to 6/3/15, showing the photographer stays in control.</p>
        </div>
        <button onClick={onClose} className="mt-6 w-full rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9f824b]">Got it — start the demo</button>
      </section>
    </div>
  )
}

function SmartImage({ src, alt, className = '', ...props }) {
  return <img src={src} alt={alt} className={className} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImage }} {...props} />
}

function Welcome({ brief, setBrief, onStart }) {
  return (
    <main className="min-h-[calc(100vh-76px)] px-5 py-7 md:px-10 md:py-10 lg:px-14">
      <div className="mx-auto grid max-w-[1500px] overflow-hidden rounded-[30px] bg-white shadow-soft lg:min-h-[calc(100vh-156px)] lg:grid-cols-[.92fr_1.08fr]">
        <section className="flex flex-col justify-center p-7 md:p-12 lg:p-16 xl:p-20 fade-up">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.2em] text-gold"><span className="h-px w-8 bg-gold" /> Intelligent culling, personal to you</div>
          <h1 className="max-w-[680px] font-display text-5xl font-semibold leading-[.96] tracking-[-.04em] text-forest md:text-6xl xl:text-[74px]">Every great gallery starts with the right moments.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-forest/65">SelectIQ learns your photography preferences and helps you find the moments that matter.</p>

          <div className="mt-9 rounded-2xl border border-forest/10 bg-ivory/70 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-white"><ImageIcon size={20} /></div>
                <div><p className="font-semibold text-forest">The Wedding Collection</p><p className="mt-1 text-xs text-forest/50">Prepared moments from the full day</p></div>
              </div>
              <span className="rounded-full bg-[#e0ece6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-forest">Ready</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-forest/10 pt-4 text-xs text-forest/55">
              <span className="flex items-center gap-1.5"><FileImage size={14} /> 24 photos</span>
              <span>JPEG</span><span>42.8 MB</span><span className="flex items-center gap-1.5"><CheckCircle2 size={14} /> Ready for review</span>
            </div>
          </div>

          <label className="mt-6 block text-sm font-semibold text-forest">What’s important for this shoot?</label>
          <textarea value={brief} onChange={(e) => setBrief(e.target.value)} rows={3} className="mt-2 w-full resize-none rounded-2xl border border-forest/15 bg-white px-4 py-3.5 text-sm leading-6 text-forest shadow-sm transition placeholder:text-forest/30 focus:border-gold" />
          <button onClick={onStart} disabled={!brief.trim()} className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-forest px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-forest/15 transition hover:-translate-y-0.5 hover:bg-[#175443] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:self-start">
            Start Learning My Style <ArrowRight size={17} />
          </button>
        </section>

        <section className="relative min-h-[420px] overflow-hidden lg:min-h-full">
          <SmartImage src="https://images.pexels.com/photos/20892660/pexels-photo-20892660.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Newlyweds laughing as they walk through flower petals" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-forest/10" />
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white md:bottom-10 md:left-10 md:right-10">
            <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/70">The Wedding Collection</p><p className="mt-2 font-display text-3xl font-semibold">Find the feeling.</p></div>
            <div className="hidden h-14 w-14 place-items-center rounded-full border border-white/40 bg-forest/35 backdrop-blur-sm sm:grid"><Heart size={19} fill="currentColor" /></div>
          </div>
        </section>
      </div>
    </main>
  )
}

function Learn({ step, selected, onSelect, onBack, onAnalyze }) {
  const done = step >= comparisons.length
  const current = comparisons[Math.min(step, comparisons.length - 1)]
  const currentChoice = selected[step]

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-8 md:px-10 md:py-11 lg:px-14 fade-up">
      <div className="mb-7 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-xs font-semibold text-forest/55 transition hover:text-forest"><ArrowLeft size={15} /> Back to project</button>
        <div className="flex items-center gap-3 text-xs font-semibold text-forest/55">
          <span>{done ? 'Preferences complete' : `Preference ${step + 1} of ${comparisons.length}`}</span>
          <div className="flex gap-1.5">{comparisons.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i < step || done ? 'w-7 bg-gold' : i === step ? 'w-7 bg-forest' : 'w-3 bg-forest/15'}`} />)}</div>
        </div>
      </div>

      <div className="text-center">
        <span className="text-[10px] font-bold uppercase tracking-[.22em] text-gold">Preference calibration</span>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-.03em] text-forest md:text-5xl">{done ? 'Your point of view is taking shape.' : 'Teach SelectIQ your photography style.'}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-forest/60">{done ? 'Three choices are enough to shape this demo selection.' : 'Choose the photograph you would keep. Your selections help shape your personalized recommendations.'}</p>
      </div>

      {!done ? (
        <div className="mt-8">
          <p className="mb-4 text-center font-display text-xl font-semibold text-forest">{current.prompt}</p>
          <div className="grid gap-5 md:grid-cols-2">
            {current.options.map((option) => {
              const isSelected = currentChoice === option.id
              return (
                <article key={option.id} className={`overflow-hidden rounded-[24px] border-2 bg-white shadow-soft transition-all duration-300 ${isSelected ? 'selection-pop border-forest' : 'border-transparent hover:-translate-y-1 hover:border-gold/45'}`}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#e7e1d5]">
                    <SmartImage src={option.url} alt={option.label} className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]" />
                    {isSelected && <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-forest text-white shadow-lg"><Check size={20} strokeWidth={3} /></div>}
                  </div>
                  <div className="flex items-center justify-between gap-4 p-5">
                    <div><h2 className="font-display text-2xl font-semibold text-forest">{option.label}</h2><p className="mt-1 text-xs text-forest/50">{option.note}</p></div>
                    <button onClick={() => onSelect(option.id)} disabled={Boolean(currentChoice)} className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition ${isSelected ? 'bg-forest text-white' : 'border border-forest/15 text-forest hover:bg-forest hover:text-white'} disabled:cursor-default`}>
                      {isSelected ? <span className="flex items-center gap-2"><Check size={14} /> Selected</span> : 'Choose This Photo'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-10 max-w-2xl rounded-[26px] border border-forest/10 bg-white p-7 text-center shadow-soft md:p-10">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e0ece6] text-forest"><CheckCircle2 size={30} /></div>
          <div className="mt-6 grid grid-cols-3 gap-3">{selected.map((choice, i) => <div key={choice} className="rounded-xl bg-ivory p-3"><p className="text-[10px] font-bold uppercase tracking-wider text-gold">Choice {i + 1}</p><p className="mt-1 truncate text-xs font-semibold capitalize text-forest">{choice.replaceAll('-', ' ')}</p></div>)}</div>
          <button onClick={onAnalyze} className="mt-7 inline-flex items-center gap-3 rounded-xl bg-forest px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest/15 transition hover:-translate-y-0.5 hover:bg-[#175443]">Analyze My Gallery <Sparkles size={17} /></button>
        </div>
      )}
    </main>
  )
}

const statuses = ['Reviewing your creative brief...', 'Identifying emotional moments...', 'Applying your photography preferences...', 'Organizing your recommendations...']

function Analysis({ onComplete }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const started = Date.now()
    const timer = window.setInterval(() => setProgress(Math.min(100, ((Date.now() - started) / 3000) * 100)), 50)
    const finish = window.setTimeout(onComplete, 3150)
    return () => { window.clearInterval(timer); window.clearTimeout(finish) }
  }, [onComplete])
  const statusIndex = Math.min(3, Math.floor(progress / 25))

  return (
    <main className="grid min-h-[calc(100vh-76px)] place-items-center px-5 py-10 fade-in">
      <section className="w-full max-w-3xl text-center">
        <div className="relative mx-auto h-32 w-32">
          <div className="absolute inset-0 rounded-full border border-forest/10" />
          <div className="absolute inset-3 animate-spin rounded-full border-[3px] border-transparent border-t-gold border-r-gold" />
          <div className="absolute inset-7 grid place-items-center rounded-full bg-forest text-white shadow-soft"><Sparkles size={28} /></div>
        </div>
        <p className="mt-8 text-[10px] font-bold uppercase tracking-[.23em] text-gold">Curating 24 photographs</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-.03em] text-forest md:text-6xl">SelectIQ is learning<br className="hidden sm:block" /> what matters to you.</h1>
        <p className="mt-5 text-sm text-forest/55">This simulated analysis takes just a moment.</p>
        <div className="mx-auto mt-10 max-w-xl rounded-[24px] border border-forest/10 bg-white p-6 text-left shadow-soft">
          <div className="flex items-center justify-between text-xs font-semibold"><span className="text-forest">{statuses[statusIndex]}</span><span className="tabular-nums text-forest/45">{Math.round(progress)}%</span></div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-forest/10"><div className="h-full rounded-full bg-forest transition-[width] duration-75" style={{ width: `${progress}%` }} /></div>
          <div className="mt-5 flex justify-between text-[10px] uppercase tracking-wider text-forest/35"><span>Creative brief</span><span>Preferences</span><span>Gallery</span></div>
        </div>
      </section>
    </main>
  )
}

const categoryMeta = {
  keep: { label: 'Keep', icon: Heart, color: 'bg-forest text-white', soft: 'bg-[#e0ece6] text-forest', description: 'Strong matches to your creative preferences.' },
  review: { label: 'Review', icon: Clock3, color: 'bg-gold text-white', soft: 'bg-[#f2ead8] text-[#7a5d23]', description: 'Potentially valuable moments that deserve another look.' },
  reject: { label: 'Reject', icon: XCircle, color: 'bg-[#5d625f] text-white', soft: 'bg-[#e9e9e6] text-[#515754]', description: 'Lower-priority photographs. Originals are never deleted.' },
}

function Results({ photos, setPhotos, selected }) {
  const [tab, setTab] = useState('keep')
  const [activeId, setActiveId] = useState(null)
  const [toast, setToast] = useState('')
  const filtered = photos.filter((photo) => photo.category === tab)
  const counts = useMemo(() => ({ keep: photos.filter(p => p.category === 'keep').length, review: photos.filter(p => p.category === 'review').length, reject: photos.filter(p => p.category === 'reject').length }), [photos])
  const active = photos.find((photo) => photo.id === activeId)
  const learnedStyle = selected.length ? selected.map((choice) => comparisons.flatMap((comparison) => comparison.options).find((option) => option.id === choice)?.label).filter(Boolean) : ['Candid emotion', 'Natural laughter', 'Family connection']

  const movePhoto = (category) => {
    if (!active || active.category === category) return
    const previous = active.category
    setPhotos((items) => items.map((photo) => photo.id === active.id ? { ...photo, category } : photo))
    setToast(`“${active.title}” moved from ${categoryMeta[previous].label} to ${categoryMeta[category].label}`)
    setActiveId(null)
    window.setTimeout(() => setToast(''), 2600)
  }

  return (
    <main className="mx-auto max-w-[1500px] px-5 py-8 md:px-10 md:py-11 lg:px-14 fade-up">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-3"><span className="rounded-full bg-[#e0ece6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-forest">Demo recommendations</span><span className="text-[11px] text-forest/40">Simulated analysis</span></div>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em] text-forest md:text-6xl">Your First Selection Is Ready</h1>
          <p className="mt-3 text-sm text-forest/55">Recommendations based on your creative brief and photography preferences.</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-forest/45"><ShieldCheck size={15} /> Originals are never deleted</div>
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-forest/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-white"><Sparkles size={17} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-gold">Your learned style</p><p className="mt-1 text-xs text-forest/50">The Keep set favors close emotion, genuine laughter, and meaningful people.</p></div></div>
        <div className="flex flex-wrap gap-2">{learnedStyle.map((label) => <span key={label} className="rounded-full bg-[#e0ece6] px-3 py-1.5 text-[10px] font-semibold text-forest">{label}</span>)}</div>
      </div>

      <section className="mt-8 grid gap-3 md:grid-cols-3">
        {Object.entries(categoryMeta).map(([key, meta]) => {
          const Icon = meta.icon
          return (
            <button key={key} onClick={() => setTab(key)} className={`group rounded-2xl border p-5 text-left transition-all hover:-translate-y-0.5 ${tab === key ? 'border-forest bg-white shadow-soft' : 'border-forest/10 bg-white/55 hover:border-forest/25'}`}>
              <div className="flex items-start justify-between"><span className={`grid h-9 w-9 place-items-center rounded-full ${meta.soft}`}><Icon size={16} fill={key === 'keep' ? 'currentColor' : 'none'} /></span><span className="font-display text-4xl font-semibold text-forest">{counts[key]}</span></div>
              <div className="mt-4 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-forest">{meta.label}</p><p className="mt-1.5 text-xs leading-5 text-forest/50">{meta.description}</p></div><ChevronRight size={16} className="shrink-0 text-forest/30 transition group-hover:translate-x-1" /></div>
            </button>
          )
        })}
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between border-b border-forest/10">
          <div className="flex gap-1">
            {Object.entries(categoryMeta).map(([key, meta]) => <button key={key} onClick={() => setTab(key)} className={`relative px-4 py-3 text-xs font-semibold transition ${tab === key ? 'text-forest' : 'text-forest/40 hover:text-forest'}`}>{meta.label} <span className="ml-1 tabular-nums">{counts[key]}</span>{tab === key && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-gold" />}</button>)}
          </div>
          <span className="hidden text-[11px] text-forest/40 sm:block">Select a photograph to review the recommendation</span>
        </div>

        {filtered.length ? (
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((photo, index) => (
              <button key={photo.id} onClick={() => setActiveId(photo.id)} className={`group relative overflow-hidden rounded-2xl bg-[#e7e1d5] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft ${index === 0 && tab === 'keep' ? 'col-span-2 row-span-2' : ''}`}>
                <div className={`${index === 0 && tab === 'keep' ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/3]'} overflow-hidden`}>
                  <SmartImage src={photo.url} alt={photo.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-forest/80 p-3 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100"><p className="text-xs font-semibold">{photo.title}</p><p className="mt-0.5 text-[10px] text-white/65">{photo.moment}</p></div>
                <span className="absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-forest shadow-sm">#{String(photo.id).padStart(3, '0')}</span>
              </button>
            ))}
          </div>
        ) : <div className="mt-5 rounded-2xl border border-dashed border-forest/20 py-20 text-center text-sm text-forest/45">No photos in {categoryMeta[tab].label}. Reclassify a photo to add one here.</div>}
      </section>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#081f19]/70 p-3 backdrop-blur-sm fade-in" role="dialog" aria-modal="true" aria-label={`Review ${active.title}`} onMouseDown={(e) => { if (e.target === e.currentTarget) setActiveId(null) }}>
          <div className="relative grid max-h-[94vh] w-full max-w-6xl overflow-auto rounded-[26px] bg-white shadow-2xl lg:grid-cols-[1.3fr_.7fr]">
            <button onClick={() => setActiveId(null)} aria-label="Close photo details" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-forest shadow-lg transition hover:bg-forest hover:text-white"><X size={18} /></button>
            <div className="min-h-[360px] overflow-hidden bg-[#dcd8cf] lg:min-h-[650px]"><SmartImage src={active.url} alt={active.title} className="h-full w-full object-cover" /></div>
            <aside className="flex flex-col p-6 md:p-9">
              <div className="flex items-center gap-2"><span className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] ${categoryMeta[active.category].color}`}>{categoryMeta[active.category].label}</span><span className="text-[11px] text-forest/35">Image #{String(active.id).padStart(3, '0')}</span></div>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-.03em] text-forest">{active.title}</h2>
              <p className="mt-2 text-xs font-medium uppercase tracking-[.14em] text-gold">{active.moment}</p>
              <div className="mt-7 rounded-2xl bg-ivory p-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-forest/50"><Sparkles size={14} className="text-gold" /> Why SelectIQ placed it here</div>
                <p className="mt-3 text-sm leading-6 text-forest/70">{active.explanation}</p>
              </div>
              <div className="mt-auto pt-8"><p className="text-xs font-semibold text-forest">Move this photograph</p><div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">{Object.entries(categoryMeta).map(([key, meta]) => { const Icon = meta.icon; const isCurrent = active.category === key; return <button key={key} onClick={() => movePhoto(key)} disabled={isCurrent} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-xs font-semibold transition ${isCurrent ? 'cursor-default border-forest bg-forest text-white' : 'border-forest/12 text-forest hover:border-forest hover:bg-forest hover:text-white'}`}><span className="flex items-center gap-2"><Icon size={15} /> Move to {meta.label}</span>{isCurrent && <Check size={14} />}</button> })}</div></div>
            </aside>
          </div>
        </div>
      )}

      {toast && <div className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-full bg-forest px-5 py-3 text-xs font-semibold text-white shadow-2xl toast-in"><CheckCircle2 size={16} className="text-[#d8c189]" /> {toast}</div>}
    </main>
  )
}

export default function App() {
  const [screen, setScreen] = useState(1)
  const [brief, setBrief] = useState(briefDefault)
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState([])
  const [photos, setPhotos] = useState(initialPhotos)
  const [showGuide, setShowGuide] = useState(false)

  const reset = () => { setScreen(1); setBrief(briefDefault); setStep(0); setSelected([]); setPhotos(initialPhotos); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const choose = (id) => {
    if (selected[step]) return
    setSelected((items) => [...items, id])
    window.setTimeout(() => setStep((value) => value + 1), 650)
  }
  const completeAnalysis = () => setScreen(4)

  return (
    <div className="noise min-h-screen bg-ivory">
      <Header screen={screen} onReset={reset} onGuide={() => setShowGuide(true)} />
      {screen === 1 && <Welcome brief={brief} setBrief={setBrief} onStart={() => setScreen(2)} />}
      {screen === 2 && <Learn step={step} selected={selected} onSelect={choose} onBack={() => setScreen(1)} onAnalyze={() => setScreen(3)} />}
      {screen === 3 && <Analysis onComplete={completeAnalysis} />}
      {screen === 4 && <Results photos={photos} setPhotos={setPhotos} selected={selected} />}
      {showGuide && <PresenterGuide onClose={() => setShowGuide(false)} />}
    </div>
  )
}
