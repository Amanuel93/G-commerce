export default function About() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative text-primary-foreground py-32 md:py-48"
        style={{
          backgroundImage:
            "url(/BaroyiTeam.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Gilando</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Leading the way in medical equipment import and export since 2016
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To connect healthcare providers worldwide with reliable, high-quality medical equipment while providing
                exceptional customer service and support. We're committed to improving healthcare accessibility across
                the globe.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted partner for medical equipment solutions, enabling healthcare facilities of all
                sizes to access world-class diagnostic and therapeutic equipment at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="relative py-20 text-primary-foreground"
        style={{
          backgroundImage: "url(/Service5.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", description: "Honest and transparent in all business dealings" },
              { title: "Quality", description: "Only the best equipment from trusted manufacturers" },
              { title: "Innovation", description: "Continuously improving our processes and services" },
            ].map((value, idx) => (
              <div key={idx} className="bg-primary/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ahmed Hassan", role: "Founder & CEO", initials: "AH" },
              { name: "Maria Rodriguez", role: "Chief Operations Officer", initials: "MR" },
              { name: "James Chen", role: "Head of Supply Chain", initials: "JC" },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
