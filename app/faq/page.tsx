import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ — Najczęściej zadawane pytania o eTA — Canada eTA Online",
  description: "Odpowiedzi na 15 najczęściej zadawanych pytań dotyczących eTA do Kanady. Koszt, ważność, wymagane dokumenty i proces aplikacyjny.",
};

export default function FaqPage() {
  const faqs = [
    {
      q: "Czym jest eTA do Kanady?",
      a: "eTA (Electronic Travel Authorization) to elektroniczna autoryzacja podróży wymagana od obywateli krajów zwolnionych z obowiązku wizowego, w tym Polski, przy podróży lotniczej do Kanady. Jest to system elektronicznej weryfikacji wprowadzony przez rząd Kanady w 2016 roku.",
    },
    {
      q: "Czy obywatele Polski potrzebują eTA?",
      a: "Tak, obywatele Polski podróżujący do Kanady drogą lotniczą muszą posiadać ważną eTA. Polska jest jednym z krajów objętych programem bezwizowym Kanady, co oznacza, że zamiast wizy wymagana jest eTA.",
    },
    {
      q: "Ile kosztuje eTA do Kanady?",
      a: "Oficjalna opłata za eTA wynosi CAD $7, co odpowiada około 22 złotym polskim (PLN). Opłata jest bezzwrotna i płatna online kartą kredytową lub debetową (Visa, Mastercard, American Express).",
    },
    {
      q: "Jak długo jest ważna eTA?",
      a: "eTA jest ważna przez 5 lat od daty wydania lub do momentu wygaśnięcia paszportu — w zależności od tego, co nastąpi wcześniej. W okresie ważności możesz wielokrotnie wjeżdżać do Kanady.",
    },
    {
      q: "Jak długo mogę przebywać w Kanadzie z eTA?",
      a: "Z eTA możesz przebywać w Kanadzie do 6 miesięcy w ramach jednego wjazdu. O dokładnym okresie pobytu decyduje funkcjonariusz straży granicznej przy wjeździe do Kanady.",
    },
    {
      q: "Jak złożyć wniosek o eTA?",
      a: "Wniosek o eTA składa się wyłącznie online na oficjalnej stronie rządu Kanady (canada.ca). Potrzebujesz ważnego paszportu, adresu e-mail i karty płatniczej. Cały proces trwa kilka minut.",
    },
    {
      q: "Jak długo trwa rozpatrzenie wniosku?",
      a: "Większość wniosków o eTA jest rozpatrywana w ciągu kilku minut. W niektórych przypadkach przetwarzanie może potrwać do 72 godzin lub dłużej, jeśli wymagane są dodatkowe dokumenty.",
    },
    {
      q: "Czy potrzebuję eTA do tranzytu przez Kanadę?",
      a: "Tak, eTA jest wymagana również podczas tranzytu przez Kanadę. Nawet jeśli nie planujesz opuszczać lotniska i tylko przesiadasz się na inny lot, musisz posiadać ważną eTA.",
    },
    {
      q: "Czy eTA jest potrzebna przy podróży lądowej lub morskiej?",
      a: "Nie, eTA jest wymagana tylko przy podróży lotniczej do Kanady. Przy wjeździe drogą lądową (np. z USA) lub morską eTA nie jest potrzebna — wystarczy ważny paszport.",
    },
    {
      q: "Co zrobić, jeśli mój wniosek o eTA został odrzucony?",
      a: "W przypadku odmowy wydania eTA możesz ubiegać się o wizę turystyczną do Kanady. Warto również sprawdzić przyczynę odmowy w otrzymanym e-mailu i ewentualnie skonsultować się z prawnikiem imigracyjnym.",
    },
    {
      q: "Czy mogę pracować w Kanadzie z eTA?",
      a: "Nie, eTA nie uprawnia do pracy w Kanadzie. eTA jest przeznaczona wyłącznie do celów turystycznych, biznesowych (spotkania, konferencje) lub tranzytowych. Do pracy w Kanadzie potrzebne jest pozwolenie na pracę.",
    },
    {
      q: "Co się stanie, jeśli mój paszport wygaśnie?",
      a: "eTA jest powiązana z konkretnym paszportem. Jeśli Twój paszport wygaśnie, eTA również traci ważność. Po uzyskaniu nowego paszportu musisz złożyć nowy wniosek o eTA.",
    },
    {
      q: "Czy muszę drukować potwierdzenie eTA?",
      a: "Nie, nie musisz drukować potwierdzenia. eTA jest elektronicznie powiązana z Twoim paszportem. Linia lotnicza i służby graniczne automatycznie weryfikują Twoją eTA na podstawie numeru paszportu.",
    },
    {
      q: "Czy dzieci też potrzebują eTA?",
      a: "Tak, każda osoba podróżująca do Kanady drogą lotniczą — niezależnie od wieku — musi posiadać własną eTA. Dotyczy to również niemowląt i małych dzieci. Każde dziecko musi mieć własny paszport.",
    },
    {
      q: "Gdzie mogę złożyć oficjalny wniosek o eTA?",
      a: "Oficjalny wniosek o eTA składa się wyłącznie na stronie rządu Kanady: canada.ca. Unikaj stron pośredników, które mogą pobierać dodatkowe opłaty. Oficjalna opłata wynosi CAD $7.",
    },
  ];

  return (
    <>
      <PageHero
        title="Najczęściej zadawane pytania"
        subtitle="Odpowiedzi na 15 najczęstszych pytań o eTA do Kanady"
      />
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4 mb-10">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-[#FFF5F5] rounded-xl border border-red-100 overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-4 flex justify-between items-center font-bold text-[#1a1a1a] hover:text-[#8B0000] transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-[#8B0000] text-sm font-medium bg-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-red-100">
                      {i + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-[#8B0000] text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 ml-11 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="bg-[#8B0000] text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nie znalazłeś odpowiedzi?
            </h2>
            <p className="text-white/80 mb-6">Skontaktuj się z nami lub odwiedź oficjalną stronę rządu Kanady.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/site-info/contact/" className="inline-block bg-white text-[#8B0000] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors">
                Kontakt
              </Link>
              <Link href="/eta-info/official-canada/" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Strona rządu Kanady
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
