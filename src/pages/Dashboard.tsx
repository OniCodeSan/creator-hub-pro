import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, Eye, ArrowUpRight, Upload, Bot, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { month: "Gen", revenue: 2400 }, { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 4100 }, { month: "Apr", revenue: 3800 },
  { month: "Mag", revenue: 5200 }, { month: "Giu", revenue: 6800 },
  { month: "Lug", revenue: 7200 },
];

const conversionData = [
  { stage: "Free", value: 10000 }, { stage: "Trial", value: 3200 },
  { stage: "Abbonati", value: 1800 }, { stage: "Premium", value: 650 },
];

const kpis = [
  { label: "Entrate totali", value: "€32.800", change: "+24%", icon: DollarSign },
  { label: "Fan attivi", value: "12.5K", change: "+18%", icon: Users },
  { label: "Conversione", value: "14.4%", change: "+3.2%", icon: TrendingUp },
  { label: "Visualizzazioni", value: "284K", change: "+42%", icon: Eye },
];

const fans = [
  { name: "Laura M.", status: "Premium", spent: "€89.90", segment: "Top Fan" },
  { name: "Giovanni P.", status: "Abbonato", spent: "€29.97", segment: "Attivo" },
  { name: "Sara K.", status: "Free", spent: "€0", segment: "Da convertire" },
  { name: "Andrea B.", status: "Premium", spent: "€149.85", segment: "Top Fan" },
];

const automations = [
  { name: "Welcome sequence", status: "Attiva", trigger: "Nuovo iscritto", sent: 1240 },
  { name: "Offerta premium", status: "Attiva", trigger: "7 giorni attivo", sent: 856 },
  { name: "Win-back", status: "In pausa", trigger: "Inattivo 30gg", sent: 312 },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-1">Panoramica del tuo business</p>
          </div>
          <Button variant="hero" size="sm">
            <Upload className="w-4 h-4" /> Carica contenuto
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <kpi.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="flex items-center gap-0.5 text-xs font-semibold text-green-400">
                  <ArrowUpRight className="w-3 h-3" /> {kpi.change}
                </span>
              </div>
              <p className="text-2xl font-display font-bold text-foreground">{kpi.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4">Entrate mensili</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(265, 90%, 60%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(265, 90%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 10%, 16%)" />
                <XAxis dataKey="month" stroke="hsl(240, 5%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(240, 5%, 55%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(240, 12%, 8%)", border: "1px solid hsl(240, 10%, 16%)", borderRadius: 8, color: "hsl(0, 0%, 95%)" }} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(265, 90%, 60%)" fill="url(#colorRevenue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4">Funnel conversione</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 10%, 16%)" />
                <XAxis dataKey="stage" stroke="hsl(240, 5%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(240, 5%, 55%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(240, 12%, 8%)", border: "1px solid hsl(240, 10%, 16%)", borderRadius: 8, color: "hsl(0, 0%, 95%)" }} />
                <Bar dataKey="value" fill="hsl(265, 90%, 60%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CRM + Automations */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* CRM */}
          <div className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-foreground">CRM Fan</h3>
              <Button variant="ghost" size="sm" className="text-primary text-xs">Vedi tutti</Button>
            </div>
            <div className="space-y-3">
              {fans.map((fan) => (
                <div key={fan.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-foreground">{fan.name}</p>
                    <p className="text-xs text-muted-foreground">{fan.segment}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      fan.status === "Premium" ? "bg-primary/20 text-primary" :
                      fan.status === "Abbonato" ? "bg-secondary/20 text-secondary" :
                      "bg-muted text-muted-foreground"
                    }`}>{fan.status}</span>
                    <p className="text-xs text-muted-foreground mt-1">{fan.spent}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automations */}
          <div className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-foreground">Automazioni</h3>
              <Button variant="ghost" size="sm" className="text-primary text-xs">
                <Bot className="w-3 h-3" /> Nuova
              </Button>
            </div>
            <div className="space-y-3">
              {automations.map((auto) => (
                <div key={auto.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{auto.name}</p>
                      <p className="text-xs text-muted-foreground">{auto.trigger}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      auto.status === "Attiva" ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"
                    }`}>{auto.status}</span>
                    <p className="text-xs text-muted-foreground mt-1">{auto.sent} inviate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
