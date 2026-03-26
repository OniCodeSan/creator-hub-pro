import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";
import creator1 from "@/assets/creator-1.jpg";
import heroImg from "@/assets/hero-creator.jpg";
import content1 from "@/assets/content-1.jpg";
import content2 from "@/assets/content-2.jpg";
import content3 from "@/assets/content-3.jpg";
import content4 from "@/assets/content-4.jpg";

const tabs = ["Contenuti", "Premium", "Community"];

const contents = [
  { image: content1, title: "Sunset vibes — Sardegna 🌅", isPremium: false, isLocked: false, views: "12.4K" },
  { image: content2, title: "Workout esclusivo 💪", isPremium: true, isLocked: true, views: "8.1K" },
  { image: content3, title: "Ricetta segreta", isPremium: false, isLocked: false, views: "5.3K" },
  { image: content4, title: "Live session 🎶", isPremium: true, isLocked: true, views: "15.2K" },
  { image: content1, title: "Behind the scenes", isPremium: false, isLocked: false, views: "3.8K" },
  { image: content3, title: "Q&A con i fan", isPremium: false, isLocked: false, views: "6.1K" },
];

const CreatorProfile = () => {
  const [activeTab, setActiveTab] = useState("Contenuti");

  const filtered = activeTab === "Premium"
    ? contents.filter(c => c.isPremium)
    : activeTab === "Community"
    ? contents.slice(0, 3)
    : contents;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="relative h-72 md:h-96">
        <img src={heroImg} alt="Cover" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start gap-6">
          <img src={creator1} alt="Elena Rossi" className="w-28 h-28 rounded-2xl border-4 border-background object-cover glow-primary-sm" />
          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold text-foreground">Elena Rossi</h1>
            <p className="text-muted-foreground text-sm mt-1 max-w-lg">
              Creator, storyteller, viaggiatrice. Condivido la mia vita e i miei segreti con chi vuole davvero conoscermi.
            </p>
            <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 12.5K fan</span>
              <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> 45.2K like</span>
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="hero">
                Abbonati — €9.99/mese
              </Button>
              <Button variant="heroOutline">
                <MessageCircle className="w-4 h-4" /> Messaggio
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mt-10 border-b border-border/30">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all relative ${
                activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pb-16">
          {filtered.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <ContentCard
                {...item}
                creatorName="Elena Rossi"
                creatorAvatar={creator1}
                variant="grid"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
