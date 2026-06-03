import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Polacy w Kanadzie - okolo 1 mln osob i Polonia kanadyjska",
  description:
    "Okolo 1 mln Polakow i osob polskiego pochodzenia mieszka w Kanadzie. Informacje o spolecznosci, Polonii i sprawach zwiazanych z Canada eTA.",
};

export default function PolishCommunity() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <Breadcrumb
            items={[
              { label: "Informacje o eTA Kanada", href: "/eta-info/what-is-eta/" },
              { label: "Polacy w Kanadzie" },
            ]}
          />
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1F1A14] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Polacy w Kanadzie
          </h1>
          <img
            src="https://images.unsplash.com/photo-1503152889439-4449731f7982?w=800&q=80"
            alt="Toronto - widok na miasto"
            className="w-full h-64 object-cover rounded mb-6"
          />
          <p className="text-gray-600 leading-relaxed">
            Kanada jest domem dla jednej z największych społeczności polskich
            poza granicami Polski. Ponad <strong>1 100 000 osób</strong> polskiego
            pochodzenia mieszka w Kanadzie, co czyni język polski jednym z
            ważniejszych języków używanych przez społeczności imigranckie.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">eTA Kanada a Polacy mieszkający w Kanadzie</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Polacy, którzy posiadają status stałego rezydenta w Kanadzie
            (Permanent Resident), <strong>nie potrzebują eTA Kanada</strong>.
            eTA jest wymagana wyłącznie od osób podróżujących do Kanady drogą
            lotniczą jako odwiedzający (turyści, podróżujący służbowo, osoby w
            tranzycie).
          </p>
          <div className="bg-white border-l-4 border-[#8B1A1A] p-4 rounded-r text-sm text-gray-700">
            <strong>Ważne:</strong> Jeśli masz status stałego rezydenta Kanady,
            nie musisz składać wniosku o eTA Kanada. Powinieneś podróżować z
            ważną kartą stałego rezydenta (PR Card) lub dokumentem podróżnym
            stałego rezydenta (PRTD).
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Główne skupiska Polaków w Kanadzie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { city: "Toronto", desc: "Największa społeczność polska, dzielnice: Roncesvalles Village" },
              { city: "Mississauga", desc: "Duża społeczność polska, liczne organizacje i festiwale" },
              { city: "Edmonton", desc: "Rosnąca społeczność, polskie sklepy i kościoły" },
              { city: "Vancouver", desc: "Znacząca społeczność polska w Kolumbii Brytyjskiej" },
              { city: "Calgary", desc: "Polskie centrum kulturalne i organizacje" },
              { city: "Winnipeg", desc: "Historyczna społeczność polska w Manitobie" },
            ].map((item) => (
              <div key={item.city} className="border border-gray-200 rounded p-3 bg-gray-50">
                <h3 className="font-bold text-[#1F1A14] text-sm">{item.city}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Przydatne organizacje i zasoby</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="https://www.gov.pl/web/kanada" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">Ambasada RP w Ottawie</a> &mdash; Pomoc konsularna, dokumenty, informacje
            </li>
            <li>
              <a href="https://www.kpk.org/" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">Kongres Polonii Kanadyjskiej</a> &mdash; Organizacja parasolowa
            </li>
            <li>
              <a href="https://jp2pcc.ca/" target="_blank" rel="noopener noreferrer" className="text-[#1F1A14] underline">Polskie Centrum Kultury im. Jana Pawła II</a> &mdash; Centrum kultury polskiej w Mississauga
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Konsulaty RP w Kanadzie</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Konsulat Generalny RP w Toronto</li>
            <li>Konsulat Generalny RP w Vancouver</li>
            <li>Konsulat Generalny RP w Montrealu</li>
            <li>Ambasada RP w Ottawie (Wydział Konsularny)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Odwiedzanie rodziny i przyjaciół w Kanadzie</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jeśli planujesz odwiedzić rodzinę lub przyjaciół mieszkających w
            Kanadzie, pamiętaj o uzyskaniu eTA Kanada przed podróżą lotniczą.
            Oto najważniejsze informacje:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Złóż wniosek eTA Kanada online, zazwyczaj decyzja zapada w kilka minut</li>
            <li>Opłata wynosi CAD $7</li>
            <li>Możesz przebywać w Kanadzie do 6 miesięcy na jeden wjazd</li>
            <li>eTA jest ważna przez 5 lat &mdash; wielokrotne wjazdy</li>
            <li>Nie możesz pracować na podstawie eTA</li>
            <li>Nie potrzebujesz zaproszenia od rodziny w Kanadzie</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Status stałego rezydenta w Kanadzie (Permanent Resident)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Polacy, którzy uzyskali status stałego rezydenta w Kanadzie
            (Permanent Resident), mają rozszerzone prawa. Posiadacze tego
            statusu:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Nie potrzebują eTA Kanada do podróży (muszą posiadać PR Card)</li>
            <li>Mają prawo do pracy i mieszkania w Kanadzie</li>
            <li>Mają dostęp do publicznej opieki zdrowotnej i świadczeń socjalnych</li>
            <li>Status jest potwierdzony przez kartę stałego rezydenta (PR Card)</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/what-is-eta/"
              className="bg-[#8B1A1A] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              Czym jest eTA Kanada? &rarr;
            </Link>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Złóż wniosek eTA Kanada</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}