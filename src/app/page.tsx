import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Story Summary Section */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
                Est. 2015 / Riyadh, KSA
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif text-primary leading-tight">
                Engineering Saudi Woodwork for Over a Decade
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-stone-600 font-light text-base leading-relaxed">
                Founded in Riyadh in 2015, KhashabSA set out to bridge the gap between large-scale 
                industrial wood manufacturing and high-end bespoke craftsmanship. We operate a modern, 
                technologically-driven woodworking plant catering to private residences, commercial firms, 
                and clinical healthcare facilities.
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                As a proud local manufacturer, we contribute to Saudi Vision 2030 by training local talent, 
                adopting sustainable sourcing, and maintaining strict adherence to Saudi standards and 
                regulations.
              </p>
              <div className="pt-4">
                <Link href="/about" className="text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors duration-200 link-underline">
                  Read Our Full Story &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Gallery */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Featured Portfolio
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4">
              Our High-End Projects
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              Explore a curated selection of our healthcare, commercial, and residential installations 
              completed across Saudi Arabia.
            </p>
          </div>

          {/* Mount the Image Gallery component */}
          <ImageGallery />
        </div>
      </section>

      {/* Trust Banner (B2B focused) */}
      <section className="bg-stone-900 text-white py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <h3 className="text-xl lg:text-2xl font-serif text-white mb-2">
              Ready to specify KhashabSA for your next project?
            </h3>
            <p className="text-stone-400 font-light text-sm">
              We provide architects, designers, and general contractors with full technical CAD details and material specs.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-stone-900 border-white hover:bg-accent hover:border-accent hover:text-white shrink-0">
            Submit RFQ / Spec Request
          </Link>
        </div>
      </section>
    </div>
  );
}

