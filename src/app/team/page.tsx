"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, UserCircle, Linkedin, Facebook } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const allMembers = [
  { name: "Dr. Aris Thorne", role: "Chief Founder & Head", bio: "Visionary educator with 20+ years in Computer Science.", imgId: "team-founder-1", tier: 1 },
  { name: "Prof. Michael Brown", role: "Faculty Advisor", bio: "Senior Professor specializing in Software Engineering.", imgId: "team-advisor-1", tier: 2 },
  { name: "Elena Rodriguez", role: "Convener", bio: "Expert coordinator managing internal workflows.", imgId: "team-gs", tier: 2 },
  { name: "James Wilson", role: "Industry Mentor", bio: "Lead Architect at a Fortune 500 tech firm.", imgId: "team-mentor-1", tier: 2 },
  { name: "Alex Rivera", role: "President", bio: "Full-stack developer.", imgId: "team-president", tier: 3 },
  { name: "Samantha Lee", role: "Vice President", bio: "AI enthusiast.", imgId: "team-vp", tier: 3 },
  { name: "David Chen", role: "General Secretary", bio: "Organizes schedules.", imgId: "team-gs", tier: 3 },
  { name: "Emma Watson", role: "Joint Secretary", bio: "Supports administration.", imgId: "team-vp", tier: 3 },
  { name: "Priya Sharma", role: "Creative Secretary", bio: "UI/UX Designer.", imgId: "team-gs", tier: 3 },
  { name: "Raj Patel", role: "Cultural Secretary", bio: "Ensures vibrant social atmosphere.", imgId: "team-president", tier: 3 },
  { name: "Chloe Adams", role: "Sports Secretary", bio: "Healthy Dev initiatives.", imgId: "team-founder-2", tier: 3 },
  { name: "Mark Thompson", role: "Organization Secretary", bio: "Technical infrastructure.", imgId: "team-vp", tier: 3 }
];

function MemberCard({
  member,
  className,
}: {
  member: typeof allMembers[0];
  className?: string;
}) {
  const img = PlaceHolderImages.find((p) => p.id === member.imgId);

  return (
    <Card
      className={cn(
        "overflow-hidden border-none shadow-lg bg-white group hover:shadow-2xl transition-all duration-300 rounded-2xl",
        className
      )}
    >
      <CardContent className="p-0 bg-shada flex flex-col">
        {/* Smaller Image */}
        <div className="relative w-full h-40 bg-muted overflow-hidden rounded-t-2xl">
          {img?.imageUrl ? (
            <Image
              src={img.imageUrl}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
              <UserCircle className="h-20 w-20" />
            </div>
          )}

          {/* Social Overlay */}
          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <button className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors shadow-sm">
              <Facebook className="h-4 w-4" />
            </button>
            <button className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors shadow-sm">
              <Linkedin className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-4 text-center">
          <h3 className="font-bold text-primary text-base md:text-lg line-clamp-1">
            {member.name}
          </h3>
          <p className="text-xs text-accent font-bold uppercase tracking-widest">
            {member.role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = useMemo(() => {
    return allMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const tier1 = filteredMembers.filter((m) => m.tier === 1);
  const tier2 = filteredMembers.filter((m) => m.tier === 2);
  const tier3 = filteredMembers.filter((m) => m.tier === 3);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Search Header */}
        <div className="max-w-xl mx-auto space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Meet the Visionaries
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search team members by name or role..."
              className="pl-12 h-14 rounded-2xl border-primary/20 bg-shada shadow-sm focus-visible:ring-primary/30 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="space-y-20">
            {/* Tier 1 */}
            {tier1.length > 0 && (
              <div className="flex justify-center">
                {tier1.map((member, i) => (
                  <MemberCard key={i} member={member} className="w-56" />
                ))}
              </div>
            )}

            {/* Tier 2 */}
            {tier2.length > 0 && (
              <div className="flex flex-wrap justify-center gap-8">
                {tier2.map((member, i) => (
                  <MemberCard key={i} member={member} className="w-56" />
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  Executive Council
                </span>
              </div>
            </div>

            {/* Tier 3 */}
            {tier3.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {tier3.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground space-y-4">
            <Search className="h-16 w-16 mx-auto opacity-10" />
            <p className="text-xl font-medium">
              No results found for "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-primary hover:underline font-bold"
            >
              Show all members
            </button>
          </div>
        )}
      </div>
    </div>
  );
}