import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Opłata za eTA do Kanady — CAD $7 — Canada eTA Online",
  description: "Opłata za kanadyjską eTA wynosi CAD $7 (ok. 22 PLN). Dowiedz się o akceptowanych formach płatności i co jest wliczone w cenę.",
};

export default function FeePage() {
  return (
    <>
      <PageHero
        title="Opłata za eTA do Kanady"
        subtitle="CAD $7 — jedna z najniższych opłat za autoryzację podróży na świecie"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Opłaty" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-[#8B0000] rounded-2xl p-8 mb-10 text-center shadow-lg">
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Oficjalna opłata rządowa</div>
            <div className="text-5xl md:text-6xl font-bold text-[#8B0000] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              CAD $7
            </div>
            <div className="text-lg text-gray-600">
              Około <strong>22 złotych polskich</strong> (PLN)
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Kurs orientacyjny — rzeczywisty kurs może się różnić
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Co obejmuje opłata?
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "Rozpatrzenie wniosku o eTA",
              "Elektroniczna autoryzacja podróży ważna do 5 lat",
              "Wielokrotne wjazdy do Kanady w okresie ważności",
              "Powiadomienie e-mailowe o statusie wniosku",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#8B0000] mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Akceptowane formy płatności
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { name: "Visa", icon: "💳" },
              { name: "Mastercard", icon: "💳" },
              { name: "American Express", icon: "💳" },
            ].map((card, i) => (
              <div key={i} className="bg-[#FFF5F5] p-5 rounded-xl text-center border border-red-100">
                <span className="text-3xl block mb-2">{card.icon}</span>
                <span className="font-bold text-[#1a1a1a]">{card.name}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Porównanie kosztów z innymi autoryzacjami
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#8B0000] text-white">
                  <th className="px-4 py-3 text-left font-bold">Autoryzacja</th>
                  <th className="px-4 py-3 text-left font-bold">Kraj</th>
                  <th className="px-4 py-3 text-left font-bold">Koszt</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { auth: "eTA", country: "Kanada", cost: "CAD $7 (ok. 22 PLN)", highlight: true },
                  { auth: "ESTA", country: "USA", cost: "USD $21 (ok. 84 PLN)", highlight: false },
                  { auth: "ETA", country: "Australia", cost: "AUD $20 (ok. 52 PLN)", highlight: false },
                  { auth: "NZeTA", country: "Nowa Zelandia", cost: "NZD $17 (ok. 42 PLN)", highlight: false },
                  { auth: "ETIAS", country: "UE (planowane)", cost: "EUR 7 (ok. 30 PLN)", highlight: false },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${row.highlight ? "bg-[#FFF5F5] font-bold" : "bg-white"}`}>
                    <td className="px-4 py-3">{row.auth}</td>
                    <td className="px-4 py-3">{row.country}</td>
                    <td className="px-4 py-3">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#1a1a1a] mb-2">⚠️ Uwaga na nieoficjalne strony</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Oficjalna opłata za eTA wynosi <strong>CAD $7</strong>. Niektóre strony internetowe podszywające się pod oficjalne serwisy mogą pobierać znacznie wyższe opłaty za &quot;pomoc&quot; w wypełnieniu wniosku. Zawsze korzystaj z oficjalnej strony rządu Kanady.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Czy opłata jest zwracana?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Opłata za eTA jest <strong>bezzwrotna</strong>, niezależnie od wyniku rozpatrzenia wniosku. Nawet w przypadku odmowy wydania eTA, opłata nie podlega zwrotowi. Dlatego ważne jest, aby przed złożeniem wniosku upewnić się, że spełniasz wszystkie wymagania.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Link href="/eta-info/application/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Jak złożyć wniosek →</h3>
              <p className="text-sm text-gray-500 mt-1">Przewodnik krok po kroku</p>
            </Link>
            <Link href="/eta-info/required-documents/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Wymagane dokumenty →</h3>
              <p className="text-sm text-gray-500 mt-1">Lista potrzebnych dokumentów</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
