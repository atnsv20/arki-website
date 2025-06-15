import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ValueProp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              Why We’re Different
            </h2>
            <p className="text-lg text-blue-600 md:text-xl dark:text-blue-400 font-semibold">
              Salon and spa software, finally done right
            </p>
          </div>
          <p className="max-w-[700px] text-gray-600 md:text-lg dark:text-gray-400">
            Tired of clunky, outdated software? Mangomint is designed with you in mind. Our intuitive platform is
            packed with powerful features, backed by award-winning customer support, and fairly priced. We're
            constantly innovating to bring you the best tools to manage and grow your business.
          </p>
          <Link href="/why-mangomint" passHref>
            <Button size="lg">
              Learn more about why we're different
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
