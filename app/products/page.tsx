import type { Metadata } from "next"
import { ShoppingCart, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Products - MedEquip Pro",
  description: "Browse our comprehensive catalog of medical equipment for import and export",
}

export default function Products() {
  const categories = [
    {
      name: "Imaging Equipment",
      description: "Advanced medical imaging and diagnostic solutions",
      image: "/ct-scanner-mri-medical-imaging-equipment.jpg",
      products: ["C-Arm Systems", "CT Scanners", "X-Ray Systems", "Ultrasound Devices"],
      benefits: "Comprehensive imaging solutions for accurate patient diagnosis",
    },
    {
      name: "IVD (In-Vitro Diagnostics)",
      description: "Laboratory analysis and diagnostic testing equipment",
      image: "/laboratory-analyzer-centrifuge-microscope.jpg",
      products: ["Hematology Analyzer", "Chemistry Analyzer", "CLIA Certified Systems"],
      benefits: "Accurate and rapid laboratory diagnostic testing",
    },
    {
      name: "PMLS (Patient Monitoring & Life Support)",
      description: "Critical care and surgical support systems",
      image: "/hospital-bed-patient-monitor-ventilator.jpg",
      products: ["Anesthesia Machines", "Ventilators", "Surgical Lights"],
      benefits: "Essential patient monitoring and life support capabilities",
    },
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Medical Equipment Catalog</h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl">
            Explore our extensive range of premium medical equipment from leading manufacturers worldwide
          </p>
        </div>
      </section>

      {/* Product Categories with Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Product Image */}
                <div className="flex-1 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-3">{category.name}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{category.description}</p>

                  {/* Benefits Badge */}
                  <div className="bg-secondary/10 border-l-4 border-secondary px-4 py-3 rounded mb-6">
                    <p className="text-secondary font-semibold">{category.benefits}</p>
                  </div>

                  {/* Product List */}
                  <div className="space-y-3 mb-6">
                    <p className="font-semibold text-foreground">Available Products:</p>
                    {category.products.map((product, pidx) => (
                      <div key={pidx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{product}</span>
                      </div>
                    ))}
                  </div>

                  <button className="px-6 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Our Products Stand Out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Quality",
                description: "All products meet international quality standards and certifications",
              },
              {
                title: "Latest Technology",
                description: "Access to cutting-edge medical equipment and innovations",
              },
              {
                title: "Competitive Pricing",
                description: "Best market prices without compromising on quality",
              },
              {
                title: "Warranty & Support",
                description: "Comprehensive warranties and technical support included",
              },
              {
                title: "Fast Availability",
                description: "Quick delivery with express shipping options available",
              },
              {
                title: "Customization",
                description: "Tailored solutions to match your specific requirements",
              },
            ].map((highlight, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Looking for Specific Equipment?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We can source virtually any medical equipment. Contact our team for custom requests or bulk orders.
          </p>
          <button className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Request Quote
          </button>
        </div>
      </section>
    </main>
  )
}
