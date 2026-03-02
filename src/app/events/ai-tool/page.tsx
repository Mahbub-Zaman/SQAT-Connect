
"use client";

import { useState } from "react";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateEventDescription } from "@/ai/flows/generate-event-description";
import { useToast } from "@/hooks/use-toast";

export default function AIToolPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    shortDescription: "",
    targetAudience: "University Students",
    benefits: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await generateEventDescription({
        ...formData,
        benefits: formData.benefits.split(",").map(b => b.trim()).filter(b => b !== ""),
      });
      setResult(response.description);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate description. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Description copied to clipboard.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full text-accent font-bold text-sm">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Assistant</span>
          </div>
          <h1 className="text-4xl font-headline font-bold text-primary">Event Description Generator</h1>
          <p className="text-lg text-muted-foreground">
            Provide the key details of your event, and our AI will craft an engaging, concise description for your promotional materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="shadow-xl border-none">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>Fill in the facts about your event.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input 
                    id="title" 
                    placeholder="e.g. AI Ethics Seminar" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    required 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input 
                      id="date" 
                      placeholder="e.g. Oct 26, 2024" 
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input 
                      id="time" 
                      placeholder="e.g. 2 PM - 4 PM" 
                      value={formData.time}
                      onChange={e => setFormData({...formData, time: e.target.value})}
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    placeholder="e.g. Auditorium A" 
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shortDesc">Brief Overview</Label>
                  <Textarea 
                    id="shortDesc" 
                    placeholder="What is this event about basically?" 
                    value={formData.shortDescription}
                    onChange={e => setFormData({...formData, shortDescription: e.target.value})}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits (comma separated)</Label>
                  <Input 
                    id="benefits" 
                    placeholder="Networking, Skill Certificate, Free Pizza" 
                    value={formData.benefits}
                    onChange={e => setFormData({...formData, benefits: e.target.value})}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full h-12 rounded-xl" disabled={loading}>
                  {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : "Generate Description"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Result */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center">
              Generated Copy
              {result && (
                <Button variant="ghost" size="sm" onClick={handleCopy} className="ml-auto text-muted-foreground hover:text-primary">
                  {copied ? <Check className="h-4 w-4 mr-1 text-green-500" /> : <Copy className="h-4 w-4 mr-1" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              )}
            </h3>
            <Card className="min-h-[300px] flex items-center justify-center bg-card border-dashed border-2 relative">
              {result ? (
                <div className="p-8">
                  <p className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">{result}</p>
                </div>
              ) : (
                <div className="text-center p-8 space-y-4 text-muted-foreground">
                  <div className="mx-auto h-16 w-16 bg-muted rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 opacity-20" />
                  </div>
                  <p>Your AI-generated description will appear here after you submit the form.</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
