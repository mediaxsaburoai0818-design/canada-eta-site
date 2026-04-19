import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Kontakt — Canada eTA Online",
  description: "Skontaktuj się z nami w sprawie pytań dotyczących eTA do Kanady. Formularz kontaktowy i dane kontaktowe.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Masz pytania? Skontaktuj się z nami"
      />
      <Breadcrumb items={[{ label: "Informacje o stronie", href: "/site-info/about/" }, { label: "Kontakt" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Napisz do nas
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Masz pytania dotyczące eTA do Kanady? Chętnie pomożemy. Wypełnij formularz kontaktowy lub skorzystaj z danych kontaktowych poniżej.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-bold text-[#1a1a1a] text-sm">E-mail</div>
                    <div className="text-gray-600">info@canada-eta-online.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <div className="font-bold text-[#1a1a1a] text-sm">Godziny odpowiedzi</div>
                    <div className="text-gray-600">Pon-Pt: 9:00 - 17:00 (CET)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏳</span>
                  <div>
                    <div className="font-bold text-[#1a1a1a] text-sm">Czas odpowiedzi</div>
                    <div className="text-gray-600">Zazwyczaj w ciągu 24-48 godzin</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>Uwaga:</strong> Nie jesteśmy oficjalną stroną rządu Kanady. W sprawie statusu wniosku o eTA prosimy kontaktować się bezpośrednio z IRCC.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-[#FFF5F5] rounded-xl p-6 border border-red-100">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Formularz kontaktowy
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] bg-white"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] bg-white"
                      placeholder="jan@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Temat</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] bg-white">
                      <option>Pytanie ogólne o eTA</option>
                      <option>Proces aplikacyjny</option>
                      <option>Problemy z wnioskiem</option>
                      <option>Sugestie dotyczące strony</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] bg-white resize-none"
                      placeholder="Twoja wiadomość..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#8B0000] text-white py-3 rounded-lg font-bold hover:bg-[#6B0000] transition-colors"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
