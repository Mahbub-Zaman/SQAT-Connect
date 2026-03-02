import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const upcomingEvents = [
  {
    title: "Web Development Masterclass",
    date: "November 28, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium",
    desc: "Learn modern frontend frameworks from industry experts.",
    type: "Workshop",
    imgId: "event-1",
  },
  {
    title: "Networking & Careers Seminar",
    date: "December 5, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Career Hub",
    desc: "Connect with HRs from top tech companies.",
    type: "Seminar",
    imgId: "gallery-2",
  },
];

const pastEvents = [
  {
    title: "Intro to Python for Science",
    date: "October 12, 2024",
    location: "Lab 3",
    imgId: "event-1",
  },
  {
    title: "Summer Coding Sprint",
    date: "August 20, 2024",
    location: "Campus Common",
    imgId: "gallery-1",
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Events & Activities</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay updated with our latest workshops, seminars, and competitions. Don't miss out on opportunities to learn and grow.
          </p>
        </div>
        <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-xl">
          <Link href="/events/ai-tool">
            <Sparkles className="mr-2 h-4 w-4" /> AI Event Assistant
          </Link>
        </Button>
      </div>

      {/* Upcoming Section */}
      <section className="space-y-10">
        <h2 className="text-2xl font-headline font-bold">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, i) => {
            const img = PlaceHolderImages.find(p => p.id === event.imgId);
            return (
              <div key={i} className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden border border-border/50 group">
                <div className="relative sm:w-1/3 aspect-video sm:aspect-auto">
                  {img?.imageUrl && (
                    <Image
                      src={img.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <Badge className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0">{event.type}</Badge>
                </div>
                <div className="p-5 sm:w-2/3 space-y-3 flex flex-col">
                  <h3 className="text-lg font-bold text-primary leading-tight">{event.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{event.desc}</p>
                  <div className="space-y-1.5 text-[11px] text-muted-foreground mt-auto">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-3 rounded-lg text-xs h-8">Register <ArrowRight className="ml-1.5 h-3 w-3" /></Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Past Events */}
      <section className="space-y-10">
        <h2 className="text-2xl font-headline font-bold">Past Highlights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pastEvents.map((event, i) => {
            const img = PlaceHolderImages.find(p => p.id === event.imgId);
            return (
              <div key={i} className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                {img?.imageUrl && (
                  <Image
                    src={img.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <h4 className="text-white font-bold text-xs leading-tight">{event.title}</h4>
                  <p className="text-white/70 text-[10px] mt-1">{event.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
