import { motion } from "framer-motion";
import { Lock, Play, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ContentCardProps {
  image: string;
  creatorName: string;
  creatorAvatar: string;
  title: string;
  isPremium?: boolean;
  isLocked?: boolean;
  views?: string;
  variant?: "feed" | "grid";
}

const ContentCard = ({
  image,
  creatorName,
  creatorAvatar,
  title,
  isPremium = false,
  isLocked = false,
  views = "2.4K",
  variant = "grid",
}: ContentCardProps) => {
  const isFeed = variant === "feed";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`group relative rounded-xl overflow-hidden bg-card border border-border/30 ${
        isFeed ? "aspect-[4/5]" : "aspect-[3/4]"
      }`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          isLocked ? "blur-md" : ""
        }`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

      {/* Badge */}
      <div className="absolute top-3 left-3 flex gap-2">
        {isPremium && (
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-primary text-primary-foreground">
            Premium
          </span>
        )}
        {!isPremium && !isLocked && (
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-muted/80 text-foreground backdrop-blur-sm">
            Free
          </span>
        )}
      </div>

      {/* Play icon for video */}
      {!isLocked && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        </div>
      )}

      {/* Lock overlay */}
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full bg-muted/50 backdrop-blur-md flex items-center justify-center animate-pulse-glow">
            <Lock className="w-7 h-7 text-primary" />
          </div>
          <p className="text-sm text-foreground/80 font-medium">Contenuto Premium</p>
          <Button variant="hero" size="sm" asChild>
            <Link to="/content/1">Sblocca</Link>
          </Button>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-2">
          <img src={creatorAvatar} alt={creatorName} className="w-7 h-7 rounded-full object-cover border border-primary/30" />
          <span className="text-xs font-medium text-foreground/80">{creatorName}</span>
        </div>
        <h3 className="text-sm font-semibold text-foreground line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1 mt-1 text-muted-foreground">
          <Eye className="w-3 h-3" />
          <span className="text-xs">{views}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentCard;
