import FadeIn from "@/components/FadeIn";

export default function Philosophy() {
  return (
    <section id="about" className="py-40 bg-surface-container-lowest overflow-hidden">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        <FadeIn delay={0.3} direction="right" className="relative order-2 md:order-1">
          <div className="aspect-square w-full glass-panel flex items-center justify-center p-8">
            <div
              className="w-full h-full opacity-60"
              id="animated-svg-ANIMATION_3"
              style={{ display: "block" }}
            >
              <svg
                fill="none"
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="blueprint-path"
                  d="M100 500V100H700V500H100ZM100 200H700M400 100V500M200 100V500M600 100V500M100 350H700"
                  stroke="#D4AF37"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="3s"
                    fill="freeze"
                    from="1000"
                    to="0"
                  ></animate>
                </path>
                <circle cx="400" cy="300" fill="#D4AF37" opacity="0.5" r="10">
                  <animate
                    attributeName="r"
                    dur="2s"
                    repeatCount="indefinite"
                    values="10;15;10"
                  ></animate>
                </circle>
              </svg>
            </div>
            <div className="absolute top-0 right-0 p-8">
              <span className="font-label-caps text-on-surface/20 text-[64px]">
                01
              </span>
            </div>
          </div>
        </FadeIn>
        
        <div className="order-1 md:order-2">
          <FadeIn>
            <span className="font-label-caps text-label-caps text-primary tracking-[0.3em]">
              THE BLUEPRINT
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display-lg text-display-lg mt-6 leading-tight">
              Engineering Beyond Limits
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-8">
              Our philosophy is rooted in the convergence of structural integrity
              and aesthetic purity. Every Lumina build utilizes proprietary
              carbon-reinforced frameworks and smart glass technology to ensure
              your legacy withstands the tests of time and climate.
            </p>
          </FadeIn>
          
          <ul className="mt-12 space-y-6">
            <FadeIn delay={0.3} direction="up">
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  architecture
                </span>
                <span className="font-label-caps text-label-caps">
                  Generative Structural Design
                </span>
              </li>
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
                <span className="font-label-caps text-label-caps">
                  Net-Zero Carbon Certification
                </span>
              </li>
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  diamond
                </span>
                <span className="font-label-caps text-label-caps">
                  Rare Material Procurement
                </span>
              </li>
            </FadeIn>
          </ul>
        </div>
      </div>
    </section>
  );
}
