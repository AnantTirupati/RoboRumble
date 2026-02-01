import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Github, Linkedin, Mail, User } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
    const chiefPatron = {
        name: "Prof. Vinay Kumar Pathak",
        role: "Hon'ble Vice Chancellor",
        dept: "CSJMU",
        image: "/vinay pathak.avif"
    };

    const patrons = [
        { name: "Dr. Shilpa Deshpande Kaistha", role: "Dean, Innovation Foundation", dept: "CSJMU", image: "/dr-shilpa.jpg" },
        { name: "Mr. Divyansh Shukla", role: "CEO, Innovation Foundation", dept: "CSJMU", image: "/Divyansh_Shukla_Law.jpg" },
        { name: "Dr. Alok Kumar", role: "Director", dept: "UIET, CSJMU", image: "/dr-alok-kumar.jpg" },
    ];

    const faculty = [
        { name: "Dr. Ajay Tiwari", role: "Asst. Professor", dept: "UIET, CSJMU", image: "/Dr.-Ajay-Tiwari34.jpg" },
        { name: "Er. Mohd Shah Alam", role: "Asst. Professor", dept: "UIET, CSJMU", image: "/shah.jpeg" },
    ];

    const students = [
        { name: "Mr. Raju Ranjan Yadav", role: "Student Co-ordinator", dept: "ROBO RUMBLE", image: "/Raju.jpeg" },
        { name: "Mr. Devanshu Verma", role: "Student Co-ordinator", dept: "ROBO RUMBLE", image: "/devanshu.jpeg" },
        { name: "Qaaid Iqbal Badri", role: "Student Co-ordinator", dept: "ROBO RUMBLE", image: "/qaaid.jpeg" },
    ];

    const eventManagers = [
        { name: "Nikhil Shines", role: "Event Manager", dept: "ROBO RUMBLE", image: "/Nikhil.jpeg" },
        { name: "Vaishnavi Pal", role: "Event Manager", dept: "ROBO RUMBLE", image: "/Vaishnavi2.jpeg" },
    ];

    const mediaHeads = [
        { name: "Lucky Kumar", role: "Media & PR Head", dept: "ROBO RUMBLE", image: "/lucky.jpeg" },
        { name: "Satish Kumar Sharma", role: "Media & PR Head", dept: "ROBO RUMBLE", image: "/satish.jpeg" },
        { name: "Mukesh", role: "Media & PR Head", dept: "ROBO RUMBLE", image: "/mukesh.jpeg" },
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

                {/* Chief Patron Section */}
                <div className="mb-20">
                    <Section>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-cyan pl-4 text-center">
                            Chief Patron
                        </h2>
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center gap-4 bg-navy-light p-8 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all max-w-md w-full">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-neon-cyan shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                    <Image
                                        src={chiefPatron.image}
                                        alt={chiefPatron.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">{chiefPatron.name}</h3>
                                    <p className="text-neon-cyan font-bold">{chiefPatron.role}</p>
                                    <p className="text-gray-400">{chiefPatron.dept}</p>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>

                {/* Patrons Section */}
                <div className="mb-20">
                    <Section delay={0.1}>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-purple pl-4 text-center">
                            Patrons
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {patrons.map((member, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-purple/30 transition-all">
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-700">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                        <p className="text-neon-purple text-sm font-bold">{member.role}</p>
                                        <p className="text-gray-500 text-xs">{member.dept}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>

                {/* Faculty Section */}
                <div className="mb-20">
                    <Section delay={0.2}>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-cyan pl-4">
                            Faculty Co-ordinators
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {faculty.map((member, i) => (
                                <div key={i} className="flex items-center gap-4 bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-all">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 flex-shrink-0">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
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
                <div className="mb-20">
                    <Section delay={0.3}>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-purple pl-4">
                            Student Co-ordinators
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {students.map((member, i) => (
                                <div key={i} className="group bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-purple/50 transition-all hover:-translate-y-1">
                                    <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-purple transition-colors">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">{member.name}</h3>
                                        <p className="text-neon-cyan text-sm font-medium">{member.role}</p>
                                        <p className="text-gray-500 text-xs">{member.dept}</p>
                                    </div>
                                    <div className="flex justify-center gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
                                        <a href="#" className="text-gray-400 hover:text-white"><Mail size={18} /></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>

                {/* Event Manager Section */}
                <div className="mb-20">
                    <Section delay={0.4}>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-cyan pl-4">
                            Event Managers
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {eventManagers.map((member, i) => (
                                <div key={i} className="group bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all hover:-translate-y-1">
                                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-cyan transition-colors">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{member.name}</h3>
                                        <p className="text-neon-purple text-sm font-medium">{member.role}</p>
                                        <p className="text-gray-500 text-xs">{member.dept}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>

                {/* Media & PR Head Section */}
                <div>
                    <Section delay={0.5}>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-purple pl-4">
                            Media & PR Heads
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {mediaHeads.map((member, i) => (
                                <div key={i} className="group bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-purple/50 transition-all hover:-translate-y-1">
                                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-purple transition-colors">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">{member.name}</h3>
                                        <p className="text-neon-cyan text-sm font-medium">{member.role}</p>
                                        <p className="text-gray-500 text-xs">{member.dept}</p>
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
