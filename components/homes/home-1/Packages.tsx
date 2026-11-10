import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import data from "@/data/coach.json";
import Section from "./Section";

export default function Packages() {
  return (
    <Section
      id="packages"
      name="Packages"
      title={
        <>
          Choose the support
          <br />
          that fits you
        </>
      }
      intro="Every package starts with a free 20-minute discovery call, so you can be sure it feels right."
    >
      <div className="row coach-row">
        {data.packages.map((p) => (
          <div key={p.name} className="col-12 col-lg-4 animate-in-up">
            <div className={"coach-card" + (p.featured ? " featured" : "")}>
              {p.featured && <span className="coach-badge">Most popular</span>}
              <i className={p.icon + " big"} />
              <h3>{p.name}</h3>
              <p className="coach-price">{p.price}</p>
              <p className="small">{p.note}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <HoverCursorEffect
                as="a"
                className="btn btn-default hover-default"
                href="#contact"
              >
                <span className="btn-caption">Get started</span>
              </HoverCursorEffect>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
