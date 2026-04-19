import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mapa strony — Canada eTA Online",
  description: "Mapa strony Canada eTA Online. Wszystkie strony i sekcje serwisu w jednym miejscu.",
};

export default function SitemapPage() {
  const sections = [
    {
      title: "Strona główna",
      links: [
        { label: "Strona główna", href: "/" },
      ],
    },
    {
      title: "Informacje o eTA",
      links: [
        { label: "Czym jest eTA?", href: "/eta-info/what-is-eta/" },
        { label: "Jak złożyć wniosek", href: "/eta-info/application/" },
        { label: "Opłaty", href: "/eta-info/fee/" },
        { label: "Ważność eTA", href: "/eta-info/expiration/" },
        { label: "Sprawdź status wniosku", href: "/eta-info/status-check/" },
        { label: "Wymagane dokumenty", href: "/eta-info/required-documents/" },
        { label: "Strona rządu Kanady", href: "/eta-info/official-canada/" },
        { label: "Tranzyt przez Kanadę", href: "/eta-info/transit/" },
        { label: "Polonia w Kanadzie", href: "/eta-info/polish-community/" },
      ],
    },
    {
      title: "Pomoc",
      links: [
        { label: "FAQ — Najczęściej zadawane pytania", href: "/faq/" },
      ],
    },
    {
      title: "Informacje o stronie",
      links: [
        { label: "O nas", href: "/site-info/about/" },
        { label: "Kontakt", href: "/site-info/contact/" },
        { label: "Polityka prywatności", href: "/site-info/privacy-policy/" },
        { label: "Regulamin", href: "/site-info/agreement/" },
        { label: "Mapa strony", href: "/sitemap/" },
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Mapa strony"
        subtitle="Wszystkie strony serwisu Canada eTA Online"
      />
      <Breadcrumb items={[{ label: "Mapa strony" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, i) => (
              <div key={i} className="bg-[#FFF5F5] rounded-xl p-6 border border-red-100">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4 pb-2 border-b border-[#8B0000]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-[#8B0000] transition-colors flex items-center gap-2"
                      >
                        <span className="text-[#8B0000]">→</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
