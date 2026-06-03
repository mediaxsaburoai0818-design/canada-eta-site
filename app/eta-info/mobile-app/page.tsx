import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Skladanie wniosku Canada eTA z telefonu 2026 - aplikacja i mobilna strona",
  description:
    "Jak zlozyc wniosek Canada eTA bezposrednio z telefonu - dostepne metody, oficjalna witryna mobilna i wymagania.",
};

export default function MobileApp() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Formularz online" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Formularz online eTA Kanada
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Rząd Kanady udostępnia oficjalny formularz online, który umożliwia
            składanie wniosków o eTA bezpośrednio przez stronę internetową.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Oficjalny formularz eTA Kanada</h2>
          <p className="text-gray-600 leading-relaxed">
            Formularz online eTA Kanada to jedyne oficjalne narzędzie udostępnione
            przez Immigration, Refugees and Citizenship Canada (IRCC) do składania
            wniosków o Electronic Travel Authorization (eTA Canada). Jest to jedyny
            akceptowany sposób składania wniosków.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Co przygotować przed złożeniem wniosku?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>Ważny paszport</strong> &mdash; z kraju objętego programem
              bezwizowym (w tym Polski).
            </li>
            <li>
              <strong>Adres e-mail</strong> &mdash; na który zostanie wysłane
              potwierdzenie eTA.
            </li>
            <li>
              <strong>Karta kredytowa lub debetowa</strong> &mdash; (Visa,
              Mastercard, American Express) do uiszczenia opłaty.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Kluczowe etapy wnioskowania online</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Wypełnienie danych osobowych i paszportowych</li>
            <li>Odpowiedź na pytania dotyczące podróży i bezpieczeństwa</li>
            <li>Sprawdzenie poprawności wprowadzonych danych</li>
            <li>Dokonanie bezpiecznej płatności online</li>
            <li>Otrzymanie potwierdzenia eTA na adres e-mail</li>
            <li>Możliwość sprawdzenia statusu wniosku online</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak złożyć wniosek online? Krok po kroku</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>Wejdź na oficjalną stronę rządu Kanady dotyczącą eTA</li>
            <li>Kliknij przycisk &quot;Złóż wniosek o eTA&quot; i przygotuj paszport</li>
            <li>Wypełnij dokładnie formularz danymi osobowymi i paszportowymi</li>
            <li>Odpowiedz na wszystkie pytania w formularzu</li>
            <li>Sprawdź wszystkie wprowadzone informacje przed kontynuacją</li>
            <li>Dokonaj płatności w wysokości CAD $7</li>
            <li>Wyślij wniosek i oczekuj na potwierdzenie e-mail (zwykle w ciągu kilku minut)</li>
          </ol>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Opłata i ważność eTA Kanada</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Opłata za złożenie wniosku o eTA Kanada wynosi CAD $7. Jest
            bezzwrotna i należy ją uiścić online za pomocą karty kredytowej lub
            debetowej.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>Ważność:</strong> eTA jest ważna przez 5 lat lub do
              wygaśnięcia ważności paszportu.
            </li>
            <li>
              <strong>Cel podróży:</strong> Uprawnia do wielokrotnych wjazdów
              turystycznych lub biznesowych.
            </li>
            <li>
              <strong>Maks. pobyt w Kanadzie:</strong> Do 6 miesięcy podczas jednej
              wizyty.
            </li>
            <li>
              <strong>Powiązanie z paszportem:</strong> eTA jest elektronicznie
              powiązana z Twoim paszportem.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Zalety składania wniosku online</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>Szybkość</strong> &mdash; proces zajmuje kilka minut, a
              decyzja zapada zazwyczaj natychmiast.
            </li>
            <li>
              <strong>Wygoda</strong> &mdash; wniosek można złożyć z dowolnego
              miejsca z dostępem do internetu.
            </li>
            <li>
              <strong>Niski koszt</strong> &mdash; opłata wynosi tylko CAD $7.
            </li>
            <li>
              <strong>Bezpieczeństwo</strong> &mdash; oficjalna strona rządowa
              zapewnia ochronę danych.
            </li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Uwaga:</strong> Upewnij się, że korzystasz wyłącznie z
            oficjalnej strony rządu Kanady. Unikaj nieoficjalnych pośredników,
            którzy pobierają znacznie wyższe opłaty. Oficjalna strona to jedyne
            bezpieczne miejsce do składania wniosku.
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/application/"
              className="bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Jak wypełnić wniosek &rarr;
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