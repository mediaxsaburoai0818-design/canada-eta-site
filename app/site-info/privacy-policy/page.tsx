import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Polityka prywatności — Canada eTA Online",
  description: "Polityka prywatności serwisu Canada eTA Online. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Polityka prywatności"
        subtitle="Informacje o przetwarzaniu danych osobowych"
      />
      <Breadcrumb items={[{ label: "Informacje o stronie", href: "/site-info/about/" }, { label: "Polityka prywatności" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">Ostatnia aktualizacja: 13 kwietnia 2026</p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              1. Administrator danych
            </h2>
            <p className="leading-relaxed mb-6">
              Administratorem danych osobowych jest Canada eTA Online. Niniejsza polityka prywatności opisuje, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje dane osobowe podczas korzystania z naszej strony internetowej.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              2. Jakie dane zbieramy
            </h2>
            <p className="leading-relaxed mb-4">Możemy zbierać następujące rodzaje danych:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Dane podane w formularzu kontaktowym (imię, e-mail, treść wiadomości)</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Dane analityczne (strony odwiedzone, czas wizyty, źródło ruchu)</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Pliki cookies i podobne technologie</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              3. Cel przetwarzania danych
            </h2>
            <p className="leading-relaxed mb-4">Dane osobowe przetwarzamy w następujących celach:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Odpowiedź na zapytania przesłane przez formularz kontaktowy</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Analiza ruchu na stronie i poprawa jakości usług</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Zapewnienie bezpieczeństwa strony internetowej</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Spełnienie obowiązków prawnych</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              4. Podstawa prawna przetwarzania
            </h2>
            <p className="leading-relaxed mb-6">
              Przetwarzamy dane osobowe na podstawie: zgody użytkownika (art. 6 ust. 1 lit. a RODO), uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO) lub wykonania umowy (art. 6 ust. 1 lit. b RODO).
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              5. Pliki cookies
            </h2>
            <p className="leading-relaxed mb-6">
              Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania, analizy ruchu i personalizacji treści. Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce. Wyłączenie cookies może wpłynąć na funkcjonalność strony.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              6. Prawa użytkownika
            </h2>
            <p className="leading-relaxed mb-4">Zgodnie z RODO przysługują Ci następujące prawa:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Prawo dostępu do danych</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Prawo do sprostowania danych</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Prawo do usunięcia danych</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Prawo do ograniczenia przetwarzania</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Prawo do przenoszenia danych</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Prawo do sprzeciwu</li>
              <li className="flex items-start gap-2"><span className="text-[#8B0000]">•</span>Prawo do wycofania zgody</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              7. Bezpieczeństwo danych
            </h2>
            <p className="leading-relaxed mb-6">
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed nieuprawnionym dostępem, utratą lub zniszczeniem. Nasza strona korzysta z szyfrowania SSL/TLS.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
              8. Kontakt
            </h2>
            <p className="leading-relaxed mb-6">
              W sprawach dotyczących ochrony danych osobowych prosimy o kontakt za pośrednictwem formularza na stronie kontaktowej lub pod adresem e-mail: privacy@canada-eta-online.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
