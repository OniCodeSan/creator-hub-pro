import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CreatorCardProps {
  name: string;
  avatar: string;
  category: string;
  fans: string;
  price: string;
}

const CreatorCard = ({ name, avatar, category, fans, price }: CreatorCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="group relative rounded-xl overflow-hidden bg-card border border-border/30 p-1"
  >
    <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
      <img src={avatar} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      <div className="absolute bottom-2 left-2 right-2">
        <span className="px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
          {category}
        </span>
      </div>
    </div>
    <div className="px-2 pb-3">
      <h3 className="font-display font-semibold text-foreground">{name}</h3>
      <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
        <Users className="w-3 h-3" />
        <span>{fans} fan</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm font-bold text-gradient">{price}/mese</span>
        <Button variant="hero" size="sm" asChild>
          <Link to="/creator/elena-rossi">Scopri</Link>
        </Button>
      </div>
    </div>
  </motion.div>
);

export default CreatorCard;
