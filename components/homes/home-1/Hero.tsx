import HoverCursorEffect from "@/components/animation/HoverCursorEffect";

// Splits a line into words and letters so each letter can animate in on its own.
function AnimatedLine({
  text,
  start,
  accent = false,
}: {
  text: string;
  start: number;
  accent?: boolean;
}) {
  let i = start;
  return (
    <span className={accent ? "coach-line coach-line-accent" : "coach-line"} aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span key={w} className="coach-word">
          {word.split("").map((ch, c) => (
            <span
              key={c}
              className="coach-letter"
              style={{ animationDelay: `${0.25 + i++ * 0.045}s` }}
            >
              {ch}
            </span>
          ))}
          {" "}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="main home">
      <div className="main__intro">
        <div className="container-fluid p-0 fullheight-desktop">
          <div className="row g-0 fullheight-desktop align-items-xl-stretch">
            <div className="col-12 col-xl-2" />
            <div className="col-12 col-xl-8 fullheight-desktop">
              <div
                id="headline"
                className="headline d-flex align-items-start flex-column loading-wrap"
              >
                <p
                  className="headline__subtitle space-bottom coach-subtitle"
                >
                  Ella · Confidence &amp; Mindset Coach
                </p>
                <h1
                  className="headline__title coach-title"
                  aria-label="Stop doubting yourself. Start showing up."
                >
                  <AnimatedLine text="Stop doubting yourself." start={0} />
                  <br />
                  <AnimatedLine text="Start showing up." start={23} accent />
                </h1>
                <div
                  className="headline__btn coach-fade-btn"
                >
                  <HoverCursorEffect
                    as="a"
                    className="btn btn-default hover-default"
                    href="#guide"
                  >
                    <span className="btn-caption">Get the free guide</span>
                  </HoverCursorEffect>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
      </div>
      <div className="main__media media-grid-bottom">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2" />
            <div className="col-12 col-xl-8">
              <div className="content__block">
                <div
                  className="divider divider-image main-image-1 coach-fade-image"
                />
              </div>
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
