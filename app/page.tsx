import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-canada.png"
            alt="Parlament Kanady w Ottawie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
               Elektroniczna Autoryzacja Podrozy do Kanady
            </span>
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Canada eTA — Twoj klucz do podrozy po Kanadzie
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Obywatele Polski moga ubiegac sie o elektroniczna autoryzacje podrozy (eTA) do Kanady. Szybko, prosto i online.
            </p>
            <div style={{ maxWidth: "360px", margin: "0 auto" }}>
              <Link
                href="/eta-info/application/"
                className="block w-full rounded text-center transition shadow-lg"
                style={{ color: "white", textDecoration: "none", padding: "18px 24px", backgroundColor: "#8B0000" }}
              >
                <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Zloz wniosek eTA</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="bg-white py-0 -mt-12 relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "CAD $7", label: "Opłata za eTA", icon: "" },
              { value: "Kilka minut", label: "Czas rozpatrzenia", icon: "" },
              { value: "5 lat", label: "Okres ważności", icon: "" },
              { value: "6 miesięcy", label: "Maksymalny pobyt", icon: "" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-xl p-6 text-center border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <div className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is eTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Czym jest kanadyjska eTA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              eTA (Electronic Travel Authorization) to elektroniczny dokument wymagany od obywateli krajów zwolnionych z obowiązku wizowego, w tym Polski, przy podróży lotniczej do Kanady.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Szybki proces",
                desc: "Wniosek o eTA wypełnisz online w kilka minut. Większość autoryzacji jest wydawana niemal natychmiast.",
                icon: "",
              },
              {
                title: "Niski koszt",
                desc: "Opłata za eTA wynosi zaledwie CAD $7 (ok. 22 PLN). Płatność kartą kredytową lub debetową.",
                icon: "",
              },
              {
                title: "Długa ważność",
                desc: "eTA jest ważna przez 5 lat lub do wygaśnięcia paszportu — w zależności co nastąpi wcześniej.",
                icon: "",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#FFF5F5] rounded-xl p-6 border border-red-50 hover:border-[#8B0000]/20 transition-colors"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 md:py-20 bg-[#FFF5F5]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Jak złożyć wniosek o eTA?
            </h2>
            <p className="text-lg text-gray-600">
              Prosty proces w 3 krokach
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Przygotuj dokumenty",
                desc: "Potrzebujesz ważnego polskiego paszportu, adresu e-mail oraz karty kredytowej lub debetowej do opłacenia wniosku.",
              },
              {
                step: "02",
                title: "Wypełnij formularz online",
                desc: "Wejdź na oficjalną stronę rządu Kanady i wypełnij formularz wniosku o eTA. Proces zajmuje kilka minut.",
              },
              {
                step: "03",
                title: "Otrzymaj eTA",
                desc: "Po zatwierdzeniu otrzymasz potwierdzenie na e-mail. eTA jest elektronicznie powiązana z Twoim paszportem.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#8B0000] text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/eta-info/application/"
              className="inline-block bg-[#8B0000] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#6B0000] transition-colors shadow-lg"
            >
              Szczegóły procesu aplikacyjnego
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Najczęściej zadawane pytania
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Czy obywatele Polski potrzebują eTA do Kanady?",
                a: "Tak, obywatele Polski lecący do Kanady muszą posiadać ważną eTA. Dotyczy to lotów bezpośrednich oraz z przesiadką na terytorium Kanady.",
              },
              {
                q: "Ile kosztuje eTA?",
                a: "Opłata za eTA wynosi CAD $7 (około 22 złotych polskich). Płatność dokonywana jest online kartą kredytową lub debetową.",
              },
              {
                q: "Jak długo jest ważna eTA?",
                a: "eTA jest ważna przez 5 lat od daty wydania lub do momentu wygaśnięcia paszportu — w zależności co nastąpi wcześniej.",
              },
              {
                q: "Jak długo mogę przebywać w Kanadzie z eTA?",
                a: "Z eTA możesz przebywać w Kanadzie do 6 miesięcy w ramach jednego wjazdu. O dokładnym okresie pobytu decyduje funkcjonariusz na granicy.",
              },
              {
                q: "Czy potrzebuję eTA do tranzytu przez Kanadę?",
                a: "Tak, nawet jeśli tylko przelatujesz przez Kanadę (np. z przesiadką), potrzebujesz ważnej eTA.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-[#FFF5F5] rounded-xl border border-red-100 overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-4 flex justify-between items-center font-bold text-[#1a1a1a] hover:text-[#8B0000] transition-colors">
                  {item.q}
                  <span className="text-[#8B0000] text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq/" className="text-[#8B0000] font-bold hover:underline">
              Zobacz wszystkie pytania →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 md:py-20 bg-[#FFF5F5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Powiązane informacje
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Czym jest eTA?", desc: "Poznaj szczegóły dotyczące elektronicznej autoryzacji podróży do Kanady.", href: "/eta-info/what-is-eta/", icon: "" },
              { title: "Wymagane dokumenty", desc: "Lista dokumentów potrzebnych do złożenia wniosku o eTA.", href: "/eta-info/required-documents/", icon: "" },
              { title: "Sprawdź status wniosku", desc: "Dowiedz się jak sprawdzić aktualny status Twojego wniosku.", href: "/eta-info/status-check/", icon: "" },
              { title: "Tranzyt przez Kanadę", desc: "Informacje o wymaganiach eTA przy przesiadkach w Kanadzie.", href: "/eta-info/transit/", icon: "" },
              { title: "Strona rządu Kanady", desc: "Link do oficjalnej strony kanadyjskiego rządu dot. eTA.", href: "/eta-info/official-canada/", icon: "" },
              { title: "Polonia w Kanadzie", desc: "Informacje o polskiej społeczności w Kanadzie — ok. 1,2 mln osób.", href: "/eta-info/polish-community/", icon: "" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-red-50 group"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#8B0000] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#8B0000] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Zaplanuj swoją podróż do Kanady
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Proces uzyskania eTA jest szybki i prosty. Złóż wniosek online i otrzymaj autoryzację w kilka minut.
          </p>
          <Link
            href="/eta-info/application/"
            className="inline-block bg-white text-[#8B0000] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Sprawdź jak złożyć wniosek
          </Link>
        </div>
      </section>
    </>
  );
}
