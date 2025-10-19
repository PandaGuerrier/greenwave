import HeroSection from '#home/ui/components/hero'
import FeatureSection from '#home/ui/components/feature'
import FooterSection from '#home/ui/components/footer'
import FAQSection from '#home/ui/components/faq'
import AppLayout from '#common/ui/components/app_layout'

export default function HomePage() {
  return (
    <>
      <AppLayout layout={'header'} breadcrumbs={[]}>
        <div className="w-screen">
          <div className="flex flex-col space-y-12 pt-16 min-h-screen">
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
      </AppLayout>
    </>
  )
}
