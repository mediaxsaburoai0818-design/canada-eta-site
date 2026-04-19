import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Ważność eTA do Kanady — 5 lat — Canada eTA Online",
  description: "eTA do Kanady jest ważna przez 5 lat lub do wygaśnięcia paszportu. Dowiedz się o okresie ważności, odnowieniu i zasadach pobytu.",
};

export default function ExpirationPage() {
  return (
    <>
      <PageHero
        title="Ważność eTA do Kanady"
        subtitle="Wszystko o okresie ważności elektronicznej autoryzacji podróży"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Ważność eTA" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              eTA do Kanady jest ważna przez <strong>5 lat</strong> od daty wydania lub do momentu <strong>wygaśnięcia paszportu</strong> — w zależności od tego, co nastąpi wcześniej. W okresie ważności eTA możesz wielokrotnie wjeżdżać do Kanady.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kluczowe informacje o ważności
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "Maksymalny okres ważności", value: "5 lat", icon: "📅" },
              { label: "Maksymalny pobyt jednorazowy", value: "6 miesięcy", icon: "🏠" },
              { label: "Liczba wjazdów", value: "Nieograniczona", icon: "🔄" },
              { label: "Powiązanie", value: "Z konkretnym paszportem", icon: "🛂" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                <div className="font-bold text-lg text-[#1a1a1a]">{item.value}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kiedy eTA traci ważność?
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "Po upływie 5 lat od daty wydania",
              "Po wygaśnięciu paszportu, z którym eTA jest powiązana",
              "Gdy eTA zostanie anulowana przez władze kanadyjskie",
              "Gdy zmieniasz paszport na nowy (wymagana nowa eTA)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#8B0000] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Czy mogę przedłużyć eTA?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            eTA nie podlega przedłużeniu. Po wygaśnięciu musisz złożyć nowy wniosek i ponownie uiścić opłatę CAD $7. Proces jest identyczny jak przy pierwszym wniosku. Zalecamy złożenie nowego wniosku na kilka tygodni przed planowaną podróżą.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nowy paszport = nowa eTA
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              <strong>Ważne:</strong> eTA jest powiązana z konkretnym numerem paszportu. Jeśli uzyskasz nowy paszport (nawet jeśli Twoja eTA jest jeszcze ważna), musisz złożyć nowy wniosek o eTA powiązany z nowym paszportem. Stara eTA nie może zostać przeniesiona na nowy paszport.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Maksymalny czas pobytu
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mimo że eTA jest ważna przez 5 lat, każdy pobyt w Kanadzie jest ograniczony do <strong>maksymalnie 6 miesięcy</strong>. O dokładnym dozwolonym czasie pobytu decyduje funkcjonariusz straży granicznej przy wjeździe. Przekroczenie dozwolonego okresu pobytu może skutkować konsekwencjami imigracyjnymi.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Link href="/eta-info/application/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Jak złożyć wniosek →</h3>
              <p className="text-sm text-gray-500 mt-1">Przewodnik krok po kroku</p>
            </Link>
            <Link href="/eta-info/status-check/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Sprawdź status →</h3>
              <p className="text-sm text-gray-500 mt-1">Sprawdź status swojego wniosku</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
