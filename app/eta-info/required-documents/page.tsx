import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Wymagane dokumenty do eTA Kanada — Canada eTA Online",
  description: "Lista dokumentów wymaganych do złożenia wniosku o eTA do Kanady. Paszport, dane osobowe, informacje o podróży.",
};

export default function RequiredDocumentsPage() {
  return (
    <>
      <PageHero
        title="Wymagane dokumenty"
        subtitle="Co potrzebujesz do złożenia wniosku o eTA do Kanady"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Wymagane dokumenty" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              Wniosek o eTA wymaga stosunkowo niewielkiej ilości dokumentów. Najważniejszy jest ważny paszport. Poniżej znajdziesz pełną listę wymaganych informacji i dokumentów.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Dokumenty obowiązkowe
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                icon: "🛂",
                title: "Ważny paszport biometryczny",
                details: [
                  "Paszport musi być ważny przez cały planowany okres pobytu",
                  "Paszport musi być wydany przez kraj objęty programem bezwizowym (w tym Polska)",
                  "Numer paszportu, data wydania i data ważności są wymagane",
                  "Imię i nazwisko muszą być podane zgodnie z paszportem",
                ],
              },
              {
                icon: "📧",
                title: "Aktywny adres e-mail",
                details: [
                  "Na ten adres otrzymasz potwierdzenie i status wniosku",
                  "Sprawdź poprawność — błędny adres może uniemożliwić otrzymanie eTA",
                  "Sprawdzaj również folder spam",
                ],
              },
              {
                icon: "💳",
                title: "Karta płatnicza",
                details: [
                  "Visa, Mastercard lub American Express",
                  "Karta kredytowa lub debetowa z funkcją płatności online",
                  "Opłata wynosi CAD $7",
                ],
              },
            ].map((doc, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{doc.icon}</span>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{doc.title}</h3>
                </div>
                <ul className="space-y-2 ml-12">
                  {doc.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#8B0000] mt-0.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Informacje wymagane w formularzu
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: "Dane osobowe", items: ["Imię i nazwisko", "Data urodzenia", "Miejsce urodzenia", "Obywatelstwo", "Stan cywilny"] },
              { title: "Dane paszportowe", items: ["Numer paszportu", "Kraj wydania", "Data wydania", "Data ważności"] },
              { title: "Dane kontaktowe", items: ["Adres zamieszkania", "Adres e-mail", "Numer telefonu"] },
              { title: "Informacje o podróży", items: ["Cel podróży", "Planowana data wjazdu", "Adres w Kanadzie (jeśli znany)", "Informacje o locie"] },
            ].map((group, i) => (
              <div key={i} className="bg-[#FFF5F5] rounded-xl p-5 border border-red-100">
                <h3 className="font-bold text-[#1a1a1a] mb-3">{group.title}</h3>
                <ul className="space-y-1">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-[#8B0000]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Dodatkowe dokumenty (w razie potrzeby)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            W niektórych przypadkach rząd Kanady może poprosić o dodatkowe dokumenty:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Zdjęcie cyfrowe (format paszportowy)",
              "Wyniki badań medycznych",
              "Zaświadczenie o niekaralności",
              "Dokumenty potwierdzające cel podróży",
              "Dowód wystarczających środków finansowych",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-gray-400 mt-1">○</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#8B0000] text-white p-6 rounded-xl mt-10">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Gotowy do złożenia wniosku?</h3>
            <p className="text-white/80 mb-4">Mając przygotowane wszystkie dokumenty, cały proces zajmie Ci zaledwie kilka minut.</p>
            <Link href="/eta-info/application/" className="inline-block bg-white text-[#8B0000] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors">
              Jak złożyć wniosek →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
