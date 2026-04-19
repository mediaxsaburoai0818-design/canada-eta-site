import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Regulamin — Canada eTA Online",
  description: "Regulamin korzystania z serwisu Canada eTA Online. Warunki użytkowania, ograniczenia odpowiedzialności i prawa autorskie.",
};

export default function AgreementPage() {
  return (
    <>
      <PageHero
        title="Regulamin"
        subtitle="Warunki korzystania z serwisu"
      />
      <Breadcrumb items={[{ label: "Informacje o stronie", href: "/site-info/about/" }, { label: "Regulamin" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">Ostatnia aktualizacja: 13 kwietnia 2026</p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              1. Postanowienia ogólne
            </h2>
            <p className="leading-relaxed mb-6">
              Niniejszy regulamin określa zasady korzystania z serwisu Canada eTA Online. Korzystając z naszej strony, akceptujesz niniejsze warunki. Jeśli nie zgadzasz się z regulaminem, prosimy o zaprzestanie korzystania ze strony.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              2. Charakter serwisu
            </h2>
            <p className="leading-relaxed mb-6">
              Canada eTA Online jest niezależnym serwisem informacyjnym. <strong>Nie jesteśmy stroną rządu Kanady</strong> ani żadnej instytucji rządowej. Nie pośredniczymy w składaniu wniosków o eTA. Wszystkie informacje zawarte na stronie mają charakter orientacyjny i nie stanowią porady prawnej, imigracyjnej ani podatkowej.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              3. Ograniczenie odpowiedzialności
            </h2>
            <p className="leading-relaxed mb-4">Nie ponosimy odpowiedzialności za:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Decyzje podjęte na podstawie informacji zawartych na stronie</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Odmowę wydania eTA lub odmowę wjazdu do Kanady</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Ewentualne nieścisłości w prezentowanych informacjach</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Działanie stron zewnętrznych, do których prowadzimy linki</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Szkody wynikłe z korzystania lub niemożności korzystania ze strony</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              4. Prawa autorskie
            </h2>
            <p className="leading-relaxed mb-6">
              Wszystkie treści zawarte na stronie Canada eTA Online, w tym teksty, grafiki, logotypy i układ strony, są chronione prawem autorskim. Zabrania się kopiowania, rozpowszechniania lub wykorzystywania treści bez uprzedniej pisemnej zgody administratora.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              5. Linki zewnętrzne
            </h2>
            <p className="leading-relaxed mb-6">
              Nasza strona zawiera linki do stron zewnętrznych, w tym oficjalnych stron rządu Kanady. Nie ponosimy odpowiedzialności za treści, politykę prywatności ani praktyki stron zewnętrznych. Zalecamy zapoznanie się z regulaminem każdej odwiedzanej strony.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              6. Zmiany regulaminu
            </h2>
            <p className="leading-relaxed mb-6">
              Zastrzegamy sobie prawo do zmiany niniejszego regulaminu w dowolnym momencie. Zmiany wchodzą w życie z chwilą publikacji na stronie. Kontynuacja korzystania ze strony po opublikowaniu zmian oznacza akceptację zaktualizowanego regulaminu.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              7. Prawo właściwe
            </h2>
            <p className="leading-relaxed mb-6">
              Niniejszy regulamin podlega prawu polskiemu. Wszelkie spory wynikające z korzystania ze strony będą rozstrzygane przez właściwe sądy polskie.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              8. Kontakt
            </h2>
            <p className="leading-relaxed mb-6">
              W razie pytań dotyczących regulaminu prosimy o kontakt za pośrednictwem formularza kontaktowego na naszej stronie.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
