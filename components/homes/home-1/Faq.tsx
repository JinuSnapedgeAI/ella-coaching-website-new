import data from "@/data/coach.json";
import Section from "./Section";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data.faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <Section id="faq" name="FAQ" title={<>Questions, answered</>}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="coach-faq">
        {data.faq.map((f) => (
          <details key={f.q} className="coach-card animate-in-up">
            <summary>
              <h3>{f.q}</h3>
            </summary>
            <p className="type-basic-160lh">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
