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
  endGoal?: string;
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

// Goal-specific skill trees for popular end goals
const goalTreeTemplates: Record<string, Record<string, SkillTreeNode[]>> = {
  Fitness: {
    "handstand pushup": [
      { id: "g1", title: "Wall Push-ups", description: "Master 20 wall push-ups with proper form to build foundation strength", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "g2", title: "Regular Push-ups", description: "Complete 20 full push-ups with chest to ground, elbows at 45 degrees", difficulty: "easy", dependencies: ["g1"], tier: 2 },
      { id: "g3", title: "Wall Plank Hold", description: "Face wall, walk feet up to horizontal, hold for 30 seconds", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "g4", title: "Pike Push-ups", description: "Perform 15 pike push-ups with hips high, building shoulder strength", difficulty: "medium", dependencies: ["g2"], tier: 3 },
      { id: "g5", title: "Handstand Hold Against Wall", description: "Kick up to wall handstand, hold for 60 seconds with controlled breathing", difficulty: "medium", dependencies: ["g3"], tier: 3 },
      { id: "g6", title: "Elevated Pike Push-ups", description: "Pike push-ups with feet elevated, complete 12 reps for vertical pressing strength", difficulty: "medium", dependencies: ["g4"], tier: 4 },
      { id: "g7", title: "Chest-to-Wall Handstand", description: "Hold chest-to-wall handstand for 60 seconds with hollow body position", difficulty: "hard", dependencies: ["g5"], tier: 4 },
      { id: "g8", title: "Negative Handstand Push-up", description: "Control descent from handstand to head touching ground, 5 slow reps", difficulty: "hard", dependencies: ["g6", "g7"], tier: 5 },
      { id: "g9", title: "Partial Handstand Push-up", description: "Handstand push-up with reduced range, work up to 8 reps", difficulty: "hard", dependencies: ["g8"], tier: 6 },
      { id: "g10", title: "Full Handstand Push-up", description: "Complete handstand push-up: nose to ground and back up, achieve 5 clean reps", difficulty: "hard", dependencies: ["g9"], tier: 7 },
    ],
    "muscle up": [
      { id: "m1", title: "Dead Hang", description: "Hang from pull-up bar for 60 seconds with active shoulders", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "m2", title: "Regular Pull-ups", description: "Complete 10 strict pull-ups with chin over bar", difficulty: "easy", dependencies: ["m1"], tier: 2 },
      { id: "m3", title: "Bar Dips", description: "Perform 15 parallel bar dips with full range of motion", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "m4", title: "Chest-to-Bar Pull-ups", description: "Pull chest to bar for 8 reps, building explosive power", difficulty: "medium", dependencies: ["m2"], tier: 3 },
      { id: "m5", title: "High Pull-ups", description: "Pull as high as possible, getting bar to chest/stomach level, 6 reps", difficulty: "medium", dependencies: ["m4"], tier: 4 },
      { id: "m6", title: "Transition Practice", description: "Jump to support position on bar, hold and lower slowly, 10 reps", difficulty: "medium", dependencies: ["m3"], tier: 3 },
      { id: "m7", title: "Negative Muscle Up", description: "Jump to top position, slowly lower through full muscle up motion, 5 reps", difficulty: "hard", dependencies: ["m5", "m6"], tier: 5 },
      { id: "m8", title: "Band-Assisted Muscle Up", description: "Complete muscle up with resistance band assistance, 5 reps", difficulty: "hard", dependencies: ["m7"], tier: 6 },
      { id: "m9", title: "First Muscle Up", description: "Achieve your first strict muscle up: pull, transition, press out", difficulty: "hard", dependencies: ["m8"], tier: 7 },
    ],
  },
  Guitar: {
    "play stairway to heaven": [
      { id: "s1", title: "Basic Fingerpicking", description: "Learn thumb-fingers alternating pattern, practice for 15 minutes daily", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "s2", title: "Am Arpeggio Pattern", description: "Master the intro arpeggio pattern slowly at 40 BPM", difficulty: "easy", dependencies: ["s1"], tier: 2 },
      { id: "s3", title: "Chord Transitions", description: "Learn and switch between Am, G/A, C/G, D/F#, Fmaj7 smoothly", difficulty: "medium", dependencies: ["s2"], tier: 3 },
      { id: "s4", title: "Intro Section Complete", description: "Play full intro section at 60 BPM with accurate timing", difficulty: "medium", dependencies: ["s3"], tier: 4 },
      { id: "s5", title: "Basic Scales", description: "Learn Am pentatonic scale positions 1 and 2", difficulty: "medium", dependencies: ["s1"], tier: 3 },
      { id: "s6", title: "Solo Techniques", description: "Practice bends, slides, and hammer-ons from the solo section", difficulty: "hard", dependencies: ["s5"], tier: 5 },
      { id: "s7", title: "Solo Section 1", description: "Master first solo section at 70% speed with correct phrasing", difficulty: "hard", dependencies: ["s6"], tier: 6 },
      { id: "s8", title: "Full Song Structure", description: "Connect intro, verse, solo - play complete song at 80% speed", difficulty: "hard", dependencies: ["s4", "s7"], tier: 7 },
      { id: "s9", title: "Performance Ready", description: "Play Stairway to Heaven at full speed (BPM 80) from memory", difficulty: "hard", dependencies: ["s8"], tier: 8 },
    ],
  },
  Drawing: {
    "draw realistic portraits": [
      { id: "p1", title: "Facial Proportions", description: "Study Loomis method: learn eye line, nose line, mouth placement on 20 sketches", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "p2", title: "Basic Head Construction", description: "Draw heads from 5 angles using construction lines and basic shapes", difficulty: "easy", dependencies: ["p1"], tier: 2 },
      { id: "p3", title: "Eye Studies", description: "Draw 30 eyes from reference: understand iris, pupil, eyelids, and light reflection", difficulty: "medium", dependencies: ["p2"], tier: 3 },
      { id: "p4", title: "Nose Structure", description: "Study and draw 20 noses from different angles, focus on bridge and nostrils", difficulty: "medium", dependencies: ["p2"], tier: 3 },
      { id: "p5", title: "Mouth and Lips", description: "Draw 20 mouths: closed, open, smiling - master lip structure and teeth", difficulty: "medium", dependencies: ["p2"], tier: 3 },
      { id: "p6", title: "Value and Shading", description: "Create 5-value scale, practice smooth gradients and form shadows", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "p7", title: "Portrait Lighting", description: "Study 3 lighting setups: front, side, Rembrandt - sketch each setup", difficulty: "medium", dependencies: ["p6"], tier: 4 },
      { id: "p8", title: "Feature Integration", description: "Draw 10 complete faces combining eyes, nose, mouth with accurate proportions", difficulty: "hard", dependencies: ["p3", "p4", "p5"], tier: 5 },
      { id: "p9", title: "Hair Rendering", description: "Practice drawing hair in sections, flowing strands, various textures on 10 studies", difficulty: "medium", dependencies: ["p7"], tier: 5 },
      { id: "p10", title: "Full Portrait Studies", description: "Complete 5 full portraits from photo reference with lighting and detail", difficulty: "hard", dependencies: ["p8", "p9"], tier: 6 },
      { id: "p11", title: "Realistic Portrait", description: "Create finished realistic portrait: accurate likeness, value range, and detail", difficulty: "hard", dependencies: ["p10"], tier: 7 },
    ],
  },
  Python: {
    "build a web scraper": [
      { id: "w1", title: "Python Basics", description: "Learn variables, strings, lists, and for loops - complete 10 exercises", difficulty: "easy", dependencies: [], tier: 1 },
      { id: "w2", title: "Functions", description: "Write 10 functions with parameters and return values", difficulty: "easy", dependencies: ["w1"], tier: 2 },
      { id: "w3", title: "Install Libraries", description: "Install and import requests and BeautifulSoup libraries", difficulty: "easy", dependencies: ["w2"], tier: 3 },
      { id: "w4", title: "HTTP Requests", description: "Use requests library to fetch 5 different web pages and print response codes", difficulty: "medium", dependencies: ["w3"], tier: 4 },
      { id: "w5", title: "HTML Basics", description: "Understand HTML structure: tags, classes, IDs for web scraping", difficulty: "easy", dependencies: ["w3"], tier: 3 },
      { id: "w6", title: "BeautifulSoup Parsing", description: "Parse HTML with BeautifulSoup, extract text from specific tags on 5 pages", difficulty: "medium", dependencies: ["w4", "w5"], tier: 5 },
      { id: "w7", title: "CSS Selectors", description: "Use CSS selectors to find elements: .class, #id, tag combinations", difficulty: "medium", dependencies: ["w6"], tier: 6 },
      { id: "w8", title: "Data Extraction", description: "Extract specific data: titles, prices, links from e-commerce site", difficulty: "hard", dependencies: ["w7"], tier: 7 },
      { id: "w9", title: "Save to File", description: "Write scraped data to CSV file using csv library", difficulty: "medium", dependencies: ["w8"], tier: 7 },
      { id: "w10", title: "Complete Scraper", description: "Build working scraper: fetch page, extract data, save to CSV, handle errors", difficulty: "hard", dependencies: ["w9"], tier: 8 },
    ],
  },
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

// Generate a goal-specific tree using AI-like logic
const generateGoalTree = (skillName: string, endGoal: string): SkillTreeNode[] => {
  const normalizedGoal = endGoal.toLowerCase().trim();
  
  // Check if we have a specific template for this goal
  if (goalTreeTemplates[skillName] && goalTreeTemplates[skillName][normalizedGoal]) {
    return goalTreeTemplates[skillName][normalizedGoal];
  }
  
  // Generate a custom goal-oriented tree
  return [
    { id: "g1", title: `${skillName} Basics`, description: "Learn fundamental concepts needed for your goal", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "g2", title: "Foundation Skills", description: "Build core abilities required for progression", difficulty: "easy", dependencies: [], tier: 1 },
    { id: "g3", title: "Prerequisite Techniques", description: `Master techniques that lead to ${endGoal}`, difficulty: "medium", dependencies: ["g1"], tier: 2 },
    { id: "g4", title: "Progressive Training", description: "Systematically build strength and skill", difficulty: "medium", dependencies: ["g2", "g3"], tier: 3 },
    { id: "g5", title: "Intermediate Milestone", description: "Achieve halfway point toward your goal", difficulty: "medium", dependencies: ["g4"], tier: 4 },
    { id: "g6", title: "Advanced Preparation", description: "Refine techniques specifically for your goal", difficulty: "hard", dependencies: ["g5"], tier: 5 },
    { id: "g7", title: "Goal-Specific Practice", description: `Practice components of ${endGoal} separately`, difficulty: "hard", dependencies: ["g6"], tier: 6 },
    { id: "g8", title: `Achieve: ${endGoal}`, description: `Complete your goal: ${endGoal}`, difficulty: "hard", dependencies: ["g7"], tier: 7 },
  ];
};

export const generateSkillTree = (config: SkillTreeConfig): SkillTreeNode[] => {
  // If user specified an end goal, generate goal-specific tree
  if (config.endGoal && config.endGoal.trim()) {
    return generateGoalTree(config.skill, config.endGoal);
  }
  
  // Otherwise use standard templates
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
