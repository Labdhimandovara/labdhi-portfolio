import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HackathonProjects() {
  const hackathonProjects = portfolioData.hackathonProjects;

  return (
    <section id="hackathon-projects" className="py-24 bg-[#FAF8F5] border-t border-[#E5DFD9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-20 space-y-2">
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-[#23211F]">
            Hackathons
          </h2>
          <p className="text-sm text-[#706C68] max-w-lg font-light leading-relaxed">
            Recognition highlights from the contests I reached, with the key rounds and outcomes shown first.
          </p>
          <div className="w-16 h-1 bg-[#C87A53] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {hackathonProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white border border-[#E5DFD9] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-7 pb-5 text-left space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-3.5 py-1 bg-[#C87A53] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    <Award size={12} className="mr-1.5" />
                    {project.title === 'Cortex' ? 'National Finalist' : 'Global Finalist'}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#E5DFD9] text-xs font-semibold text-[#706C68]">
                    <Calendar size={12} className="mr-1.5" />
                    {project.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-black tracking-tight text-[#23211F]">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#706C68]">
                    {project.event}
                  </p>
                </div>
              </div>

              <div className="relative aspect-[16/10] bg-[#F4EFEA] overflow-hidden border-y border-[#E5DFD9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-6"
                />
              </div>

              <div className="p-7 text-left space-y-5">
                <ul className="space-y-2 text-base text-[#706C68] font-light leading-relaxed">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start">
                      <CheckCircle2 size={16} className="mr-2 mt-1 text-emerald-600 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs font-semibold font-mono text-[#23211F] bg-[#F4EFEA] border border-[#E5DFD9] px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}