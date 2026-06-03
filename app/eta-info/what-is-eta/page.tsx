import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Czym jest Canada eTA? Kompletny przewodnik 2026",
  description:
    "Canada eTA (Electronic Travel Authorization) to elektroniczna autoryzacja podrozy do Kanady. Procedura, oplata $7 CAD, waznosc do 5 lat, decyzja zwykle w kilka minut.",
};

export default function WhatIsEta() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Czym jest eTA Kanada?" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Czym jest eTA Kanada?
          </h1>
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
            alt="Kanada - Jezioro Moraine i panorama gór"
            className="w-full h-64 object-cover rounded mb-6"
          />
          <p className="text-gray-600 leading-relaxed">
            eTA Kanada (Electronic Travel Authorization (eTA Canada)) to elektroniczna autoryzacja
            podróży wprowadzona przez Immigration, Refugees and Citizenship Canada (IRCC).
            System ten wymaga od podróżnych z krajów objętych ruchem bezwizowym
            uzyskania cyfrowego zezwolenia przed podróżą lotniczą do Kanady.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Cel systemu eTA Kanada</h2>
          <p className="text-gray-600 leading-relaxed">
            System eTA Kanada został wprowadzony w celu wzmocnienia bezpieczeństwa
            granic Kanady. Pozwala władzom kanadyjskim na
            weryfikację podróżnych przed ich przybyciem, co usprawnia kontrolę
            graniczną i zwiększa bezpieczeństwo państwa. eTA jest obowiązkowa dla
            podróżnych z krajów objętych ruchem bezwizowym, w tym Polski,
            przybylających do Kanady drogą lotniczą.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kto musi posiadać eTA Kanada?</h2>
          <p className="text-gray-600 leading-relaxed">
            eTA Kanada jest wymagana od obywateli państw, które nie potrzebują wizy
            do krótkich pobytów w Kanadzie. Obejmuje to
            wszystkich obywateli UE, w tym Polski, podróżujących do Kanady
            drogą lotniczą.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kraje UE objęte wymogiem eTA Kanada</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {[
              "Polska", "Niemcy", "Francja", "Hiszpania", "Wlochy", "Holandia",
              "Belgia", "Austria", "Czechy", "Portugalia", "Szwecja", "Dania",
              "Finlandia", "Grecja", "Chorwacja", "Rumunia", "Bulgaria", "Wegry",
              "Slowacja", "Litwa", "Lotwa", "Estonia",
            ].map((country) => (
              <span
                key={country}
                className="bg-white border border-gray-200 rounded px-3 py-1.5 text-gray-700"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kluczowe cechy eTA Kanada</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Cel podróży: turystyka, biznes, odwiedziny rodziny/znajomych lub tranzyt</li>
            <li>Maksymalny pobyt: 6 miesięcy na każdy wjazd</li>
            <li>Ważność: 5 lat od daty wydania (lub do wygaśnięcia paszportu)</li>
            <li>Opłata: CAD $7</li>
            <li>Wielokrotne wjazdy w okresie ważności</li>
            <li>Wymagany paszport biometryczny</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">eTA Kanada a wiza &mdash; różnice</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-white">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">Kryterium</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">eTA Kanada</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">Wiza kanadyjska</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Koszt</td>
                  <td className="p-3 border-b border-gray-100">CAD $7</td>
                  <td className="p-3 border-b border-gray-100">od CAD $100</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Czas rozpatrywania</td>
                  <td className="p-3 border-b border-gray-100">Zazwyczaj kilka minut</td>
                  <td className="p-3 border-b border-gray-100">Tygodnie / miesiące</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Maksymalny pobyt</td>
                  <td className="p-3 border-b border-gray-100">6 miesięcy</td>
                  <td className="p-3 border-b border-gray-100">Zależy od typu</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Ważność</td>
                  <td className="p-3 border-b border-gray-100">5 lat</td>
                  <td className="p-3 border-b border-gray-100">Zależy od typu</td>
                </tr>
                <tr>
                  <td className="p-3">Wizyta w centrum wizowym</td>
                  <td className="p-3">Nie</td>
                  <td className="p-3">Tak</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-l-4 border-[#8B1A1A] p-4 rounded-r mt-6">
            <p className="text-sm text-gray-700">
              <strong>Ważne:</strong> eTA Kanada nie gwarantuje wjazdu do Kanady.
              Ostateczną decyzję o wjeździe podejmuje funkcjonariusz
              straży granicznej (Canada Border Services Agency - CBSA) po przybyciu.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/application/"
              className="bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Jak złożyć wniosek &rarr;
            </Link>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Złóż wniosek o eTA Kanada</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}