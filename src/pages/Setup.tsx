import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Sparkles } from "lucide-react";

const Setup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const skillName = searchParams.get("skill") || "";

  const [difficulty, setDifficulty] = useState("beginner");
  const [goalType, setGoalType] = useState("hobbyist");
  const [timeCommitment, setTimeCommitment] = useState("moderate");

  useEffect(() => {
    if (!skillName) {
      navigate("/");
    }
  }, [skillName, navigate]);

  const handleGenerate = () => {
    const config = {
      skill: skillName,
      difficulty,
      goalType,
      timeCommitment,
    };
    localStorage.setItem("skillTreeConfig", JSON.stringify(config));
    navigate("/tree");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Customize Your Journey</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Learning: <span className="text-primary">{skillName}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Let's personalize your skill tree to match your goals and learning style
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Difficulty Level</CardTitle>
              <CardDescription>Where are you starting from?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={difficulty} onValueChange={setDifficulty}>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Beginner</div>
                    <div className="text-sm text-muted-foreground">
                      Starting from scratch, no prior experience
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Intermediate</div>
                    <div className="text-sm text-muted-foreground">
                      Some experience, looking to advance further
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Advanced</div>
                    <div className="text-sm text-muted-foreground">
                      Proficient, seeking mastery and specialization
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Learning Goal</CardTitle>
              <CardDescription>What's your main objective?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={goalType} onValueChange={setGoalType}>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="hobbyist" id="hobbyist" />
                  <Label htmlFor="hobbyist" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Hobbyist</div>
                    <div className="text-sm text-muted-foreground">
                      Learning for personal enjoyment and creativity
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="professional" id="professional" />
                  <Label htmlFor="professional" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Professional</div>
                    <div className="text-sm text-muted-foreground">
                      Building career skills and expertise
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="speedlearner" id="speedlearner" />
                  <Label htmlFor="speedlearner" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Speed Learner</div>
                    <div className="text-sm text-muted-foreground">
                      Fastest path to practical competence
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Time Commitment</CardTitle>
              <CardDescription>How much time can you dedicate?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={timeCommitment} onValueChange={setTimeCommitment}>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="casual" id="casual" />
                  <Label htmlFor="casual" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Casual</div>
                    <div className="text-sm text-muted-foreground">
                      1-2 hours per week, relaxed pace
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="moderate" id="moderate" />
                  <Label htmlFor="moderate" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Moderate</div>
                    <div className="text-sm text-muted-foreground">
                      3-5 hours per week, steady progress
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="intensive" id="intensive" />
                  <Label htmlFor="intensive" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Intensive</div>
                    <div className="text-sm text-muted-foreground">
                      10+ hours per week, rapid advancement
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Button
            variant="hero"
            size="lg"
            onClick={handleGenerate}
            className="w-full h-14 text-lg"
          >
            Generate My Skill Tree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Setup;
