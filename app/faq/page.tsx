import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ - Najczesciej zadawane pytania o eTA Kanada",
  description:
    "Odpowiedzi na najczesciej zadawane pytania dotyczace eTA Kanada: procedura, koszty, waznosc, odrzucenie wniosku i wiele wiecej.",
};

const faqs = [
  {
    q: "Czym jest eTA Kanada i do czego sluzy?",
    a: "eTA Kanada (Electronic Travel Authorization (eTA Canada)) to elektroniczna autoryzacja podrozy do Kanady. Obywatele krajów objętych ruchem bezwizowym, w tym Polski, muszą uzyskać eTA przed podróżą lotniczą do Kanady w celach turystycznych, biznesowych lub tranzytowych.",
  },
  {
    q: "Ile kosztuje wniosek eTA Kanada?",
    a: "Oplata za eTA Kanada wynosi CAD $7 (około 35 PLN). Oplata jest pobierana w momencie skladania wniosku i nie podlega zwrotowi. Uwazaj na falszywe strony, ktore pobieraja znacznie wyższe opłaty za te sama usluge.",
  },
  {
    q: "Jak dlugo trwa rozpatrzenie wniosku eTA Kanada?",
    a: "Wiekszosc wnioskow jest rozpatrywana w ciagu kilku minut. W niektorych przypadkach rozpatrzenie moze potrwac do 72 godzin, jeśli wymagane są dodatkowe dokumenty. Zaleca sie zlozenie wniosku co najmniej 72 godziny przed planowana podroza.",
  },
  {
    q: "Jak dlugo jest wazna autoryzacja eTA Kanada?",
    a: "eTA Kanada jest wazna przez 5 lat od daty wydania lub do momentu wygasniecia paszportu (w zaleznosci od tego, co nastapi wczesniej). W tym okresie mozna wielokrotnie wjezdzac do Kanady, kazdy pobyt do 6 miesięcy.",
  },
  {
    q: "Jaka jest roznica miedzy eTA Kanada a wiza?",
    a: "eTA Kanada to uproszczona autoryzacja elektroniczna do krotkich pobytow (do 6 miesięcy). Koszt: CAD $7, wniosek online. Wiza kanadyjska wymaga bardziej skomplikowanej procedury, kosztuje od CAD $100 i pozwala na dluzsze pobyty lub prace.",
  },
  {
    q: "Czy Polska jest objeta wymogiem eTA Kanada?",
    a: "Tak. Obywatele polscy podróżujący do Kanady drogą lotniczą muszą posiadać eTA Kanada. Dotyczy to wizyt turystycznych, biznesowych i tranzytowych. Wymóg nie dotyczy wjazdu drogą lądową lub morską.",
  },
  {
    q: "Co sie stanie, jesli moj wniosek eTA Kanada zostanie odrzucony?",
    a: "W przypadku odrzucenia wniosku eTA Kanada otrzymasz e-mail z informacja o przyczynach odmowy. Aby móc podróżować do Kanady, należy ubiegać się o wizę turystyczną (Visitor Visa). Oplata CAD $7 nie podlega zwrotowi.",
  },
  {
    q: "Czy potrzebuje eTA Kanada na tranzyt przez Kanadę?",
    a: "Tak, eTA Kanada jest wymagana rowniez w przypadku tranzytu lotniczego przez Kanadę, nawet jesli nie opuszczasz strefy tranzytu na lotnisku. Dotyczy to np. przesiadek na lotnisku w Toronto, Vancouver czy Montrealu.",
  },
  {
    q: "Jakie dokumenty sa potrzebne do zlozenia wniosku eTA Kanada?",
    a: "Potrzebny jest wazny paszport, adres e-mail oraz karta platnicza (Visa, Mastercard, American Express) do uiszczenia opłaty.",
  },
  {
    q: "Czy moge zlozyc wniosek eTA Kanada na telefonie?",
    a: "Tak, wniosek o eTA Kanada składa się online poprzez oficjalną stronę rządu Kanady. Formularz jest prosty i można go wypełnić na komputerze, tablecie lub telefonie. Nie ma dedykowanej aplikacji mobilnej.",
  },
  {
    q: "Czy eTA Kanada gwarantuje wjazd do Kanady?",
    a: "Nie. eTA Kanada to jedynie autoryzacja podrozy. Ostateczna decyzje o wjezdzie podejmuje funkcjonariusz Canada Border Services Agency (CBSA) po przybyciu. Moze on odmowic wjazdu nawet z zatwierdzona eTA.",
  },
  {
    q: "Czy moge pracowac w Kanadzie na podstawie eTA Kanada?",
    a: "Nie. eTA Kanada nie uprawnia do podjecia pracy w Kanadzie. Do pracy wymagane jest odpowiednie pozwolenie na pracę (work permit). eTA jest przeznaczona wylacznie do wizyt turystycznych, biznesowych i tranzytowych.",
  },
  {
    q: "Czy dzieci potrzebuja eTA Kanada?",
    a: "Tak, kazde dziecko podrozujace do Kanady drogą lotniczą musi posiadac wlasne eTA Kanada, niezaleznie od wieku. Wymagany jest odrebny paszport. Wniosek w imieniu dziecka moze zlozyc rodzic lub opiekun.",
  },
  {
    q: "Czy obywatele Kanady lub stali rezydenci potrzebują eTA Kanada?",
    a: "Nie. Obywatele Kanady (w tym osoby z podwójnym obywatelstwem) muszą podróżować na kanadyjskim paszporcie. Stali rezydenci Kanady muszą przedstawić swoją kartę stałego pobytu (PR card). Nie mogą oni ubiegać się o eTA.",
  },
  {
    q: "Gdzie moge zlozyc wniosek o eTA Kanada?",
    a: "Wniosek o eTA Kanada mozna zlozyc wylacznie na oficjalnej stronie rządu Kanady: https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html. Nie korzystaj z posrednikow, ktorzy pobieraja zawyzone oplaty.",
  },
];

export default function FAQ() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-4"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Najczesciej zadawane pytania (FAQ)
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Odpowiedzi na najczesciej zadawane pytania dotyczace systemu eTA Kanada i
            podrozowania do Kanady.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(0, 5).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#1F1A14] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(5, 10).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#1F1A14] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {faqs.slice(10).map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-5">
                <h2 className="font-bold text-[#1F1A14] mb-2 text-base">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-gray-50 border border-gray-200 rounded p-6">
            <h2 className="font-bold text-[#1F1A14] mb-2">
              Nie znalazles odpowiedzi?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Skontaktuj sie z nami, a odpowiemy na Twoje pytanie.
            </p>
            <Link
              href="/site-info/contact/"
              className="inline-block bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-5 py-2 rounded font-bold text-sm transition"
            >
              Skontaktuj sie z nami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}