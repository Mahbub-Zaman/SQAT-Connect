import Image from "next/image";
import {
  Target,
  Eye,
  Users,
  Bug,
  ClipboardCheck,
  Briefcase,
  Rocket,
  Activity,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const advisorImg = PlaceHolderImages.find(img => img.id === "team-president");

  const benefits = [
    {
      title: "Manual & Automation Testing",
      desc: "Hands-on training in real-world testing tools and methodologies.",
      icon: ClipboardCheck,
    },
    {
      title: "Bug Hunting Practice",
      desc: "Live testing sessions and practical bug reporting experience.",
      icon: Bug,
    },
    {
      title: "Career Preparation",
      desc: "CV building, interview preparation & SQA career guidance.",
      icon: Briefcase,
    },
    {
      title: "Team Collaboration",
      desc: "Work in teams on real projects and improve communication skills.",
      icon: Users,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 space-y-28">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          About SQAT – Software Quality Assurance & Testing Club
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          SQAT is an official club dedicated to Software Quality Assurance,
          Software Testing, and Development Process excellence.
          We empower students with practical skills and real-world
          experience to build strong careers in the SQA industry.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-background border border-border p-10 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To build a strong foundation in Software Quality Assurance by providing
            hands-on training in manual testing, automation testing, bug tracking,
            and real project validation that prepares students for real-world
            software environments.
          </p>
        </div>

        <div className="bg-background border border-border p-10 rounded-3xl shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Eye className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To become the leading student platform for SQA learning and innovation,
            producing skilled QA Engineers and Software Testers who are confident,
            industry-ready, and capable of ensuring high-quality software systems.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">What We Do</h2>
          <p className="text-muted-foreground mt-2">
            Practical activities that prepare you for real industry environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-border rounded-3xl">
            <Activity className="mx-auto h-10 w-10 text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2">Weekly Practice Sessions</h4>
            <p className="text-muted-foreground text-sm">
              Hands-on testing practice and real bug analysis sessions.
            </p>
          </div>

          <div className="p-8 border border-border rounded-3xl">
            <Rocket className="mx-auto h-10 w-10 text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2">Real Project Testing</h4>
            <p className="text-muted-foreground text-sm">
              Work on live projects and experience real QA workflows.
            </p>
          </div>

          <div className="p-8 border border-border rounded-3xl">
            <TrendingUp className="mx-auto h-10 w-10 text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2">Workshops & Seminars</h4>
            <p className="text-muted-foreground text-sm">
              Learn from industry experts and professional QA Engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-muted/40 rounded-3xl p-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-primary">100+</h3>
            <p className="text-muted-foreground text-sm">Active Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">20+</h3>
            <p className="text-muted-foreground text-sm">Workshops Conducted</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">10+</h3>
            <p className="text-muted-foreground text-sm">Projects Tested</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">5+</h3>
            <p className="text-muted-foreground text-sm">Industry Sessions</p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Why Join SQAT?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <Card key={i} className="border border-border shadow-md hover:shadow-xl transition-all">
              <CardContent className="p-8  text-center space-y-4">
                <div className="mx-auto h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="bg-primary text-white rounded-[3rem] p-12 md:p-20">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Fixed Image */}
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shrink-0">
            {advisorImg && (
              <Image
                src={advisorImg.imageUrl}
                alt="Faculty Advisor"
                width={176}
                height={176}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Message from Our Faculty Advisor
            </h2>

            <p className="text-lg italic text-white/90 leading-relaxed">
              "Quality is not an act, it is a habit. Through SQAT, students gain
              real industry-focused testing skills that prepare them for professional
              careers in Software Quality Assurance."
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">🚀 Become a Member of SQAT</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you want to become a QA Engineer, Software Tester,
          or IT Professional, SQAT will help you build practical skills
          for your future career.
        </p>

        <button className="px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:scale-105 transition">
          Apply for Membership
        </button>
      </section>

    </div>
  );
}