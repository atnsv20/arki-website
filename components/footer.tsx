import Link from "next/link";

const footerLinks = {
  platform: [
    { name: "Why Mangomint", href: "/why-mangomint" },
    { name: "Pricing", href: "/pricing" },
    { name: "Book a Demo", href: "/demo" },
  ],
  businessTypes: [
    { name: "Hair Salons", href: "/business/hair-salons" },
    { name: "Med Spas", href: "/business/med-spas" },
    { name: "Nail Salons", href: "/business/nail-salons" },
    // Add more as needed
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "API Documentation", href: "/developers" },
  ],
  features: [
    { name: "Online Booking", href: "/features/online-booking" },
    { name: "Payments", href: "/features/payments" },
    { name: "Marketing", href: "/features/marketing" },
    // Add more as needed
  ],
};

const socialMedia = [
  { name: "Facebook", href: "https://facebook.com/mangomint", iconPlaceholder: "FB" },
  { name: "Instagram", href: "https://instagram.com/mangomintapp", iconPlaceholder: "IG" },
  { name: "Twitter", href: "https://twitter.com/mangomint", iconPlaceholder: "TW" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-gray-900 text-gray-300 dark:bg-black dark:text-gray-400">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-semibold text-white dark:text-gray-200 mb-3">Platform</h5>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white dark:text-gray-200 mb-3">Business Types</h5>
            <ul className="space-y-2">
              {footerLinks.businessTypes.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white dark:text-gray-200 mb-3">Resources</h5>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white dark:text-gray-200 mb-3">Features</h5>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h5 className="font-semibold text-white dark:text-gray-200 mb-2">Integrations</h5>
              <Link href="/integrations" className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
                Browse Integrations
              </Link>
            </div>
            <div className="mt-4 sm:mt-0">
              <h5 className="font-semibold text-white dark:text-gray-200 mb-2 text-center sm:text-left">Follow Us</h5>
              <div className="flex space-x-4">
                {socialMedia.map((social) => (
                  <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
                    {social.iconPlaceholder} {/* Replace with actual icons later */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="/privacy" className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-100 dark:hover:text-gray-200 transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-center sm:text-right">&copy; {new Date().getFullYear()} Mangomint. Do something beautiful today.</p>
        </div>
      </div>
    </footer>
  );
}
