import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Download } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-foreground overflow-x-hidden selection:bg-neon-cyan selection:text-navy">
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 md:px-6 z-10 text-center">
          <Section>
            <h2 className="text-neon-cyan font-mono text-sm md:text-lg mb-4 tracking-widest uppercase">
              Build Compete Dominate
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(100,255,218,0.3)]">
              ROBO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">RUMBLE</span>
              <span className="text-2xl md:text-4xl align-top ml-2 text-neon-purple">3.0</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Where Innovation Meets Competition. Join the ultimate robotics showdown
              featuring top talent from across the nation.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <Link href="/register">
                <Button size="lg" variant="primary" className="w-full md:w-auto">
                  Register Now <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  Explore Events
                </Button>
              </Link>
              <a href="/brochureroborumble3.o.pdf" download="RoboRumble_Brochure.pdf">
                <Button size="lg" variant="outline" className="w-full md:w-auto border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  <Download size={20} className="mr-2" />
                  Download Brochure
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="text-neon-purple" />
                <span>March 9-11, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-neon-purple" />
                <span>CSJM University Campus, Kanpur</span>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-white text-sm mb-6 uppercase tracking-widest">Event Starts In</p>
              <Countdown targetDate="2026-03-09T09:00:00" />
            </div>
          </Section>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-navy-light/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <Section delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "10+", subtitle: "Events", desc: "From Robo Wars to Esports" },
                { title: "₹1.5L+", subtitle: "Prize Pool", desc: "Total cash prizes to be won" },
                { title: "1000+", subtitle: "Participants", desc: "Students from 10+ colleges and schools" },
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-xl bg-navy border border-white/5 hover:border-neon-cyan/50 transition-all group">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {stat.title}
                  </h3>
                  <h4 className="text-xl text-neon-purple font-bold mb-2">{stat.subtitle}</h4>
                  <p className="text-gray-400">{stat.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
