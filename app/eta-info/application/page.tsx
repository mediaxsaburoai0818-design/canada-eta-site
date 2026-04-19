import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Jak złożyć wniosek o eTA do Kanady — Canada eTA Online",
  description: "Krok po kroku: jak złożyć wniosek o elektroniczną autoryzację podróży (eTA) do Kanady. Wymagane dokumenty, opłata CAD $7 i czas przetwarzania.",
};

export default function ApplicationPage() {
  return (
    <>
      <PageHero
        title="Jak złożyć wniosek o eTA?"
        subtitle="Przewodnik krok po kroku dla obywateli Polski"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Jak złożyć wniosek" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              Wniosek o eTA składa się wyłącznie online, na oficjalnej stronie rządu Kanady. Cały proces trwa kilka minut, a większość wniosków jest rozpatrywana niemal natychmiast.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Przed rozpoczęciem — co przygotować
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🛂", title: "Ważny paszport", desc: "Polski paszport biometryczny z co najmniej 6-miesięcznym okresem ważności." },
              { icon: "📧", title: "Adres e-mail", desc: "Aktywny adres e-mail, na który otrzymasz potwierdzenie eTA." },
              { icon: "💳", title: "Karta płatnicza", desc: "Karta kredytowa lub debetowa (Visa, Mastercard, American Express) do opłaty CAD $7." },
              { icon: "📋", title: "Dane osobowe", desc: "Informacje o zatrudnieniu, adres zamieszkania i szczegóły podróży." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Proces aplikacyjny krok po kroku
          </h2>

          <div className="space-y-6 mb-10">
            {[
              {
                step: 1,
                title: "Wejdź na oficjalną stronę",
                desc: "Odwiedź oficjalną stronę rządu Kanady poświęconą eTA. Unikaj nieoficjalnych stron pośredników, które mogą pobierać dodatkowe opłaty.",
                link: { text: "Oficjalna strona eTA →", href: "/eta-info/official-canada/" },
              },
              {
                step: 2,
                title: "Wypełnij formularz",
                desc: "Podaj dane osobowe, informacje z paszportu, szczegóły podróży oraz dane kontaktowe. Formularz jest dostępny w języku angielskim i francuskim.",
              },
              {
                step: 3,
                title: "Dokonaj płatności",
                desc: "Opłata wynosi CAD $7 (około 22 PLN). Płatność jest niezbędna do złożenia wniosku. Akceptowane są karty Visa, Mastercard i American Express.",
              },
              {
                step: 4,
                title: "Poczekaj na decyzję",
                desc: "Większość wniosków jest rozpatrywana w ciągu kilku minut. W niektórych przypadkach przetwarzanie może potrwać do kilku dni. Otrzymasz powiadomienie e-mailowe.",
              },
              {
                step: 5,
                title: "Sprawdź potwierdzenie",
                desc: "Po zatwierdzeniu otrzymasz e-mail z potwierdzeniem. eTA jest elektronicznie powiązana z Twoim paszportem — nie musisz drukować żadnych dokumentów.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link.href} className="text-[#8B0000] font-medium mt-2 inline-block hover:underline">
                      {item.link.text}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ważne wskazówki
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <ul className="space-y-3">
              {[
                "Upewnij się, że wpisujesz dane paszportowe dokładnie tak, jak widnieją w paszporcie.",
                "Błędne dane mogą spowodować odmowę wjazdu na lotnisku.",
                "Składaj wniosek na oficjalnej stronie rządu Kanady — unikaj stron pośredników.",
                "eTA jest powiązana z konkretnym paszportem — nowy paszport wymaga nowej eTA.",
                "Złóż wniosek przed zakupem biletu lotniczego.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-yellow-600 mt-0.5">⚠️</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-6 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Co po otrzymaniu eTA?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Po zatwierdzeniu eTA nie musisz drukować żadnych dokumentów — autoryzacja jest elektronicznie powiązana z Twoim paszportem. Przy odprawie na lotnisku linia lotnicza automatycznie weryfikuje Twoją eTA. Na granicy kanadyjskiej funkcjonariusz może zadać dodatkowe pytania dotyczące celu i długości Twojej wizyty.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Link href="/eta-info/fee/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Opłaty za eTA →</h3>
              <p className="text-sm text-gray-500 mt-1">Szczegóły dotyczące kosztów</p>
            </Link>
            <Link href="/eta-info/required-documents/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Wymagane dokumenty →</h3>
              <p className="text-sm text-gray-500 mt-1">Lista potrzebnych dokumentów</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
