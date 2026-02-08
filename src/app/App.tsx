import { ArrowRight, Layers, Cpu, Network, CloudCog, ShieldCheck, Database, Lightbulb, Code, Rocket, TrendingUp, Zap, BarChart3, Brain, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const dynamicTexts = [
    'Scalable Digital Products',
    'Intelligent AI Workflows',
    'Enterprise-Grade Backends',
    'Verified QA Pipelines',
    'Robust Cloud Infrastructure'
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [engineeringOpen, setEngineeringOpen] = useState(false);
  const [blueprintOpen, setBlueprintOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(stepInterval);
  }, []);

  const processSteps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Architecture & Planning',
      description: 'Define scalable systems, data infrastructure, and AI integration points before coding.',
      status: 'Architecture Complete'
    },
    {
      icon: Code,
      number: '02',
      title: 'Quality-First Development',
      description: 'Automated testing alongside code. QA built-in from day one, not bolted on at the end.',
      status: 'Code Quality 100%'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Zero-Downtime Deployment',
      description: 'Automated CI/CD pipelines ensure seamless releases with optimized infrastructure.',
      status: 'Uptime 99.99%'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Scale & Cost Optimization',
      description: 'Continuous monitoring, performance tuning, and cloud cost reduction as you grow.',
      status: 'Cost Optimized'
    }
  ];

  return (
    <div className="size-full bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="#1d1d1f"/>
                <path d="M18 10L26 15V21L18 26L10 21V15L18 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 18V26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 18L10 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 18L26 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-semibold text-gray-900">AppSparrow</span>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex items-center gap-8">
              {/* Engineering Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setEngineeringOpen(true)}
                onMouseLeave={() => setEngineeringOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Engineering
                  <ChevronDown className={`w-4 h-4 transition-transform ${engineeringOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {engineeringOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                    <a href="/backend" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">Backend Systems</div>
                      <div className="text-xs text-gray-500">High-concurrency architecture</div>
                    </a>
                    <a href="/devops" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">DevOps & Cloud</div>
                      <div className="text-xs text-gray-500">CI/CD & infrastructure</div>
                    </a>
                    <a href="/agentic-ai" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">Agentic AI</div>
                      <div className="text-xs text-gray-500">Autonomous intelligent systems</div>
                    </a>
                    <a href="/data-migration" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">Data Migration</div>
                      <div className="text-xs text-gray-500">Zero-downtime transitions</div>
                    </a>
                    <a href="/qa-testing" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">QA & Testing</div>
                      <div className="text-xs text-gray-500">Automated test suites</div>
                    </a>
                  </div>
                )}
              </div>

              {/* The Blueprint Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setBlueprintOpen(true)}
                onMouseLeave={() => setBlueprintOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  The Blueprint
                  <ChevronDown className={`w-4 h-4 transition-transform ${blueprintOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {blueprintOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                    <a href="/blueprint/fintech" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">Fintech Solutions</div>
                      <div className="text-xs text-gray-500">Payment & banking platforms</div>
                    </a>
                    <a href="/blueprint/saas" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">SaaS Applications</div>
                      <div className="text-xs text-gray-500">Multi-tenant platforms</div>
                    </a>
                    <a href="/blueprint/ecommerce" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">E-Commerce</div>
                      <div className="text-xs text-gray-500">Scalable retail systems</div>
                    </a>
                    <a href="/blueprint/healthcare" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-gray-900">Healthcare Tech</div>
                      <div className="text-xs text-gray-500">HIPAA-compliant solutions</div>
                    </a>
                  </div>
                )}
              </div>

              {/* Blog Link */}
              <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</a>

              <button className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm rounded-full font-medium transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="inline-block relative pb-2">
                Your Vision
                <span className="absolute -bottom-0 left-0 w-full h-1 bg-gray-900 rounded-full"></span>
              </span>, Engineered for
              <span className="block text-gray-900">
                Infinite Scale.
              </span>
            </h1>

            <div className="mb-12 min-h-[100px]">
              <p className="text-xl sm:text-2xl text-gray-600 mb-3">
                Transforming your vision into
              </p>
              <p className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {dynamicTexts[currentTextIndex]}
              </p>
            </div>

            <div className="flex justify-center">
              <button className="group px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                Get A Proposal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade solutions backed by deep technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/digital-ecosystems" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg cursor-pointer block">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                <Layers className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Ecosystems</h3>
              <p className="text-sm text-gray-600 mb-6">Full lifecycle product engineering</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                <span>Full-Stack Mastery</span>
              </div>
            </a>

            <a href="/ai-agents" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg cursor-pointer block">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                <Cpu className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Autonomous AI Agents</h3>
              <p className="text-sm text-gray-600 mb-6">Intelligent automation for complex workflows</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                <span>LLM Integration</span>
              </div>
            </a>

            <a href="/backend-systems" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg cursor-pointer block">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                <Network className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Massive Scale Systems</h3>
              <p className="text-sm text-gray-600 mb-6">High-concurrency, low-latency architecture</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                <span>Distributed Systems</span>
              </div>
            </a>

            <a href="/devops" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg cursor-pointer block">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                <CloudCog className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Optimized DevOps</h3>
              <p className="text-sm text-gray-600 mb-6">Automated CI/CD with cloud cost savings</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                <span>30% Cost Reduction</span>
              </div>
            </a>

            <a href="/qa-testing" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg cursor-pointer block">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                <ShieldCheck className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero-Defect Delivery</h3>
              <p className="text-sm text-gray-600 mb-6">Comprehensive automated testing suites</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                <span>Shift-Left QA</span>
              </div>
            </a>

            <a href="/data-lakes" className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg cursor-pointer block">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                <Database className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Lake Architecture</h3>
              <p className="text-sm text-gray-600 mb-6">Multi-TB migrations with zero downtime</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                <span>100% Data Integrity</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Engineering Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              The Engineering Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No black boxes. Every phase built for scale, resilience, and cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100 opacity-60'}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${isActive ? 'bg-gray-900 shadow-xl shadow-gray-900/40' : 'bg-gray-200'}`}>
                      <Icon className={`w-8 h-8 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    
                    <div className="text-xs font-mono text-gray-500 mb-2">{step.number}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-500 ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                      {step.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resilience Roadmap Section */}
      <section id="roadmap" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Engineering for Every Milestone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build for today. We architect for tomorrow—ensuring your infrastructure remains lean, your data accessible, and your system unbreakable as you scale.
            </p>
          </div>

          {/* Roadmap Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stage 1: Foundation */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-xs font-mono text-gray-500 mb-2">STAGE 01</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">The Foundation</h3>
                  <p className="text-sm font-medium text-gray-600 mb-4">Vision & Launch</p>
                </div>

                <div className="space-y-4 text-left">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Focus</p>
                    <p className="text-sm text-gray-900">Speed to Market without Technical Debt</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">The AppSparrow Edge</p>
                    <p className="text-sm text-gray-600">QA-verified architecture from day one. Your MVP isn't throwaway—it's a scalable foundation.</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Core Services</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded text-xs text-gray-700">End-to-End Development</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded text-xs text-gray-700">Cloud Setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2: Acceleration */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 mx-auto">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-xs font-mono text-gray-500 mb-2">STAGE 02</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">The Acceleration</h3>
                  <p className="text-sm font-medium text-gray-600 mb-4">High-Volume Scaling</p>
                </div>

                <div className="space-y-4 text-left">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Focus</p>
                    <p className="text-sm text-gray-900">Resilience & Cost-Efficiency</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">The AppSparrow Edge</p>
                    <p className="text-sm text-gray-600">Cost-optimized DevOps and high-concurrency backend. Handle millions of requests while slashing cloud spend.</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Core Services</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded text-xs text-gray-700">Backend Scaling</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded text-xs text-gray-700">CI/CD Pipelines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3: Intelligence Edge */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-xs font-mono text-gray-500 mb-2">STAGE 03</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">The Intelligence Edge</h3>
                  <p className="text-sm font-medium text-gray-600 mb-4">Enterprise Evolution</p>
                </div>

                <div className="space-y-4 text-left">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Focus</p>
                    <p className="text-sm text-gray-900">Autonomy & Data Mastery</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">The AppSparrow Edge</p>
                    <p className="text-sm text-gray-600">Data Lakes for deep insights and Autonomous AI Agents. Turn massive data into competitive advantage.</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Core Services</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded text-xs text-gray-700">Data Lakes</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded text-xs text-gray-700">Agentic AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-sm text-gray-600 mb-6">
              Your cost-conscious technical partner with more than two decades of experience.
            </p>
            <button className="group px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}