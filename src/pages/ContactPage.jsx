import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Compass,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { contactInformation } from "../data";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SocialIcon from "../components/common/SocialIcon";

const initialForm = { name: "", email: "", subject: "", message: "" };

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please add your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Please enter a valid email address.";
    if (!form.subject) nextErrors.subject = "Please choose a subject.";
    if (!form.message.trim())
      nextErrors.message = "Please tell us a little about your project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      const selectedSubject = contactInformation.subjects.find(
        (subject) => subject.id === form.subject,
      );
      const subject = selectedSubject?.label || "Project inquiry";
      const body = [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Subject: ${subject}`,
        "",
        form.message.trim(),
      ].join("\n");

      window.location.href = `mailto:${contactInformation.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
    }
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#020618] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-40 -z-10 size-[34rem] rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              <Sparkles className="size-3.5" />
              <span>Let’s talk / No pressure</span>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Tell us what you’re{" "}
              <span className="text-brand-300">making possible.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A rough idea or early roadmap is enough. We’ll help you identify
              the clearest next step and a practical delivery timeline.
            </p>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Your first step
              </span>
              <span className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                Here to help
              </span>
            </div>
            <a
              href={`mailto:${contactInformation.email}`}
              className="group mt-8 flex items-start justify-between gap-4 border-b border-white/10 pb-6"
            >
              <div>
                <span className="text-xs text-slate-400">Email us directly</span>
                <span className="mt-2 block break-all font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-200 sm:text-xl">
                  {contactInformation.email}
                </span>
              </div>
              <ArrowUpRight className="mt-1 size-5 shrink-0 text-brand-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <div className="mt-5 flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <span>{contactInformation.location}</span>
            </div>
            <p className="mt-6 text-xs leading-6 text-slate-400">
              Tell us a little about the challenge. We typically reply within
              one business day.
            </p>
          </aside>
        </Container>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <Container className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950">
                Direct Channels
              </h2>
              <p className="mt-2 text-sm text-ink-600">
                We respond within 24 hours Monday through Friday.
              </p>

              <div className="mt-8 grid gap-6 text-sm">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      Email
                    </p>
                    <a
                      className="mt-1 block font-medium text-ink-950 hover:text-brand-700"
                      href={`mailto:${contactInformation.email}`}
                    >
                      {contactInformation.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      Phone
                    </p>
                    <a
                      className="mt-1 block font-medium text-ink-950 hover:text-brand-700"
                      href={`tel:${contactInformation.phone}`}
                    >
                      {contactInformation.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      HQ & Studio
                    </p>
                    <p className="mt-1 font-medium text-ink-950">
                      {contactInformation.address}
                    </p>
                    <p className="text-xs text-ink-500">
                      {contactInformation.location}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Connect With Us
                  </p>
                  <div className="mt-3 flex gap-3">
                    {contactInformation.socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        className="grid size-10 place-items-center rounded-xl border border-slate-200 text-ink-700 transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 shadow-sm"
                      >
                        <SocialIcon id={link.id} className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Map Card replacing the text placeholder */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg relative aspect-[4/3]">
              {/* Stylized vector map background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
                <path d="M0,80 Q90,120 180,90 T360,110 L360,260 L0,260 Z" fill="#0284c7" opacity="0.15" />
                <path d="M40,0 L120,240 M160,0 L200,240 M260,0 L240,240 M0,60 L360,60 M0,140 L360,140 M0,200 L360,200" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-ink-950/80 px-2.5 py-1 text-[11px] font-mono text-brand-300 backdrop-blur">
                    <Compass className="size-3.5" />
                    {contactInformation.coordinates || "37.7915° N, 122.3999° W"}
                  </span>
                  <span className="flex size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="mx-auto my-auto flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute size-10 rounded-full bg-brand-500/40 animate-ping" />
                    <div className="relative grid size-10 place-items-center rounded-full bg-brand-500 text-white shadow-xl shadow-brand-500/50 ring-4 ring-white/20">
                      <MapPin className="size-5" />
                    </div>
                  </div>
                  <span className="mt-2 rounded-full bg-ink-950/90 px-3 py-1 text-xs font-semibold text-white shadow backdrop-blur">
                    HubTech Studio
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-ink-950/80 p-3 text-xs backdrop-blur border border-white/10">
                  <span className="text-slate-300">San Francisco Bay Area</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-brand-300 hover:text-white"
                  >
                    <span>View Map</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-ink-950">
              Project Brief
            </h2>
            <p className="mt-1 text-sm text-ink-600">
              Share your requirements and we will review them confidentially.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={updateField}
                  error={errors.name}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={updateField}
                  error={errors.email}
                  required
                />
              </div>
              <label className="grid gap-2 text-sm font-semibold text-ink-950">
                Subject
                <select
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-ink-700 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                >
                  <option value="">Choose a subject</option>
                  {contactInformation.subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <span className="font-normal text-xs text-rose-600">
                    {errors.subject}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink-950">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="6"
                  className="resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-ink-700 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  placeholder="Tell us what you are hoping to build, timeline, or key objectives..."
                />
                {errors.message && (
                  <span className="font-normal text-xs text-rose-600">
                    {errors.message}
                  </span>
                )}
              </label>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button type="submit" className="inline-flex items-center gap-2">
                  <span>Send inquiry</span>
                  <Send className="size-4" />
                </Button>
                {submitted && (
                  <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3.5 py-2 text-sm font-medium text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>
                      Your email app should open with your inquiry ready to send.
                    </span>
                  </div>
                )}
              </div>
              <p className="text-xs text-ink-400">
                All communications are protected under strict mutual NDA standards.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink-950">
      {label}
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-ink-700 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      />
      {error && <span className="font-normal text-xs text-rose-600">{error}</span>}
    </label>
  );
}

export default ContactPage;
