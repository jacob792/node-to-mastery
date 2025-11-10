import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Guitar, Palette, Code, Camera, Dumbbell, BookOpen, ChefHat, Languages, Music, Trophy } from "lucide-react";
import heroTree from "@/assets/hero-tree.jpg";

const popularSkills = [
  { name: "Guitar", icon: Guitar, color: "text-accent", gradient: "from-accent to-accent/70" },
  { name: "Drawing", icon: Palette, color: "text-primary", gradient: "from-primary to-primary-glow" },
  { name: "Python", icon: Code, color: "text-secondary", gradient: "from-secondary to-info" },
  { name: "Photography", icon: Camera, color: "text-success", gradient: "from-success to-success/70" },
  { name: "Fitness", icon: Dumbbell, color: "text-destructive", gradient: "from-destructive to-destructive/70" },
  { name: "Writing", icon: BookOpen, color: "text-info", gradient: "from-info to-secondary" },
  { name: "Cooking", icon: ChefHat, color: "text-accent", gradient: "from-accent via-accent/80 to-accent/60" },
  { name: "Spanish", icon: Languages, color: "text-success", gradient: "from-success to-info" },
  { name: "Music Production", icon: Music, color: "text-primary", gradient: "from-primary to-secondary" },
  { name: "Chess", icon: Trophy, color: "text-info", gradient: "from-info to-primary" },
];

const Home = () => {
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();

  const handleGenerate = (skillName?: string) => {
    const selectedSkill = skillName || skill;
    if (selectedSkill.trim()) {
      navigate(`/setup?skill=${encodeURIComponent(selectedSkill)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroTree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Level Up Your Skills</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Master Any Skill with{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Skill Tree
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform learning into an adventure. Get a personalized roadmap with milestones, 
              track your progress, and unlock achievements as you grow.
            </p>

            {/* Skill Input */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                placeholder="What do you want to learn? (e.g., Guitar, Python, Drawing)"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                className="flex-1 h-14 text-lg"
              />
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => handleGenerate()}
                disabled={!skill.trim()}
                className="h-14 px-8"
              >
                Generate Tree
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Popular Skill Trees
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Start with one of these popular skills or create your own
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularSkills.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.name}
                  className="cursor-pointer hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group overflow-hidden bg-gradient-card border-2 hover:border-primary/30"
                  onClick={() => handleGenerate(item.name)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center space-y-3 relative">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                         style={{ background: `linear-gradient(135deg, var(--${item.color.replace('text-', '')}), transparent)` }} />
                    <div className="flex justify-center relative">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <p className="font-semibold relative z-10">{item.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="shadow-card bg-gradient-card border-2 hover:border-primary/30 hover:shadow-elevated transition-all duration-500 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                Personalized Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Get a custom learning roadmap tailored to your goals, difficulty level, and time commitment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-2 hover:border-success/30 hover:shadow-elevated transition-all duration-500 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-success flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: "0.2s" }} />
                </div>
                Track Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Mark milestones as complete and watch your skill tree grow as you advance.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-2 hover:border-accent/30 hover:shadow-elevated transition-all duration-500 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                Stay Motivated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Visual progress and achievement unlocking keeps you motivated throughout your journey.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
