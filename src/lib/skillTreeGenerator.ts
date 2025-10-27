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
    { id: "g1", title: "Learn Basic Open Chords", description: "Master C, G, D, Am, Em chords - practice switching between them smoothly in 60 seconds", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "g2", title: "Finger Exercises", description: "Practice chromatic exercises, spider walks, and finger independence drills for 10 minutes daily", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "g3", title: "Basic Strumming", description: "Learn down-up strumming, practice 4/4 and 3/4 time signatures at 80 BPM", difficulty: "easy", dependencies: ["g1"], tier: 2 },
    { id: "g4", title: "First Three Songs", description: "Learn and play 3 simple songs (Knockin' on Heaven's Door, Horse With No Name, Wonderwall)", difficulty: "easy", dependencies: ["g3"], tier: 2 },
    { id: "g5", title: "Chord Transitions", description: "Perfect smooth transitions between any two chords in under 2 seconds", difficulty: "medium", dependencies: ["g1"], tier: 2 },
    { id: "g6", title: "Music Theory Basics", description: "Learn the notes on the fretboard, major scale, and key signatures for G, C, and D", difficulty: "medium", dependencies: ["g1"], tier: 3 },
    { id: "g7", title: "Bar Chords Mastery", description: "Master F, Bm, and all major/minor bar chord shapes across the neck", difficulty: "medium", dependencies: ["g2", "g5"], tier: 3 },
    { id: "g8", title: "Fingerpicking Basics", description: "Learn Travis picking pattern and play 2 fingerstyle songs", difficulty: "medium", dependencies: ["g4"], tier: 3 },
    { id: "g9", title: "Pentatonic Scales", description: "Master all 5 positions of minor pentatonic, play at 100 BPM cleanly", difficulty: "medium", dependencies: ["g6", "g7"], tier: 4 },
    { id: "g10", title: "Lead Guitar Techniques", description: "Practice bends (full, half, quarter), hammer-ons, pull-offs, and slides", difficulty: "hard", dependencies: ["g9"], tier: 5 },
    { id: "g11", title: "Play 10 Complete Songs", description: "Build repertoire: play 10 full songs from memory with vocals", difficulty: "medium", dependencies: ["g8"], tier: 5 },
    { id: "g12", title: "Improvisation", description: "Solo over 12-bar blues and create melodic phrases using pentatonic and blues scales", difficulty: "hard", dependencies: ["g10"], tier: 6 },
    { id: "g13", title: "Songwriting", description: "Compose 3 original songs with chord progressions, melody, and lyrics", difficulty: "hard", dependencies: ["g6", "g11"], tier: 6 },
  ],
  Drawing: [
    { id: "d1", title: "Basic Shapes Training", description: "Draw 50 perfect circles, squares, and straight lines freehand daily", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "d2", title: "Line Control", description: "Practice hatching, cross-hatching, and creating 5 different line weights", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "d3", title: "Shading Fundamentals", description: "Create a 10-value gradient scale, practice sphere, cube, and cylinder shading", difficulty: "easy", dependencies: ["d2"], tier: 2 },
    { id: "d4", title: "One-Point Perspective", description: "Draw 10 boxes in space and a simple room interior with accurate perspective", difficulty: "medium", dependencies: ["d1"], tier: 2 },
    { id: "d5", title: "Basic Proportions", description: "Use sight-size method to draw 5 simple objects with correct proportions", difficulty: "easy", dependencies: ["d1"], tier: 2 },
    { id: "d6", title: "Still Life Drawing", description: "Complete 3 still life drawings (mug, fruit bowl, shoes) with accurate form and shading", difficulty: "medium", dependencies: ["d3", "d5"], tier: 3 },
    { id: "d7", title: "Two-Point Perspective", description: "Draw buildings and furniture in two-point perspective, create a street scene", difficulty: "medium", dependencies: ["d4"], tier: 3 },
    { id: "d8", title: "Gesture Drawing", description: "Complete 100 gesture drawings (30-second to 2-minute poses)", difficulty: "medium", dependencies: ["d5"], tier: 3 },
    { id: "d9", title: "Anatomy Basics", description: "Study and draw skeleton structure, muscle groups, and draw 20 figure studies", difficulty: "hard", dependencies: ["d8"], tier: 4 },
    { id: "d10", title: "Portrait Fundamentals", description: "Master facial proportions (Loomis method), draw 10 portraits from reference", difficulty: "hard", dependencies: ["d9"], tier: 5 },
    { id: "d11", title: "Facial Features Detail", description: "Draw 20 studies each of eyes, noses, mouths, and ears from different angles", difficulty: "hard", dependencies: ["d10"], tier: 5 },
    { id: "d12", title: "Color Theory", description: "Create color wheel, practice mixing 12 colors, understand warm/cool and complementary colors", difficulty: "medium", dependencies: ["d6"], tier: 5 },
    { id: "d13", title: "Full Figure Drawing", description: "Draw 10 complete figures in different poses with accurate anatomy and proportions", difficulty: "hard", dependencies: ["d9", "d11"], tier: 6 },
    { id: "d14", title: "Character Design", description: "Design 5 unique characters with turnarounds and expression sheets", difficulty: "hard", dependencies: ["d13", "d12"], tier: 6 },
  ],
  Python: [
    { id: "p1", title: "Setup & First Program", description: "Install Python, write and run 'Hello World', understand print() and input()", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "p2", title: "Variables & Data Types", description: "Work with strings, integers, floats, booleans - create 10 practice exercises", difficulty: "easy", dependencies: ["p1"], tier: 2 },
    { id: "p3", title: "Control Flow", description: "Write programs using if/elif/else, create 5 decision-making scripts", difficulty: "easy", dependencies: ["p2"], tier: 2 },
    { id: "p4", title: "Loops Mastery", description: "Master for and while loops, write programs with nested loops and loop control (break/continue)", difficulty: "easy", dependencies: ["p3"], tier: 3 },
    { id: "p5", title: "Functions", description: "Create 10 functions with parameters, return values, and default arguments", difficulty: "medium", dependencies: ["p4"], tier: 3 },
    { id: "p6", title: "Lists & Tuples", description: "Master list operations: append, slice, comprehensions - build a todo app", difficulty: "medium", dependencies: ["p4"], tier: 4 },
    { id: "p7", title: "Dictionaries & Sets", description: "Work with key-value pairs, create a phonebook app and inventory system", difficulty: "medium", dependencies: ["p6"], tier: 4 },
    { id: "p8", title: "File Operations", description: "Read/write text and CSV files, build a data logger program", difficulty: "medium", dependencies: ["p5"], tier: 5 },
    { id: "p9", title: "Error Handling", description: "Use try/except blocks, create robust programs that handle 5+ error types", difficulty: "medium", dependencies: ["p8"], tier: 5 },
    { id: "p10", title: "OOP Fundamentals", description: "Create classes with attributes and methods, build a Bank Account and Player class system", difficulty: "hard", dependencies: ["p7"], tier: 6 },
    { id: "p11", title: "External Libraries", description: "Use requests, pandas, matplotlib - fetch API data and create visualizations", difficulty: "hard", dependencies: ["p9", "p10"], tier: 6 },
    { id: "p12", title: "Complete Project", description: "Build a full CLI app: expense tracker with data storage, reports, and charts", difficulty: "hard", dependencies: ["p11"], tier: 7 },
  ],
  Fitness: [
    { id: "f1", title: "Foundation Strength", description: "Master 10 push-ups, 5 pull-ups, and 30 squats with proper form", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "f2", title: "Basic Cardio", description: "Run/jog for 15 minutes continuously at comfortable pace, 3 times per week", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "f3", title: "Core Foundation", description: "Hold plank for 60 seconds, do 20 crunches and 15 leg raises with control", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "f4", title: "Push Progression", description: "Achieve 25 push-ups, 10 pull-ups, 50 squats in single sets", difficulty: "medium", dependencies: ["f1"], tier: 2 },
    { id: "f5", title: "Cardio Endurance", description: "Run 5K (3.1 miles) in under 35 minutes without stopping", difficulty: "medium", dependencies: ["f2"], tier: 2 },
    { id: "f6", title: "Core Strength", description: "Hold plank 2 minutes, do 50 crunches, 30 leg raises, add side planks 60 seconds each", difficulty: "medium", dependencies: ["f3"], tier: 2 },
    { id: "f7", title: "Upper Body Power", description: "40 push-ups, 15 pull-ups, 10 dips, 20 diamond push-ups in single sets", difficulty: "hard", dependencies: ["f4"], tier: 3 },
    { id: "f8", title: "Lower Body Strength", description: "100 squats, 30 jump squats, 20 lunges per leg, hold wall sit 2 minutes", difficulty: "hard", dependencies: ["f4"], tier: 3 },
    { id: "f9", title: "Cardio Mastery", description: "Run 10K in under 60 minutes, or do 30 minutes HIIT intervals", difficulty: "hard", dependencies: ["f5"], tier: 3 },
    { id: "f10", title: "Advanced Core", description: "L-sit hold 30 seconds, dragon flags 10 reps, hanging leg raises 20 reps", difficulty: "hard", dependencies: ["f6"], tier: 4 },
    { id: "f11", title: "Calisthenics Skills", description: "Master handstand hold 30 seconds, 5 muscle-ups, pistol squats 10 each leg", difficulty: "hard", dependencies: ["f7", "f8"], tier: 5 },
    { id: "f12", title: "Elite Endurance", description: "Run half-marathon (21K) or complete 60-minute advanced HIIT session", difficulty: "hard", dependencies: ["f9"], tier: 5 },
    { id: "f13", title: "Peak Performance", description: "Create custom workout routine, achieve advanced skills: planche lean, front lever progression", difficulty: "hard", dependencies: ["f10", "f11"], tier: 6 },
  ],
  Photography: [
    { id: "ph1", title: "Camera Basics", description: "Learn your camera's buttons, take 100 photos using auto mode to understand composition", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "ph2", title: "Exposure Triangle", description: "Master aperture, shutter speed, ISO - take 50 photos manually adjusting each setting", difficulty: "easy", dependencies: ["ph1"], tier: 2 },
    { id: "ph3", title: "Composition Rules", description: "Practice rule of thirds, leading lines, framing - take 20 photos demonstrating each", difficulty: "easy", dependencies: ["ph1"], tier: 2 },
    { id: "ph4", title: "Manual Mode Mastery", description: "Shoot 200 photos in full manual mode in various lighting conditions", difficulty: "medium", dependencies: ["ph2"], tier: 3 },
    { id: "ph5", title: "Lighting Fundamentals", description: "Understand golden hour, hard/soft light - create 30 photos showcasing different lighting", difficulty: "medium", dependencies: ["ph2"], tier: 3 },
    { id: "ph6", title: "Portrait Photography", description: "Shoot 10 portrait sessions, master focus on eyes, depth of field, and posing", difficulty: "medium", dependencies: ["ph4", "ph5"], tier: 4 },
    { id: "ph7", title: "Landscape Photography", description: "Capture 20 landscape shots with proper foreground/background, use tripod and filters", difficulty: "medium", dependencies: ["ph3", "ph4"], tier: 4 },
    { id: "ph8", title: "Editing Basics", description: "Learn Lightroom/Photoshop basics: exposure, contrast, color correction on 50 photos", difficulty: "medium", dependencies: ["ph4"], tier: 5 },
    { id: "ph9", title: "Advanced Techniques", description: "Master long exposure, HDR, panoramas - create 5 photos of each type", difficulty: "hard", dependencies: ["ph7", "ph8"], tier: 5 },
    { id: "ph10", title: "Studio Lighting", description: "Use artificial lights, modifiers, and backdrops - complete 5 studio sessions", difficulty: "hard", dependencies: ["ph6"], tier: 6 },
    { id: "ph11", title: "Professional Portfolio", description: "Curate 30 best photos across different genres, create online portfolio", difficulty: "hard", dependencies: ["ph9", "ph10"], tier: 6 },
  ],
  Writing: [
    { id: "w1", title: "Daily Writing Habit", description: "Write 500 words daily for 30 days - journal, freewrite, or stories", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "w2", title: "Grammar Fundamentals", description: "Master sentence structure, punctuation, and common grammar rules through exercises", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "w3", title: "Short Stories", description: "Write 5 complete short stories (1000-2000 words each) with beginning, middle, and end", difficulty: "easy", dependencies: ["w1"], tier: 2 },
    { id: "w4", title: "Character Development", description: "Create 10 detailed character profiles with backgrounds, motivations, and arcs", difficulty: "medium", dependencies: ["w3"], tier: 3 },
    { id: "w5", title: "Dialogue Mastery", description: "Write 10 scenes with natural dialogue that reveals character and advances plot", difficulty: "medium", dependencies: ["w4"], tier: 3 },
    { id: "w6", title: "Show Don't Tell", description: "Rewrite 20 telling sentences as showing scenes, master descriptive writing", difficulty: "medium", dependencies: ["w3"], tier: 3 },
    { id: "w7", title: "Plot Structure", description: "Outline 5 stories using 3-act structure, hero's journey, or other frameworks", difficulty: "medium", dependencies: ["w3"], tier: 4 },
    { id: "w8", title: "First Draft Novel", description: "Write complete first draft of novel or novella (50,000+ words)", difficulty: "hard", dependencies: ["w5", "w7"], tier: 5 },
    { id: "w9", title: "Editing Skills", description: "Learn self-editing, revise 3 stories improving clarity, pacing, and flow", difficulty: "medium", dependencies: ["w6"], tier: 5 },
    { id: "w10", title: "World Building", description: "Create detailed fictional world: geography, history, cultures, rules for 3 stories", difficulty: "hard", dependencies: ["w7"], tier: 5 },
    { id: "w11", title: "Advanced Revision", description: "Complete 3 full revision passes on novel: structure, character, line editing", difficulty: "hard", dependencies: ["w8", "w9"], tier: 6 },
    { id: "w12", title: "Publishing Ready", description: "Polish manuscript, write query letter, submit to 10 agents or self-publish", difficulty: "hard", dependencies: ["w11"], tier: 6 },
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
