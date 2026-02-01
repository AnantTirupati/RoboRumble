import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-navy text-foreground">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
                <Section>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Touch</span>
                    </h1>
                    <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
                        Have questions about rules, registration, or logistics? Reach out to us.
                    </p>
                </Section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <Section delay={0.2}>
                        <div className="bg-navy-light p-8 rounded-2xl border border-white/5 space-y-8 h-full">
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-neon-cyan shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Email Us</h3>
                                        <p className="text-gray-400">info@roborumble.edu</p>
                                        <p className="text-gray-400">support@roborumble.edu</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-neon-purple shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Call Us</h3>
                                        <p className="text-gray-400">+91 98765 43210 (Rohan - Org)</p>
                                        <p className="text-gray-400">+91 98765 43211 (Priya - Tech)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Visit Us</h3>
                                        <p className="text-gray-400">
                                            Engineering Block B, Tech Institute Campus,<br />
                                            Main Avenue, Mumbai, India - 400001
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-white font-medium mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Globe].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-navy border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-cyan hover:text-navy transition-all">
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Map / Form */}
                    <Section delay={0.4}>
                        <div className="bg-navy-light p-1 rounded-2xl border border-white/5 h-full min-h-[400px] overflow-hidden relative group">
                            {/* Decorative Map Placeholder */}
                            <div className="absolute inset-0 bg-navy flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <MapPin size={48} className="text-neon-cyan mx-auto animate-bounce" />
                                    <p className="text-gray-500 text-sm">Interactive Map Loading...</p>
                                </div>
                                {/* CSS Grid Pattern for tech look */}
                                <div className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: 'radial-gradient(circle, #64ffda 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                                </div>
                            </div>

                            {/* Simple Form Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 bg-navy/90 backdrop-blur-md p-6 rounded-xl border border-white/10">
                                <h3 className="text-white font-bold mb-4">Send a Message</h3>
                                <div className="space-y-4">
                                    <input className="w-full bg-navy border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan" placeholder="Your Name" />
                                    <input className="w-full bg-navy border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan" placeholder="Your Email" />
                                    <Button size="sm" variant="primary" className="w-full">Send Inquiry</Button>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
