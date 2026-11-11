import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="logo loading__fade fade-in"
      data-duration="1.2"
      data-delay="300"
    >
      <a href="#home" className="logo__link" aria-label="Ella – Confidence & Mindset Coach, home">
        <Image
          className="logo__image"
          src="/img/logo.png"
          alt="Ella – Confidence & Mindset Coach"
          width={912}
          height={601}
          priority
        />
      </a>
    </div>
  );
}
