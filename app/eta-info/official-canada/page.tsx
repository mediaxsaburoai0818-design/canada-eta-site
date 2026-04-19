import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Oficjalna strona rządu Kanady — eTA — Canada eTA Online",
  description: "Oficjalne zasoby rządu Kanady dotyczące eTA. Linki do stron IRCC, ambasady Kanady w Warszawie i innych instytucji.",
};

export default function OfficialCanadaPage() {
  return (
    <>
      <PageHero
        title="Oficjalna strona rządu Kanady"
        subtitle="Oficjalne zasoby i linki dotyczące eTA"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Strona rządu Kanady" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              Wniosek o eTA do Kanady składa się wyłącznie na <strong>oficjalnej stronie rządu Kanady</strong>. Poniżej znajdziesz wszystkie ważne linki i informacje kontaktowe.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Oficjalna strona eTA
          </h2>
          <div className="bg-white border-2 border-[#8B0000] rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏛️</span>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Immigration, Refugees and Citizenship Canada (IRCC)</h3>
                <p className="text-gray-600 mb-3">Oficjalny serwis rządu Kanady do składania wniosków o eTA</p>
                <a
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#8B0000] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#6B0000] transition-colors"
                >
                  Odwiedź oficjalną stronę →
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Przydatne linki rządowe
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                title: "Wniosek o eTA online",
                url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html",
                desc: "Bezpośredni link do formularza wniosku o eTA",
              },
              {
                title: "Sprawdź status wniosku",
                url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html",
                desc: "Narzędzie do sprawdzania statusu złożonego wniosku",
              },
              {
                title: "Lista krajów objętych eTA",
                url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility.html",
                desc: "Sprawdź, czy Twój kraj kwalifikuje się do eTA",
              },
              {
                title: "Centrum pomocy IRCC",
                url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/help-centre.html",
                desc: "Odpowiedzi na najczęściej zadawane pytania",
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-[#8B0000]/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors mb-1">{link.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{link.desc}</p>
                <span className="text-xs text-[#8B0000]">{link.url}</span>
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ambasada Kanady w Polsce
          </h2>
          <div className="bg-[#FFF5F5] rounded-xl p-6 border border-red-100 mb-8">
            <h3 className="font-bold text-[#1a1a1a] mb-3">Ambasada Kanady w Warszawie</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Adres:</strong> ul. Jana Matejki 1/5, 00-481 Warszawa</p>
              <p><strong>Telefon:</strong> +48 22 584 31 00</p>
              <p><strong>Strona:</strong> <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] hover:underline">www.canada.ca</a></p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1a1a1a] mb-2">⚠️ Ostrzeżenie przed fałszywymi stronami</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              W internecie istnieje wiele nieoficjalnych stron, które oferują &quot;pomoc&quot; w złożeniu wniosku o eTA za opłatą znacznie wyższą niż oficjalne CAD $7. Zawsze upewnij się, że korzystasz z oficjalnej strony rządu Kanady (domena <strong>canada.ca</strong>).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Link href="/eta-info/application/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Jak złożyć wniosek →</h3>
              <p className="text-sm text-gray-500 mt-1">Przewodnik krok po kroku</p>
            </Link>
            <Link href="/faq/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">FAQ →</h3>
              <p className="text-sm text-gray-500 mt-1">Najczęściej zadawane pytania</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
