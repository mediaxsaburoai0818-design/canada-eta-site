import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Jak zlozyc wniosek Canada eTA 2026 - przewodnik krok po kroku",
  description:
    "Jak zlozyc wniosek o Canada eTA krok po kroku — od zgromadzenia dokumentow do zatwierdzenia. Najczesciej decyzja w kilka minut, czasem do 72 godzin.",
};

export default function Application() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Sposob skladania wniosku" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Sposob skladania wniosku eTA Kanada
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Wniosek o eTA Kanada mozna zlozyc wylacznie online przez oficjalna strone rzadu Kanady. Ponizej przedstawiamy szczegolowy przewodnik po calej procedurze.
          </p>
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80"
            alt="Paszport i dokumenty podrozne do Kanady"
            className="w-full h-56 object-cover rounded"
          />
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Przed rozpoczeciem &mdash; co przygotowac</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Paszport biometryczny (e-paszport) &mdash; wazny</li>
            <li>Komputer lub urzadzenie mobilne z dostepem do internetu</li>
            <li>Adres e-mail</li>
            <li>Karta platnicza (Visa, Mastercard, American Express)</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Krok 1: Wejdz na oficjalna strone rzadu Kanady</h2>
          <p className="text-gray-600 leading-relaxed">
            Proces skladania wniosku odbywa sie w calosci online. Wejdz na oficjalna strone internetowa{" "}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F1A14] underline"
            >
              Immigration, Refugees and Citizenship Canada (IRCC)
            </a>
            .
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Krok 2: Przygotuj dane z paszportu</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bedziesz musial recznie wprowadzic dane ze swojego paszportu, takie jak numer paszportu, date wydania i waznosci, imie, nazwisko i date urodzenia. Upewnij sie, ze wszystkie dane sa wprowadzone dokladnie tak, jak w paszporcie.
          </p>
          <div className="bg-white border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-600">
            <strong>Wskazowka:</strong> Dokladnie sprawdz wszystkie wprowadzone dane. Jakiekolwiek bledy moga spowodowac opoznienia lub odrzucenie wniosku.
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Krok 3: Wypelnij formularz wniosku</h2>
          <p className="text-gray-600 leading-relaxed">
            Wypelnij formularz online, podajac swoje dane osobowe, informacje kontaktowe oraz odpowiadajac na pytania dotyczace celu podrozy i historii imigracyjnej.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Krok 4: Odpowiedz na pytania bezpieczenstwa</h2>
          <p className="text-gray-600 leading-relaxed">
            Formularz zawiera kilka pytan weryfikacyjnych dotyczacych Twojej przeszlosci, np. karalnosci czy wczesniejszych odmow wjazdu do Kanady. Odpowiadaj na nie zgodnie z prawda.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Krok 5: Dokonaj platnosci (CAD $7)</h2>
          <p className="text-gray-600 leading-relaxed">
            Oplata za wniosek eTA wynosi CAD $7. Zaplac ja za pomoca karty kredytowej lub debetowej (Visa, Mastercard, American Express). Platnosc jest przetwarzana natychmiast.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Krok 6: Oczekuj na zatwierdzenie</h2>
          <p className="text-gray-600 leading-relaxed">
            Po zlozeniu wniosku i dokonaniu oplaty otrzymasz potwierdzenie na e-mail. Wiekszosc wnioskow jest zatwierdzana w ciagu kilku minut. W niektorych przypadkach weryfikacja moze potrwac kilka dni. Otrzymasz powiadomienie e-mail o decyzji.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Po zatwierdzeniu</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            eTA jest powiazana elektronicznie z Twoim paszportem &mdash; nie musisz drukowac zadnych dokumentow. Linie lotnicze i sluzby graniczne automatycznie weryfikuja Twoja eTA podczas odprawy.
          </p>
          <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm text-gray-600">
            <strong>Uwaga:</strong> Skladaj wniosek wylacznie na oficjalnej stronie rzadu Kanady{" "}
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              className="text-[#1F1A14] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              canada.ca
            </a>
            . Uwazaj na strony posrednikow, ktore pobieraja znacznie wyzsze oplaty za te sama usluge.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/fee/"
              className="bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Sprawdz oplaty &rarr;
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