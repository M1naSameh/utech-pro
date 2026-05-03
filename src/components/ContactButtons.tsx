import type { LucideIcon } from "lucide-react";
import { Facebook, Mail, MessageCircle } from "lucide-react";
import { contactLinks } from "@/lib/site";

type ContactChannel = "whatsapp" | "facebook" | "email";
type ContactButtonLink = {
  key: ContactChannel;
  href: string;
  label: string;
  icon: LucideIcon;
  primary: boolean;
};

export function ContactButtons({
  labels,
  className = "",
  channels = ["whatsapp", "facebook", "email"]
}: {
  labels: {
    whatsapp: string;
    facebook: string;
    email: string;
  };
  className?: string;
  channels?: ContactChannel[];
}) {
  const allLinks: ContactButtonLink[] = [
    {
      key: "whatsapp",
      href: contactLinks.whatsapp,
      label: labels.whatsapp,
      icon: MessageCircle,
      primary: true
    },
    {
      key: "facebook",
      href: contactLinks.facebook,
      label: labels.facebook,
      icon: Facebook,
      primary: false
    },
    {
      key: "email",
      href: `mailto:${contactLinks.email}`,
      label: labels.email,
      icon: Mail,
      primary: false
    }
  ];
  const links = allLinks.filter((link) => channels.includes(link.key));

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition hover:-translate-y-0.5 ${
              link.primary
                ? "bg-brand-gradient text-white shadow-glow"
                : "border border-white/10 bg-white/[0.055] text-slate-100 hover:border-cyan/40 hover:text-cyan"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
