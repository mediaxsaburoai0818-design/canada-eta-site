import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white min-h-[400px] md:min-h-[520px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-canada.png"
          alt="Flaga Kanady i krajobraz"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B1A1A]/85 to-[#8B1A1A]/70" />
        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-28 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                color: "white",
              }}
            >
              Elektroniczna Autoryzacja
              <br />
              Podróży do Kanady
            </h1>
            <p className="text-base md:text-xl mb-3 md:mb-4 leading-relaxed drop-shadow" style={{ color: "white" }}>
              Obywatele Polski podróżujący do Kanady drogą lotniczą potrzebują eTA.
              Rozpatrzenie wniosku trwa zazwyczaj kilka minut.
            </p>
            <p className="text-xs md:text-sm mb-6 md:mb-8 drop-shadow" style={{ color: "white" }}>
              Electronic Travel Authorization (eTA Canada) | Polska jest krajem objętym wymogiem
            </p>
            <div className="flex flex-col gap-3 items-center mt-2 w-full" style={{ maxWidth: "360px", margin: "0 auto" }}>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl border-2 border-white bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center"
                style={{ color: "white", textDecoration: "none", padding: "18px 24px" }}
              >
                <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Złóż wniosek eTA Kanada</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Red border line below hero */}
      <div className="h-1 bg-[#8d1812]" />

      {/* Key facts */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5" width="40" height="40" className="mx-auto mb-3"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p className="text-3xl md:text-4xl font-bold text-[#1F1A14]">CAD $7</p>
              <p className="text-sm text-gray-500 mt-2">Opłata za wniosek</p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5" width="40" height="40" className="mx-auto mb-3"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p className="text-3xl md:text-4xl font-bold text-[#1F1A14]">~5 min</p>
              <p className="text-sm text-gray-500 mt-2">
                Standardowy czas rozpatrywania
              </p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5" width="40" height="40" className="mx-auto mb-3"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18" strokeLinecap="round"/></svg>
              <p className="text-3xl md:text-4xl font-bold text-[#1F1A14]">5 lat</p>
              <p className="text-sm text-gray-500 mt-2">Okres ważności</p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5" width="40" height="40" className="mx-auto mb-3"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" strokeLinecap="round"/></svg>
              <p className="text-3xl md:text-4xl font-bold text-[#1F1A14]">6 miesięcy</p>
              <p className="text-sm text-gray-500 mt-2">Maks. pobyt w Kanadzie</p>
            </div>
          </div>
        </div>
      </section>

      {/* eTA Kanada overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#8B1A1A", color: "white" }}>
            Czym jest eTA Kanada?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            eTA Kanada (Electronic Travel Authorization) to elektroniczna autoryzacja
            podróży wprowadzona przez Immigration, Refugees and Citizenship Canada (IRCC).
            Obywatele Polski i innych krajów objętych ruchem bezwizowym muszą uzyskać eTA przed
            podróżą lotniczą do Kanady.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            eTA jest wymagana w przypadku wizyt turystycznych, biznesowych lub tranzytowych. Wniosek
            składany jest wyłącznie online, a po zatwierdzeniu jest ważna przez 5 lat
            (lub do wygaśnięcia paszportu).
          </p>
        </div>
      </section>

      {/* Application steps */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#8B1A1A", color: "white" }}>
            Jak złożyć wniosek eTA Kanada?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base md:text-lg font-bold text-[#1F1A14] pb-2 mb-3 border-b border-gray-300">
                  Wejdź na oficjalną stronę rządu Kanady
                </h3>
              <p className="text-gray-600 text-sm mt-2">
                  Wniosek o eTA składa się wyłącznie online na oficjalnej stronie
                  internetowej rządu Kanady.
                </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-[#1F1A14] pb-2 mb-3 border-b border-gray-300">
                  Przygotuj paszport i kartę kredytową
                </h3>
              <p className="text-gray-600 text-sm mt-2">
                  Będziesz potrzebować ważnego paszportu, karty kredytowej lub
                  debetowej oraz adresu e-mail.
                </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-[#1F1A14] pb-2 mb-3 border-b border-gray-300">
                  Wypełnij formularz i zapłać (CAD $7)
                </h3>
              <p className="text-gray-600 text-sm mt-2">
                  Podaj dane osobowe, informacje z paszportu i odpowiedz na kilka
                  prostych pytań. Dokonaj płatności online.
                </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-[#1F1A14] pb-2 mb-3 border-b border-gray-300">
                  Oczekuj na zatwierdzenie
                </h3>
              <p className="text-gray-600 text-sm mt-2">
                  Większość wniosków jest zatwierdzana w ciągu kilku minut.
                  Otrzymasz potwierdzenie na adres e-mail.
                </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/eta-info/application/"
              className="text-[#1F1A14] font-bold underline underline-offset-2 hover:text-[#0a3a6b] transition"
            >
              Szczegółowy przewodnik po procedurze &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#8B1A1A", color: "white" }}>
            Najczęściej zadawane pytania
          </h2>

          <div className="space-y-6">
            <details className="border-b border-gray-200 group" style={{ paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
              <summary className="flex justify-between items-center cursor-pointer text-[#1F1A14] list-none" style={{ fontWeight: 700, fontSize: "1.0625rem", lineHeight: "1.5" }}>
                <span>Czy Polacy potrzebują eTA do Kanady?</span>
                <span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Tak. Obywatele polscy podróżujący do Kanady drogą lotniczą muszą
                posiadać eTA. Dotyczy to wizyt turystycznych, biznesowych i
                tranzytowych. eTA nie jest wymagana przy wjeździe drogą lądową lub morską.
              </p>
            </details>

            <details className="border-b border-gray-200 group" style={{ paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
              <summary className="flex justify-between items-center cursor-pointer text-[#1F1A14] list-none" style={{ fontWeight: 700, fontSize: "1.0625rem", lineHeight: "1.5" }}>
                <span>Ile kosztuje eTA Kanada i jak długo jest ważna?</span>
                <span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Opłata za eTA Kanada wynosi CAD $7. Autoryzacja
                jest ważna przez 5 lat od daty wydania (lub do wygaśnięcia paszportu) i pozwala na wielokrotne
                wjazdy do Kanady, każdy trwający do 6 miesięcy.
              </p>
            </details>

            <details className="border-b border-gray-200 group" style={{ paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
              <summary className="flex justify-between items-center cursor-pointer text-[#1F1A14] list-none" style={{ fontWeight: 700, fontSize: "1.0625rem", lineHeight: "1.5" }}>
                <span>Jaka jest różnica między eTA a wizą do Kanady?</span>
                <span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                eTA to uproszczona autoryzacja elektroniczna do krótkich
                pobytów (do 6 miesięcy) dla obywateli krajów zwolnionych z obowiązku wizowego.
                Koszt to CAD $7, a wniosek składa się online. Wiza kanadyjska jest wymagana
                dla obywateli innych krajów lub do celów takich jak praca czy studia, a jej uzyskanie jest bardziej złożonym i kosztownym procesem.
              </p>
            </details>
          </div>

          <div className="mt-6">
            <Link
              href="/faq/"
              className="text-[#1F1A14] font-bold underline underline-offset-2 hover:text-[#0a3a6b] transition"
            >
              Zobacz wszystkie pytania FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#8B1A1A", color: "white" }}>
            Przydatne strony
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/eta-info/what-is-eta/",
                title: "Czym jest eTA Kanada?",
                desc: "Podstawowe informacje o systemie eTA",
              },
              {
                href: "/eta-info/application/",
                title: "Sposób składania wniosku",
                desc: "Krok po kroku przez formularz",
              },
              {
                href: "/eta-info/fee/",
                title: "Opłaty za eTA Kanada",
                desc: "Szczegóły dotyczące kosztów",
              },
              {
                href: "/eta-info/expiration/",
                title: "Okres ważności",
                desc: "Kiedy odnowić autoryzację eTA",
              },
              {
                href: "/eta-info/required-documents/",
                title: "Wymagane dokumenty",
                desc: "Co przygotować przed złożeniem wniosku",
              },
              {
                href: "/eta-info/official-gov-uk/",
                title: "Oficjalna strona rządu Kanady",
                desc: "Link do strony rządowej",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-4 border-b border-gray-200 hover:bg-gray-50 transition"
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-sm mb-1" style={{ color: "#333", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <p className="text-xs" style={{ color: "#666" }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B1A1A] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-noto-serif), serif",
              color: "white",
            }}
          >
            Zacznij procedurę składania wniosku eTA Kanada
          </h2>
          <p className="mb-8" style={{ color: "white" }}>
            Przygotuj paszport i złóż wniosek na oficjalnej stronie
            rządu Kanady.
          </p>
          <div style={{ maxWidth: "360px", margin: "0 auto" }}>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl border-2 border-white bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center"
              style={{ color: "white", textDecoration: "none", padding: "18px 24px" }}
            >
              <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Złóż wniosek eTA Kanada</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}