// import { CheckCircle } from "lucide-react"
import {
  CheckCircle,
  Settings,
  Zap,
  BookOpen,
  Box,
  ChevronRight,
} from "lucide-react"


const SERVICES = [
  {
    key: "installation",
    title: "Installation & Commissioning",
    description:
      "On-site setup, system integration, and final commissioning to ensure equipment is clinic-ready and operating to spec.",
    icon: Settings,
  },
  {
    key: "preventive",
    title: "Preventive Maintenance",
    description:
      "Planned maintenance programs and inspections designed to reduce unplanned downtime and prolong equipment life.",
    icon: Zap,
  },
  {
    key: "corrective",
    title: "Corrective Maintenance & Repairs",
    description:
      "Fast diagnostics and repairs by certified technicians, with spare part sourcing to restore operations quickly.",
   icon: Settings,
  },
  {
    key: "calibration",
    title: "Calibration & Performance Testing",
    description:
      "Precision calibration and verification services to meet regulatory standards and ensure accurate measurements.",
    icon: CheckCircle,
  },
  // {
  //   key: "consultancy",
  //   title: "Consultancy",
  //   description:
  //     "Technical and regulatory consulting for procurement planning, facility design, and compliance readiness.",
  //   icon: Layers,
  // },
  {
    key: "training",
    title: "Training & Technical Support",
    description:
      "Hands-on training and remote/in-person technical support to empower staff and improve uptime.",
    icon: BookOpen,
  },
  {
    key: "spares",
    title: "Spare Parts Supply",
    description:
      "Sourcing and logistics for genuine spare parts, with inventory planning to minimize mean-time-to-repair.",
    icon: Box,
  },
]

export default function Services() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative text-primary-foreground py-32 md:py-48"
        style={{
          backgroundImage: "url(/BaroyiService1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Comprehensive medical equipment solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Equipment Import",
                description:
                  "We source premium medical equipment from leading manufacturers worldwide and handle all logistics, customs, and compliance requirements.",
              },
              {
                title: "Equipment Export",
                description:
                  "Export your medical equipment globally with our expertise in international shipping, documentation, and regulatory compliance.",
              },
              {
                title: "Procurement Solutions",
                description:
                  "Customized procurement services to help healthcare facilities find exactly what they need at competitive prices.",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous testing and certification ensuring all equipment meets international standards and regulatory requirements.",
              },
              {
                title: "Supply Chain Management",
                description:
                  "End-to-end supply chain solutions ensuring timely delivery and optimal inventory management for your facility.",
              },
              {
                title: "Technical Support",
                description:
                  "Expert technical consultation and after-sales support for all equipment installations and maintenance.",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    

{/* Services Grid */}
{/* <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <header className="mb-8 text-center">
      <h2 className="text-3xl font-extrabold text-foreground">Services by Gilando</h2>
      <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
        Comprehensive lifecycle support for medical equipment — from installation to spare parts supply and
        specialist training.
      </p>
    </header>

    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          title: "Installation & Commissioning",
          description:
            "Professional on-site installation and commissioning to ensure equipment is set up correctly, integrated with existing systems, and ready for clinical use.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Scheduled inspections and preventive maintenance plans to minimize downtime and extend the lifetime of your equipment.",
        },
        {
          title: "Corrective Maintenance & Repairs",
          description:
            "Rapid fault diagnosis, repairs and parts replacement to restore equipment operation as quickly as possible.",
        },
        {
          title: "Calibration & Performance Testing",
          description:
            "Accurate calibration and performance verification services to meet regulatory standards and ensure reliable measurements.",
        },
        {
          title: "Consultancy",
          description:
            "Expert consultancy for procurement planning, regulatory compliance advice, facility planning and technical assessments.",
        },
        {
          title: "Training & Technical Support",
          description:
            "Hands-on user training and ongoing technical support for clinical and technical staff to maximize safe and efficient use.",
        },
        {
          title: "Spare Parts Supply",
          description:
            "Genuine spare parts sourcing and logistics to keep your inventory stocked and reduce mean-time-to-repair.",
        },
      ].map((service, idx) => (
        <div key={idx} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}


<section aria-labelledby="gilando-services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="gilando-services" className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Services by <span className="text-primary">Gilando</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Comprehensive lifecycle support for medical equipment — from installation and calibration to spare parts
            and specialized training. Trusted, fast and compliant.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.key}
                className="group relative rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-shadow transform will-change-transform hover:-translate-y-1 focus-within:-translate-y-1"
                aria-labelledby={`svc-${s.key}-title`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon badge */}
                  <div
                    className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/10 text-primary ring-1 ring-primary/10"
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 id={`svc-${s.key}-title`} className="text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-6 border-t border-border pt-4 flex items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground">Service ID: <span className="text-foreground font-mono text-xs ml-1">{s.key}</span></span>

                  <a
                    href={`/services/${s.key}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA Row */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Need a customized service plan or immediate assistance?{" "}
            <a
              href="/contact"
              className="inline-block ml-1 text-primary font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              Contact Gilando
            </a>
          </p>
        </div>
      </div>
    </section>


      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", description: "Understand your requirements" },
              { step: "2", title: "Sourcing", description: "Find the right equipment" },
              { step: "3", title: "Logistics", description: "Safe and timely delivery" },
              { step: "4", title: "Support", description: "Ongoing technical support" },
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
