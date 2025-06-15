export default function SocialProofBanner() {
  const logos = Array(10).fill("https://via.placeholder.com/100x50?text=Client+Logo");

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
            #1 highest-rated by thousands of salons and spas
          </h2>
        </div>
        <div className="mt-8 overflow-hidden">
          <div className="animate-scroll flex space-x-8">
            {logos.map((logoSrc, index) => (
              <img
                key={index}
                src={logoSrc}
                alt={`Client Logo ${index + 1}`}
                className="h-12 object-contain" // Adjusted height for better visual
              />
            ))}
            {/* Duplicate logos for seamless scroll */}
            {logos.map((logoSrc, index) => (
              <img
                key={`duplicate-${index}`}
                src={logoSrc}
                alt={`Client Logo ${index + 1}`}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Scroll by half the width (since logos are duplicated) */
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite; /* Adjust duration as needed */
          width: max-content; /* Ensure the container is wide enough for all logos */
        }
      `}</style>
    </section>
  );
}
