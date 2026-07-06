export default function Footer() {
  return (
    <footer id="contact" className="w-full relative bottom-0 bg-surface dark:bg-surface border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop py-32 w-full max-w-container-max mx-auto relative z-10">
        <div className="col-span-12 md:col-span-4">
          <div className="font-display-sm text-display-sm text-primary mb-8">
            LUMINA
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Crafting the world&apos;s most exclusive residential environments since
            2015.
          </p>
          <div className="mt-12 flex gap-4">
            <a
              className="w-10 h-10 glass-panel flex items-center justify-center rounded-none hover:bg-primary/20 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">
                public
              </span>
            </a>
            <a
              className="w-10 h-10 glass-panel flex items-center justify-center rounded-none hover:bg-primary/20 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">
                share
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-primary mb-8">
            SERVICES
          </h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Architecture
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Developments
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Investors
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-primary mb-8">
            COMPANY
          </h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h4 className="font-label-caps text-label-caps text-primary mb-8">
            SUBSCRIBE
          </h4>
          <div className="relative border-b border-white/20 pb-2">
            <input
              className="bg-transparent border-none w-full font-label-caps text-label-caps focus:ring-0 text-on-surface p-0 placeholder:text-on-surface/20 outline-none"
              placeholder="YOUR EMAIL ADDRESS"
              type="email"
            />
            <button className="absolute right-0 bottom-2 text-primary font-label-caps text-label-caps cursor-pointer">
              JOIN
            </button>
          </div>
          <p className="mt-4 text-[10px] font-label-caps text-on-surface/30">
            By joining, you agree to receive our quarterly journal of
            architectural excellence.
          </p>
        </div>
        <div className="col-span-12 mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-label-caps text-[10px] text-on-surface-variant">
            &copy; {new Date().getFullYear()} LUMINA LUXURY BUILDERS. ALL RIGHTS RESERVED.
          </div>
          <div className="font-display-lg text-display-lg uppercase tracking-tighter text-shimmer pointer-events-none select-none text-[8rem] md:text-[12rem] leading-none opacity-20">
            LUMINA
          </div>
        </div>
      </div>
    </footer>
  );
}
