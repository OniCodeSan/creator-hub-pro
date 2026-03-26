import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp, Upload, Bot, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CreatorCard from "@/components/CreatorCard";
import heroImg from "@/assets/hero-creator.jpg";
import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const steps = [
  { icon: Upload, title: "Pubblica", desc: "Carica i tuoi contenuti in pochi secondi. Video, foto, testi — tutto in un unico posto." },
  { icon: Bot, title: "Automatizza", desc: "Funnel, messaggi e offerte partono da soli. Tu crei, il sistema converte." },
  { icon: DollarSign, title: "Guadagna", desc: "Abbonamenti, contenuti premium, tip. Moltiplica le tue entrate senza sforzo." },
];

const benefits = [
  { icon: Zap, title: "Funnel automatici", desc: "Converti follower in fan paganti con sequenze automatizzate." },
  { icon: Users, title: "CRM fan", desc: "Conosci i tuoi fan, segmentali e personalizza l'esperienza." },
  { icon: TrendingUp, title: "Monetizzazione avanzata", desc: "Abbonamenti, pay-per-view, tip, bundle — tutto integrato." },
];

const creators = [
  { name: "Elena Rossi", avatar: creator1, category: "Lifestyle", fans: "12.5K", price: "€9.99" },
  { name: "Marco Bianchi", avatar: creator2, category: "Fitness", fans: "8.2K", price: "€14.99" },
  { name: "Chiara Verdi", avatar: creator3, category: "Arte", fans: "5.7K", price: "€7.99" },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* HERO */}
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Creator" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            La piattaforma per creator
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Guadagna di più dai tuoi fan,{" "}
            <span className="text-gradient">automaticamente</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
            Pubblica, automatizza e monetizza. CreatorOS è la macchina che trasforma i tuoi contenuti in entrate ricorrenti.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/dashboard">
                Diventa Creator <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/feed">Esplora contenuti</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-5xl font-bold mb-4">
            Come <span className="text-gradient">funziona</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-md mx-auto">
            Tre passi per trasformare la tua passione in un business.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 group-hover:glow-primary-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-muted-foreground/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* BENEFITS */}
    <section className="py-24 bg-surface-elevated/50 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-5xl font-bold mb-4">
            Perché <span className="text-gradient">CreatorOS</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="glass rounded-2xl p-8 group hover:glow-primary-sm transition-all duration-300"
            >
              <b.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FEATURED CREATORS */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-5xl font-bold mb-4">
            Creator in <span className="text-gradient">evidenza</span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {creators.map((c) => (
            <CreatorCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA ONBOARDING */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-5xl font-bold mb-6">
            Pronto a <span className="text-gradient">monetizzare</span>?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
            Unisciti a migliaia di creator che hanno già scelto CreatorOS per trasformare la loro audience in entrate.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Button variant="premium" size="lg" asChild>
              <Link to="/dashboard">
                Inizia ora — è gratis <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg font-bold text-gradient mb-2">CreatorOS</p>
        <p className="text-muted-foreground text-sm">© 2026 CreatorOS. Tutti i diritti riservati.</p>
      </div>
    </footer>
  </div>
);

export default Index;
