import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Computer,
  Settings,
  Building,
  Wrench,
  HardHat,
  Home,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const consultingServices = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business Strategy",
      description: "Strategic planning, market analysis, and growth optimization for global enterprises.",
      features: ["Market Entry Strategy", "Digital Transformation", "Operational Excellence", "Change Management"],
    },
    {
      icon: <Computer className="h-8 w-8" />,
      title: "IT Consulting",
      description: "Technology solutions, system integration, and digital infrastructure optimization.",
      features: ["Cloud Migration", "Cybersecurity", "Data Analytics", "Software Development"],
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Operations Management",
      description: "Process optimization, supply chain management, and operational efficiency improvements.",
      features: ["Process Reengineering", "Supply Chain Optimization", "Quality Management", "Performance Analytics"],
    },
  ]

  const contractingServices = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Project Management",
      description: "End-to-end project delivery with global standards and proven methodologies.",
      features: ["PMO Setup", "Risk Management", "Stakeholder Management", "Quality Assurance"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Engineering",
      description: "Technical engineering solutions across multiple disciplines and industries.",
      features: ["Civil Engineering", "Mechanical Systems", "Electrical Design", "Environmental Engineering"],
    },
    {
      icon: <HardHat className="h-8 w-8" />,
      title: "Construction",
      description: "Commercial and industrial construction with international quality standards.",
      features: ["Commercial Buildings", "Industrial Facilities", "Infrastructure", "Renovation Projects"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive consulting and contracting solutions designed to drive success for multinational
              corporations across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
                CONSULTING SERVICES
              </Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Strategic Consulting Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with our world-class consulting services, backed by global expertise and proven
                methodologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <Card
                  key={index}
                  className="h-full border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contracting Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium mb-4">
                CONTRACTING SERVICES
              </Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Premium Contracting Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deliver complex projects with confidence through our comprehensive contracting services and proven
                project management expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contractingServices.map((service, index) => (
                <Card
                  key={index}
                  className="h-full border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Home className="h-16 w-16 text-blue-900 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Real Estate Services</h2>
            <p className="text-xl text-blue-800 mb-8 leading-relaxed">
              Explore our comprehensive real estate solutions on our dedicated platform, featuring commercial
              properties, investment opportunities, and property management services.
            </p>
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
              Visit Real Estate Portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-blue-700 mt-4">Hosted on realestate.dorstacklimited.com</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Do'r Stack Limited?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  500+ successful projects delivered across 25+ countries with 98% client satisfaction rate.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  200+ certified professionals with deep industry expertise and global experience.
                </p>
              </div>
              <div className="text-center">
                <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Quality Standards</h3>
                <p className="text-gray-600">
                  ISO certified processes ensuring consistent quality and compliance with international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can drive success for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
