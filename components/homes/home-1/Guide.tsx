import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import Section from "./Section";

export default function Guide() {
  return (
    <Section
      id="guide"
      name="Free guide"
      title={
        <>
          Your free confidence
          <br />
          starter guide
        </>
      }
      intro="A short, gentle workbook with five daily practices to quiet self-doubt and start showing up, whatever your day looks like."
    >
      <div className="coach-card animate-in-up">
        <span className="coach-badge">Free PDF · 8 pages</span>
        <h3>5 small shifts to feel more confident this week</h3>
        <ul>
          <li>Spot the thoughts that hold you back</li>
          <li>A 3-minute reset for anxious moments</li>
          <li>Scripts for speaking up without the dread</li>
        </ul>
        <HoverCursorEffect
          as="a"
          className="btn btn-default hover-default"
          href="/confidence-guide.pdf"
          download
        >
          <span className="btn-caption">Download the free guide</span>
        </HoverCursorEffect>
      </div>
    </Section>
  );
}
