
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-headline font-bold text-lg text-primary">SQAT Club</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SQAT ( Software Quality Assurance & Testing ) <br /> Empowers the next generation of QA engineers and IT professionals through quality, collaboration, and continuous learning.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events & Workshops</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">Executive Panel</Link></li>
              <li><Link href="/membership" className="text-muted-foreground hover:text-primary transition-colors">Membership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors">Achievements</Link></li>
              <li><Link href="/events/ai-tool" className="text-muted-foreground hover:text-primary transition-colors">AI Content Tool</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Will be available soon</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">sqat@diu.edu.bd</span>
              </li>
            </ul>
            <div className="mt-3 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SQAT Club. All rights reserved. | Designed by <span className="text-primary hover:text-primary/90 font-semibold"><a href="https://mahbub-zaman.vercel.app/">Mahbub Zaman</a></span></p>
        </div>
      </div>
    </footer>
  );
}
