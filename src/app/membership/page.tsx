
"use client";

import { useState } from "react";
import { CheckCircle2, DollarSign, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function MembershipPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "We've received your application. Our team will contact you soon.",
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      {/* Introduction */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Join the Community</h1>
        <p className="text-lg text-muted-foreground">
          Become a part of the fastest-growing tech community on campus. Open your doors to a world of innovation, mentorship, and opportunities.
        </p>
      </section>

      {/* Benefits & Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold">Why Join SQAT?</h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>
          <div className="space-y-6">
            {[
              { title: "Priority Event Access", desc: "Get first-row seats and early-bird registration for all workshops and seminars.", icon: ShieldCheck },
              { title: "Exclusive Resources", desc: "Access our internal library of study materials, project templates, and premium courses.", icon: Users },
              { title: "Certification", desc: "Earn official SQAT participation and completion certificates for major projects.", icon: CheckCircle2 },
              { title: "Career Support", desc: "Get resume reviews and referral opportunities from our industry partners.", icon: ArrowRight },
            ].map((benefit, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-white rounded-3xl shadow-lg border border-border space-y-4">
            <h3 className="text-xl font-bold flex items-center text-primary">
              <DollarSign className="h-5 w-5 mr-2" /> Membership Fee
            </h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold">$10</span>
              <span className="text-muted-foreground">/ academic year</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This fee goes directly into organizing events, paying for software licenses, and providing snacks during our hackathons!
            </p>
          </div>
        </div>

        {/* Form */}
        <Card className="shadow-2xl border-none rounded-[2rem]">
          <CardHeader className="bg-primary text-white rounded-t-[2rem] p-8">
            <CardTitle className="text-2xl">Application Form</CardTitle>
            <CardDescription className="text-blue-100">Ready to start your journey? Fill out the form below.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">University Email</Label>
                <Input id="email" type="email" placeholder="jdoe@student.edu" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="id">Student ID</Label>
                  <Input id="id" placeholder="2024-XXXXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study</Label>
                  <Select required>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">Primary Interest</Label>
                <Select required>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="What excites you most?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ai">AI & Machine Learning</SelectItem>
                    <SelectItem value="mobile">Mobile App Dev</SelectItem>
                    <SelectItem value="cloud">Cloud Computing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-bold bg-accent hover:bg-accent/90" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
