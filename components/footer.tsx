import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">D</span>
              </div>
              <div>
                <div className="text-xl font-bold">Do'r Stack</div>
                <div className="text-sm text-yellow-400 font-medium">LIMITED</div>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Delivering Excellence in Consulting and Contracting for Global Leaders
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-300 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-blue-100 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-blue-100 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-blue-100 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-blue-100">
                  <p>123 Business District</p>
                  <p>Global City, GC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-100">info@dorstacklimited.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Do'r Stack Limited. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
