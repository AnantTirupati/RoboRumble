"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Trophy, Users, Clock, Info, Shield, Zap, Cpu, Code } from "lucide-react";
import { BiFootball } from "react-icons/bi";

interface EventData {
    id: string;
    title: string;
    category: string;
    icon: React.ElementType;
    desc: string;
    teamSize: string;
    prize: string;
    rules: string[];
}

const events: EventData[] = [
    {
        id: "robo-wars",
        title: "Robo Wars",
        category: "Robotics",
        icon: Shield,
        desc: "The ultimate battle of steel and strategy. Build a remote-controlled bot to survive the arena.",
        teamSize: "3-5 Members",
        prize: "₹20,000",
        rules: [
            "Width: Not More Than 45cm.",
            "Length: Not More Than 45cm",
            "Height: No Limitation but does not effect safety of participants and spectators.",
            "No flammable liquids or explosives.",
            "Maximum weight must not exceed 6 kg (including battery for wirelessly controlled Robots). However, a tolerance of 10% is acceptable but with penalty.",
            "Note: Failing to abide by above requirement will lead to disqualification."
        ]
    },
    {
        id: "line-following Bot",
        title: "Line Following Bot",
        category: "Robotics",
        icon: Zap,
        desc: "Speed and precision. Program your bot to follow the twisted path in the shortest time.",
        teamSize: "3-5 Members",
        prize: "₹15,000",
        rules: [
            "Autonomous robots only.",
            "Length: Not More Than 30cm",
            "Width: Not More Than 30cm",
            "Height: Not More Than 30cm",
            "Only onboard batteries are allowed as the power source. External power sources are prohibited"
        ]
    },
    {
        id: "Robo Soccer",
        title: "Robo Soccer",
        category: "Robotics",
        icon: BiFootball,
        desc: "The Fifa of Robotics. Design bots to outmaneuver and outscore your opponents.",
        teamSize: "2-4 Members",
        prize: "₹20,000",
        rules: [
            "The robot’s width, length, and height must not exceed 30 cm each.",
            "The maximum allowed weight is 5 kg, including the battery for wirelessly controlled robots.",
            "A tolerance of up to 10% in weight is permitted with penalty.",
            "Robots exceeding the permitted tolerance will be disqualified.",
            "Dribbling mechanisms that actively exert spin on the ball and keep contact with the ball are permitted under event-specific conditions.",
            "Failure to comply with any of the above specifications will result in immediate disqualification.",
            "Exploitation of loopholes or intentional misinterpretation of rules is strictly prohibited.",
            "The decision of the organizers shall be final and binding."
        ]
    },
    {
        id: "RC flying",
        title: "RC Flying",
        category: "Aerial",
        icon: Cpu,
        desc: "Navigate obstacles at breakneck speeds. Test your piloting skills.",
        teamSize: "Individual / Team of 2",
        prize: "₹20,000",
        rules: [
            "Only fixed-wing RC aircraft are permitted. Multirotor and rotary-wing aircraft are not allowed.",
            "The maximum allowable wingspan is 1.5 meters.",
            "The maximum takeoff weight must not exceed 2 kg, including the battery.",
            "Only electric motors are permitted as the power source. IC engines are strictly prohibited.",
            "The maximum allowed battery configuration is 6S Li-Po.",
            "Only handmade aircraft models built entirely by students are allowed.",
            "Use of readymade, commercially available, or ARF/RTF models is strictly prohibited.",
            "Permitted construction materials include foam, balsa wood, and composite structures.",
            "Failure to comply with the above specifications will result in disqualification.",
            "The decision of the organizers shall be final and binding."
        ]
    },
    {
        id: "project-expo",
        title: "Project Expo",
        category: "Innovation",
        icon: Users,
        desc: "Showcase your hardware or software projects to industry experts.",
        teamSize: "1-4 Members",
        prize: "₹10,000",
        rules: [
            "Working prototype required.",
            "Charts and presentation encouraged.",
            "Q&A session with judges."
        ]
    },
    {
        id: "coding-contest",
        title: "Algorthmic Arena",
        category: "Coding",
        icon: Code,
        desc: "Competitive programming contest. Solve complex algorithmic challenges.",
        teamSize: "Individual",
        prize: "₹10,000",
        rules: [
            "Each team must consist of 3–5 members.",
            "All team members must belong to the same school, college, or institute.",
            "Only one robot per team is allowed.",
            "The robot may be manual (wired or wireless) or autonomous.",
            "Manual handling of the robot during the match is strictly prohibited.",
            "Participants must carry valid institute ID cards during the event.",
            "Any form of misconduct or malpractice will lead to immediate disqualification.",
            "The decision of the judges shall be final and binding.",
            "The maximum allowed robot dimensions are 30 cm × 30 cm × 30 cm (L × W × H).",
            "The maximum allowed weight of the robot is 5 kg, including the battery.",
            "Robots must be equipped with a picking mechanism such as a gripper, claw, magnet, arm, or suction mechanism.",
            "Failure to comply with any of the above rules will result in disqualification."
        ]
    }
];

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

    return (
        <main className="min-h-screen bg-navy text-foreground">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
                <Section>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                        Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Arena</span>
                    </h1>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                        Explore our lineup of adrenaline-pumping competitions and brain-teasing challenges.
                        Choose your battlefield.
                    </p>
                </Section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <Section key={event.id} delay={index * 0.1} className="h-full">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-navy-light border border-white/5 p-6 rounded-xl hover:border-neon-cyan/50 transition-all h-full flex flex-col group cursor-pointer"
                                onClick={() => setSelectedEvent(event)}
                            >
                                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-6 group-hover:bg-neon-cyan group-hover:text-navy transition-colors text-neon-cyan border border-white/10">
                                    <event.icon size={24} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                <span className="text-xs font-mono text-neon-purple mb-4 block">{event.category.toUpperCase()}</span>

                                <p className="text-gray-400 mb-6 flex-grow">{event.desc}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-white font-bold">{event.prize}</span>
                                    <Button size="sm" variant="outline">Details</Button>
                                </div>
                            </motion.div>
                        </Section>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                title={selectedEvent?.title || ""}
            >
                {selectedEvent && (
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300">{selectedEvent.desc}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-navy-light p-4 rounded-lg border border-white/5">
                                <h4 className="flex items-center gap-2 text-neon-cyan font-bold mb-2">
                                    <Users size={18} /> Team Size
                                </h4>
                                <p>{selectedEvent.teamSize}</p>
                            </div>
                            <div className="bg-navy-light p-4 rounded-lg border border-white/5">
                                <h4 className="flex items-center gap-2 text-neon-cyan font-bold mb-2">
                                    <Trophy size={18} /> Prize Pool
                                </h4>
                                <p>{selectedEvent.prize}</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                <Info size={20} className="text-neon-purple" />
                                Rules & Regulations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
                                {selectedEvent.rules.map((rule, idx) => (
                                    <li key={idx}>{rule}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
                            <Button variant="ghost" onClick={() => setSelectedEvent(null)}>Close</Button>
                            <Button variant="primary" onClick={() => window.location.href = "/register"}>Register Now</Button>
                        </div>
                    </div>
                )}
            </Modal>

            <Footer />
        </main>
    );
}
