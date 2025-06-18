import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, User, Share2, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "digital-transformation-trends-2024": {
      title: "Digital Transformation Trends Shaping Global Business in 2024",
      content: `
        <p>As we navigate through 2024, digital transformation continues to be the driving force behind business innovation and competitive advantage. At Do'r Stack Limited, we've observed firsthand how multinational corporations are leveraging emerging technologies to revolutionize their operations, enhance customer experiences, and create new revenue streams.</p>

        <h2>The Current Landscape</h2>
        <p>The digital transformation landscape has evolved significantly over the past year. What began as a necessity during the pandemic has now become a strategic imperative for organizations seeking to maintain their competitive edge in an increasingly digital world.</p>

        <h3>Key Trends We're Seeing</h3>
        <ul>
          <li><strong>AI-Powered Automation:</strong> Companies are implementing sophisticated AI systems to automate complex business processes, resulting in 30-40% efficiency gains.</li>
          <li><strong>Cloud-First Strategies:</strong> Organizations are moving beyond simple cloud migration to cloud-native architectures that enable greater scalability and innovation.</li>
          <li><strong>Data-Driven Decision Making:</strong> Advanced analytics and real-time data processing are becoming standard across all business functions.</li>
          <li><strong>Cybersecurity Integration:</strong> Security is no longer an afterthought but is being built into every aspect of digital transformation initiatives.</li>
        </ul>

        <h2>Industry-Specific Applications</h2>
        <p>Different industries are approaching digital transformation in unique ways, tailored to their specific challenges and opportunities:</p>

        <h3>Financial Services</h3>
        <p>Banks and financial institutions are focusing on digital banking platforms, blockchain integration, and AI-powered risk management systems. We've helped several Fortune 500 financial institutions reduce operational costs by 35% while improving customer satisfaction scores by 60%.</p>

        <h3>Healthcare</h3>
        <p>Healthcare organizations are implementing telemedicine platforms, AI-powered diagnostic tools, and integrated patient management systems. Our recent healthcare network expansion project demonstrated how technology integration can improve patient outcomes while reducing operational complexity.</p>

        <h3>Manufacturing</h3>
        <p>Industry 4.0 initiatives are transforming manufacturing through IoT sensors, predictive maintenance, and automated quality control systems. Our manufacturing clients have seen production cost reductions of 25% and quality improvements of 40%.</p>

        <h2>Challenges and Solutions</h2>
        <p>While the benefits of digital transformation are clear, organizations face several common challenges:</p>

        <h3>Legacy System Integration</h3>
        <p>Many organizations struggle with integrating new technologies with existing legacy systems. Our approach involves creating hybrid architectures that allow for gradual migration while maintaining operational continuity.</p>

        <h3>Change Management</h3>
        <p>Digital transformation is as much about people as it is about technology. We work closely with organizations to develop comprehensive change management strategies that ensure successful adoption across all levels of the organization.</p>

        <h3>Cybersecurity Concerns</h3>
        <p>As organizations become more digital, they also become more vulnerable to cyber threats. We integrate security considerations into every aspect of digital transformation planning and implementation.</p>

        <h2>Looking Ahead</h2>
        <p>As we look toward the remainder of 2024 and beyond, several emerging trends will shape the future of digital transformation:</p>

        <ul>
          <li><strong>Quantum Computing:</strong> While still in early stages, quantum computing will begin to impact certain industries, particularly in optimization and cryptography.</li>
          <li><strong>Extended Reality (XR):</strong> AR, VR, and mixed reality technologies will become more mainstream in training, collaboration, and customer engagement.</li>
          <li><strong>Sustainable Technology:</strong> Organizations will increasingly focus on green IT initiatives and sustainable technology practices.</li>
          <li><strong>Edge Computing:</strong> Processing data closer to its source will become critical for real-time applications and IoT deployments.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Digital transformation in 2024 is not just about adopting new technologies—it's about fundamentally reimagining how businesses operate, compete, and deliver value to their customers. Organizations that approach digital transformation strategically, with a focus on people, processes, and technology, will be best positioned to thrive in the digital economy.</p>

        <p>At Do'r Stack Limited, we're committed to helping our clients navigate this complex landscape and achieve their digital transformation goals. Our global expertise and proven methodologies ensure that transformation initiatives deliver measurable results and sustainable competitive advantages.</p>
      `,
      author: "Sarah Chen",
      authorRole: "Chief Technology Officer",
      authorBio:
        "Sarah leads our technology initiatives with expertise in digital transformation, cloud architecture, and enterprise systems. She previously served as CTO at two Fortune 500 companies.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Digital Transformation", "Technology", "Business Strategy", "Innovation"],
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <Badge className="bg-blue-600 text-white mb-4">{post.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="relative h-64 lg:h-96 mb-8 rounded-lg overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-blue-900">Share this article</h3>
                    <Button variant="outline" className="flex items-center">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Author Info */}
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">About the Author</h3>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">{post.author}</h4>
                      <p className="text-sm text-blue-600">{post.authorRole}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{post.authorBio}</p>
                    </div>
                  </Card>

                  {/* Related Articles */}
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      <Link href="/blog/sustainable-construction-practices" className="block group">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          Sustainable Construction Practices for Global Projects
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">6 min read</p>
                      </Link>
                      <Link href="/blog/ai-consulting-future" className="block group">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          The Future of AI in Business Consulting
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">7 min read</p>
                      </Link>
                      <Link href="/blog/cybersecurity-enterprise-solutions" className="block group">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          Cybersecurity Strategies for Global Enterprises
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">10 min read</p>
                      </Link>
                    </div>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="p-6 bg-blue-50">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Stay Updated</h3>
                    <p className="text-sm text-gray-600 mb-4">Get the latest insights delivered to your inbox.</p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">Subscribe</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Link
                href="/blog/sustainable-construction-practices"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                <div>
                  <div className="text-sm text-gray-500">Previous</div>
                  <div className="font-medium">Sustainable Construction Practices</div>
                </div>
              </Link>

              <Link
                href="/blog/ai-consulting-future"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-right"
              >
                <div>
                  <div className="text-sm text-gray-500">Next</div>
                  <div className="font-medium">The Future of AI in Consulting</div>
                </div>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your digital transformation goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
