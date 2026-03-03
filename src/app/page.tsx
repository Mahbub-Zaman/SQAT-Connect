"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Users, Trophy, Sparkles, BookOpen, Camera, Award, UserPlus, Bug, Cpu, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const eventImg = PlaceHolderImages.find(img => img.id === 'event-2');

  const options = [
    { name: "About SQAT", href: "/about", icon: BookOpen, desc: "Learn about our mission and history." },
    { name: "Meet the Team", href: "/team", icon: Users, desc: "See the leaders driving our vision." },
    { name: "Events Calendar", href: "/events", icon: Code, desc: "Join our workshops and seminars." },
    { name: "Club Gallery", href: "/gallery", icon: Camera, desc: "View our community in action." },
    { name: "Achievements", href: "/achievements", icon: Award, desc: "Explore our proudest milestones." },
    { name: "Join Us", href: "/membership", icon: UserPlus, desc: "Become an official SQAT member." },
  ];

  const stats = [
    { label: "Members", value: "120+" },
    { label: "Workshops", value: "25+" },
    { label: "Projects Tested", value: "12+" },
    { label: "Industry Sessions", value: "6+" },
  ];

  const learningSteps = [
    { step: "Join SQAT", icon: UserPlus },
    { step: "Learn Basics", icon: BookOpen },
    { step: "Practice", icon: CheckCircle },
    { step: "Real Projects", icon: Bug },
    { step: "Leadership", icon: Users },
    { step: "Career Ready", icon: Trophy },
  ];

  const testimonials = [
    { name: "Amina Rahman", role: "3rd Year Student", quote: "SQAT helped me land my first QA internship! The hands-on training is amazing." },
    { name: "Jamal Hossain", role: "4th Year Student", quote: "I learned real-world automation tools and bug hunting that I use daily in my projects." },
  ];

  return (
    <div className="flex flex-col gap-32 pb-20">

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImg?.imageUrl && (
            <Image
              src="https://i.ibb.co/XrpPt1Xh/growtika-y-GQmjh2u-OTg-unsplash.jpg"
              alt="Hero background"
              fill
              className="object-cover brightness-[0.2]"
              priority
            />
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full text-accent text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Empowering Future QA Engineers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight">
              Master <span className="text-accent">Software Testing</span> with SQAT
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              We are a specialized Software Quality Assurance & Testing community,
              focused on manual testing, automation, bug tracking, and real-world QA workflows.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-xl transition-all hover:scale-105">
                <Link href="/membership">Join the Club <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 h-14 text-lg rounded-xl transition-all">
                <Link href="/events">Explore Events</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 bg-primary/5 rounded-3xl">
            <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
            <p className="text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Why Software Testing */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Software Testing?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every successful software product relies on quality assurance. QA ensures reliability, improves user experience, and opens doors to high-demand career opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className="p-8 shadow-md hover:shadow-xl transition-all">
            <CardContent className="space-y-4 text-center">
              <div className="mx-auto h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Bug className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Manual Testing</h3>
              <p className="text-muted-foreground">Learn how to manually test software like a professional QA engineer.</p>
            </CardContent>
          </Card>
          <Card className="p-8 shadow-md hover:shadow-xl transition-all">
            <CardContent className="space-y-4 text-center">
              <div className="mx-auto h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Automation Testing</h3>
              <p className="text-muted-foreground">Gain hands-on experience with industry-standard automation tools.</p>
            </CardContent>
          </Card>
          <Card className="p-8 shadow-md hover:shadow-xl transition-all">
            <CardContent className="space-y-4 text-center">
              <div className="mx-auto h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Real Projects</h3>
              <p className="text-muted-foreground">Test real projects and gain practical QA experience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Explore Options */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Discover Your Path</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From learning new skills to winning competitions, explore the different ways you can engage with SQAT.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, i) => (
            <Link key={i} href={option.href} className="group">
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-primary/5">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <option.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">{option.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Journey */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Your Learning Journey</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {learningSteps.map((step, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center gap-2 p-6 bg-primary/5 rounded-3xl w-40 transition-all hover:bg-primary/10"
            >
              <div className="h-12 w-12 bg-foreground/5 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary">
                <step.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
              </div>
              <p className="font-semibold text-primary transition-colors">{step.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Next Big Thing</h4>
                <h2 className="text-3xl md:text-4xl font-headline font-bold">SQAT Orientation 2026</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Our flagship event is back! Join 48 hours of intense coding, innovation, and fun. Pitch your ideas to industry experts and win amazing prizes.
              </p>
              <div className="flex items-center space-x-8 py-4">
                <div>
                  <p className="text-2xl font-bold text-primary">Dec 15</p>
                  <p className="text-sm text-muted-foreground uppercase">Date</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-primary">48 Hrs</p>
                  <p className="text-sm text-muted-foreground uppercase">Duration</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-primary">Main Lab</p>
                  <p className="text-sm text-muted-foreground uppercase">Location</p>
                </div>
              </div>
              <Button asChild size="lg" className="rounded-xl px-10">
                <Link href="/events">Register Now</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              {eventImg?.imageUrl && (
                <Image
                  src={eventImg.imageUrl}
                  alt={eventImg.description || "Event highlight"}
                  fill
                  className="object-cover"
                  data-ai-hint={eventImg.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSlider/>

      {/* Final CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">🚀 Ready to Become a QA Pro?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you want to become a QA Engineer, Software Tester, or IT Professional, SQAT will help you build practical skills for your future career.
        </p>
        <div>
          <Button className="px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:scale-105 transition">
            <Link href="/membership">Apply for Membership</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}