import HeroSection from '#home/ui/components/hero'
import FeatureSection from '#home/ui/components/feature'
import FooterSection from '#home/ui/components/footer'
import FAQSection from '#home/ui/components/faq'
import Navbar from '#home/ui/components/navbar'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen ">

        <div className="flex pt-16 flex-col space-y-12 w-screen min-h-screen">
          <HeroSection/>
          <div id="features">
            <FeatureSection/>
          </div>
          <div id="faq">
            <FAQSection/>
          </div>
          <FooterSection/>
        </div>
      </div>
    </>
  )
}
