import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Cpu, Target, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-navy text-foreground">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
                <Section>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                        About The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Legacy</span>
                    </h1>
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
                        Robo Rumble started as a small collegiate meetup and has evolved into one of the region's
                        premier robotics and technology festivals. Now in its third edition, we are pushing the
                        boundaries of what student-led engineering can achieve.
                    </p>
                </Section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    {[
                        { title: "Our Mission", icon: Target, desc: "To foster a culture of innovation and hands-on engineering among students, providing a platform to test their skills against the best." },
                        { title: "The Technology", icon: Cpu, desc: "Focusing on autonomous robotics, IoT, AI, and embedded systems. We celebrate cutting-edge tech in every event." },
                        { title: "Future Vision", icon: Rocket, desc: "Building a community of makers and problem solvers who will drive the technological advancements of tomorrow." },
                    ].map((item, i) => (
                        <Section key={i} delay={i * 0.2}>
                            <div className="text-center p-6 md:p-8 rounded-2xl bg-navy-light/50 border border-white/5 hover:border-neon-cyan/30 transition-all">
                                <div className="w-16 h-16 mx-auto bg-navy border border-neon-cyan rounded-full flex items-center justify-center mb-6 text-neon-cyan shadow-[0_0_15px_rgba(100,255,218,0.2)]">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        </Section>
                    ))}
                </div>

                <Section delay={0.4}>
                    <div className="bg-gradient-to-r from-navy-light to-navy p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <h3 className="text-3xl font-bold text-white">Engineering Excellence Since 2024</h3>
                                <p className="text-gray-400">
                                    What began with 50 participants has grown to a massive gathering of 1000+ innovators.
                                    Robo Rumble 3.0 promises to be bigger, bolder, and more technologically advanced than ever before.
                                    We are not just organizing events; we are building an ecosystem.
                                </p>
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <div className="p-4 bg-navy rounded-lg border border-neon-cyan/20 text-center">
                                    <div className="text-3xl font-bold text-white mb-1">2024</div>
                                    <div className="text-xs text-neon-cyan uppercase">Inception</div>
                                </div>
                                <div className="p-4 bg-navy rounded-lg border border-neon-cyan/20 text-center">
                                    <div className="text-3xl font-bold text-white mb-1">2025</div>
                                    <div className="text-xs text-neon-cyan uppercase">Expansion</div>
                                </div>
                                <div className="p-4 bg-navy rounded-lg border border-neon-purple/50 text-center col-span-2 shadow-[0_0_20px_rgba(189,52,254,0.2)]">
                                    <div className="text-4xl font-bold text-white mb-1">2026</div>
                                    <div className="text-xs text-neon-purple uppercase font-bold">Evolution</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            <Footer />
        </main>
    );
}
