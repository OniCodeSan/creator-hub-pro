import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock, Share2, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import content2 from "@/assets/content-2.jpg";
import creator2 from "@/assets/creator-2.jpg";

const ContentPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Content media */}
          <div className="relative rounded-2xl overflow-hidden aspect-video mb-6">
            <img src={content2} alt="Content" className="w-full h-full object-cover blur-lg" />
            <div className="absolute inset-0 bg-background/60 backdrop-blur-md flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-muted/50 backdrop-blur-md flex items-center justify-center animate-pulse-glow">
                <Lock className="w-9 h-9 text-primary" />
              </div>
              <p className="text-lg font-display font-bold text-foreground">Contenuto Premium</p>
              <p className="text-sm text-muted-foreground max-w-sm text-center">
                Sblocca questo contenuto esclusivo abbonandoti al creator.
              </p>
              <div className="flex gap-3">
                <Button variant="hero" asChild>
                  <Link to="/checkout">Sblocca — €4.99</Link>
                </Button>
                <Button variant="heroOutline" asChild>
                  <Link to="/checkout">Abbonati — €14.99/mese</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Creator info */}
          <div className="flex items-center gap-3 mb-4">
            <Link to="/creator/elena-rossi">
              <img src={creator2} alt="Marco Bianchi" className="w-12 h-12 rounded-full object-cover border-2 border-primary/30" />
            </Link>
            <div>
              <Link to="/creator/elena-rossi" className="font-display font-semibold text-foreground hover:text-primary transition-colors">Marco Bianchi</Link>
              <p className="text-xs text-muted-foreground">Pubblicato 2 ore fa</p>
            </div>
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Allenamento HIIT completo — sessione premium 💪
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Un allenamento ad alta intensità pensato per chi vuole risultati veri. 45 minuti di puro fuoco con le mie tecniche esclusive. 
            Solo per abbonati premium.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 border-t border-border/30 pt-4">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Heart className="w-5 h-5" /> 2.4K
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <MessageCircle className="w-5 h-5" /> 128
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Share2 className="w-5 h-5" /> Condividi
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default ContentPage;
