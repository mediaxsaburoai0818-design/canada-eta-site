import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Polonia w Kanadzie — ok. 1,2 mln osób — Canada eTA Online",
  description: "Informacje o polskiej społeczności w Kanadzie. Około 1,2 miliona Kanadyjczyków polskiego pochodzenia, główne skupiska, organizacje i historia emigracji.",
};

export default function PolishCommunityPage() {
  return (
    <>
      <PageHero
        title="Polonia w Kanadzie"
        subtitle="Około 1,2 miliona Kanadyjczyków polskiego pochodzenia"
      />
      <Breadcrumb items={[{ label: "Informacje o eTA", href: "/eta-info/what-is-eta/" }, { label: "Polonia w Kanadzie" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF5F5] border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 leading-relaxed m-0">
              Kanada jest domem dla jednej z największych diaspor polskich na świecie. <strong>Około 1,2 miliona Kanadyjczyków</strong> deklaruje polskie pochodzenie, co czyni Polonię kanadyjską jedną z najliczniejszych grup etnicznych w tym kraju.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Statystyki Polonii kanadyjskiej
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { value: "~1,2 mln", label: "Osób polskiego pochodzenia", icon: "👥" },
              { value: "3%", label: "Populacji Kanady", icon: "📊" },
              { value: "Od XIX w.", label: "Historia emigracji", icon: "📜" },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
                <span className="text-3xl block mb-2">{stat.icon}</span>
                <div className="text-2xl font-bold text-[#8B0000] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Główne skupiska Polonii
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { city: "Toronto, Ontario", desc: "Największe skupisko Polonii w Kanadzie. Dzielnica Roncesvalles (\"Roncy\") jest znana jako \"Mała Polska\". Liczne polskie kościoły, sklepy, restauracje i organizacje.", pop: "ok. 250 000" },
              { city: "Montreal, Quebec", desc: "Drugie co do wielkości skupisko. Silna polska społeczność z wieloma organizacjami kulturalnymi i edukacyjnymi.", pop: "ok. 100 000" },
              { city: "Vancouver, Kolumbia Brytyjska", desc: "Rosnąca społeczność polska na zachodnim wybrzeżu. Aktywne organizacje polonijne.", pop: "ok. 60 000" },
              { city: "Winnipeg, Manitoba", desc: "Historyczne centrum polskiej imigracji do Kanady. Silne tradycje polonijne.", pop: "ok. 80 000" },
              { city: "Edmonton i Calgary, Alberta", desc: "Znaczące skupiska Polonii w prowincji Alberta, zwłaszcza wśród nowszych imigrantów.", pop: "ok. 70 000" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#1a1a1a]">{item.city}</h3>
                  <span className="text-sm text-[#8B0000] font-medium bg-[#FFF5F5] px-3 py-1 rounded-full">{item.pop}</span>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Organizacje polonijne w Kanadzie
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: "Kongres Polonii Kanadyjskiej (KPK)", desc: "Główna organizacja reprezentująca Polonię kanadyjską na poziomie federalnym." },
              { name: "Polskie szkoły sobotnie", desc: "Szkoły języka polskiego dla dzieci polonijnych w wielu miastach Kanady." },
              { name: "Polskie parafie", desc: "Kościoły polskie stanowiące centra życia polonijnego w wielu miastach." },
              { name: "Polskie centra kultury", desc: "Ośrodki organizujące wydarzenia kulturalne, wystawy i festiwale." },
            ].map((org, i) => (
              <div key={i} className="bg-[#FFF5F5] p-5 rounded-xl border border-red-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2">{org.name}</h3>
                <p className="text-sm text-gray-600">{org.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Historia polskiej emigracji do Kanady
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { period: "Lata 1858-1914", title: "Pierwsza fala", desc: "Pierwsi polscy osadnicy przybyli do Kanady w drugiej połowie XIX wieku, głównie do prowincji Manitoba i Alberta, gdzie zajmowali się rolnictwem." },
              { period: "1918-1939", title: "Okres międzywojenny", desc: "Zwiększona imigracja po odzyskaniu niepodległości przez Polskę. Wielu Polaków osiedlało się w miastach przemysłowych." },
              { period: "1945-1956", title: "Powojenna emigracja", desc: "Duża fala emigracji po II wojnie światowej — żołnierze, uchodźcy wojenni i displaced persons." },
              { period: "1980-1990", title: "Fala solidarnościowa", desc: "Emigracja polityczna i ekonomiczna w okresie stanu wojennego i transformacji ustrojowej." },
              { period: "Po 2004", title: "Współczesna emigracja", desc: "Nowa fala emigracji po wejściu Polski do UE. Młodzi profesjonaliści i studenci." },
            ].map((era, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-24 text-sm font-bold text-[#8B0000] bg-[#FFF5F5] px-2 py-1 rounded text-center">{era.period}</div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] mb-1">{era.title}</h3>
                  <p className="text-sm text-gray-600">{era.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b-2 border-[#8B0000]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Podróż do Kanady — odwiedź Polonię
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Jeśli planujesz odwiedzić rodzinę lub przyjaciół w Kanadzie, lub po prostu chcesz poznać polską społeczność za oceanem, pamiętaj o uzyskaniu eTA przed podróżą. Proces jest szybki i prosty — wystarczy kilka minut online.
          </p>

          <div className="bg-[#8B0000] text-white p-6 rounded-xl mt-10">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Planujesz podróż do Kanady?</h3>
            <p className="text-white/80 mb-4">Uzyskaj eTA i odwiedź Polonię kanadyjską. Proces trwa zaledwie kilka minut.</p>
            <Link href="/eta-info/application/" className="inline-block bg-white text-[#8B0000] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors">
              Jak złożyć wniosek o eTA →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
