import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Guitar, Palette, Code, Camera, Dumbbell, BookOpen } from "lucide-react";
import heroTree from "@/assets/hero-tree.jpg";

const popularSkills = [
  { name: "Guitar", icon: Guitar, color: "text-accent" },
  { name: "Drawing", icon: Palette, color: "text-primary" },
  { name: "Python", icon: Code, color: "text-secondary" },
  { name: "Photography", icon: Camera, color: "text-success" },
  { name: "Fitness", icon: Dumbbell, color: "text-destructive" },
  { name: "Writing", icon: BookOpen, color: "text-accent" },
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularSkills.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.name}
                  className="cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleGenerate(item.name)}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-2xl bg-gradient-subtle">
                        <Icon className={`w-8 h-8 ${item.color}`} />
                      </div>
                    </div>
                    <p className="font-semibold">{item.name}</p>
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
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                Personalized Paths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Get a custom learning roadmap tailored to your goals, difficulty level, and time commitment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-success" />
                </div>
                Track Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Mark milestones as complete and watch your skill tree grow as you advance.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                Stay Motivated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
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
