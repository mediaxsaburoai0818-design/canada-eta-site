import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "O nas — Canada eTA Online",
  description: "Informacje o serwisie Canada eTA Online. Nasz cel to dostarczanie rzetelnych informacji o eTA do Kanady dla polskich podróżnych.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="O nas"
        subtitle="Informacje o serwisie Canada eTA Online"
      />
      <Breadcrumb items={[{ label: "Informacje o stronie", href: "/site-info/about/" }, { label: "O nas" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              <strong>Canada eTA Online</strong> to serwis informacyjny stworzony z myślą o polskich podróżnych planujących wizytę w Kanadzie. Naszym celem jest dostarczanie jasnych, rzetelnych i aktualnych informacji o elektronicznej autoryzacji podróży (eTA) do Kanady.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nasza misja
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Proces uzyskania eTA do Kanady jest prosty, ale może być niejasny dla osób, które nigdy wcześniej tego nie robiły. Naszym celem jest:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Dostarczanie przejrzystych, krok po kroku instrukcji dotyczących eTA",
              "Tłumaczenie wszystkich informacji na język polski",
              "Ostrzeganie przed nieoficjalnymi stronami i pośrednikami",
              "Aktualizowanie informacji o zmianach w przepisach",
              "Pomoc w zrozumieniu wymagań i procedur",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#8B0000] mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ważne zastrzeżenie
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Canada eTA Online nie jest stroną rządu Kanady.</strong> Jesteśmy niezależnym serwisem informacyjnym. Nie pośredniczymy w składaniu wniosków o eTA. Wniosek o eTA należy złożyć bezpośrednio na oficjalnej stronie rządu Kanady (canada.ca). Informacje zawarte na naszej stronie mają charakter orientacyjny i nie stanowią porady prawnej.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Dane kontaktowe
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Masz pytania lub sugestie? Skontaktuj się z nami.
          </p>
          <Link href="/site-info/contact/" className="inline-block bg-[#8B0000] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#6B0000] transition-colors">
            Formularz kontaktowy →
          </Link>
        </div>
      </section>
    </>
  );
}
