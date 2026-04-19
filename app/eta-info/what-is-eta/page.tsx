import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Czym jest kanadyjska eTA? — Canada eTA Online",
  description: "Dowiedz się czym jest eTA (Electronic Travel Authorization) — elektroniczna autoryzacja podróży wymagana przez rząd Kanady od obywateli Polski.",
};

export default function WhatIsEtaPage() {
  return (
    <>
      <PageHero
        title="Czym jest kanadyjska eTA?"
        subtitle="Kompleksowy przewodnik po elektronicznej autoryzacji podróży do Kanady"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Czym jest eTA?" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
              <p className="text-gray-700 leading-relaxed m-0">
                <strong>eTA (Electronic Travel Authorization)</strong> to elektroniczna autoryzacja podróży, która jest wymagana od obywateli krajów zwolnionych z obowiązku wizowego — w tym Polski — przy podróży lotniczej do Kanady lub tranzycie przez terytorium Kanady.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Czym dokładnie jest eTA?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              eTA to system elektronicznej weryfikacji wprowadzony przez rząd Kanady w 2016 roku. Jest to obowiązkowy dokument dla podróżnych z krajów, których obywatele nie potrzebują wizy do wjazdu na terytorium Kanady, ale podróżują drogą lotniczą. eTA jest elektronicznie powiązana z paszportem podróżnego.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kto potrzebuje eTA?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              eTA jest wymagana od obywateli krajów zwolnionych z obowiązku wizowego, którzy podróżują do Kanady drogą lotniczą. Dotyczy to m.in.:
            </p>
            <ul className="space-y-2 mb-6">
              {["Obywateli Polski", "Obywateli krajów UE/EOG", "Obywateli Australii, Japonii, Korei Południowej", "Innych krajów objętych programem bezwizowym"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#8B0000] mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kiedy eTA NIE jest wymagana?
            </h2>
            <ul className="space-y-2 mb-6">
              {[
                "Przy wjeździe drogą lądową lub morską (np. z USA)",
                "Przez obywateli USA (wystarczy paszport lub dowód osobisty)",
                "Przez osoby posiadające ważną wizę kanadyjską",
                "Przez stałych rezydentów Kanady",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 mt-1">✗</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kluczowe informacje o eTA
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Koszt", value: "CAD $7 (ok. 22 PLN)" },
                { label: "Ważność", value: "5 lat lub do wygaśnięcia paszportu" },
                { label: "Czas przetwarzania", value: "Zazwyczaj kilka minut" },
                { label: "Maksymalny pobyt", value: "Do 6 miesięcy na wjazd" },
                { label: "Wjazdy", value: "Wielokrotne (multiple entry)" },
                { label: "Cel podróży", value: "Turystyka, biznes, tranzyt" },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFF5F5] p-4 rounded-lg border border-red-100">
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="font-bold text-[#1a1a1a]">{item.value}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              eTA a wiza — jaka jest różnica?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              eTA to uproszczona forma autoryzacji podróży, znacznie prostsza niż tradycyjna wiza. Nie wymaga wizyty w ambasadzie, rozmowy kwalifikacyjnej ani przedkładania obszernej dokumentacji. Cały proces odbywa się online i trwa zaledwie kilka minut. eTA jest przeznaczona wyłącznie dla obywateli krajów, z którymi Kanada ma umowy bezwizowe.
            </p>

            <div className="bg-[#8B0000] text-white p-6 rounded-xl mt-10">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Gotowy do złożenia wniosku?</h3>
              <p className="text-white/80 mb-4">Proces jest szybki i prosty. Dowiedz się jak krok po kroku złożyć wniosek o eTA.</p>
              <Link href="/eta-info/application/" className="inline-block bg-white text-[#8B0000] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors">
                Jak złożyć wniosek →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
