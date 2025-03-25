"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, Database, FileText, Globe, LineChart, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { BarChart, LineChart as RechartsLineChart, PieChart } from "@/components/ui/chart"

export default function Home() {
  // Refs for scrolling
  const solutionRef = useRef<HTMLElement>(null)
  const howItWorksRef = useRef<HTMLElement>(null)
  const caseStudiesRef = useRef<HTMLElement>(null)
  const technologyRef = useRef<HTMLElement>(null)
  const sdgRef = useRef<HTMLElement>(null)
  const demoRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Mock data for charts
  const barChartData = [
    {
      name: "Jan",
      Environmental: 65,
      Social: 45,
      Governance: 58,
    },
    {
      name: "Feb",
      Environmental: 70,
      Social: 48,
      Governance: 60,
    },
    {
      name: "Mar",
      Environmental: 75,
      Social: 52,
      Governance: 63,
    },
    {
      name: "Apr",
      Environmental: 72,
      Social: 55,
      Governance: 67,
    },
    {
      name: "May",
      Environmental: 78,
      Social: 60,
      Governance: 70,
    },
    {
      name: "Jun",
      Environmental: 82,
      Social: 63,
      Governance: 72,
    },
  ]

  const lineChartData = [
    {
      name: "Week 1",
      "Carbon Offset": 240,
    },
    {
      name: "Week 2",
      "Carbon Offset": 300,
    },
    {
      name: "Week 3",
      "Carbon Offset": 320,
    },
    {
      name: "Week 4",
      "Carbon Offset": 380,
    },
    {
      name: "Week 5",
      "Carbon Offset": 400,
    },
    {
      name: "Week 6",
      "Carbon Offset": 450,
    },
  ]

  const pieChartData = [
    { name: "Water Conservation", value: 35 },
    { name: "Renewable Energy", value: 30 },
    { name: "Waste Reduction", value: 20 },
    { name: "Community Impact", value: 15 },
  ]

  return (
    <div className="flex min-h-screen flex-col font-lexend">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="inline-block font-lexend font-bold text-xl">BEADS</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <button
                onClick={() => scrollToSection(solutionRef)}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection(howItWorksRef)}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection(caseStudiesRef)}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection(technologyRef)}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection(sdgRef)}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                SDG Impact
              </button>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => scrollToSection(contactRef)}>
                Contact Us
              </Button>
              <Button onClick={() => window.open("https://forms.gle/YfqjFpKJ8VBdXfAt9", "_blank")}>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    ESG & CSR Impact—Backed by BIM & Digital Twin Data
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Maximize ESG Impact Through Data-Driven CSR
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We facilitate CSR projects to maximize ESG impact, aligning with sustainability goals—leveraging BIM
                    for forecasting, simulation, and optimization to benefit all stakeholders.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8" onClick={() => scrollToSection(contactRef)}>
                    Learn More
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8"
                    onClick={() => window.open("https://forms.gle/YfqjFpKJ8VBdXfAt9", "_blank")}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-blue-100 p-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid gap-6 p-6">
                      <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                        <BarChart3 className="h-10 w-10 text-green-600" />
                        <div>
                          <h3 className="font-semibold">ESG Performance</h3>
                          <p className="text-sm text-muted-foreground">Real-time impact tracking</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                        <Shield className="h-10 w-10 text-blue-600" />
                        <div>
                          <h3 className="font-semibold">Compliance Assured</h3>
                          <p className="text-sm text-muted-foreground">GRI, SASB, BRSR & UN SDG frameworks</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                        <FileText className="h-10 w-10 text-purple-600" />
                        <div>
                          <h3 className="font-semibold">Investor-Ready Reports</h3>
                          <p className="text-sm text-muted-foreground">Transparent, verifiable data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={solutionRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">The Problem</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Invest in CSR if It's Not Contributing to ESG Goals?
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Many companies spend millions on CSR projects but fail to quantify their sustainability impact in a way
                that aligns with Environmental, Social, and Governance (ESG) frameworks.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    The Challenge with Traditional ESG & CSR Reporting
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-red-500" />
                      <div>
                        <span className="font-semibold">Untracked Initiatives</span> – Companies fund CSR projects but
                        can't quantify their sustainability impact.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-red-500" />
                      <div>
                        <span className="font-semibold">Regulatory Compliance Pressure</span> – Investors demand clear
                        ESG alignment, but CSR reporting is often scattered and anecdotal.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-red-500" />
                      <div>
                        <span className="font-semibold">Lack of Real-time Data</span> – No automated tracking or
                        real-world data integration into ESG frameworks.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-red-500" />
                      <div>
                        <span className="font-semibold">Missed Investment Opportunities</span> – Companies fail to
                        showcase their sustainability efforts effectively to attract ESG-focused investors.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Our Solution: BEADS for ESG-Driven Results
                  </h3>
                  <p className="text-muted-foreground">
                    We transform CSR projects into ESG-compliant, impact-driven initiatives using BIM & Digital Twin
                    technology.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <span className="font-semibold">Identify & Recommend High-Impact CSR Projects</span> – Based on
                        ESG compliance & sustainability ROI.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <span className="font-semibold">Simulate & Forecast ESG Impact Using BIM</span> – Data-backed
                        decision-making before execution.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <span className="font-semibold">Track & Optimize CSR with Digital Twins</span> – Real-time
                        energy, water, and carbon footprint monitoring.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <span className="font-semibold">Generate Automated ESG Reports</span> – BRSR, GRI, SASB, & UN
                        SDG compliance.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>ESG Performance Metrics</CardTitle>
                    <CardDescription>Monthly tracking across all dimensions</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="h-[0px]">
                      <BarChart
                        data={barChartData}
                        index="name"
                        categories={["Environmental", "Social", "Governance"]}
                        colors={["#16a34a", "#2563eb", "#9333ea"]}
                        valueFormatter={(value) => '${value}%'}
                        yAxisWidth={40}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>             
                  <CardHeader>
                    <CardTitle>Carbon Offset Progress</CardTitle>
                    <CardDescription>Weekly carbon reduction (tons)</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="h-[0px]">
                      <RechartsLineChart
                        data={lineChartData}
                        index="name"
                        categories={["Carbon Offset"]}
                        colors={["#16a34a"]}
                        valueFormatter={(value) => `${value}t`}
                        yAxisWidth={40}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Impact Distribution</CardTitle>
                    <CardDescription>Allocation across initiatives</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="h-[0px]">
                      <PieChart
                        data={pieChartData}
                        index="name"
                        valueFormatter={(value) => `${value}%`}
                        category="value"
                        colors={["#16a34a", "#2563eb", "#9333ea", "#ea580c"]}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Why BIM & Digital Twins
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why ESG Needs BIM & Digital Twins—Not Just Reports
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With BIM & Digital Twins, ESG reporting shifts from retrospective reporting to live performance
                tracking.
              </p>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-red-50/50 border-red-100">
                  <CardHeader>
                    <CardTitle className="text-red-800">Without Digital Twins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-red-500" />
                        <div>ESG reports are based on historical, unverifiable data</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-red-500" />
                        <div>Carbon reduction targets lack real-time tracking</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-red-500" />
                        <div>Investors question the credibility of sustainability claims</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-green-50/50 border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800">With BIM & Digital Twins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <div>Live performance tracking → No more guesswork</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <div>Predictive sustainability modeling → Avoids costly compliance risks</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <div>Blockchain-backed proof → Verifiable ESG reports, audit-ready transparency</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Why BIM & Digital Twins are the Future of ESG Reporting</CardTitle>
                    <CardDescription>Our technology provides measurable data for all key ESG factors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ESG Factor</TableHead>
                          <TableHead>BIM & Digital Twin Insights</TableHead>
                          <TableHead>Business & Compliance Benefit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Carbon & Energy</TableCell>
                          <TableCell>Tracks Scope 1, 2 & 3 emissions in real-time</TableCell>
                          <TableCell>Ensures net-zero targets are met</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Water Management</TableCell>
                          <TableCell>Monitors consumption & wastewater reuse efficiency</TableCell>
                          <TableCell>Aligns with SDG 6: Clean Water</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Circular Economy</TableCell>
                          <TableCell>Maps material lifecycle & waste reduction</TableCell>
                          <TableCell>Compliance with LEED & BREEAM</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Biodiversity & Land Use</TableCell>
                          <TableCell>Simulates heat island effects & restoration impact</TableCell>
                          <TableCell>Supports SDG 15: Life on Land</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Social & Labor Compliance</TableCell>
                          <TableCell>Monitors worker conditions & ethical sourcing</TableCell>
                          <TableCell>Reduces risk, enhances ESG ratings</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section ref={howItWorksRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How It Works: Turning CSR into ESG-Driven Growth
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive approach ensures your CSR initiatives translate into measurable ESG impact.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Step 1: Strategic CSR-ESG Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identify high-impact CSR projects optimized for ESG compliance. Integrate BIM-based forecasting for
                    project efficiency.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Strategy Alignment</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Step 2: Real-Time Digital Twin Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track energy, water, carbon, and materials live. Detect inefficiencies and automate sustainability
                    improvements.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Collection Accuracy</span>
                      <span className="font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Step 3: AI-Powered ESG Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Auto-generate audit-ready reports for BRSR, GRI, & SASB compliance. Blockchain-backed proof ensuring
                    regulatory transparency.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Compliance Rate</span>
                      <span className="font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500"></div>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Step 4: Investor & Regulatory Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Share ESG dashboards for investors & stakeholders. Enhance ESG ratings & secure
                    sustainability-linked investments.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Transparency Score</span>
                      <span className="font-medium">96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section ref={caseStudiesRef} className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Case Studies: Real-World Impact
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how BEADS delivers measurable sustainability outcomes.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M20.2 6.2c-.8-1.6-2-3-3.4-4" />
                      <path d="M7.2 2.2c-1.4 1-2.6 2.4-3.4 4" />
                      <path d="M15.3 2.7c-1.7-.4-3.5-.4-5.2 0" />
                      <path d="M8.7 21.3c1.7.4 3.5.4 5.2 0" />
                      <path d="M7.2 21.8c-1.4-1-2.6-2.4-3.4-4" />
                      <path d="M20.2 17.8c-.8 1.6-2 3-3.4 4" />
                      <path d="M2 12h20" />
                      <path d="M12 2v20" />
                    </svg>
                  </div>
                  <CardTitle>Water Conservation for ESG Goal: SDG 6</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Problem:</h4>
                      <p className="text-sm text-muted-foreground">
                        Traditional CSR project lacked real-time monitoring.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Solution with BEADS:</h4>
                      <p className="text-sm text-muted-foreground">
                        IoT + Digital Twin integration tracked water conservation efficiency.
                      </p>
                    </div>
                    <div className="rounded-lg bg-green-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-800">Impact Metrics</span>
                        <span className="text-sm font-bold text-green-800">+40%</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-green-200">
                        <div className="h-2 w-[40%] rounded-full bg-green-600"></div>
                      </div>
                      <p className="mt-2 text-xs text-green-800">
                        Verified reduction in water usage, automated compliance with BRSR
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="rounded-lg bg-blue-50 p-3">
                        <div className="text-center">
                          <span className="text-2xl font-bold text-blue-700">3.2M</span>
                          <p className="text-xs text-blue-700">Gallons Saved</p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-3">
                        <div className="text-center">
                          <span className="text-2xl font-bold text-blue-700">12K</span>
                          <p className="text-xs text-blue-700">People Impacted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-yellow-600"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </div>
                  <CardTitle>Solar Energy for Schools: ESG Goal: SDG 7</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Problem:</h4>
                      <p className="text-sm text-muted-foreground">
                        Companies installed solar panels but couldn't track carbon savings.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Solution with BEADS:</h4>
                      <p className="text-sm text-muted-foreground">
                        Smart meters + BIM monitoring enabled real-time energy reporting.
                      </p>
                    </div>
                    <div className="rounded-lg bg-yellow-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-yellow-800">Carbon Reduction</span>
                        <span className="text-sm font-bold text-yellow-800">40% CO₂</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-yellow-200">
                        <div className="h-2 w-[40%] rounded-full bg-yellow-600"></div>
                      </div>
                      <p className="mt-2 text-xs text-yellow-800">
                        ESG report verified CO₂ savings & investor-grade transparency
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="rounded-lg bg-amber-50 p-3">
                        <div className="text-center">
                          <span className="text-2xl font-bold text-amber-700">245K</span>
                          <p className="text-xs text-amber-700">kWh Generated</p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-amber-50 p-3">
                        <div className="text-center">
                          <span className="text-2xl font-bold text-amber-700">15</span>
                          <p className="text-xs text-amber-700">Schools Powered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100">
                <CardHeader>
                  <CardTitle>Case Study: Real ESG Compliance with Digital Twins</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Problem:</h4>
                      <p className="text-muted-foreground">
                        A major real estate developer committed to net-zero buildings but had no real-time tracking.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Solution:</h4>
                      <p className="text-muted-foreground">
                        BIM & Digital Twins integrated with IoT sensors → Tracked actual energy, carbon, and water use.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Result:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                          <div>30% reduction in energy costs</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                          <div>Scope 1 & 2 emissions verified in real-time</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                          <div>Automated BRSR & SASB compliance reports</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section ref={technologyRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Technology</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Technology Stack Powering BEADS
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our cutting-edge technology ensures accurate, transparent, and compliant ESG reporting.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <CardTitle>BIM-Driven Impact Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Digital modeling of CSR projects for precise measurement, visualization, and forecasting before
                    execution.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="font-medium">Integration Level:</span>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-2 w-4 ${i <= 5 ? "bg-primary" : "bg-primary/20"} mr-0.5 rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Digital Twin Real-Time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Live performance monitoring, not static reporting. Converts real-world CSR data into ESG-compliant
                    insights.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="font-medium">Integration Level:</span>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-2 w-4 ${i <= 5 ? "bg-primary" : "bg-primary/20"} mr-0.5 rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Investor-Grade ESG Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verifiable, compliance-ready disclosures that ensure all reports match global ESG compliance
                    standards.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="font-medium">Integration Level:</span>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-2 w-4 ${i <= 5 ? "bg-primary" : "bg-primary/20"} mr-0.5 rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <line x1="3" x2="21" y1="9" y2="9" />
                      <line x1="9" x2="9" y1="21" y2="9" />
                    </svg>
                  </div>
                  <CardTitle>Blockchain Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verifiable proof-of-impact for stakeholders & regulators with immutable records for audit-ready
                    transparency.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="font-medium">Integration Level:</span>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-2 w-4 ${i <= 4 ? "bg-primary" : "bg-primary/20"} mr-0.5 rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>IoT & Smart Sensors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Captures live environmental & social impact metrics for real-time reporting and automated
                    sustainability improvements.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="font-medium">Integration Level:</span>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-2 w-4 ${i <= 5 ? "bg-primary" : "bg-primary/20"} mr-0.5 rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Regulatory Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Meets SEBI BRSR, GRI, SASB & UN SDG requirements with interactive dashboards that make complex ESG
                    data accessible.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="font-medium">Integration Level:</span>
                    <div className="ml-2 flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-2 w-4 ${i <= 5 ? "bg-primary" : "bg-primary/20"} mr-0.5 rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section ref={sdgRef} className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Global Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our SDG Impact</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                BEADS contributes to multiple UN Sustainable Development Goals through our comprehensive approach.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M20.2 6.2c-.8-1.6-2-3-3.4-4" />
                      <path d="M7.2 2.2c-1.4 1-2.6 2.4-3.4 4" />
                      <path d="M15.3 2.7c-1.7-.4-3.5-.4-5.2 0" />
                      <path d="M8.7 21.3c1.7.4 3.5.4 5.2 0" />
                      <path d="M7.2 21.8c-1.4-1-2.6-2.4-3.4-4" />
                      <path d="M20.2 17.8c-.8 1.6-2 3-3.4 4" />
                      <path d="M2 12h20" />
                      <path d="M12 2v20" />
                    </svg>
                  </div>
                  <CardTitle className="text-blue-800">SDG 6: Clean Water and Sanitation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700">
                    Our water conservation projects ensure availability and sustainable management of water and
                    sanitation for all.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-800">Impact Score</span>
                      <span className="font-medium text-blue-800">87%</span>
                    </div>
                    <Progress value={87} className="h-2 bg-blue-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </div>
                  <CardTitle className="text-yellow-800">SDG 7: Affordable and Clean Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-700">
                    We help ensure access to affordable, reliable, sustainable and modern energy for all through
                    renewable energy projects.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-800">Impact Score</span>
                      <span className="font-medium text-yellow-800">92%</span>
                    </div>
                    <Progress value={92} className="h-2 bg-yellow-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M2 22v-5l5-5 5 5-5 5z" />
                      <path d="M9.5 14.5 17 7l3 3-7.5 7.5" />
                      <path d="m17 7 3-3" />
                      <path d="M10.5 8.5 7 5l3-3 3.5 3.5" />
                    </svg>
                  </div>
                  <CardTitle className="text-green-800">SDG 13: Climate Action</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700">
                    Our carbon tracking and reduction initiatives help combat climate change and its impacts through
                    accurate measurement.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-green-800">Impact Score</span>
                      <span className="font-medium text-green-800">89%</span>
                    </div>
                    <Progress value={89} className="h-2 bg-green-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle className="text-purple-800">SDG 11: Sustainable Cities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-700">
                    We help make cities and human settlements inclusive, safe, resilient and sustainable through smart
                    infrastructure.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-800">Impact Score</span>
                      <span className="font-medium text-purple-800">84%</span>
                    </div>
                    <Progress value={84} className="h-2 bg-purple-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                      <path d="M13 13h4" />
                      <path d="M13 17h4" />
                      <path d="M9 13h.01" />
                      <path d="M9 17h.01" />
                    </svg>
                  </div>
                  <CardTitle className="text-red-800">SDG 12: Responsible Consumption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-700">
                    Our waste reduction tracking ensures sustainable consumption and production patterns across supply
                    chains.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-red-800">Impact Score</span>
                      <span className="font-medium text-red-800">91%</span>
                    </div>
                    <Progress value={91} className="h-2 bg-red-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                  <CardTitle className="text-teal-800">SDG 17: Partnerships for the Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-teal-700">
                    We strengthen global partnerships for sustainable development through collaborative reporting
                    frameworks.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-teal-800">Impact Score</span>
                      <span className="font-medium text-teal-800">95%</span>
                    </div>
                    <Progress value={95} className="h-2 bg-teal-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                      <path d="M15 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                      <path d="M2 12h20" />
                      <path d="M20 16v4h-4" />
                      <path d="M14 16v4" />
                      <path d="M8 16v4" />
                      <path d="M4 16v4" />
                      <path d="M2 20h20" />
                    </svg>
                  </div>
                  <CardTitle className="text-indigo-800">SDG 9: Industry, Innovation and Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-700">
                    Our technology promotes inclusive and sustainable industrialization and fosters innovation through
                    digital transformation.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-indigo-800">Impact Score</span>
                      <span className="font-medium text-indigo-800">88%</span>
                    </div>
                    <Progress value={88} className="h-2 bg-indigo-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle className="text-orange-800">SDG 16: Peace, Justice and Strong Institutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-orange-700">
                    Our transparency tools promote peaceful and inclusive societies for sustainable development through
                    accountability.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-orange-800">Impact Score</span>
                      <span className="font-medium text-orange-800">82%</span>
                    </div>
                    <Progress value={82} className="h-2 bg-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section ref={demoRef} className="w-full py-12 md:py-24 lg:py-32 bg-white" id="demo">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Take Action
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Maximize Your CSR & ESG Impact?
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Convert CSR Spending into ESG-Driven Growth Today with BEADS!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">BIM-Driven Impact Forecasting</h3>
                      <p className="text-sm text-muted-foreground">
                        No more guesswork in ESG projects—our approach ensures quantifiable sustainability impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Digital Twin Real-Time Tracking</h3>
                      <p className="text-sm text-muted-foreground">
                        Live performance monitoring, not static reporting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Investor-Grade ESG Reports</h3>
                      <p className="text-sm text-muted-foreground">Verifiable, compliance-ready disclosures.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Regulatory Alignment</h3>
                      <p className="text-sm text-muted-foreground">
                        Meets SEBI BRSR, GRI, SASB, and UN SDG requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Get Started with BEADS</CardTitle>
                    <CardDescription>
                      Ready to transform your CSR initiatives into measurable ESG impact? Fill out our quick form to get
                      started.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <Button
                      size="lg"
                      className="w-full text-lg py-6"
                      onClick={() => window.open("https://forms.gle/YfqjFpKJ8VBdXfAt9", "_blank")}
                    >
                      Request Information
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer ref={contactRef} className="w-full border-t bg-background py-6 md:py-12" id="contact">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold font-lexend">BEADS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We facilitate CSR projects to maximize ESG impact, aligning with sustainability goals—leveraging BIM for
                forecasting, simulation, and optimization to benefit all stakeholders.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 1.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  News
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Resources</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Webinars
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Contact</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <p className="text-muted-foreground">Email: contact.beads.design@gmail.com</p>
                {/*<p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>*/}
                <p className="text-muted-foreground">Address: Whitefield, Bengaluru-560066</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 BEADS. All rights reserved.</p>
            <p className="mt-2">No fluff. No greenwashing. Just measurable ESG impact, backed by data.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

