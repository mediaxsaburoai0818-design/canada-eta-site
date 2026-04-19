import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-[#FFF5F5] border-b border-red-100" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#8B0000] transition-colors">
              Strona główna
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="mx-1">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-[#8B0000] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#8B0000] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
