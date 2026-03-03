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
    <div className="container mx-auto px-4 py-20 space-y-20">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Events & Activities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay updated with our latest workshops, seminars, and competitions. Don't miss out on opportunities to learn and grow.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="space-y-8">
        <h2 className="text-2xl font-headline font-bold">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, i) => {
            const img = PlaceHolderImages.find(p => p.id === event.imgId);
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row bg-secondary rounded-2xl shadow-md overflow-hidden border border-border/50 group"
              >
                {/* Event Image */}
                <div className="relative sm:w-2/3 aspect-video sm:aspect-auto">
                  {img?.imageUrl && (
                    <Image
                      src={img.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <Badge className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0">
                    {event.type}
                  </Badge>
                </div>

                {/* Event Details */}
                <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                  {/* Title + Description */}
                  <div className="space-y-1 mb-1">
                    <h3 className="text-[20px] font-bold text-primary leading-tight truncate">
                      {event.title}
                    </h3>
                    <p className="text-[14px] text-muted-foreground line-clamp-2">
                      {event.desc}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Date / Time / Location aligned above button */}
                  <div className="space-y-1.5 text-[13px] text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <div className="mt-3">
                    <Button size="sm" className="w-full rounded-lg text-xs h-8 flex items-center justify-center">
                      Register <ArrowRight className="ml-1.5 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Past Highlights */}
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
                  <h4 className="text-white font-bold text-xs leading-tight truncate">{event.title}</h4>
                  <p className="text-white/70 text-[10px] truncate">{event.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}