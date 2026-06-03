import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Oficjalna strona Canada eTA - jak rozpoznac falszywe witryny",
  description:
    "Oficjalna strona to canada.ca/eTA. Jak rozpoznac falszywe witryny i unikac oszustw z dodatkowymi oplatami.",
};

export default function OfficialGovUK() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Oficjalna strona Rządu Kanady" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Oficjalna strona Rządu Kanady do składania wniosków eTA Kanada
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Wnioski eTA Kanada można składać wyłącznie na oficjalnej stronie rządu Kanady. Nie istnieje oficjalna aplikacja mobilna.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Oficjalny adres strony</h2>
          <div className="bg-white border border-gray-200 rounded p-6 text-center">
            <p className="text-sm text-gray-500 mb-2">Oficjalna strona eTA Kanada:</p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-[#1F1A14] underline break-all"
            >
              www.canada.ca/eta
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Domena .canada.ca lub .gc.ca oznacza oficjalną stronę rządu Kanady
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak rozpoznac oficjalna strone?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Adres URL zawiera <strong>canada.ca</strong> lub <strong>gc.ca</strong> (domeny rządowe Kanady)</li>
            <li>Strona jest obsługiwana przez Immigration, Refugees and Citizenship Canada (IRCC)</li>
            <li>Opłata wynosi dokładnie CAD $7</li>
            <li>Strona ma charakterystyczny design rządowych stron kanadyjskich (z motywem liścia klonu)</li>
            <li>Nie wymaga opłaty za &quot;przyspieszenie&quot; rozpatrywania</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak rozpoznac falszywa strone?</h2>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-600">
            <p className="font-bold mb-2">Znaki ostrzegawcze:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Adres URL nie zawiera canada.ca ani gc.ca</li>
              <li>Opłata znacznie wyższa niż CAD $7</li>
              <li>Obietnica &quot;gwarantowanego zatwierdzenia&quot;</li>
              <li>Oferta &quot;przyspieszonego rozpatrywania&quot;</li>
              <li>Agresywna reklama lub natrętne pop-upy</li>
              <li>Brak oficjalnego logo Rządu Kanady</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czy istnieje aplikacja mobilna?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nie, wniosek eTA Kanada można złożyć <strong>wyłącznie</strong> przez oficjalną stronę internetową Rządu Kanady. Nie istnieje żadna oficjalna aplikacja mobilna do składania wniosków eTA.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Wszelkie aplikacje w App Store lub Google Play podające się za oficjalne aplikacje eTA Kanada są fałszywe.</li>
            <li>Korzystanie z takich aplikacji może prowadzić do utraty pieniędzy i kradzieży danych osobowych.</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Inne przydatne strony rzadowe</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">Sprawdź wymagania wjazdowe do Kanady</a> &mdash; Oficjalne narzędzie do sprawdzania wymagań wizowych
            </li>
            <li>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/visitor-visa.html" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">Informacje o wizie turystycznej do Kanady</a> &mdash; Dla osób, które nie kwalifikują się do eTA
            </li>
            <li>
              <a href="https://www.gov.pl/web/kanada" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">gov.pl/web/kanada</a> &mdash; Ambasada RP w Ottawie
            </li>
            <li>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/international-visa-offices/warsaw.html" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">Ambasada Kanady w Warszawie</a>
            </li>
          </ul>
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
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Złóż wniosek eTA Kanada</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}