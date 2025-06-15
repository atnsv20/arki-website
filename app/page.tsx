import Hero from "@/components/hero";
import MiniFeatureSnapshot from "@/components/mini-feature-snapshot";
import SocialProofBanner from "@/components/social-proof-banner";
import ValueProp from "@/components/value-prop";
import CustomerStories from "@/components/customer-stories";
import ExploreBusinessType from "@/components/explore-business-type";
import ExploreFeatureFamily from "@/components/explore-feature-family";
import ConversionBand from "@/components/conversion-band";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <MiniFeatureSnapshot />
      <SocialProofBanner />
      <ValueProp />
      <CustomerStories />
      <ExploreBusinessType />
      <ExploreFeatureFamily />
      <ConversionBand />
      <Footer />
    </main>
  );
}
