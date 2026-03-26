import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContentCard from "@/components/ContentCard";
import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import content1 from "@/assets/content-1.jpg";
import content2 from "@/assets/content-2.jpg";
import content3 from "@/assets/content-3.jpg";
import content4 from "@/assets/content-4.jpg";

const categories = ["Tutti", "Lifestyle", "Fitness", "Cucina", "Musica", "Arte"];

const feedItems = [
  { image: content1, creatorName: "Elena Rossi", creatorAvatar: creator1, title: "Sunset vibes — il mio viaggio in Sardegna 🌅", isPremium: false, isLocked: false, views: "12.4K" },
  { image: content2, creatorName: "Marco Bianchi", creatorAvatar: creator2, title: "Allenamento HIIT completo — sessione premium 💪", isPremium: true, isLocked: true, views: "8.1K" },
  { image: content3, creatorName: "Elena Rossi", creatorAvatar: creator1, title: "Ricetta segreta: pasta alla norma rivisitata", isPremium: false, isLocked: false, views: "5.3K" },
  { image: content4, creatorName: "Chiara Verdi", creatorAvatar: creator3, title: "Live session — beats inediti dal nuovo album 🎶", isPremium: true, isLocked: true, views: "15.2K" },
  { image: content1, creatorName: "Chiara Verdi", creatorAvatar: creator3, title: "Behind the scenes del nuovo progetto", isPremium: false, isLocked: false, views: "3.8K" },
  { image: content2, creatorName: "Marco Bianchi", creatorAvatar: creator2, title: "Programma completo 12 settimane — Full Body", isPremium: true, isLocked: true, views: "22.1K" },
];

const Feed = () => {
  const [active, setActive] = useState("Tutti");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 mb-8">
            <div className="flex-1">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Esplora</h1>
              <p className="text-muted-foreground text-sm mt-1">Scopri i contenuti dei migliori creator</p>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  active === cat
                    ? "bg-gradient-primary text-primary-foreground glow-primary-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Feed grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <ContentCard {...item} variant="feed" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
