import FadeIn from "@/components/FadeIn";

export default function Testimonials() {
  return (
    <section className="py-40 relative">
      <div className="px-margin-desktop max-w-container-max mx-auto text-center">
        <FadeIn>
          <span className="font-label-caps text-label-caps text-primary tracking-[0.3em]">
            VOICES OF DISTINCTION
          </span>
        </FadeIn>
        <div className="mt-20 relative px-20">
          <FadeIn delay={0.2} className="transition-all duration-700 ease-in-out" id="testimonial-container">
            <blockquote className="font-display-sm text-display-sm leading-relaxed max-w-4xl mx-auto italic">
              "Lumina didn't just build a house; they curated an experience. The
              attention to detail is bordering on obsessive, which is exactly
              what we required."
            </blockquote>
            <cite className="block mt-10 font-label-caps text-label-caps text-primary not-italic tracking-widest">
              — ALEXANDER VANCE, CEO OF NEXUS GLOBAL
            </cite>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
