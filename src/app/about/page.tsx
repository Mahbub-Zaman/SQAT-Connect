import Image from "next/image";
import { Target, Eye, Rocket, UserCheck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const advisorImg = PlaceHolderImages.find(img => img.id === 'team-president');

  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      {/* Introduction */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">About SQAT Club</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The SQAT (Software Quality & Advanced Technologies) Club was founded in 2022 with a single mission: to empower the next generation of software developers at our university.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-3xl shadow-lg border-l-4 border-primary space-y-4">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To create a vibrant community where students can learn, collaborate, and innovate with cutting-edge technologies. We aim to provide hands-on experience that prepares our members for the rapidly evolving tech landscape.
          </p>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-lg border-l-4 border-accent space-y-4">
          <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
            <Eye className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To become the leading hub of innovation at our university, fostering a culture of technical excellence and creative problem-solving that extends beyond the classroom into real-world impact.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold">Our Core Objectives</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Technical Skill Gaps", desc: "Filling the gap between theoretical computer science and practical software engineering.", icon: Rocket },
            { title: "Professional Growth", desc: "Hosting workshops on resume building, interview prep, and networking skills.", icon: UserCheck },
            { title: "Collaborative Learning", desc: "Facilitating peer-to-peer mentorship and collaborative group projects.", icon: Users },
          ].map((obj, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center">
                  <obj.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold">{obj.title}</h4>
                <p className="text-muted-foreground">{obj.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="bg-primary text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-white/20 shrink-0">
            {advisorImg?.imageUrl && (
              <Image
                src={advisorImg.imageUrl}
                alt="Faculty Advisor"
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Message from our Faculty Advisor</h2>
              <p className="text-accent font-bold text-lg">Dr. Sarah Jenkins, Dept. of Computer Science</p>
            </div>
            <p className="text-lg text-blue-100 italic leading-relaxed">
              "Technology is a tool, but it's the people behind it who make the difference. SQAT Club is more than just a coding club; it's a launchpad for the next generation of innovators who will build solutions for tomorrow's challenges."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
