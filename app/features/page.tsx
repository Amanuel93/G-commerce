import type { Metadata } from "next"
import { Zap, Shield, Globe, TrendingUp, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Features - MedEquip Pro",
  description: "Discover the key features and benefits of choosing MedEquip Pro",
}

export default function Features() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Key Features</h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl">Industry-leading capabilities that set us apart</p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                icon: Zap,
                title: "Lightning-Fast Logistics",
                description:
                  "Real-time tracking and expedited delivery options ensure your equipment arrives when you need it",
                points: ["Same-day processing", "Air freight options", "Real-time GPS tracking", "Insurance coverage"],
                image: "/logistics-warehouse-distribution-center-real-time-.jpg",
              },
              {
                icon: Shield,
                title: "Uncompromising Security",
                description: "Enterprise-grade security protocols protect your shipments and data",
                points: ["Secure warehousing", "Temperature control", "Full insurance", "Data encryption"],
                image: "/security-vault-warehouse-protection-systems.jpg",
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Established partnerships across 150+ countries for seamless international operations",
                points: ["30+ distribution hubs", "Local expertise", "Multi-language support", "24/7 operations"],
                image: "/world-map-global-network-distribution-internationa.jpg",
              },
              {
                icon: TrendingUp,
                title: "Market Intelligence",
                description: "Access to real-time market data and pricing trends for smart purchasing decisions",
                points: ["Price analytics", "Market reports", "Trend forecasting", "Competitive insights"],
                image: "/business-analytics-dashboard-data-charts-graphs.jpg",
              },
              {
                icon: Users,
                title: "Expert Support Team",
                description: "Dedicated professionals with deep healthcare industry knowledge",
                points: ["Medical experts", "Logistics specialists", "Multi-lingual team", "Priority support"],
                image: "/professional-team-medical-experts-healthcare.jpg",
              },
              {
                icon: Award,
                title: "Industry Certifications",
                description: "Fully compliant with international standards and regulations",
                points: ["ISO 9001:2015", "FDA compliant", "CE marked products", "Regulatory expertise"],
                image: "/certification-badges-iso-fda-quality-standards.jpg",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <Icon className="w-16 h-16 text-primary mb-6" />
                        <h2 className="text-3xl font-bold text-foreground mb-4">{feature.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                        <ul className="space-y-3">
                          {feature.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-center gap-3 text-foreground">
                              <div className="w-2 h-2 bg-secondary rounded-full" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Icon className="w-16 h-16 text-primary mb-6" />
                        <h2 className="text-3xl font-bold text-foreground mb-4">{feature.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                        <ul className="space-y-3">
                          {feature.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-center gap-3 text-foreground">
                              <div className="w-2 h-2 bg-secondary rounded-full" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why We're the Best Choice</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-foreground">MedEquip Pro</th>
                  <th className="text-center py-4 px-6 font-bold text-muted-foreground">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Global Coverage", us: true, them: false },
                  { feature: "24/7 Support", us: true, them: false },
                  { feature: "Real-time Tracking", us: true, them: false },
                  { feature: "Quality Guarantee", us: true, them: true },
                  { feature: "Competitive Pricing", us: true, them: false },
                  { feature: "Expert Consultants", us: true, them: false },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border">
                    <td className="py-4 px-6 text-foreground font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.us ? (
                        <span className="text-secondary font-bold">✓</span>
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.them ? (
                        <span className="text-muted-foreground">✓</span>
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Partner with MedEquip Pro</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the difference our comprehensive features and dedicated support can make for your healthcare
            facility
          </p>
        </div>
      </section>
    </main>
  )
}
