import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, Award, Users, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Do'r Stack <span className="text-yellow-400">Limited</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 font-light">
              Delivering Excellence in Consulting and Contracting for Global Leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Global Excellence, Local Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Do'r Stack Limited stands at the forefront of international consulting and contracting, delivering
                innovative solutions that drive success for multinational corporations across diverse industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center p-6 border-2 hover:border-yellow-400 transition-colors">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600">Serving clients across 25+ countries with local expertise</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-2 hover:border-yellow-400 transition-colors">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">ISO certified processes ensuring world-class delivery</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-2 hover:border-yellow-400 transition-colors">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">200+ certified professionals with global experience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-2 hover:border-yellow-400 transition-colors">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">500+ successful projects with 98% client satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower global enterprises through innovative consulting solutions and exceptional contracting
                  services that drive sustainable growth and operational excellence.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-900">V</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the world's most trusted partner for multinational corporations seeking transformative business
                  solutions and premium contracting services.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, Integrity, Innovation, and Global Collaboration form the foundation of everything we do,
                  ensuring premium delivery for every client engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of global leaders who trust Do'r Stack Limited for their most critical initiatives.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
