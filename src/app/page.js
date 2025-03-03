// src/app/page.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants for different elements
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Features list
  const features = [
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, seeing changes instantly as they happen.",
      icon: "🔄"
    },
    {
      title: "Infinite Canvas",
      description: "Never run out of space with our infinitely expandable whiteboard canvas.",
      icon: "🌌"
    },
    {
      title: "Smart Shapes & Tools",
      description: "Access a complete toolkit of shapes, pens, and intelligent drawing aids.",
      icon: "🔧"
    },
    {
      title: "Simple Sharing",
      description: "Share your work with customizable permissions and one-click invite links.",
      icon: "🔗"
    }
  ];

  // Team members
  const team = [
    {
      name: "Alex Rivera",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in collaborative applications.",
      image: "/img/team-placeholder.png"
    },
    {
      name: "Sam Chen",
      role: "UX Designer",
      bio: "Creating intuitive experiences that make complex tools feel simple.",
      image: "/img/team-placeholder.png"
    },
    {
      name: "Jordan Taylor",
      role: "Product Manager",
      bio: "Focused on building tools that empower creative teams.",
      image: "/img/team-placeholder.png"
    }
  ];

  return (
      <>
        {/* Navigation Bar */}
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"
            }`}
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold"
              >
                InkFlow
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
              <Link href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</Link>
              <Link href="#team" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Team</Link>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
              >
                Sign Up
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-foreground focus:outline-none"
              >
                {menuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <motion.div
              initial={false}
              animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-6 py-4 space-y-4">
              <Link href="#about" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="#features" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Features</Link>
              <Link href="#team" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Team</Link>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium">
                Sign Up
              </button>
            </div>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-gradient-to-br from-white to-blue-50 dark:from-black dark:to-blue-950">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Collaborative Whiteboarding <span className="text-blue-600">Reimagined</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
                InkFlow brings teams together on a limitless canvas. Draw, plan, and create together in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-lg"
                >
                  Get Started Free
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 rounded-full font-medium text-lg"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="relative aspect-video">
                {/* Placeholder for your app preview image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <p className="text-xl text-center px-8">Interactive whiteboard preview</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white dark:bg-black">
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About InkFlow</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Born from a vision of making remote collaboration as natural as working side by side,
                InkFlow enables teams to think visually and work together seamlessly across any distance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                  variants={slideIn}
                  className="order-2 md:order-1"
              >
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We believe great ideas can come from anywhere, and the best work happens when people can freely express and
                  build upon each other&#39;s thinking. InkFlow removes the barriers between team members, allowing creativity
                  and innovation to flow naturally.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Whether you&#39;re planning a project, teaching a concept, or brainstorming your next big idea,
                  InkFlow provides the flexible, intuitive space you need to bring your thoughts to life.
                </p>
              </motion.div>

              <motion.div
                  variants={slideIn}
                  className="order-1 md:order-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6"
              >
                <div className="aspect-square relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <p className="text-center px-8">About InkFlow illustration</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Features</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                InkFlow combines powerful collaboration tools with an intuitive interface,
                making it easy for anyone to contribute their best ideas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                  <motion.div
                      key={index}
                      variants={fadeIn}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                  </motion.div>
              ))}
            </div>

            <motion.div
                variants={fadeIn}
                className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="relative aspect-video">
                {/* Placeholder for features showcase image/video */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <p className="text-xl text-center px-8">Features showcase</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 px-6 bg-white dark:bg-black">
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                The passionate minds behind InkFlow, dedicated to making collaboration more intuitive,
                creative, and productive.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                  <motion.div
                      key={index}
                      variants={fadeIn}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="aspect-square relative">
                      {/* Replace with actual team member images */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                        <p className="text-center">{member.name}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>

                      <div className="mt-4 flex space-x-4">
                        {/* Social media icons would go here */}
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform How Your Team Collaborates?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of teams already using InkFlow to bring their ideas to life.
            </p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-full font-medium text-lg shadow-lg"
            >
              Get Started For Free
            </motion.button>

            <p className="mt-6 text-blue-100">No credit card required. Free plan available forever.</p>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">InkFlow</h3>
                <p className="mb-4">Collaborative whiteboarding for teams that want to think bigger.</p>
                <div className="flex space-x-4">
                  {/* Social media icons */}
                  <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Legal</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} InkFlow. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </>
  );
}