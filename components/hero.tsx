import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
                Everything you need to manage and grow your salon or spa
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                Mangomint is the all-in-one platform that helps you save time, impress clients, and make more money.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="secondary" size="lg">
                Watch a video tour
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <img
              alt="Product Mockup 1"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="300"
              src="https://via.placeholder.com/400x300"
              width="400"
            />
            <img
              alt="Product Mockup 2"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="300"
              src="https://via.placeholder.com/400x300"
              width="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
