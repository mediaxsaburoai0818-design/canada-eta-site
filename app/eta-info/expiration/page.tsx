import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Waznosc Canada eTA 2026 - do 5 lat i wielokrotne wjazdy",
  description:
    "Canada eTA jest wazna do 5 lat lub do wygasniecia paszportu. Mozliwe wielokrotne wjazdy do Kanady, kazdy do 6 miesiecy.",
};

export default function Expiration() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Okres ważności" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Okres ważności eTA Kanada
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Autoryzacja eTA Kanada jest ważna przez <strong>5 lat</strong> od daty
            wydania lub do momentu wygaśnięcia paszportu &mdash; w zależności
            od tego, co nastąpi wcześniej.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zasady ważności</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Ważna przez 5 lat od daty wydania</li>
            <li>Wygasa wraz z paszportem (jeśli paszport wygasa wcześniej)</li>
            <li>Pozwala na wielokrotne wjazdy do Kanady w okresie ważności</li>
            <li>Każdy pobyt nie może przekraczać 6 miesięcy</li>
            <li>eTA jest powiązana z konkretnym paszportem</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kiedy należy złożyć nowy wniosek?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nowy wniosek o eTA Kanada należy złożyć w następujących przypadkach:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Po upływie 5 lat od wydania eTA</li>
            <li>Po uzyskaniu nowego paszportu</li>
            <li>Po zmianie nazwiska</li>
            <li>Po zmianie obywatelstwa</li>
            <li>Po zmianie płci</li>
            <li>Po zmianie okoliczności wpływających na kwalifikowalność</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czy mogę podróżować z wygasającą eTA?</h2>
          <p className="text-gray-600 leading-relaxed">
            eTA Kanada musi być ważna w momencie wjazdu do Kanady. Nie
            musi być ważna przez cały okres pobytu &mdash; ważne jest, aby była
            ważna w dniu przyjazdu. Zaleca się jednak złożenie nowego wniosku
            z odpowiednim wyprzedzeniem.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak sprawdzić datę ważności?</h2>
          <p className="text-gray-600 leading-relaxed">
            Datę ważności eTA Kanada można sprawdzić online na oficjalnej stronie Immigration, Refugees and Citizenship Canada (IRCC), używając numeru eTA oraz danych paszportowych.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Co jeśli zmienię paszport w trakcie ważności eTA?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            eTA jest powiązana z konkretnym paszportem. Jeśli uzyskasz nowy
            paszport (np. po wygaśnięciu starego, zmianie nazwiska), musisz
            złożyć nowy wniosek o eTA i uiścić ponownie opłatę CAD $7. Stara
            eTA przestaje być ważna.
          </p>
          <div className="bg-white border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-700">
            <strong>Wskazówka:</strong> Zaleca się złożenie wniosku o eTA Kanada z odpowiednim wyprzedzeniem. Większość wniosków jest zatwierdzana w ciągu kilku minut, ale niektóre mogą wymagać dłuższego czasu na rozpatrzenie.
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/status-check/"
              className="bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Sprawdź status wniosku &rarr;
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