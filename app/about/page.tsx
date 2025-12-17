import type { Metadata } from "next"
import { CheckCircle2, Award, Users, Globe, Briefcase, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - MedEquip Pro",
  description:
    "Learn about MedEquip Pro, our mission, and our commitment to excellence in medical equipment import and export",
}

export default function About() {
  return (
    <main className="w-full">
      {/* Header with Background */}
      <section
        className="relative text-primary-foreground py-32 md:py-40 overflow-hidden"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=500&width=1400&query=modern corporate medical company headquarters building)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-4">About MedEquip Pro</h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
            Pioneering medical equipment solutions for healthcare providers worldwide
          </p>
        </div>
      </section>

      {/* Mission & Vision with Background */}
      <section
        className="relative py-20 text-primary-foreground"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=400&width=1400&query=global healthcare network medical professionals)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/80 to-secondary/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg opacity-95 mb-4">
                To provide healthcare institutions worldwide with access to premium medical equipment at competitive
                prices, ensuring hospitals and clinics can deliver exceptional patient care without compromising on
                quality or affordability.
              </p>
              <p className="text-lg opacity-95">
                We believe that quality healthcare should be accessible globally, and we're committed to making that
                vision a reality.
              </p>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg opacity-95 mb-4">
                To become the leading trusted partner for medical equipment procurement across all continents, setting
                industry standards for quality, reliability, and customer service.
              </p>
              <p className="text-lg opacity-95">
                We envision a world where every healthcare facility has access to world-class medical equipment,
                regardless of their location or size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[
              {
                year: "2010",
                title: "Founded",
                description:
                  "MedEquip Pro was established with a mission to revolutionize medical equipment importing and exporting.",
              },
              {
                year: "2013",
                title: "Global Expansion",
                description:
                  "Expanded operations to 50 countries, establishing partnerships with leading hospitals and clinics.",
              },
              {
                year: "2017",
                title: "ISO Certification",
                description: "Achieved ISO 9001:2015 certification, ensuring world-class quality management standards.",
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description: "Launched advanced tracking and logistics platform for real-time shipment monitoring.",
              },
              {
                year: "2024",
                title: "Present Day",
                description: "Serving 150+ countries with a team of 500+ professionals and 30+ distribution centers.",
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  {idx !== 4 && <div className="w-1 h-24 bg-border" />}
                </div>
                <div>
                  <p className="text-secondary font-bold text-lg mb-1">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values with Background */}
      <section
        className="relative py-20 text-primary-foreground"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=400&width=1400&query=team collaboration trust partnership healthcare)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Integrity",
                description: "Honest, transparent dealings in every transaction",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Uncompromising commitment to quality standards",
              },
              {
                icon: HeartHandshake,
                title: "Partnership",
                description: "Long-term relationships built on trust and mutual success",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Positive contribution to healthcare accessibility worldwide",
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-primary-foreground/20 text-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="opacity-90">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Countries Served" },
              { number: "500+", label: "Team Members" },
              { number: "10K+", label: "Healthcare Institutions" },
              { number: "30+", label: "Distribution Centers" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals driving innovation in medical equipment distribution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Michael Chen",
                role: "Chief Executive Officer",
                bio: "25+ years in healthcare and medical device industry",
                icon: Briefcase,
              },
              {
                name: "Sarah Williams",
                role: "Chief Operations Officer",
                bio: "Expert in global logistics and supply chain management",
                icon: Users,
              },
              {
                name: "James Rodriguez",
                role: "Chief Technology Officer",
                bio: "Leading digital transformation in medical equipment sector",
                icon: Award,
              },
            ].map((leader, idx) => {
              const Icon = leader.icon
              return (
                <div
                  key={idx}
                  className="bg-card p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-secondary font-semibold mb-3">{leader.role}</p>
                  <p className="text-muted-foreground">{leader.bio}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
