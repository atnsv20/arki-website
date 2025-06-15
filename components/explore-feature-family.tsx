import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CalendarDays,
  BookOpenText,
  CreditCard,
  ShoppingCart,
  Users,
  MessageSquareText,
  FileText,
  Star,
  Mail,
  Gift,
  BadgeDollarSign,
  ListChecks,
  UsersRound,
  LineChart,
  Boxes,
  MapPinned,
  LucideIcon,
} from "lucide-react";

type SubLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

type FeatureFamily = {
  title: string;
  subLinks: SubLink[];
};

const featureFamilies: FeatureFamily[] = [
  {
    title: "Scheduling & Payments",
    subLinks: [
      { name: "Calendar", href: "/features/calendar", icon: CalendarDays },
      { name: "Online Booking", href: "/features/online-booking", icon: BookOpenText },
      { name: "Payments", href: "/features/payments", icon: CreditCard },
      { name: "POS", href: "/features/pos", icon: ShoppingCart },
    ],
  },
  {
    title: "Client Relationships",
    subLinks: [
      { name: "Client Profiles", href: "/features/client-profiles", icon: Users },
      { name: "Two-Way Texting", href: "/features/two-way-texting", icon: MessageSquareText },
      { name: "Forms & Waivers", href: "/features/forms-waivers", icon: FileText },
      { name: "Reviews", href: "/features/reviews", icon: Star },
    ],
  },
  {
    title: "Marketing & Automation",
    subLinks: [
      { name: "Email Marketing", href: "/features/email-marketing", icon: Mail },
      { name: "Gift Cards", href: "/features/gift-cards", icon: Gift },
      { name: "Memberships", href: "/features/memberships", icon: BadgeDollarSign },
      { name: "Waitlist", href: "/features/waitlist", icon: ListChecks },
    ],
  },
  {
    title: "Management",
    subLinks: [
      { name: "Staff & Payroll", href: "/features/staff-payroll", icon: UsersRound },
      { name: "Reporting & Analytics", href: "/features/reporting-analytics", icon: LineChart },
      { name: "Inventory", href: "/features/inventory", icon: Boxes },
      { name: "Multi-Location", href: "/features/multi-location", icon: MapPinned },
    ],
  },
];

export default function ExploreFeatureFamily() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 text-gray-900 dark:text-gray-50">
          Explore Mangomint by feature
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {featureFamilies.map((family, index) => (
            <AccordionItem value={`item-${index}`} key={family.title}>
              <AccordionTrigger className="text-xl font-semibold hover:no-underline text-gray-800 dark:text-gray-200">
                {family.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {family.subLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <Link key={link.name} href={link.href} passHref>
                        <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                          <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {link.name}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
