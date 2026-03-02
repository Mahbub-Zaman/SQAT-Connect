import { Award, Trophy, Star, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const achievements = [
  {
    title: "Best University Club 2023",
    category: "Club Excellence",
    year: "2023",
    desc: "Recognized as the most active and impactful student organization on campus.",
    icon: Star,
  },
  {
    title: "Regional Hackathon Winners",
    category: "Competition",
    year: "2024",
    desc: "Our team secured 1st place among 50+ universities in the Southeast Regional Hackfest.",
    icon: Trophy,
  },
  {
    title: "Microsoft Partnership",
    category: "Collaboration",
    year: "2024",
    desc: "Established a strategic collaboration for Microsoft Learn Student Ambassadors program.",
    icon: ShieldCheck,
  },
  {
    title: "Open Source Contribution Award",
    category: "Technical Achievement",
    year: "2023",
    desc: "Awarded for the club's significant contributions to global open-source projects.",
    icon: Award,
  },
];

export default function AchievementsPage() {
  const achImg = PlaceHolderImages.find(p => p.id === 'achievement-1');

  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Proudest Moments</h1>
        <p className="text-lg text-muted-foreground">
          Since our inception, we've strived for excellence and achieved remarkable milestones that define our legacy.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach, i) => (
          <Card key={i} className="border-none shadow-md overflow-hidden bg-white hover:shadow-lg transition-all group rounded-2xl">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="bg-primary/5 flex items-center justify-center p-6 transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                <ach.icon className="h-10 w-10" />
              </div>
              <div className="p-6 space-y-3 flex-grow">
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-0.5">
                    <p className="text-accent font-bold text-[10px] uppercase tracking-widest">{ach.category}</p>
                    <h3 className="text-lg font-bold leading-tight">{ach.title}</h3>
                  </div>
                  <span className="bg-muted px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0">{ach.year}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{ach.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-inner border flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/4 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md">
          <img
            src={achImg?.imageUrl || ""}
            alt="Awards display"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-3/4 space-y-6">
          <h2 className="text-2xl font-headline font-bold">Certifications & Recognitions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {[
              "Official Github Student Hub Partner",
              "AWS Academic Collaboration Award",
              "Certified Tech Community Leader",
              "Annual Campus Innovation Grant Winner",
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-background p-3 rounded-lg border border-border">
                <div className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                <span className="font-medium text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
