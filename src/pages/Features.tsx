export default function Features() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative text-primary-foreground py-32 md:py-48"
        style={{
          backgroundImage: "url(/DNA.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/85 to-primary/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Features</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            What makes us the preferred partner for medical equipment
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="/logistics-warehouse-distribution-center-real-time-.jpg"
              alt="Logistics & Distribution"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Advanced Logistics</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Real-time tracking, temperature-controlled shipping, and reliable delivery systems ensure your equipment
                arrives in perfect condition.
              </p>
              <ul className="space-y-3">
                {["Real-time tracking", "Temperature control", "Secure packaging", "On-time delivery guarantee"].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Maximum Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                State-of-the-art security measures protect your valuable medical equipment throughout the supply chain.
              </p>
              <ul className="space-y-3">
                {["Warehouse security", "Insurance coverage", "Compliance certified", "Data protection"].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <img
              src="/security-vault-warehouse-protection-systems.jpg"
              alt="Security & Protection"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="/world-map-global-network-distribution-internationa.jpg"
              alt="Global Network"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Global Network</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Partnerships across 150+ countries enable us to serve healthcare providers worldwide with efficiency.
              </p>
              <ul className="space-y-3">
                {["International partners", "Local expertise", "Multi-currency support", "Customs expertise"].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Market Intelligence</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Data-driven insights into equipment trends, pricing, and availability help you make informed decisions.
              </p>
              <ul className="space-y-3">
                {["Market analysis", "Trend reports", "Pricing insights", "Supply forecasting"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/business-analytics-dashboard-data-charts-graphs.jpg"
              alt="Analytics & Intelligence"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="/BaroyiTeam.jpg"
              alt="Expert Team"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Expert Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of medical professionals and logistics experts provides personalized assistance every step of
                the way.
              </p>
              <ul className="space-y-3">
                {["24/7 support", "Technical expertise", "Consultation services", "Training programs"].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Quality Certifications</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All equipment and services meet international standards and certifications for healthcare excellence.
              </p>
              <ul className="space-y-3">
                {["ISO certified", "FDA approved", "CLIA certified", "CE marked"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/certification-badges-iso-fda-quality-standards.jpg"
              alt="Certifications"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Why Choose Gilando?</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Gilando</th>
                  <th className="px-6 py-4 text-center font-bold">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Global Coverage", us: "✓", competitor: "Limited" },
                  { feature: "24/7 Support", us: "✓", competitor: "Business hours" },
                  { feature: "Quality Guarantee", us: "100%", competitor: "Standard" },
                  { feature: "Delivery Speed", us: "2-4 weeks", competitor: "4-8 weeks" },
                  { feature: "Customs Handling", us: "Full service", competitor: "Customer handles" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-card"}>
                    <td className="px-6 py-4 font-semibold text-foreground border-b border-border">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-secondary font-bold border-b border-border">{row.us}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground border-b border-border">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
