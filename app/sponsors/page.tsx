import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function SponsorsPage() {
    const sponsors = [
        {
            tier: "Title Sponsor",
            color: "text-neon-cyan border-neon-cyan shadow-[0_0_30px_rgba(100,255,218,0.2)]",
            logos: ["TechCorp Global"]
        },
        {
            tier: "Gold Sponsors",
            color: "text-yellow-400 border-yellow-400",
            logos: ["DevSolutions", "InnovateX", "Future Systems"]
        },
        {
            tier: "Silver Sponsors",
            color: "text-gray-300 border-gray-400",
            logos: ["CyberNet", "RoboTech Labs", "CloudScale", "DataFlow"]
        }
    ];

    return (
        <main className="min-h-screen bg-navy text-foreground">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
                <Section>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Sponsors</span>
                    </h1>
                    <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
                        Robo Rumble 3.0 is made possible by the generous support of our industry partners.
                    </p>
                </Section>

                <div className="space-y-16">
                    {sponsors.map((tier, i) => (
                        <Section key={i} delay={i * 0.2}>
                            <h2 className={`text-2xl font-bold text-center mb-10 uppercase tracking-widest ${tier.tier === 'Title Sponsor' ? 'text-neon-cyan' : 'text-white'}`}>
                                {tier.tier}
                            </h2>

                            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                                {tier.logos.map((logo, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-64 h-32 flex items-center justify-center rounded-xl bg-navy-light/50 border-2 transition-all hover:scale-105 ${tier.color}`}
                                    >
                                        {/* Placeholder for Logo */}
                                        <span className={`text-xl font-bold ${tier.tier === 'Title Sponsor' ? 'text-2xl' : ''}`}>
                                            {logo}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    ))}
                </div>

                <Section delay={0.6}>
                    <div className="mt-24 p-8 md:p-12 bg-gradient-to-r from-navy-light to-navy rounded-2xl border border-white/10 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">Want to Sponsor Us?</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Connect with over 1000+ talented engineers and showcase your brand at the region's largest tech fest.
                        </p>
                        <Button size="lg" variant="primary">Become a Sponsor</Button>
                    </div>
                </Section>
            </div>

            <Footer />
        </main>
    );
}
