import FadeIn from "@/components/FadeIn";

export default function BentoGrid() {
  return (
    <section id="projects" className="py-32 px-margin-desktop max-w-container-max mx-auto">
      <div className="flex justify-between items-end mb-20">
        <FadeIn>
          <span className="font-label-caps text-label-caps text-primary tracking-[0.3em]">
            FEATURED WORKS
          </span>
          <h2 className="font-display-sm text-display-sm mt-4">
            Cinematic Architectural Narratives
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a
            className="font-label-caps text-label-caps border-b border-primary pb-1"
            href="#"
          >
            VIEW ALL MASTERPIECES
          </a>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[900px]">
        {/* Large Card */}
        <div className="md:col-span-8 group relative overflow-hidden bento-card">
          <FadeIn className="w-full h-full">
            <img
              alt="The Azure Coast Estate"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="/images/azure-coast.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-12 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <span className="font-label-caps text-label-caps text-primary">
                MALIBU, CA
              </span>
              <h3 className="font-display-sm text-display-sm mt-2">
                The Azure Coast Estate
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4">
                A glass-fronted sanctuary where the infinity edge meets the horizon
                line.
              </p>
            </div>
          </FadeIn>
        </div>
        {/* Tall Card */}
        <div className="md:col-span-4 group relative overflow-hidden bento-card">
          <FadeIn delay={0.2} className="w-full h-full">
            <img
              alt="Skyline Penthouse"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="/images/skyline-penthouse.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <span className="font-label-caps text-label-caps text-primary">
                MANHATTAN, NY
              </span>
              <h3 className="font-headline-lg text-headline-lg mt-2">
                Skyline Penthouse
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4">
                Vertical luxury redefined for the urban visionary.
              </p>
            </div>
          </FadeIn>
        </div>
        {/* Wide Card */}
        <div className="md:col-span-12 group relative h-[400px] overflow-hidden bento-card">
          <FadeIn delay={0.4} className="w-full h-full">
            <img
              alt="Emerald Bay Villa"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="/images/emerald-bay.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-12 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full flex justify-between items-end pointer-events-none">
              <div>
                <span className="font-label-caps text-label-caps text-primary">
                  MIAMI, FL
                </span>
                <h3 className="font-display-sm text-display-sm mt-2">
                  Emerald Bay Villa
                </h3>
              </div>
              <button className="bg-primary/20 backdrop-blur-md border border-primary/30 px-8 py-3 font-label-caps text-label-caps text-primary pointer-events-auto cursor-pointer">
                VIEW DETAILS
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
