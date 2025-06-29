import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, FileText, ImageIcon, Mail, ArrowRight, Zap, Target, Users } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Medi AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Intelligence for Every Data Type
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionizing AI Solutions for Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Data Needs
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Medi AI develops powerful AI models for image, tabular, and text data — tailored to solve real-world
            challenges across industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              <Link
                href="https://obesitylevelappdeployment-e47a9ba5p2xhlrev764p9l.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Database className="w-4 h-4 mr-2" />
                Demo Tabular Model
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" disabled className="px-8 py-3">
              <ImageIcon className="w-4 h-4 mr-2" />
              Demo Image Model
              <Badge variant="secondary" className="ml-2 text-xs">
                Coming Soon
              </Badge>
            </Button>

            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              <Link
                href="https://textappdemo-cvera5tunwbx8tqu3nhbvy.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-4 h-4 mr-2" />
                Demo Text Model
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Medi AI</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Medi AI, we craft AI solutions to help businesses make smarter decisions from data. Whether you're
                working with complex medical images, detailed spreadsheets, or patient narratives — our models are ready
                to analyze and provide insights.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Precision</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Speed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Support</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-20 h-20 text-emerald-600 mx-auto mb-4" />
                  <p className="text-emerald-700 font-medium">AI-Powered Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your specific data challenges and business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Image AI Models</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Custom-trained vision models for medical imaging and diagnostics. Advanced computer vision solutions
                  for healthcare applications.
                </CardDescription>
                <div className="mt-4 text-center">
                  <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                    Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-2 ring-emerald-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Tabular AI Models</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Predictive analytics and classification for structured data. Transform your spreadsheets into
                  actionable insights.
                </CardDescription>
                <div className="mt-4 text-center">
                  <Badge className="bg-emerald-600 text-white">Available Now</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Text AI Models</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  NLP solutions for medical records, chatbot integration, and more. Advanced text analysis and
                  processing capabilities.
                </CardDescription>
                <div className="mt-4 text-center">
                  <Badge className="bg-emerald-600 text-white">Available Now</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>

          <p className="text-lg text-gray-600 mb-8">Have questions or need a custom solution?</p>

          <Card className="max-w-md mx-auto border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="mailto:mediaicontact@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  mediaicontact@gmail.com
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Medi AI</span>
          </div>
          <p className="text-gray-400 mb-4">AI-Powered Intelligence for Every Data Type</p>
          <p className="text-sm text-gray-500">© 2024 Medi AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
