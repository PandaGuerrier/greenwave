import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#ui/components/accordion"

export default function FAQSection() {

  const faq = [
    {
      question: "Why us ?",
      answer: "We prioritize your privacy and security above all else. Our platform is designed to ensure that your personal information remains confidential while providing top-notch service quality. And our servers are 100% powered by renewable energy sources.",
    },
    {
      question: "Our data are secure ?",
      answer: "Absolutely. We implement advanced security measures to protect your data from unauthorized access. Your information is encrypted and stored securely, ensuring that only you have access to it.",
    },
    {
      question: "How much time to have my product ?",
      answer: "In general, your product has come in seconds, if not please <a href='/contact' class='text-blue-600 underline'>contact us</a>.",
    },
    {
      question: "How to contact you ?",
      answer: "You can reach us through our <a href='/contact' class='text-blue-600 underline'>contact page</a>. We are here to assist you with any questions or concerns you may have.",
    }
  ]

  return (
    <section className="mt-24 md:w-2/3 mx-auto px-5" id="features">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            Find answers to common questions about our services and offerings.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    </section>
  )
}
