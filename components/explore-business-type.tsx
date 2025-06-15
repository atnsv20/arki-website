import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const businessTypes = [
  { name: "Hair Salons", href: "/business/hair-salons" },
  { name: "Med Spas", href: "/business/med-spas" },
  { name: "Nail Salons", href: "/business/nail-salons" },
  { name: "Barber Shops", href: "/business/barber-shops" },
  { name: "Massage Studios", href: "/business/massage-studios" },
  { name: "Day Spas", href: "/business/day-spas" },
  { name: "Wellness Centers", href: "/business/wellness-centers" },
  { name: "Tattoo Studios", href: "/business/tattoo-studios" },
  { name: "Tanning Salons", href: "/business/tanning-salons" },
  { name: "Beauty Salons", href: "/business/beauty-salons" },
  { name: "Estheticians", href: "/business/estheticians" },
  { name: "Lash & Brow Studios", href: "/business/lash-brow-studios" },
];

export default function ExploreBusinessType() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 text-gray-900 dark:text-gray-50">
          Explore Mangomint by business type…
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {businessTypes.map((type) => (
            <Link key={type.name} href={type.href} passHref>
              <Card className="h-full transition-all hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                <CardContent className="flex items-center justify-center p-6 h-full">
                  <p className="text-base font-medium text-center text-gray-700 dark:text-gray-300">{type.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
