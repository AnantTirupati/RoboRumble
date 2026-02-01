"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Clock, MapPin } from "lucide-react";

export default function SchedulePage() {
    const schedule = [
        {
            day: "Day 1 - March 9",
            events: [
                { time: "10:00 AM", title: "Inauguration Ceremony", venue: "Innovation Cell CSJMU", type: "General" },
                { time: "11:00 AM", title: "Line Following Bot", venue: "Innovation Cell CSJMU", type: "Competition" },
                { time: "03:00 PM", title: "Project Expo", venue: "Innovation Cell CSJMU", type: "Exhibition" },
            ]
        },
        {
            day: "Day 2 - March 10",
            events: [
                { time: "10:00 AM", title: "Robo Race", venue: "Innovation Cell CSJMU", type: "Competition" },
                { time: "12:00 PM", title: "Robo Wars", venue: "UIET CSJMU", type: "Competition" },
                { time: "03:00 PM", title: "Robo Soccer", venue: "UIET CSJMU", type: "Competition" },
            ]
        },
        {
            day: "Day 3 - March 11",
            events: [
                { time: "10:00 AM", title: "Esports Finals", venue: "UIET CSJMU", type: "Competition" },
                { time: "01:00 PM", title: "Defence Talk", venue: "UIET CSJMU", type: "Seminar" },
                { time: "03:00 PM", title: "Defence Expo", venue: "UIET CSJMU", type: "Exhibition" },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-navy text-foreground">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
                <Section>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                        Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Timeline</span>
                    </h1>
                    <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
                        Don't miss a beat. Keep track of all the action happening across the campus.
                    </p>
                </Section>

                <div className="space-y-20">
                    {schedule.map((dayBlock, dayIndex) => (
                        <Section key={dayIndex} delay={dayIndex * 0.2}>
                            <h2 className="text-3xl font-bold text-white mb-10 border-b border-neon-cyan/30 pb-4 inline-block">
                                {dayBlock.day}
                            </h2>

                            <div className="relative border-l-2 border-white/10 ml-4 space-y-8">
                                {dayBlock.events.map((event, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative pl-8 md:pl-12"
                                    >
                                        {/* Dot */}
                                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-navy border-2 border-neon-cyan" />

                                        <div className="bg-navy-light p-6 rounded-xl border border-white/5 hover:border-neon-cyan/20 transition-all">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                                <span className={`text-xs px-3 py-1 rounded-full border ${event.type === 'Competition' ? 'border-neon-purple text-neon-purple' :
                                                    event.type === 'General' ? 'border-neon-cyan text-neon-cyan' :
                                                        'border-gray-500 text-gray-400'
                                                    }`}>
                                                    {event.type}
                                                </span>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <Clock size={16} className="text-neon-cyan" />
                                                    {event.time}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin size={16} className="text-neon-purple" />
                                                    {event.venue}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
