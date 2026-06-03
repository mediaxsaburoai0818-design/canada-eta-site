import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Oplata Canada eTA 2026 $7 CAD - sposoby platnosci i koszty",
  description:
    "Aktualna oplata Canada eTA 2026 wynosi $7 CAD. Jednorazowa platnosc, waznosc do 5 lat, bez ukrytych kosztow.",
};

export default function Fee() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Opłaty" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Opłaty za wniosek eTA Kanada
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Oficjalna opłata za złożenie wniosku eTA Kanada wynosi <strong>CAD $7</strong> (około 21 PLN).
            Poniżej przedstawiamy szczegółowe informacje o kosztach i metodach płatności.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Struktura opłaty</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">Składnik</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">Kwota</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">Opis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Opłata za wniosek eTA</td>
                  <td className="p-3 border-b border-gray-100">CAD $7</td>
                  <td className="p-3 border-b border-gray-100">Opłata za rozpatrzenie i wydanie autoryzacji</td>
                </tr>
                <tr className="font-bold">
                  <td className="p-3">Razem</td>
                  <td className="p-3">CAD $7</td>
                  <td className="p-3">Całkowita opłata za wniosek</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm mt-4 text-gray-700">
            <strong>Uwaga:</strong> Opłata CAD $7 jest pobierana w momencie
            składania wniosku i nie podlega zwrotowi, nawet jeśli wniosek
            zostanie odrzucony.
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Przeliczenie na złotówki</h2>
          <p className="text-gray-600 leading-relaxed">
            CAD $7 to około 21 PLN (w zależności od aktualnego kursu wymiany).
            Dokładna kwota w PLN zależy od kursu stosowanego przez bank
            wydający kartę płatniczą. Może zostać naliczona dodatkowa prowizja
            za transakcję walutową.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Akceptowane metody płatności</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Karta kredytowa Visa</li>
            <li>Karta kredytowa Mastercard</li>
            <li>Karta kredytowa American Express</li>
            <li>Karta debetowa (z logo Visa, Mastercard, Amex)</li>
            <li>Karty pre-paid (Visa, Mastercard, American Express)</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czy eTA jest darmowa dla niektórych osób?</h2>
          <p className="text-gray-600 leading-relaxed">
            Nie. Opłata CAD $7 dotyczy wszystkich wnioskodawców, niezależnie
            od obywatelstwa. Nie ma zwolnień z opłaty. Dzieci również muszą
            posiadać własne eTA i uiścić odrębną opłatę.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Porównanie kosztów: oficjalna strona vs pośrednicy</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">Źródło</th>
                  <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1F1A14]">Koszt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Oficjalna strona Rządu Kanady (Canada.ca)</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-green-700">CAD $7</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Strony pośredników</td>
                  <td className="p-3 border-b border-gray-100 text-red-600">CAD $50 &mdash; CAD $150+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm mt-4 text-gray-600">
            <strong>Ostrzeżenie:</strong> Wielu pośredników prowadzi strony
            internetowe, które wyglądają jak oficjalne strony eTA Kanada. Pobierają
            zawyżone opłaty za tę samą usługę. Zawsze składaj wniosek
            bezpośrednio na oficjalnej stronie Rządu Kanady:{" "}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              className="text-[#1F1A14] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada.ca
            </a>.
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
              Jak złożyć wniosek &rarr;
            </Link>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
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