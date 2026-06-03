import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Regulamin - eTA Kanada Online",
  description: "Regulamin korzystania z serwisu eTA Kanada Online. Warunki uzytkowania strony.",
};

export default function Agreement() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o stronie", href: "/site-info/about/" },
              { label: "Regulamin" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Regulamin
          </h1>
          <p className="text-sm text-gray-500">Ostatnia aktualizacja: kwiecien 2026</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">1. Postanowienia ogolne</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Niniejszy regulamin okresla zasady korzystania z serwisu eTA Kanada Online.
            Korzystajac z serwisu, uzytkownik akceptuje ponizsze warunki.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">2. Charakter serwisu</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            eTA Kanada Online jest serwisem informacyjnym. Nie jest oficjalna strona
            Immigration, Refugees and Citizenship Canada (IRCC) ani zadnej agencji rzadowej. Informacje
            zawarte w serwisie maja charakter wylacznie informacyjny i nie
            stanowia porady prawnej ani imigracyjnej.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">3. Uslugi</h2>
          <p className="text-gray-600 text-sm mb-3">Serwis swiadczy nastepujace uslugi:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>Informacje o systemie eTA Kanada</li>
            <li>Przewodniki dotyczace procedury skladania wniosku</li>
            <li>Odpowiedzi na czesto zadawane pytania</li>
            <li>Informacje o polskiej spolecznosci w Kanadzie</li>
            <li>Formularz kontaktowy do zapytan</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">4. Odpowiedzialnosc</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Operator serwisu doklada starannosci w celu zapewnienia aktualnosci i
            prawidlowosci informacji, jednak nie ponosi odpowiedzialnosci za
            ewentualne bledy, nieaktualnosc danych lub szkody wynikajace z
            korzystania z serwisu. Uzytkownik powinien zawsze weryfikowac
            informacje na oficjalnej stronie https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">5. Prawa autorskie</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Tresc serwisu, w tym teksty, grafiki i uklad strony, jest chroniona
            prawem autorskim. Kopiowanie, rozpowszechnianie lub wykorzystywanie
            tresci bez zgody operatora jest zabronione.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">6. Linki zewnetrzne</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Serwis moze zawierac linki do stron zewnetrznych. Operator nie ponosi
            odpowiedzialnosci za tresc i polityki prywatnosci stron zewnetrznych.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">7. Zmiany regulaminu</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Operator zastrzega sobie prawo do zmiany regulaminu w kazdym czasie.
            Zmiany wchodza w zycie z chwila publikacji na stronie.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">8. Kontakt</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            W sprawach dotyczacych regulaminu prosimy o kontakt poprzez{" "}
            <Link href="/site-info/contact/" className="text-[#1F1A14] underline">
              formularz kontaktowy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}