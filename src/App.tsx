import { useState, useEffect } from "react";
import { SpeakerProfile } from "./components/SpeakerProfile";
import { SpeakerNotFound } from "./components/SpeakerNotFound";
import { getSpeakerById } from "./data/speakers";
import { Speaker } from "./types/speaker";

export default function App() {
  const [speaker, setSpeaker] = useState<Speaker | null | undefined>(undefined);
  const [speakerId, setSpeakerId] = useState<string>("");

  useEffect(() => {
    // Get speaker ID from URL parameters
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || params.get("speaker") || "1"; // Default to speaker 1
    
    setSpeakerId(id);
    const foundSpeaker = getSpeakerById(id);
    setSpeaker(foundSpeaker || null);
  }, []);

  // Loading state
  if (speaker === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#02A9A2] via-[#00DABF] to-[#4399E2] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading speaker profile...</p>
        </div>
      </div>
    );
  }

  // Speaker not found
  if (speaker === null) {
    return <SpeakerNotFound />;
  }

  // Display speaker profile
  return <SpeakerProfile speaker={speaker} />;
}
