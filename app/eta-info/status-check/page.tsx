import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sprawdzenie statusu Canada eTA 2026 - znaczenie statusow",
  description:
    "Sprawdz status wniosku Canada eTA: znaczenie statusow i typowy czas zatwierdzenia od kilku minut do 72 godzin.",
};

export default function StatusCheck() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Sprawdzenie statusu" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Sprawdzenie statusu wniosku eTA Kanada
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Po zlozeniu wniosku eTA Kanada mozesz w kazdej chwili sprawdzic jego status
            na oficjalnej stronie rządu Kanady.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Jak sprawdzic status?</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>
              Wejdz na oficjalna strone rzadu Kanady:{" "}
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html</a>
            </li>
            <li>Uzyj narzedzia do sprawdzania statusu, podajac numer wniosku i dane paszportowe</li>
            <li>Status wniosku zostanie wyswietlony na stronie</li>
          </ol>
          <p className="text-gray-600 mt-4">
            Otrzymasz rowniez powiadomienie e-mail, gdy status wniosku ulegnie zmianie.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Mozliwe statusy wniosku</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-green-700 mb-1">Approved (Zatwierdzony)</h3>
              <p className="text-sm text-gray-600">
                Wniosek zostal zatwierdzony. eTA jest elektronicznie powiazana z Twoim
                paszportem. Mozesz podrozowac do Kanady. Nie musisz
                drukowac zadnego dokumentu.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-yellow-600 mb-1">Pending (W trakcie rozpatrywania)</h3>
              <p className="text-sm text-gray-600">
                Wniosek jest nadal rozpatrywany. W niektórych przypadkach może być wymagane dostarczenie dodatkowych dokumentów. Sprawdzaj status i pocztę e-mail. Nie rezerwuj biletow lotniczych, dopoki nie otrzymasz
                zatwierdzenia.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-bold text-red-600 mb-1">Refused (Odrzucony)</h3>
              <p className="text-sm text-gray-600">
                Wniosek zostal odrzucony. Otrzymasz e-mail z informacja o
                przyczynach odmowy. Aby podróżować do Kanady, musisz ubiegać się o wizę turystyczną.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Co robic, jesli status to &quot;Pending&quot;?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Poczekaj do 72 godzin &mdash; wiekszosc wnioskow jest rozpatrywana w tym czasie</li>
            <li>Sprawdzaj status na stronie internetowej oraz swoj e-mail w poszukiwaniu prośby o dodatkowe informacje</li>
            <li>Nie skladaj nowego wniosku &mdash; to nie przyspieszy procesu</li>
            <li>W wyjatkowych przypadkach rozpatrzenie moze trwac dluzej, zwłaszcza jeśli wymagane są dodatkowe dokumenty</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Co robic w przypadku odrzucenia?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Przeczytaj uwaznie powody odmowy podane w e-mailu</li>
            <li>Nie ma formalnej procedury odwoławczej od decyzji w sprawie eTA</li>
            <li>Jesli chcesz podróżować do Kanady, musisz ubiegać się o wizę turystyczną (Visitor Visa)</li>
            <li>Skontaktuj sie z prawnikiem imigracyjnym w razie watpliwosci</li>
          </ul>
          <div className="bg-gray-50 border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Wskazowka:</strong> Zachowaj e-mail z potwierdzeniem
            zlozenia wniosku. Zawiera on numer referencyjny potrzebny do
            kontaktu z Immigration, Refugees and Citizenship Canada (IRCC).
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/expiration/"
              className="bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Okres waznosci eTA Kanada &rarr;
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