import { UserX } from "lucide-react";
import Group93 from "../imports/Group93";
import { EticLogo } from "./EticLogo";

export function SpeakerNotFound() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #C1333F 0%, #EC9E00 35%, #FFCA00 65%, #4399E2 100%)"
      }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
          <Group93 />
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FEBF00] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1AAF5D] opacity-20 rounded-full blur-3xl" />
      </div>

      {/* ETIC Gala Logo Header */}
      <div className="relative pt-8 pb-4 flex justify-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white border-opacity-20">
          <EticLogo scale={0.6} />
        </div>
      </div>

      <div className="flex items-center justify-center px-4 min-h-[calc(100vh-200px)]">
        <div className="text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-2xl">
            <UserX className="w-12 h-12 text-[#C1333F]" />
          </div>
          <h1 className="text-white mb-4">Speaker Not Found</h1>
          <p className="text-white text-opacity-90 mb-8 max-w-md mx-auto">
            The speaker profile you're looking for doesn't exist. Please check the QR code or contact the event organizers.
          </p>
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-white border-2 border-white border-opacity-30">
            <span className="text-sm">© 2025 ETIC GALA - All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
