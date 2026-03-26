import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, Shield, Check } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import creator2 from "@/assets/creator-2.jpg";

const Checkout = () => {
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[80vh]">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Pagamento confermato!</h2>
            <p className="text-muted-foreground mb-6">Il contenuto è ora sbloccato. Buona visione!</p>
            <Button variant="hero">Vai al contenuto</Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Checkout</h1>

            {/* Order summary */}
            <div className="glass rounded-xl p-6 mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Riepilogo</h3>
              <div className="flex items-center gap-4 mb-4">
                <img src={creator2} alt="Marco" className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Abbonamento Marco Bianchi</p>
                  <p className="text-xs text-muted-foreground">Accesso a tutti i contenuti premium</p>
                </div>
                <p className="font-display font-bold text-foreground">€14.99</p>
              </div>
              <div className="border-t border-border/30 pt-3 flex justify-between">
                <span className="text-sm text-muted-foreground">Totale</span>
                <span className="font-display font-bold text-lg text-gradient">€14.99/mese</span>
              </div>
            </div>

            {/* Payment */}
            <div className="glass rounded-xl p-6 mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Pagamento</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Numero carta</label>
                  <div className="flex items-center gap-2 bg-muted/30 rounded-lg px-4 py-3 border border-border/30">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <input type="text" placeholder="4242 4242 4242 4242" className="bg-transparent text-sm text-foreground outline-none flex-1 placeholder:text-muted-foreground/50" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Scadenza</label>
                    <input type="text" placeholder="MM/AA" className="w-full bg-muted/30 rounded-lg px-4 py-3 border border-border/30 text-sm text-foreground outline-none placeholder:text-muted-foreground/50" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">CVV</label>
                    <input type="text" placeholder="123" className="w-full bg-muted/30 rounded-lg px-4 py-3 border border-border/30 text-sm text-foreground outline-none placeholder:text-muted-foreground/50" />
                  </div>
                </div>
              </div>
            </div>

            <Button variant="premium" size="lg" className="w-full" onClick={() => setConfirmed(true)}>
              Conferma pagamento
            </Button>

            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
              <Shield className="w-3 h-3" />
              <span>Pagamento sicuro e crittografato</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
