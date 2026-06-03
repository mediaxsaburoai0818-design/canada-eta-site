import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "O nas - eTA Kanada Online",
  description: "Informacje o serwisie eTA Kanada Online. Kim jestesmy i jaki jest cel naszej strony.",
};

export default function About() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o stronie", href: "/site-info/about/" },
              { label: "O nas" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            O nas
          </h1>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Cel serwisu</h2>
          <p className="text-gray-600 leading-relaxed">
            eTA Kanada Online to serwis informacyjny poswiecony Electronic Travel Authorization (eTA Canada) do Kanady. Naszym celem jest
            dostarczanie rzetelnych, aktualnych i przydatnych informacji w jezyku
            polskim na temat nowego systemu autoryzacji podrozy.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czym sie zajmujemy?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dostarczamy kompletne informacje o systemie eTA Kanada w jezyku polskim</li>
            <li>Wyjasniamy procedure skladania wniosku krok po kroku</li>
            <li>Odpowiadamy na najczesciej zadawane pytania dotyczace podrozy do Kanady</li>
            <li>Ostrzegamy przed falszywymi stronami i oszustwami zwiazanymi z eTA</li>
            <li>Informujemy o zmianach w przepisach dotyczacych podrozy do Kanady</li>
            <li>Dostarczamy informacje dla polskiej spolecznosci w Kanadzie</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Wazne zastrzezenie</h2>
          <div className="bg-white border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-700">
            <p>
              eTA Kanada Online nie jest oficjalna strona rzadu Kanady.
              Nie jestesmy powiazani z Immigration, Refugees and Citizenship Canada (IRCC)
              ani zadna inna agencja rzadowa Kanady. Oficjalna strona do skladania
              wnioskow eTA Kanada to{" "}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
                className="text-[#1F1A14] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Informacje o operatorze</h2>
          <div className="border border-gray-200 rounded p-4 text-sm text-gray-600">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Nazwa serwisu:</td>
                  <td className="py-2">eTA Kanada Online</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Typ:</td>
                  <td className="py-2">Serwis informacyjny</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Jezyk:</td>
                  <td className="py-2">Polski</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-gray-500 font-medium">Kontakt:</td>
                  <td className="py-2">
                    <Link href="/site-info/contact/" className="text-[#1F1A14] underline">
                      Formularz kontaktowy
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}