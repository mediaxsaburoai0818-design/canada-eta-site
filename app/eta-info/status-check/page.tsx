import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sprawdź status wniosku eTA — Canada eTA Online",
  description: "Jak sprawdzić status wniosku o eTA do Kanady. Dowiedz się o możliwych statusach i co robić w przypadku opóźnienia.",
};

export default function StatusCheckPage() {
  return (
    <>
      <PageHero
        title="Sprawdzanie statusu wniosku eTA"
        subtitle="Dowiedz się jak monitorować status Twojego wniosku"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Sprawdź status" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              Po złożeniu wniosku o eTA otrzymasz e-mail z potwierdzeniem. Większość wniosków jest rozpatrywana w ciągu <strong>kilku minut</strong>, ale w niektórych przypadkach przetwarzanie może potrwać dłużej.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Jak sprawdzić status?
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { step: "1", title: "Sprawdź e-mail", desc: "Po złożeniu wniosku powinieneś otrzymać e-mail z potwierdzeniem i numerem wniosku. Sprawdź również folder spam." },
              { step: "2", title: "Zaloguj się na konto IRCC", desc: "Jeśli złożyłeś wniosek za pośrednictwem konta w systemie IRCC, zaloguj się i sprawdź status w swoim profilu." },
              { step: "3", title: "Użyj narzędzia online", desc: "Na stronie IRCC możesz sprawdzić status wniosku, podając numer wniosku i dane osobowe." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B0000] text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Możliwe statusy wniosku
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { status: "Approved (Zatwierdzony)", desc: "Twoja eTA została wydana. Możesz podróżować do Kanady.", color: "bg-green-100 text-green-800 border-green-200" },
              { status: "Pending (W trakcie)", desc: "Wniosek jest przetwarzany. Możesz potrzebować dodatkowych dokumentów.", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
              { status: "Not Approved (Odrzucony)", desc: "Wniosek został odrzucony. Możesz ubiegać się o wizę turystyczną.", color: "bg-red-100 text-red-800 border-red-200" },
            ].map((item, i) => (
              <div key={i} className={`p-4 rounded-xl border ${item.color}`}>
                <div className="font-bold mb-1">{item.status}</div>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Co zrobić w przypadku opóźnienia?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jeśli nie otrzymałeś odpowiedzi w ciągu 72 godzin:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Sprawdź folder spam/śmieci w skrzynce e-mail",
              "Upewnij się, że podałeś poprawny adres e-mail",
              "Sprawdź status online na stronie IRCC",
              "Skontaktuj się z IRCC, jeśli minęło więcej niż 72 godziny",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#8B0000] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Co zrobić w przypadku odmowy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Jeśli Twój wniosek o eTA został odrzucony, masz kilka opcji:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Złóż wniosek o wizę turystyczną do Kanady",
              "Skontaktuj się z ambasadą Kanady w Warszawie",
              "Sprawdź przyczynę odmowy w otrzymanym e-mailu",
              "Rozważ konsultację z prawnikiem imigracyjnym",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#8B0000] mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <Link href="/eta-info/application/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Jak złożyć wniosek →</h3>
              <p className="text-sm text-gray-500 mt-1">Przewodnik krok po kroku</p>
            </Link>
            <Link href="/eta-info/official-canada/" className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100 hover:border-[#8B0000]/30 transition-colors group">
              <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#8B0000] transition-colors">Strona rządu Kanady →</h3>
              <p className="text-sm text-gray-500 mt-1">Oficjalna strona eTA</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
