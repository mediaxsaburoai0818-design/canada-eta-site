import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍁</span>
              <span className="text-white text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Canada eTA Online
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Kompleksowy przewodnik po kanadyjskiej eTA dla polskich podróżnych. Wszystkie informacje potrzebne do złożenia wniosku o elektroniczną autoryzację podróży.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Informacje o eTA</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/eta-info/what-is-eta/" className="hover:text-white transition-colors">Czym jest eTA?</Link></li>
              <li><Link href="/eta-info/application/" className="hover:text-white transition-colors">Jak złożyć wniosek</Link></li>
              <li><Link href="/eta-info/fee/" className="hover:text-white transition-colors">Opłaty</Link></li>
              <li><Link href="/eta-info/expiration/" className="hover:text-white transition-colors">Ważność eTA</Link></li>
              <li><Link href="/eta-info/required-documents/" className="hover:text-white transition-colors">Wymagane dokumenty</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Dodatkowe informacje</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/eta-info/status-check/" className="hover:text-white transition-colors">Sprawdź status</Link></li>
              <li><Link href="/eta-info/official-canada/" className="hover:text-white transition-colors">Strona rządu Kanady</Link></li>
              <li><Link href="/eta-info/transit/" className="hover:text-white transition-colors">Tranzyt przez Kanadę</Link></li>
              <li><Link href="/eta-info/polish-community/" className="hover:text-white transition-colors">Polonia w Kanadzie</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Informacje o stronie</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/site-info/about/" className="hover:text-white transition-colors">O nas</Link></li>
              <li><Link href="/site-info/contact/" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="/site-info/privacy-policy/" className="hover:text-white transition-colors">Polityka prywatności</Link></li>
              <li><Link href="/site-info/agreement/" className="hover:text-white transition-colors">Regulamin</Link></li>
              <li><Link href="/sitemap/" className="hover:text-white transition-colors">Mapa strony</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; 2026 Canada eTA Online. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-xs text-gray-500 text-center">
              Ta strona nie jest powiązana z rządem Kanady. Informacje mają charakter orientacyjny.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
