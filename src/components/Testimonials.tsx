const testimonials = [
  {
    quote:
      "Antes do Kindex eu tinha 14 abas abertas só para escolher uma atividade de fim de semana. Agora resolvo em minutos — e finalmente brinco com meu filho em vez de pesquisar.",
    name: "Marina Köhler",
    role: "Mãe de 2, 3º distrito",
    initials: "MK",
    accent: "from-coral to-orange",
  },
  {
    quote:
      "Senti pela primeira vez que alguém entendeu a carga mental invisível. O Kindex não me dá mais opções — me dá calma e clareza para decidir.",
    name: "Sophie Brandt",
    role: "Mãe de 1, 7º distrito",
    initials: "SB",
    accent: "from-orange to-light-orange",
  },
  {
    quote:
      "É o único lugar onde tudo da nossa vida em Viena conversa entre si. Recuperei horas da minha semana — e isso é tempo de família de volta.",
    name: "Lena Hofer",
    role: "Mãe de 3, 19º distrito",
    initials: "LH",
    accent: "from-light-orange to-yellow",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-warm py-24 lg:py-32">
      {/* soft texture grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#FEFEFE 1px, transparent 1px), linear-gradient(90deg, #FEFEFE 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden="true"
      />
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-white/15 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-yellow/30 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
            Famílias em Viena
          </p>
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Mães que recuperaram seu tempo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            "Kindex is not another app to check. It's the clarity you've been
            looking for."
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-white/20 bg-white/10 p-7 shadow-soft backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              {/* quote glyph */}
              <svg
                className="mb-4 h-8 w-8 text-white/70"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5a1.67 1.67 0 0 1 1.67-1.67V6zm10 0a5.17 5.17 0 0 0-5.17 5.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
              </svg>

              <p className="flex-1 text-[15px] leading-relaxed text-white">
                {t.quote}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-sm font-bold text-white shadow-card ring-2 ring-white/30`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/75">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
