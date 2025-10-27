export interface SkillTreeNode {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  dependencies: string[];
  tier: number;
}

export interface SkillTreeConfig {
  skill: string;
  difficulty: string;
  goalType: string;
  timeCommitment: string;
}

// Predefined skill trees for popular skills
const skillTreeTemplates: Record<string, SkillTreeNode[]> = {
  Guitar: [
    { id: "g1", title: "Learn Basic Chords", description: "Master open chords (C, G, D, Am, Em)", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "g2", title: "Finger Exercises", description: "Build finger strength and dexterity", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "g3", title: "Strumming Patterns", description: "Learn essential rhythm patterns", difficulty: "easy", dependencies: ["g1"], tier: 2 },
    { id: "g4", title: "Music Theory Basics", description: "Understand notes, scales, and keys", difficulty: "medium", dependencies: ["g1"], tier: 2 },
    { id: "g5", title: "Play Simple Songs", description: "Put it together with easy songs", difficulty: "easy", dependencies: ["g3"], tier: 3 },
    { id: "g6", title: "Bar Chords", description: "Master moveable chord shapes", difficulty: "medium", dependencies: ["g2", "g3"], tier: 3 },
    { id: "g7", title: "Scales & Lead", description: "Play melodies and solos", difficulty: "medium", dependencies: ["g4", "g6"], tier: 4 },
    { id: "g8", title: "Advanced Techniques", description: "Bends, hammer-ons, pull-offs", difficulty: "hard", dependencies: ["g7"], tier: 5 },
    { id: "g9", title: "Improvisation", description: "Create your own solos", difficulty: "hard", dependencies: ["g7"], tier: 5 },
    { id: "g10", title: "Songwriting", description: "Compose original music", difficulty: "hard", dependencies: ["g4", "g9"], tier: 6 },
    { id: "g11", title: "Performance", description: "Play confidently for an audience", difficulty: "hard", dependencies: ["g5", "g10"], tier: 6 },
  ],
  Drawing: [
    { id: "d1", title: "Basic Shapes", description: "Master circles, squares, and lines", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "d2", title: "Shading Techniques", description: "Learn light, shadow, and value", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "d3", title: "Perspective Basics", description: "One-point and two-point perspective", difficulty: "medium", dependencies: ["d1"], tier: 2 },
    { id: "d4", title: "Proportions", description: "Draw objects in correct size relationships", difficulty: "medium", dependencies: ["d1"], tier: 2 },
    { id: "d5", title: "Still Life", description: "Draw objects from observation", difficulty: "easy", dependencies: ["d2", "d4"], tier: 3 },
    { id: "d6", title: "Figure Drawing", description: "Human anatomy and gesture", difficulty: "medium", dependencies: ["d4"], tier: 3 },
    { id: "d7", title: "Facial Features", description: "Eyes, nose, mouth, and ears", difficulty: "medium", dependencies: ["d6"], tier: 4 },
    { id: "d8", title: "Color Theory", description: "Understanding color relationships", difficulty: "medium", dependencies: ["d2"], tier: 4 },
    { id: "d9", title: "Digital Art", description: "Transition to digital tools", difficulty: "hard", dependencies: ["d5", "d8"], tier: 5 },
    { id: "d10", title: "Character Design", description: "Create original characters", difficulty: "hard", dependencies: ["d7", "d8"], tier: 5 },
    { id: "d11", title: "Portfolio", description: "Build a professional showcase", difficulty: "hard", dependencies: ["d9", "d10"], tier: 6 },
  ],
  Python: [
    { id: "p1", title: "Variables & Data Types", description: "Strings, numbers, booleans", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "p2", title: "Control Flow", description: "If statements and loops", difficulty: "easy", dependencies: ["p1"], tier: 2 },
    { id: "p3", title: "Functions", description: "Define and call functions", difficulty: "easy", dependencies: ["p2"], tier: 2 },
    { id: "p4", title: "Data Structures", description: "Lists, dictionaries, sets, tuples", difficulty: "medium", dependencies: ["p1"], tier: 3 },
    { id: "p5", title: "File Handling", description: "Read and write files", difficulty: "medium", dependencies: ["p3"], tier: 3 },
    { id: "p6", title: "Object-Oriented Programming", description: "Classes and objects", difficulty: "medium", dependencies: ["p3", "p4"], tier: 4 },
    { id: "p7", title: "Error Handling", description: "Try, except, and debugging", difficulty: "medium", dependencies: ["p5"], tier: 4 },
    { id: "p8", title: "Libraries & Modules", description: "Import and use external code", difficulty: "medium", dependencies: ["p6"], tier: 5 },
    { id: "p9", title: "Web Scraping", description: "Extract data from websites", difficulty: "hard", dependencies: ["p8"], tier: 5 },
    { id: "p10", title: "Data Analysis", description: "Pandas and NumPy", difficulty: "hard", dependencies: ["p8"], tier: 5 },
    { id: "p11", title: "Build Projects", description: "Create complete applications", difficulty: "hard", dependencies: ["p9", "p10"], tier: 6 },
  ],
};

// Generate a generic skill tree for any skill
const generateGenericTree = (skillName: string): SkillTreeNode[] => {
  return [
    { id: "n1", title: `${skillName} Fundamentals`, description: "Learn the basic concepts and terminology", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "n2", title: "Practice Basics", description: "Apply fundamentals through simple exercises", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "n3", title: "Core Techniques", description: "Master essential techniques and methods", difficulty: "medium", dependencies: ["n1"], tier: 2 },
    { id: "n4", title: "Build Foundation", description: "Develop consistent practice habits", difficulty: "easy", dependencies: ["n2"], tier: 2 },
    { id: "n5", title: "Intermediate Skills", description: "Advance to more complex concepts", difficulty: "medium", dependencies: ["n3", "n4"], tier: 3 },
    { id: "n6", title: "Practical Application", description: "Apply skills in real scenarios", difficulty: "medium", dependencies: ["n5"], tier: 4 },
    { id: "n7", title: "Advanced Techniques", description: "Master professional-level methods", difficulty: "hard", dependencies: ["n6"], tier: 5 },
    { id: "n8", title: "Creative Expression", description: "Develop your unique style", difficulty: "hard", dependencies: ["n6"], tier: 5 },
    { id: "n9", title: "Expert Mastery", description: "Achieve mastery and teach others", difficulty: "hard", dependencies: ["n7", "n8"], tier: 6 },
  ];
};

export const generateSkillTree = (config: SkillTreeConfig): SkillTreeNode[] => {
  const template = skillTreeTemplates[config.skill];
  
  if (template) {
    return template;
  }
  
  return generateGenericTree(config.skill);
};

export const calculateProgress = (nodes: SkillTreeNode[], completedIds: Set<string>) => {
  const total = nodes.length;
  const completed = completedIds.size;
  const percentage = Math.round((completed / total) * 100);
  return { completed, total, percentage };
};

export const isNodeUnlocked = (node: SkillTreeNode, completedIds: Set<string>): boolean => {
  if (node.dependencies.length === 0) return true;
  return node.dependencies.every(depId => completedIds.has(depId));
};
