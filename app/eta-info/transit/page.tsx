import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tranzyt przez Kanadę — eTA — Canada eTA Online",
  description: "Czy potrzebujesz eTA do tranzytu przez Kanadę? Informacje o wymaganiach eTA przy przesiadkach w kanadyjskich portach lotniczych.",
};

export default function TransitPage() {
  return (
    <>
      <PageHero
        title="Tranzyt przez Kanadę"
        subtitle="Wymagania dotyczące eTA przy przesiadkach w Kanadzie"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Tranzyt" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              <strong>Tak, eTA jest wymagana również podczas tranzytu przez Kanadę.</strong> Nawet jeśli nie planujesz opuszczać lotniska, musisz posiadać ważną eTA, aby przelecieć przez terytorium Kanady.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kiedy eTA jest wymagana przy tranzycie?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            eTA jest wymagana w następujących sytuacjach tranzytowych:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Przesiadka na kanadyjskim lotnisku (np. Toronto Pearson, Vancouver, Montreal)",
              "Lot z przystankiem technicznym w Kanadzie",
              "Zmiana samolotu na lotnisku w Kanadzie",
              "Nawet krótki postój w kanadyjskim porcie lotniczym",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#8B0000] mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Program China Transit Program (CTP)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kanada oferuje specjalny program tranzytowy dla obywateli niektórych krajów, ale <strong>dla obywateli Polski ten program nie ma zastosowania</strong> — obywatele Polski muszą posiadać standardową eTA do tranzytu.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Popularne trasy tranzytowe przez Kanadę
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { route: "Europa → Kanada → USA", hub: "Toronto (YYZ), Montreal (YUL)" },
              { route: "Europa → Kanada → Meksyk", hub: "Toronto (YYZ)" },
              { route: "Europa → Kanada → Karaiby", hub: "Toronto (YYZ), Montreal (YUL)" },
              { route: "Europa → Kanada → Azja", hub: "Vancouver (YVR)" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FFF5F5] p-4 rounded-xl border border-red-100">
                <div className="font-bold text-[#1a1a1a] mb-1">{item.route}</div>
                <div className="text-sm text-gray-500">Hub: {item.hub}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ważne informacje o tranzycie
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <ul className="space-y-3">
              {[
                "Złóż wniosek o eTA przed zakupem biletu z przesiadką w Kanadzie",
                "eTA tranzytowa ma taki sam koszt jak standardowa — CAD $7",
                "Czas tranzytu nie wpływa na wymaganie eTA — nawet krótki postój wymaga eTA",
                "Bez ważnej eTA linia lotnicza może odmówić Ci wejścia na pokład",
                "eTA tranzytowa jest taka sama jak eTA turystyczna — jedna eTA obejmuje oba cele",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="text-yellow-600 mt-0.5">⚠️</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wyjątki od wymogu eTA przy tranzycie
          </h2>
          <ul className="space-y-2 mb-6">
            {[
              "Obywatele USA nie potrzebują eTA",
              "Osoby posiadające ważną wizę kanadyjską",
              "Stali rezydenci Kanady",
              "Osoby podróżujące drogą lądową lub morską",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-gray-400 mt-1">✗</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Link href="/eta-info/application/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Jak złożyć wniosek →</h3>
              <p className="text-sm text-gray-500 mt-1">Przewodnik krok po kroku</p>
            </Link>
            <Link href="/eta-info/what-is-eta/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Czym jest eTA? →</h3>
              <p className="text-sm text-gray-500 mt-1">Podstawowe informacje</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
