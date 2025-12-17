import { Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from "lucide-react"

export default function TopHeader() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 gap-4">
          {/* Left - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+1-800-MEDICAL" className="hover:text-secondary transition-colors">
               +251 977 989 898
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@medequippro.com" className="hover:text-secondary transition-colors">
                gilandobiomedicalsln@gmail.com
              </a>
            </div>
          </div>

          {/* Right - Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Follow Us:</span>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/medequippro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/medequippro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/medequippro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/medequippro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
