import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Github, Linkedin, Mail, User } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
    const faculty = [
        { name: "Dr. A. Sharma", role: "Faculty Advisor", dept: "Robotics & Automation" },
        { name: "Prof. K. Verma", role: "Event Coordinator", dept: "Computer Science" },
    ];

    const students = [
        { name: "Rohan Das", role: "Lead Organizer", dept: "Final Year, ECE" },
        { name: "Priya Singh", role: "Technical Head", dept: "Third Year, CSE" },
        { name: "Amit Kumar", role: "Sponsorship Lead", dept: "Final Year, ME" },
        { name: "Sneha Gupta", role: "Creative Director", dept: "Third Year, IT" },
        { name: "Vikram Malhotra", role: "Web Developer", dept: "Second Year, CSE" },
        { name: "Anjali Rao", role: "Public Relations", dept: "Third Year, ECE" },
    ];

    return (
        <main className="min-h-screen bg-navy text-foreground">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
                <Section>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                        Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Crew</span>
                    </h1>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        The minds and hands working behind the scenes to make Robo Rumble 3.0 a reality.
                    </p>
                </Section>

                {/* Faculty Section */}
                <div className="mb-20">
                    <Section>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-cyan pl-4">
                            Faculty Coordinators
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {faculty.map((member, i) => (
                                <div key={i} className="flex items-center gap-4 bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-all">
                                    <div className="w-16 h-16 rounded-full bg-navy border border-gray-700 flex items-center justify-center text-gray-500">
                                        <User size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                        <p className="text-neon-cyan text-sm">{member.role}</p>
                                        <p className="text-gray-500 text-xs">{member.dept}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>

                {/* Student Section */}
                <div>
                    <Section delay={0.2}>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-purple pl-4">
                            Student Core Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {students.map((member, i) => (
                                <div key={i} className="group bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-purple/50 transition-all hover:-translate-y-1">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy to-black border-2 border-white/10 flex items-center justify-center text-gray-600 group-hover:border-neon-purple transition-colors">
                                        <User size={40} />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">{member.name}</h3>
                                        <p className="text-neon-cyan text-sm font-medium">{member.role}</p>
                                        <p className="text-gray-500 text-xs">{member.dept}</p>
                                    </div>
                                    <div className="flex justify-center gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
                                        <a href="#" className="text-gray-400 hover:text-white"><Github size={18} /></a>
                                        <a href="#" className="text-gray-400 hover:text-white"><Mail size={18} /></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
