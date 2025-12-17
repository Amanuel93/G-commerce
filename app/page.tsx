import Link from "next/link"
import { ArrowRight, Package, Globe, ShieldCheck, Users, Zap, TrendingUp, Award } from "lucide-react"

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section with Background */}
      <section
        className="relative text-primary-foreground py-32 md:py-48 overflow-hidden"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1400&query=modern medical equipment facility hospital)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                Premium Medical Equipment Solutions
              </h1>
              <p className="text-xl opacity-95 mb-8 text-balance leading-relaxed">
                We connect healthcare providers worldwide with top-quality medical equipment. Trusted by hospitals and
                clinics globally since 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Explore Products <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground rounded-lg font-semibold transition-colors border border-primary-foreground/30"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section with Carousel Animation */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Leading Organizations</h2>
            <p className="text-lg text-muted-foreground">Partners in healthcare excellence across the globe</p>
          </div>

          <style>{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / 2));
              }
            }
            .carousel-container {
              display: flex;
              gap: 24px;
              animation: slide 40s linear infinite;
            }
            .carousel-container:hover {
              animation-play-state: paused;
            }
            .carousel-item {
              flex-shrink: 0;
              display: flex;
              gap: 24px;
            }
            .partner-card {
              flex-shrink: 0;
              width: 250px;
            }
          `}</style>

          <div className="overflow-hidden">
            <div className="carousel-container">
              {/* First set of partners */}
              {[
                {
                  name: "Global Health Partners",
                  initials: "GH",
                  color: "from-blue-600 to-blue-400",
                  image: "/healthcare-company-logo.png",
                },
                {
                  name: "Medical Care Int.",
                  initials: "MC",
                  color: "from-green-600 to-green-400",
                  image: "/medical-international-logo.jpg",
                },
                {
                  name: "Healthcare Plus",
                  initials: "HP",
                  color: "from-purple-600 to-purple-400",
                  image: "/healthcare-plus-logo.jpg",
                },
                {
                  name: "ProMedical Solutions",
                  initials: "PM",
                  color: "from-red-600 to-red-400",
                  image: "/medical-solutions-logo.jpg",
                },
                {
                  name: "HealthTech Systems",
                  initials: "HT",
                  color: "from-indigo-600 to-indigo-400",
                  image: "/health-technology-logo.jpg",
                },
                {
                  name: "MediConnect Global",
                  initials: "MC",
                  color: "from-teal-600 to-teal-400",
                  image: "/medical-connect-logo.jpg",
                },
              ].map((partner, idx) => (
                <div
                  key={`first-${idx}`}
                  className="partner-card bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-48 hover:shadow-2xl transition-shadow border border-border cursor-pointer"
                >
                  <img
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white shadow-md"
                  />
                  <p className="text-sm font-semibold text-foreground text-center">{partner.name}</p>
                </div>
              ))}

              {/* Duplicate set for seamless infinite loop */}
              {[
                {
                  name: "Global Health Partners",
                  initials: "GH",
                  color: "from-blue-600 to-blue-400",
                  image: "/healthcare-company-logo.png",
                },
                {
                  name: "Medical Care Int.",
                  initials: "MC",
                  color: "from-green-600 to-green-400",
                  image: "/medical-international-logo.jpg",
                },
                {
                  name: "Healthcare Plus",
                  initials: "HP",
                  color: "from-purple-600 to-purple-400",
                  image: "/healthcare-plus-logo.jpg",
                },
                {
                  name: "ProMedical Solutions",
                  initials: "PM",
                  color: "from-red-600 to-red-400",
                  image: "/medical-solutions-logo.jpg",
                },
                {
                  name: "HealthTech Systems",
                  initials: "HT",
                  color: "from-indigo-600 to-indigo-400",
                  image: "/health-technology-logo.jpg",
                },
                {
                  name: "MediConnect Global",
                  initials: "MC",
                  color: "from-teal-600 to-teal-400",
                  image: "/medical-connect-logo.jpg",
                },
              ].map((partner, idx) => (
                <div
                  key={`second-${idx}`}
                  className="partner-card bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-6 flex flex-col items-center justify-center min-h-48 hover:shadow-2xl transition-shadow border border-border cursor-pointer"
                >
                  <img
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white shadow-md"
                  />
                  <p className="text-sm font-semibold text-foreground text-center">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose MedEquip Pro?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive medical equipment solutions with unmatched service and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assured",
                description: "All equipment certified and compliance-checked",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "International shipping to 150+ countries",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated team of medical professionals",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Expedited shipping available worldwide",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 text-primary-foreground"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=400&width=1400&query=medical laboratory equipment advanced technology)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Countries Served", icon: Globe },
              { number: "10K+", label: "Healthcare Facilities", icon: Package },
              { number: "500+", label: "Team Members", icon: Users },
              { number: "99.8%", label: "Delivery Success Rate", icon: TrendingUp },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx}>
                  <Icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hospital Network Expansion",
                description:
                  "Helped a 50-hospital network in Southeast Asia expand their diagnostic capabilities with modern imaging equipment.",
                result: "40% reduction in patient wait times",
              },
              {
                title: "Rural Clinic Modernization",
                description: "Provided affordable, high-quality surgical equipment to 100 rural clinics across Africa.",
                result: "Surgeries increased by 300%",
              },
              {
                title: "Emergency Response Setup",
                description: "Rapidly deployed emergency medical equipment to disaster relief centers in record time.",
                result: "Lives saved: 5,000+",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                  <h3 className="font-bold text-lg text-foreground">{story.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-secondary font-semibold">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Partner with Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your medical equipment needs
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
          >
            Start Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
