import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SponsorsPage() {
    const pastSponsors = [
        { name: "Nkosh", image: "/Nkosh.png" },
        { name: "RedBull", image: "/redbull2.png" },
        { name: "Dominos", image: "/dominos.png" },
        { name: "DailyWash", image: "/dailywash.jpg" },
        { name: "CSJMIF", image: "/CSJMIF.jpg" },
        { name: "Sahara", image: "/sahara.jpg" },
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

                <div className="mb-20">
                    <Section delay={0.2}>
                        <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-widest text-neon-cyan">
                            Past Sponsors
                        </h2>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {pastSponsors.map((sponsor, idx) => (
                                <div
                                    key={idx}
                                    className="relative w-64 h-32 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all hover:scale-105 hover:border-neon-cyan/50 overflow-hidden p-4"
                                >
                                    <Image
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            ))}
                        </div>
                    </Section>
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
