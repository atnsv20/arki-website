import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ConversionBand() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-blue-600 dark:bg-blue-700 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Find out if Mangomint is right for you
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/demo" passHref>
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-200">
                Book a live demo
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 dark:border-gray-300 dark:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-blue-700">
                Try it now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
