import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    portrait: "https://via.placeholder.com/100x100?text=Portrait",
    name: "Alex Johnson",
    business: "The Glow Spa",
    quote: "Mangomint has revolutionized how we manage our appointments!",
  },
  {
    portrait: "https://via.placeholder.com/100x100?text=Portrait",
    name: "Maria Rodriguez",
    business: "Serenity Salon",
    quote: "The online booking feature is a game-changer for our clients.",
  },
  {
    portrait: "https://via.placeholder.com/100x100?text=Portrait",
    name: "David Lee",
    business: "Urban Cuts Barbershop",
    quote: "Our revenue has increased thanks to the marketing tools.",
  },
  {
    portrait: "https://via.placeholder.com/100x100?text=Portrait",
    name: "Sarah Chen",
    business: "Nail Perfection Studio",
    quote: "Customer support is always responsive and incredibly helpful.",
  },
  {
    portrait: "https://via.placeholder.com/100x100?text=Portrait",
    name: "Michael Brown",
    business: "The Wellness Oasis",
    quote: "I love how intuitive and easy to use the platform is.",
  },
  {
    portrait: "https://via.placeholder.com/100x100?text=Portrait",
    name: "Jessica Williams",
    business: "Hair by Design",
    quote: "Switching to Mangomint was the best decision for our salon.",
  },
];

export default function CustomerStories() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 text-gray-900 dark:text-gray-50">
          Loved by businesses like yours
        </h2>
        <div className="overflow-hidden h-[400px] relative"> {/* Increased height to better show scroll */}
          <div className="animate-vertical-scroll space-y-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="w-full max-w-sm mx-auto"> {/* Added mx-auto for centering cards if container wider */}
                <CardHeader className="flex flex-row items-center space-x-4 p-4">
                  <img
                    alt={`${testimonial.name}'s portrait`}
                    src={testimonial.portrait}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">{testimonial.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.business}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate testimonials for seamless scroll */}
            {testimonials.map((testimonial, index) => (
              <Card key={`duplicate-${index}`} className="w-full max-w-sm mx-auto">
                <CardHeader className="flex flex-row items-center space-x-4 p-4">
                  <img
                    alt={`${testimonial.name}'s portrait`}
                    src={testimonial.portrait}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">{testimonial.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.business}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes vertical-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%); /* Scroll by half the height (since items are duplicated) */
          }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 40s linear infinite; /* Adjust duration as needed */
          /* Removed width: max-content; as it's not needed for vertical scroll with block elements */
        }
        .overflow-hidden { /* Mask the scrolling content */
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
