import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Products() {

const navigate = useNavigate()
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative text-primary-foreground py-32 md:py-48"
        style={{
          backgroundImage: "url('/ct-scanner-mri-medical-imaging-equipment.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/85 to-primary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Comprehensive range of medical equipment across three major categories
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Imaging Category */}
          <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/ct-scanner-mri-medical-imaging-equipment.jpg"
              alt="Imaging Equipment"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Imaging Equipment</h2>
              <div className="space-y-4 mb-8">
                {["C-Arm Systems", "CT Scanners", "X-Ray Systems", "Ultrasound Devices"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-lg text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Advanced imaging solutions for accurate diagnostics and patient care. Our portfolio includes
                cutting-edge technology from leading manufacturers worldwide.
              </p>
              <button 
                className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors cursor-pointer"
                 onClick={() => {
                  navigate("/catalog")
                   }}
                >
                Request Quote
              </button>
            </div>
          </div>

          {/* IVD Category */}
          <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">IVD (In-Vitro Diagnostics)</h2>
              <div className="space-y-4 mb-8">
                {["Hematology Analyzer", "Chemistry Analyzer", "CLIA Certified Systems"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-lg text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Laboratory diagnostic equipment for precise testing and analysis. All systems are CLIA certified and
                meet international quality standards.
              </p>
              <button 
                className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors cursor-pointer"
                 onClick={() => {
                  navigate("/catalog")
                   }}
                >
                Request Quote
              </button>
            </div>
            <img
              src="/laboratory-analyzer-centrifuge-microscope.jpg"
              alt="IVD Equipment"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          {/* PMLS Category */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/surgical-operating-room-equipment-instruments.jpg"
              alt="PMLS Equipment"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">PMLS (Patient Monitoring & Life Support)</h2>
              <div className="space-y-4 mb-8">
                {["Anesthesia Machines", "Ventilators", "Surgical Lights"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-lg text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Critical life support and monitoring equipment for operating rooms and patient care units. Reliable
                performance when it matters most.
              </p>
              <button 
                className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors cursor-pointer"
                 onClick={() => {
                  navigate("/catalog")
                   }}
                >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
