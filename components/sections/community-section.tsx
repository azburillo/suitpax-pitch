"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SiSlack } from "react-icons/si"
import { Github, Twitter, Linkedin, MessageCircle, Users } from "lucide-react"

export default function CommunitySection() {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Join Our <span className="text-white/80">Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Connect with passionate individuals collaborating to build the best business travel software in the world
          </motion.p>
        </div>

        {/* Slack community highlight */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden"
          >
            <Image src="/slack-community.png" alt="Join Suitpax Slack Community" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Suitpax Slack Community</h3>
            <p className="text-white/80">
              Join our thriving Slack community where travel professionals, developers, and enthusiasts collaborate to
              shape the future of business travel. Share ideas, get early access to features, and connect with the team
              building Suitpax.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-white/60" size={20} />
                <span className="text-white/80">Over 500 members and growing</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-white/60" size={20} />
                <span className="text-white/80">Active discussions on travel tech innovation</span>
              </div>
            </div>

            <a
              href="https://join.slack.com/t/suitpax/shared_invite/zt-34g7xm0pc-qcHjTFPLchwp6Zp0HDXzAw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <SiSlack size={20} />
              <span className="font-serif italic">Join Our</span>
              <span className="font-bold">Slack</span>
            </a>
          </motion.div>
        </div>

        {/* Other community channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* GitHub */}
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <Github className="mb-4 text-white/80" size={28} />
            <h4 className="text-xl font-medium mb-2">GitHub</h4>
            <p className="text-white/70 mb-4">
              Follow our open source projects and contribute to the Suitpax ecosystem
            </p>
            <a href="#" className="text-white/80 hover:text-white underline underline-offset-4">
              Visit GitHub →
            </a>
          </div>

          {/* Twitter */}
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <Twitter className="mb-4 text-white/80" size={28} />
            <h4 className="text-xl font-medium mb-2">Twitter</h4>
            <p className="text-white/70 mb-4">
              Stay updated with the latest news, features and travel industry insights
            </p>
            <a href="#" className="text-white/80 hover:text-white underline underline-offset-4">
              Follow us →
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <Linkedin className="mb-4 text-white/80" size={28} />
            <h4 className="text-xl font-medium mb-2">LinkedIn</h4>
            <p className="text-white/70 mb-4">Connect professionally and follow our company updates and milestones</p>
            <a href="#" className="text-white/80 hover:text-white underline underline-offset-4">
              Connect →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
