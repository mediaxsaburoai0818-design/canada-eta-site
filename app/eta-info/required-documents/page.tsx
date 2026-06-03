import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Wymagane dokumenty Canada eTA 2026 - paszport, karta platnicza",
  description:
    "Dokumenty wymagane do wniosku Canada eTA: wazny paszport biometryczny, dane karty platniczej, adres e-mail. Wymagania techniczne i lista pelna.",
};

export default function RequiredDocuments() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Wymagane dokumenty" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Wymagane dokumenty do wniosku eTA Kanada
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Aby zlozyc wniosek eTA Kanada, musisz przygotowac kilka dokumentow i
            informacji. Ponizej znajduje sie kompletna lista.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Dokumenty obowiazkowe</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#1F1A14] mb-2">1. Wazny paszport</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Musi byc wazny na czas planowanego wjazdu do Kanady</li>
                <li>eTA jest wazna do 5 lat lub do wygasniecia paszportu</li>
                <li>Paszport tymczasowy moze nie byc akceptowany</li>
                <li>eTA jest elektronicznie powiazana z konkretnym paszportem</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#1F1A14] mb-2">2. Dane osobowe i kontaktowe</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Imie i nazwisko, data urodzenia, obywatelstwo</li>
                <li>Numer paszportu, data wydania i waznosci</li>
                <li>Adres zamieszkania</li>
                <li>Informacje o zatrudnieniu (opcjonalnie)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#1F1A14] mb-2">3. Adres e-mail</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Aktywny adres e-mail do kontaktu</li>
                <li>Na ten adres otrzymasz potwierdzenie i decyzje</li>
                <li>Upewnij sie, ze masz dostep do skrzynki</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#1F1A14] mb-2">4. Metoda platnosci</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Karta kredytowa lub debetowa (Visa, Mastercard, American Express)</li>
                <li>Lub karta pre-paid Visa, Mastercard, Amex</li>
                <li>Oplata: CAD $7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Informacje wymagane w formularzu</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dane osobowe (imie, nazwisko, data urodzenia, miejsce urodzenia)</li>
            <li>Obywatelstwo i podwojne obywatelstwo (jesli dotyczy)</li>
            <li>Adres zamieszkania</li>
            <li>Informacje o zatrudnieniu</li>
            <li>Odpowiedzi na pytania dotyczace kwalifikowalnosci (np. historia imigracyjna, karalnosc)</li>
            <li>Dane lotu (jesli sa znane w momencie skladania wniosku)</li>
            <li>Odpowiedzi na pytania dotyczace zdrowia i historii podrozy</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Czego NIE potrzebujesz</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Zaproszenia od osoby w Kanadzie</li>
            <li>Rezerwacji hotelu (nie jest wymagana, ale moze byc przydatna)</li>
            <li>Biletu lotniczego (mozesz zlozyc wniosek przed zakupem biletu)</li>
            <li>Ubezpieczenia podroznego (zalecane, ale nie wymagane do eTA)</li>
            <li>Wizyty w ambasadzie lub centrum wizowym</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Dokumenty dla dzieci</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kazde dziecko podrozujace do Kanady musi posiadac wlasne
            eTA Kanada, niezaleznie od wieku. Wymagany jest odrebny, wazny paszport
            dziecka. Wniosek w imieniu dziecka musi zlozyc rodzic
            lub opiekun prawny.
          </p>
          <div className="bg-gray-50 border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-700">
            <strong>Wskazowka:</strong> Przed rozpoczeciem procesu upewnij sie,
            ze Twoj paszport jest wazny, masz dzialajacy adres e-mail i przygotowana metode platnosci.
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