import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Target, Sparkles } from "lucide-react";
import SkillNode from "@/components/SkillNode";
import { 
  generateSkillTree, 
  calculateProgress, 
  isNodeUnlocked,
  type SkillTreeConfig,
  type SkillTreeNode 
} from "@/lib/skillTreeGenerator";
import { toast } from "sonner";

const SkillTree = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<SkillTreeConfig | null>(null);
  const [nodes, setNodes] = useState<SkillTreeNode[]>([]);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedConfig = localStorage.getItem("skillTreeConfig");
    if (!savedConfig) {
      navigate("/");
      return;
    }

    const parsedConfig = JSON.parse(savedConfig);
    setConfig(parsedConfig);

    const tree = generateSkillTree(parsedConfig);
    setNodes(tree);

    const savedProgress = localStorage.getItem(`progress_${parsedConfig.skill}`);
    if (savedProgress) {
      setCompletedIds(new Set(JSON.parse(savedProgress)));
    }
  }, [navigate]);

  const handleToggleNode = (nodeId: string) => {
    const newCompleted = new Set(completedIds);
    
    if (newCompleted.has(nodeId)) {
      newCompleted.delete(nodeId);
      toast.info("Progress updated");
    } else {
      newCompleted.add(nodeId);
      toast.success("Milestone completed! 🎉", {
        description: "Keep up the great work!",
      });
    }
    
    setCompletedIds(newCompleted);
    if (config) {
      localStorage.setItem(`progress_${config.skill}`, JSON.stringify([...newCompleted]));
    }
  };

  const handleReset = () => {
    if (config) {
      localStorage.removeItem(`progress_${config.skill}`);
      setCompletedIds(new Set());
      toast.info("Progress reset");
    }
  };

  if (!config) return null;

  const progress = calculateProgress(nodes, completedIds);
  const nodesByTier = nodes.reduce((acc, node) => {
    if (!acc[node.tier]) acc[node.tier] = [];
    acc[node.tier].push(node);
    return acc;
  }, {} as Record<number, SkillTreeNode[]>);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            New Tree
          </Button>
          <Button variant="outline" onClick={handleReset}>
            Reset Progress
          </Button>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6 animate-slide-in">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Learning Journey</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {config.skill} Skill Tree
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-sm">
                {config.difficulty}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {config.goalType}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {config.timeCommitment} pace
              </Badge>
            </div>
          </div>

          {/* Progress Card */}
          <Card className="shadow-elevated border-2 border-primary/20 bg-gradient-card">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-accent">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg">Overall Progress</span>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {progress.percentage}%
                  </span>
                </div>
                <Progress value={progress.percentage} className="h-4" />
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Target className="w-4 h-4" />
                    {progress.completed} of {progress.total} milestones completed
                  </span>
                  {progress.percentage === 100 && (
                    <Badge className="bg-gradient-success text-white px-3 py-1 animate-float">
                      Master Level! 🏆
                    </Badge>
                  )}
                  {progress.percentage >= 75 && progress.percentage < 100 && (
                    <Badge className="bg-gradient-primary text-white px-3 py-1">
                      Almost There! 🌟
                    </Badge>
                  )}
                  {progress.percentage >= 50 && progress.percentage < 75 && (
                    <Badge className="bg-gradient-accent text-white px-3 py-1">
                      Great Progress! 🔥
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Tree Visualization */}
        <div className="max-w-6xl mx-auto space-y-10">
          {Object.entries(nodesByTier)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([tier, tierNodes], tierIndex) => (
              <div key={tier} className="space-y-5 relative">
                <div className="flex items-center gap-4">
                  <Badge 
                    variant="outline" 
                    className="text-sm px-4 py-2 bg-gradient-primary text-white border-0 shadow-glow font-semibold"
                  >
                    Tier {tier}
                  </Badge>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierNodes.map((node, nodeIndex) => (
                    <div 
                      key={node.id} 
                      className="animate-slide-in"
                      style={{ 
                        animationDelay: `${tierIndex * 200 + nodeIndex * 100}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <SkillNode
                        {...node}
                        completed={completedIds.has(node.id)}
                        onToggle={handleToggleNode}
                        isUnlocked={isNodeUnlocked(node, completedIds)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
