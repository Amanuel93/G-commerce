import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">ME</span>
              </div> */}
              <span className="text-lg font-bold">Gilando Biomedical solution PLC</span>
            </div>
            <p className="text-sm opacity-75">Leading provider of medical equipment import and export services</p>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="font-bold md:mb-4 mb-1 ">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold md:mb-4 mb-1">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-secondary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold md:mb-4 mb-1">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: Info@gilando.com</li>
              <li>Phone 1:  +251 977 989 898</li>
              <li>Phone 2:  +251 904 918 891</li>
              <li>Address: <span className="font-bold">Germany Square</span>,  <span className="font-bold">Gudina Tumsa BLDG 2nd Floor</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 GILANDO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
