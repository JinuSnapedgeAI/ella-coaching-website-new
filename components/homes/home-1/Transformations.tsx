import data from "@/data/coach.json";
import Section from "./Section";

export default function Transformations() {
  return (
    <Section
      id="stories"
      name="Transformations"
      title={
        <>
          Before and after,
          <br />
          in their words
        </>
      }
      intro="Real change looks like small, brave moments adding up. Here is what it can look like."
    >
      <div className="row coach-row">
        {data.transformations.map((t) => (
          <div key={t.name} className="col-12 col-lg-4 animate-in-up">
            <div className="coach-card">
              <h4>{t.name}</h4>
              <p className="small" style={{ marginBottom: "2rem" }}>
                {t.role}
              </p>
              <div className="ba-before">
                <span className="ba-label">Before</span>
                <p>{t.before}</p>
              </div>
              <div className="ba-after">
                <span className="ba-label">After</span>
                <p>{t.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
