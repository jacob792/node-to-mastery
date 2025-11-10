import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

interface SkillNodeProps {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  completed: boolean;
  onToggle: (id: string) => void;
  dependencies?: string[];
  isUnlocked: boolean;
}

const difficultyConfig = {
  easy: { label: "Easy", color: "bg-success/10 text-success border-success/20" },
  medium: { label: "Medium", color: "bg-accent/10 text-accent border-accent/20" },
  hard: { label: "Hard", color: "bg-destructive/10 text-destructive border-destructive/20" },
};

const SkillNode = ({
  id,
  title,
  description,
  difficulty,
  completed,
  onToggle,
  isUnlocked,
}: SkillNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const config = difficultyConfig[difficulty];

  return (
    <Card
      className={`relative transition-all duration-500 border-2 ${
        completed
          ? "shadow-success border-success bg-gradient-to-br from-success/5 to-transparent"
          : isUnlocked
          ? "shadow-card hover:shadow-elevated cursor-pointer bg-gradient-card border-border hover:border-primary/30"
          : "opacity-50 cursor-not-allowed border-border/50"
      } ${isHovered && isUnlocked ? "scale-105 -rotate-1" : ""} ${
        completed ? "animate-pulse-glow" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => isUnlocked && onToggle(id)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg flex items-center gap-2">
            {completed ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            )}
            {title}
          </CardTitle>
          {isUnlocked && (
            <Checkbox
              checked={completed}
              onCheckedChange={() => onToggle(id)}
              className="mt-1"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-sm">{description}</CardDescription>
        <Badge variant="outline" className={config.color}>
          {config.label}
        </Badge>
      </CardContent>

      {/* Completion overlay */}
      {completed && (
        <div className="absolute inset-0 bg-success/5 rounded-lg pointer-events-none" />
      )}
    </Card>
  );
};

export default SkillNode;
