import { Speaker } from "../types/speaker";
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Instagram, Github, Facebook, Calendar, Clock, Briefcase, Award, Languages } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Group93 from "../imports/Group93";
import Layer23 from "../imports/Layer23";
import { EticLogo } from "./EticLogo";

interface SpeakerProfileProps {
  speaker: Speaker;
}

export function SpeakerProfile({ speaker }: SpeakerProfileProps) {
  const socialLinks = [
    { icon: Globe, url: speaker.website, label: "Website" },
    { icon: Linkedin, url: speaker.linkedin, label: "LinkedIn" },
    { icon: Twitter, url: speaker.twitter, label: "Twitter" },
    { icon: Instagram, url: speaker.instagram, label: "Instagram" },
    { icon: Github, url: speaker.github, label: "GitHub" },
    { icon: Facebook, url: speaker.facebook, label: "Facebook" },
  ].filter(link => link.url);

  return (
    <div className="min-h-screen relative" style={{
      background: "linear-gradient(135deg, #C1333F 0%, #EC9E00 35%, #FFCA00 65%, #4399E2 100%)"
    }}>
      {/* Decorative Background Ribbons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left ribbon decoration */}
        <div className="absolute -left-32 top-20 w-[400px] h-[400px] opacity-30">
          <Group93 />
        </div>
        
        {/* Bottom right ribbon decoration */}
        <div className="absolute -right-32 bottom-32 w-[500px] h-[500px] opacity-25">
          <Layer23 />
        </div>

        {/* Glow effects */}
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#FEBF00] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-[#1AAF5D] opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4399E2] opacity-15 rounded-full blur-3xl" />
      </div>

      {/* ETIC Gala Logo Header */}
      <div className="relative pt-8 pb-4 flex justify-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white border-opacity-20">
          <EticLogo scale={0.6} />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          {/* Top Accent */}
          <div className="h-2 bg-gradient-to-r from-[#C1333F] via-[#FFCA00] via-[#1AAF5D] to-[#4399E2]" />
          
          <div className="p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              {/* Profile Photo - Rounded bottom style */}
              <div className="relative shrink-0">
                {/* Background shape */}
                <div className="w-[280px] h-[340px] bg-[#FFF5D9] rounded-t-[140px] rounded-b-none shadow-lg" />
                
                {/* Photo container with rounded top */}
                <div className="absolute top-0 left-0 w-[280px] h-[320px] overflow-hidden rounded-t-[140px]">
                  <ImageWithFallback
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative color dots at bottom */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFCA00] shadow-lg" />
                  <div className="w-10 h-10 rounded-full bg-[#EC9E00] shadow-lg" />
                  <div className="w-10 h-10 rounded-full bg-[#C1333F] shadow-lg" />
                </div>
                
                {speaker.yearsOfExperience && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#1AAF5D] to-[#02A9A2] text-white px-5 py-3 rounded-full shadow-xl border-4 border-white">
                    <p className="text-sm whitespace-nowrap">{speaker.yearsOfExperience}+ Years</p>
                  </div>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left mt-4 lg:mt-0">
                <h1 className="text-[#0F0B0C] mb-2">{speaker.name}</h1>
                <p className="text-[#C1333F] mb-1">{speaker.title}</p>
                <p className="text-[#3F3C3D] mb-6">{speaker.company}</p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <a href={`mailto:${speaker.email}`} className="flex items-center gap-2 text-[#3F3C3D] hover:text-[#02A9A2] transition-colors">
                    <Mail className="w-5 h-5 text-[#02A9A2]" />
                    <span className="text-sm truncate">{speaker.email}</span>
                  </a>
                  <a href={`tel:${speaker.phone}`} className="flex items-center gap-2 text-[#3F3C3D] hover:text-[#02A9A2] transition-colors">
                    <Phone className="w-5 h-5 text-[#02A9A2]" />
                    <span className="text-sm">{speaker.phone}</span>
                  </a>
                  <div className="flex items-center gap-2 text-[#3F3C3D]">
                    <MapPin className="w-5 h-5 text-[#02A9A2]" />
                    <span className="text-sm">{speaker.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      const colors = [
                        "from-[#1AAF5D] to-[#02A9A2]",
                        "from-[#4399E2] to-[#02A9A2]",
                        "from-[#FFCA00] to-[#EC9E00]",
                        "from-[#C1333F] to-[#EC9E00]",
                        "from-[#AAD94C] to-[#1AAF5D]",
                        "from-[#02A9A2] to-[#4399E2]"
                      ];
                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-gradient-to-br ${colors[index % colors.length]} text-white rounded-full hover:scale-110 transition-transform shadow-md`}
                          aria-label={link.label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#1AAF5D]">
              <h2 className="text-[#0F0B0C] mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#1AAF5D]" />
                About
              </h2>
              <p className="text-[#3F3C3D] leading-relaxed">{speaker.bio}</p>
            </div>

            {/* Session Info */}
            {speaker.sessionTitle && (
              <div className="bg-gradient-to-br from-[#FFF5D9] to-white rounded-2xl shadow-xl p-8 border-2 border-[#FFCA00]">
                <h2 className="text-[#0F0B0C] mb-4">Session Details</h2>
                <h3 className="text-[#C1333F] mb-4">{speaker.sessionTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {speaker.sessionDate && (
                    <div className="flex items-center gap-2 text-[#3F3C3D]">
                      <Calendar className="w-5 h-5 text-[#EC9E00]" />
                      <span>{speaker.sessionDate}</span>
                    </div>
                  )}
                  {speaker.sessionTime && (
                    <div className="flex items-center gap-2 text-[#3F3C3D]">
                      <Clock className="w-5 h-5 text-[#1AAF5D]" />
                      <span>{speaker.sessionTime}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Achievements */}
            {speaker.achievements && speaker.achievements.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#C1333F]">
                <h2 className="text-[#0F0B0C] mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#C1333F]" />
                  Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {speaker.achievements.map((achievement, index) => {
                    const colors = ["#FFCA00", "#1AAF5D", "#4399E2", "#C1333F"];
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#FFF5D9] to-white rounded-xl border-2 border-opacity-40 hover:border-opacity-100 transition-all"
                        style={{ borderColor: colors[index % colors.length] }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                          style={{ backgroundColor: colors[index % colors.length] }}
                        />
                        <p className="text-[#3F3C3D] text-sm">{achievement}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Expertise */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#4399E2]">
              <h2 className="text-[#0F0B0C] mb-6">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {speaker.expertise.map((skill, index) => {
                  const gradients = [
                    "from-[#1AAF5D] to-[#02A9A2]",
                    "from-[#4399E2] to-[#02A9A2]",
                    "from-[#FFCA00] to-[#EC9E00]",
                    "from-[#C1333F] to-[#EC9E00]",
                    "from-[#AAD94C] to-[#1AAF5D]"
                  ];
                  return (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-br ${gradients[index % gradients.length]} text-white rounded-full text-sm shadow-md hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            {speaker.language && speaker.language.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#AAD94C]">
                <h2 className="text-[#0F0B0C] mb-6 flex items-center gap-2">
                  <Languages className="w-6 h-6 text-[#1AAF5D]" />
                  Languages
                </h2>
                <div className="space-y-3">
                  {speaker.language.map((lang, index) => {
                    const colors = ["#FFCA00", "#1AAF5D", "#4399E2"];
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#FFF5D9] to-white rounded-lg"
                      >
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: colors[index % colors.length] }}
                        />
                        <span className="text-[#3F3C3D]">{lang}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-[#C1333F] via-[#EC9E00] to-[#FFCA00] rounded-2xl shadow-xl p-8 text-white">
              <h2 className="mb-6">Quick Info</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-white text-opacity-90 text-sm mb-1">Company</p>
                  <p>{speaker.company}</p>
                </div>
                <div>
                  <p className="text-white text-opacity-90 text-sm mb-1">Position</p>
                  <p>{speaker.title}</p>
                </div>
                <div>
                  <p className="text-white text-opacity-90 text-sm mb-1">Location</p>
                  <p>{speaker.location}</p>
                </div>
                {speaker.yearsOfExperience && (
                  <div>
                    <p className="text-white text-opacity-90 text-sm mb-1">Experience</p>
                    <p>{speaker.yearsOfExperience}+ years</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center pb-8">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white border-opacity-20">
            <span className="text-sm">© 2025 ETIC GALA - All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
