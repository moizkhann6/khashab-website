import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import HeroSlider from "@/components/HeroSlider";
import ScrollytellingSection from "@/components/ScrollytellingSection";

const homeServicesTeaser = [
  { title: "Bespoke Doors", image: "/images/residential.jpg", desc: "Solid pivot and flush interior doors built to custom specs.", href: "/services#doors" },
  { title: "Premium Windows", image: "/images/commercial.jpg", desc: "Climate-adapted timber windows with dual-seal barriers.", href: "/services#windows" },
  { title: "Bespoke Kitchens", image: "/images/residential.jpg", desc: "Handle-less luxury cabinetry with moisture-resistant cores.", href: "/services#kitchens" },
  { title: "Custom Wardrobes", image: "/images/residential.jpg", desc: "Seamless integrated dressings and built-in closet units.", href: "/services#wardrobes" },
  { title: "Luxury Closets", image: "/images/residential.jpg", desc: "High-end storage units featuring leather linings and custom lights.", href: "/services#closets" },
  { title: "Bespoke Bedrooms", image: "/images/residential.jpg", desc: "Bed frames, nightstands, and panelings matched to your space.", href: "/services#bedrooms" },
  { title: "Office Furniture", image: "/images/commercial.jpg", desc: "Acoustic panels and monolithic desks built to CAD spec.", href: "/services#office-furniture" },
  { title: "Custom Furniture", image: "/images/commercial.jpg", desc: "Unique wood icons designed to bring joy and beauty to spaces.", href: "/services#general-furniture" },
];

const partners = [
  { name: "Ministry of Health", role: "MOH Compliance Approved" },
  { name: "ROSHN", role: "Giga-Project Partner" },
  { name: "Dar Al Arkan", role: "Real Estate Supplier" },
  { name: "Diriyah Gate Authority", role: "Joinery Consultant" },
  { name: "National Housing Co.", role: "Door Manufacturer" },
  { name: "KFSHRC", role: "Clinical Casework Client" },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. Hero Image Slider */}
      <HeroSlider />

      {/* 2. Brand Story Summary */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
                Est. 2015 / Riyadh, KSA
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif text-primary leading-tight">
                Shaping Customer Visions Into Premium Wood Icons
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-stone-600 font-light text-base leading-relaxed">
                Founded in Riyadh in 2015, KhashabSA is committed to achieving the customer's vision by shaping products 
                to desired specifications in record time and at highly competitive prices. We design and manufacture 
                unique, high-end wood icons that bring beauty and joy to spaces.
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                Operating from Riyadh's Second Industrial City, our ISO 9001:2015 certified plant blends advanced CNC precision with artisanal carpentry, serving as the first choice for architectural and clinical woodwork in Saudi Arabia.
              </p>
              <div className="pt-4">
                <Link href="/about" className="text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors duration-200 link-underline">
                  Read Our Story & Differentiators &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products & Services Section (With Visual Grid) */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Products
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary">
              Premium Wood Manufacturing
            </h2>
            <p className="text-stone-500 font-light text-sm mt-2">
              From doors and windows to luxury bespoke closets, kitchens, and office fit-outs, we shape timber to your precise specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeServicesTeaser.map((service, idx) => (
              <div key={idx} className="card-2d flex flex-col group h-full">
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100 border-b border-stone-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-500 font-light text-xs leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>
                  <Link href={service.href} className="text-[10px] font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors link-underline self-start">
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Scrollytelling Section */}
      <section className="bg-sand-light py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Manufacturing Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary">
              The Art of Bespoke Carpentry
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              Scroll down to witness how our Riyadh plant translates raw sustainable lumber into highly engineered, unique wood icons.
            </p>
          </div>

          <ScrollytellingSection />
        </div>
      </section>

      {/* 5. Healthcare Specialty Parallax Section */}
      <section className="relative h-[550px] bg-fixed bg-cover bg-center flex items-center border-b border-stone-900" style={{ backgroundImage: "url('/images/healthcare.jpg')" }}>
        {/* Parallax Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl bg-white p-8 lg:p-12 border border-stone-200">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Healthcare Specialty
            </span>
            <h2 className="text-3xl font-serif text-primary leading-tight mb-4">
              First Option for Wood Products in Saudi Healthcare Facilities
            </h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed mb-8">
              We design and engineer specialized wood fittings matching strict Ministry of Health standards: moisture resistant, bacteria resistant, fire resistant, and easy to sterilize and clean.
            </p>
            <div className="flex gap-4">
              <Link href="/healthcare" className="btn-primary">
                View Clinical specs
              </Link>
              <span className="text-[10px] font-bold text-accent border border-stone-200 px-3 py-2 uppercase tracking-widest self-center bg-stone-50">
                MOH Approved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Portfolio Showcase Gallery */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Featured Portfolio
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4">
              Our High-End Projects
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              Explore a curated selection of our healthcare, commercial, and residential installations completed across Saudi Arabia.
            </p>
          </div>

          <ImageGallery />
        </div>
      </section>

      {/* 7. Partners & Clients Section */}
      <section className="bg-sand-light py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Networks
            </span>
            <h2 className="text-3xl font-serif text-primary">
              Trusted B2B Collaborators
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              We supply custom woodwork and certified doors to leading developers and public institutions in Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 p-6 flex flex-col justify-center items-center text-center h-28 hover:border-accent transition-colors duration-200"
              >
                <span className="font-serif text-sm font-semibold tracking-wider text-stone-850 uppercase block mb-1">
                  {partner.name}
                </span>
                <span className="text-[9px] font-light text-stone-400 uppercase tracking-widest block">
                  {partner.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Trust Banner / RFQ Link */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <h3 className="text-xl lg:text-2xl font-serif text-white mb-2">
              Ready to specify KhashabSA for your next project?
            </h3>
            <p className="text-stone-400 font-light text-sm">
              We provide architects, designers, and general contractors with full technical CAD details and material specs.
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-stone-900 border-white hover:bg-[#c59b6d] hover:border-[#c59b6d] hover:text-white shrink-0">
            Submit RFQ / Spec Request
          </Link>
        </div>
      </section>
    </div>
  );
}

