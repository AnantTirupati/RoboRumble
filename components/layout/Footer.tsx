import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/socials";
export function Footer() {
    return (
        <footer className="bg-navy-light pt-16 pb-8 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            ROBO <span className="text-neon-cyan">RUMBLE</span> 3.0
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The third edition of the ultimate collegiate robotics festival.
                            Celebrating innovation, engineering excellence, and the spirit of competition.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                                    All Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/schedule" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                                    Schedule
                                </Link>
                            </li>
                            <li>
                                <Link href="/sponsors" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                                    Sponsors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="w-4 h-4 text-neon-cyan" />
                                <span>uiettechfest@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-neon-cyan mt-1" />
                                <span>
                                    UIET,<br />
                                    CSJM University Campus,<br />
                                    Kanpur, India
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="w-10 h-10 rounded-full bg-navy border border-white/10 flex items-center justify-center text-gray-400 hover:bg-neon-cyan hover:text-navy hover:border-neon-cyan transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Robo Rumble. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-white text-xs">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-xs">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
