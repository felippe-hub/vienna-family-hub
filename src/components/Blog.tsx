import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    category: "Mental Load",
    date: "12 Mar 2025",
    readTime: "5 min",
    title: "A carga mental invisível das mães urbanas em Viena",
    excerpt:
      "Por que escolher uma atividade extracurricular consome tanto da nossa energia — e como reduzir esse peso sem renunciar à qualidade.",
    cover: (
      <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
        <rect width="400" height="260" fill="#2F3D4C" />
        <circle cx="200" cy="130" r="80" fill="none" stroke="#FE5C36" strokeWidth="2" strokeDasharray="2 6" />
        <circle cx="200" cy="130" r="50" fill="none" stroke="#F5C71A" strokeWidth="2" strokeDasharray="1 5" />
        <circle cx="200" cy="130" r="22" fill="#FE5C36" />
        <circle cx="120" cy="60" r="6" fill="#F5C71A" />
        <circle cx="320" cy="200" r="8" fill="#FEB449" />
        <circle cx="320" cy="80" r="4" fill="#FEFEFE" opacity="0.6" />
      </svg>
    ),
  },
  {
    category: "Vida em Viena",
    date: "28 Feb 2025",
    readTime: "7 min",
    title: "Como escolher uma creche que realmente combina com sua família",
    excerpt:
      "Um guia calmo, com perguntas que importam — para você decidir com clareza, não por exaustão.",
    cover: (
      <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
        <rect width="400" height="260" fill="#F8F8F8" />
        <rect x="80" y="60" width="100" height="100" rx="24" fill="#FE5C36" />
        <rect x="200" y="60" width="60" height="100" rx="20" fill="#FEB449" />
        <rect x="280" y="60" width="50" height="50" rx="14" fill="#F5C71A" />
        <rect x="280" y="130" width="50" height="70" rx="18" fill="#F39420" />
        <rect x="80" y="180" width="180" height="40" rx="14" fill="#2F3D4C" opacity="0.85" />
      </svg>
    ),
  },
  {
    category: "Tempo & Energia",
    date: "14 Feb 2025",
    readTime: "4 min",
    title: "Menos abas, mais presença: o método Kindex em 3 passos",
    excerpt:
      "Como a curadoria certa transforma horas de pesquisa em minutos de decisão — e devolve sua noite.",
    cover: (
      <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="blog-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#blog-grad)" />
        <circle cx="200" cy="130" r="90" fill="#FEFEFE" opacity="0.2" />
        <path d="M 110 130 L 290 130" stroke="#2F3D4C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="130" cy="130" r="14" fill="#FE5C36" />
        <circle cx="200" cy="130" r="14" fill="#F39420" />
        <circle cx="270" cy="130" r="14" fill="#2F3D4C" />
      </svg>
    ),
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-coral">
              Diário Kindex
            </p>
            <h2 className="text-3xl text-navy sm:text-4xl lg:text-5xl">
              Leituras calmas para mentes ocupadas.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
              Reflexões e guias práticos para famílias em Viena — sem ruído, sem
              urgência, no seu ritmo.
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-card"
          >
            Ver todas as leituras
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </a>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <a href="#" className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    {post.cover}
                  </div>
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-coral backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-navy/50">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-navy/30" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-coral">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/65">
                    {post.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-coral">
                    Ler mais
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
