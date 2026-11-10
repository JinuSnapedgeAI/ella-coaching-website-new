import Image from "next/image";
import data from "@/data/coach.json";
import Section from "./Section";

export default function Program() {
  return (
    <Section
      id="program"
      name="The program"
      title={
        <>
          Six weeks to
          <br />
          show up as you
        </>
      }
      intro="One step at a time. Each week builds on the last, with 1:1 support so you never do this alone."
    >
      <Image
        className="coach-art coach-art-wide animate-in-up"
        src="/img/art/journey.svg"
        alt="Six stepping stones rising toward the sun, one for each week of the program"
        unoptimized
        width={1400}
        height={420}
      />
      <div className="row coach-row">
        {data.program.map((w) => (
          <div key={w.week} className="col-12 col-md-6 animate-in-up">
            <div className="coach-card">
              <span className="coach-week">{w.week}</span>
              <h4>{w.title}</h4>
              <p className="type-basic-160lh">{w.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
