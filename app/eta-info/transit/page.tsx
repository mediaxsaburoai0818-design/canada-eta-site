import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tranzyt przez Kanade - czy potrzebujesz Canada eTA 2026?",
  description:
    "Czy Canada eTA jest wymagana podczas tranzytu przez Kanade lotem? Zasady dotyczace przesiadek i sytuacji wymagajacych autoryzacji.",
};

export default function Transit() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Tranzyt przez Kanade" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Tranzyt przez Kanade &mdash; czy potrzebuje eTA Kanada?
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Tak, eTA Kanada jest wymagana rowniez w przypadku tranzytu przez
            Kanade, nawet jesli nie opuszczasz strefy tranzytu na lotnisku.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zasady tranzytu</h2>
          <p className="text-gray-600 leading-relaxed">
            Obywatele Polski potrzebuja eTA Kanada do tranzytu przez Kanade.
            Dotyczy to zarowno tranzytu lotniczego (airside transit), jak i
            tranzytu ladowego (landside transit).
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Rodzaje tranzytu</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#1F1A14] mb-2">Tranzyt lotniczy (Airside Transit)</h3>
              <p className="text-sm text-gray-600">
                Przesiadka na lotnisku bez opuszczania strefy miedzynarodowej.
                eTA Kanada jest wymagana. Dotyczy to np. przesiadki w Toronto
                w drodze do USA.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-[#1F1A14] mb-2">Tranzyt ladowy (Landside Transit)</h3>
              <p className="text-sm text-gray-600">
                Opuszczenie strefy tranzytu, np. aby przejsc miedzy terminalami,
                odebrac bagaz lub spedzic noc w hotelu. eTA Kanada jest wymagana.
                Wjezdzasz formalnie do Kanady.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Popularne trasy tranzytowe przez Kanade</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Warszawa &rarr; Toronto (Pearson) &rarr; Nowy Jork</li>
            <li>Krakow &rarr; Montreal (Trudeau) &rarr; Chicago</li>
            <li>Paryż &rarr; Vancouver (International) &rarr; Los Angeles</li>
            <li>Frankfurt &rarr; Calgary (International) &rarr; San Francisco</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Na wszystkich tych trasach wymagana jest eTA Kanada, nawet jesli pobyt
            na lotnisku trwa tylko kilka godzin.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wyjatki od wymogu eTA przy tranzycie</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Istnieja nieliczne wyjatki od wymogu posiadania eTA przy tranzycie:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Obywatele Stanów Zjednoczonych (USA)</li>
            <li>Posiadacze ważnej wizy kanadyjskiej</li>
            <li>Posiadacze statusu stałego rezydenta Kanady (Permanent Resident Card)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak uniknac koniecznosci posiadania eTA na tranzyt?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jesli nie chcesz skladac wniosku o eTA Kanada, mozesz wybrac trasy,
            ktore nie prowadza przez Kanade. Na przyklad:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Loty bezpośrednie z Europy do USA</li>
            <li>Przesiadki w krajach UE (np. Amsterdam, Frankfurt, Paryż)</li>
            <li>Przesiadki w Meksyku lub innych krajach Ameryki Łacińskiej</li>
          </ul>
          <div className="bg-white border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Wskazowka:</strong> Jesli planujesz lot z przesiadka w
            Kanadzie, zloz wniosek o eTA Kanada co najmniej 72 godziny przed
            wylotem. Brak eTA moze spowodowac odmowe wejscia na poklad samolotu.
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/application/"
              className="bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Jak zlozyc wniosek &rarr;
            </Link>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Zloz wniosek eTA Kanada</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}