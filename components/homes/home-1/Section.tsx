import RevealText from "@/components/animation/RevealText";
import React from "react";

export default function Section({
  id,
  name,
  title,
  intro,
  children,
}: {
  id: string;
  name: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="inner inner-grid-bottom">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">{name}</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                <div className="content__block section-grid-text-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      {title}
                    </RevealText>
                    {intro && (
                      <p className="h2__text type-basic-160lh animate-in-up">
                        {intro}
                      </p>
                    )}
                  </div>
                </div>
                <div className="content__block grid-block">{children}</div>
              </div>
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
