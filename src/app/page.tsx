import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Users, Trophy, Sparkles, BookOpen, Camera, Award, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImg?.imageUrl && (
            <Image
              src={heroImg.imageUrl}
              alt={heroImg.description || "Hero background"}
              fill
              className="object-cover brightness-[0.3]"
              data-ai-hint={heroImg.imageHint}
              priority
            />
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full text-accent text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Empowering Future Developers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight">
              Unlock Your Potential with <span className="text-accent">SQAT</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              We are a community of passionate developers at our university, dedicated to mastering technology, building cool projects, and shaping the future of software.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-xl transition-all hover:scale-105">
                <Link href="/membership">Join the Club <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 h-14 text-lg rounded-xl transition-all">
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Options Section */}
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
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
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

      {/* Feature Section */}
      <section className="container mx-auto px-4 bg-primary/5 py-16 rounded-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 space-y-4 text-center">
            <div className="mx-auto h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Skill Development</h3>
            <p className="text-muted-foreground">Hands-on workshops and seminars to bridge the gap between academia and industry.</p>
          </div>
          <div className="p-8 space-y-4 text-center">
            <div className="mx-auto h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Community</h3>
            <p className="text-muted-foreground">Network with like-minded peers and mentors to collaborate on groundbreaking projects.</p>
          </div>
          <div className="p-8 space-y-4 text-center">
            <div className="mx-auto h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Opportunities</h3>
            <p className="text-muted-foreground">Get exclusive access to hackathons, internships, and professional certification programs.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Highlight */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Next Big Thing</h4>
                <h2 className="text-3xl md:text-4xl font-headline font-bold">SQAT Annual Hackathon 2024</h2>
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
    </div>
  );
}
