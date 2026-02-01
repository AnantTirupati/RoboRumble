"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    college: z.string().min(3, "College name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    event: z.string().min(1, "Please select an event"),
    teamName: z.string().optional(),
    members: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setStatus("submitting");
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (e) {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-navy text-foreground">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4 md:px-6">
                <Section>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                        Join The <span className="text-neon-cyan">Battle</span>
                    </h1>
                    <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
                        Register your team for Robo Rumble 3.0. Spots are filling up fast!
                    </p>
                </Section>

                <Section delay={0.2}>
                    <div className="max-w-2xl mx-auto bg-navy-light p-8 md:p-10 rounded-2xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        {status === "success" ? (
                            <div className="text-center py-10 space-y-6">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-500">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
                                <p className="text-gray-400">
                                    You have successfully registered for the event. Check your email for confirmation and ticket details.
                                </p>
                                <Button onClick={() => setStatus("idle")} variant="primary">Register Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            {...register("fullName")}
                                            className="w-full bg-navy border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                                            placeholder="John Doe"
                                        />
                                        {errors.fullName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={10} /> {errors.fullName.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                        <input
                                            {...register("phone")}
                                            className="w-full bg-navy border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                                            placeholder="9876543210"
                                        />
                                        {errors.phone && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={10} /> {errors.phone.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">College / Institute</label>
                                    <input
                                        {...register("college")}
                                        className="w-full bg-navy border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                                        placeholder="Institute of Technology..."
                                    />
                                    {errors.college && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={10} /> {errors.college.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                                    <input
                                        {...register("email")}
                                        className="w-full bg-navy border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={10} /> {errors.email.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Event Selection</label>
                                    <select
                                        {...register("event")}
                                        className="w-full bg-navy border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all appearance-none"
                                    >
                                        <option value="">Select an Event</option>
                                        <option value="robo-wars">Robo Wars</option>
                                        <option value="line-follower">Line Follower</option>
                                        <option value="hackathon">CodeHack 24h</option>
                                        <option value="drone-race">Drone Race</option>
                                        <option value="project-expo">Project Expo</option>
                                        <option value="coding-contest">Algorithmic Arena</option>
                                    </select>
                                    {errors.event && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={10} /> {errors.event.message}</p>}
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <h4 className="text-neon-purple font-medium mb-4">Team Details (Optional)</h4>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Team Name</label>
                                            <input
                                                {...register("teamName")}
                                                className="w-full bg-navy border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                                                placeholder="Cyber Knights"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Team Members (Names separated by comma)</label>
                                            <textarea
                                                {...register("members")}
                                                className="w-full bg-navy border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all h-24 resize-none"
                                                placeholder="Member 2, Member 3, Member 4..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full mt-6"
                                    size="lg"
                                    disabled={status === "submitting"}
                                >
                                    {status === "submitting" ? <Loader2 className="animate-spin" /> : "Complete Registration"}
                                </Button>

                                {status === "error" && (
                                    <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}
                    </div>
                </Section>
            </div>

            <Footer />
        </main>
    );
}
