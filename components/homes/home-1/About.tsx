import Image from "next/image";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      name="About Ella"
      title={
        <>
          Hi, I’m Ella.
          <br />
          I’ve been where you are.
        </>
      }
    >
      <div className="row coach-row align-items-center">
        <div className="col-12 col-md-5 animate-in-up">
          <Image
            className="coach-art coach-portrait"
            src="/img/photos/about.webp"
            alt="Portrait of Ella, confidence and mindset coach"
            width={800}
            height={1000}
          />
        </div>
        <div className="col-12 col-md-7">
                <p className="type-basic-160lh animate-in-up coach-lead">
        I’m a confidence and mindset coach. I help thoughtful, capable people
        stop second-guessing themselves and start showing up in their work,
        their relationships and their own lives. My approach is warm, practical
        and never pushy: small steps, real tools and someone in your corner.
      </p>
        </div>
      </div>
    </Section>
  );
}
