// Base URL vers les images brutes (RAW)
// On ajoute le nom du dossier + /1.jpg (ou 0.jpg)
const IMG_BASE = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

const exrxCatalog = [
  // --- JAMBES (Legs) ---
  {
    name: "Bodyweight Squat",
    url: "https://exrx.net/WeightExercises/Quadriceps/BWSquat",
    gifUrl: IMG_BASE + "Bodyweight_Squat/1.jpg" // Confirmé
  },
  {
    name: "Goblet Squat",
    url: "https://exrx.net/WeightExercises/Kettlebell/KBGobletSquat",
    gifUrl: IMG_BASE + "Goblet_Squat/1.jpg" // Confirmé
  },
  {
    name: "Dumbbell Squat",
    url: "https://exrx.net/WeightExercises/Quadriceps/DBSquat",
    gifUrl: IMG_BASE + "Dumbbell_Squat/1.jpg" // Confirmé
  },
  {
    name: "Front Squat",
    url: "https://exrx.net/WeightExercises/Quadriceps/DBFrontSquat",
    gifUrl: IMG_BASE + "Front_Barbell_Squat/1.jpg" // Confirmé (Variante barre, mouvement identique)
  },
  {
    name: "Bulgarian Split Squat",
    url: "https://exrx.net/WeightExercises/Quadriceps/DBSingleLegSplitSquat",
    gifUrl: IMG_BASE + "Barbell_Side_Split_Squat/1.jpg" // Proxy le plus proche dans ta liste
  },
  {
    name: "Jump Squat",
    url: "https://exrx.net/Plyometrics/JumpSquat",
    gifUrl: IMG_BASE + "Freehand_Jump_Squat/1.jpg" // Confirmé
  },

  // Fentes
  {
    name: "Forward Lunge",
    url: "https://exrx.net/WeightExercises/Quadriceps/DBLunge",
    gifUrl: IMG_BASE + "Dumbbell_Lunges/1.jpg" // Confirmé
  },
  {
    name: "Reverse Lunge",
    url: "https://exrx.net/WeightExercises/Quadriceps/DBReverseLunge",
    gifUrl: IMG_BASE + "Dumbbell_Rear_Lunge/1.jpg" // Confirmé
  },
  {
    name: "Walking Lunge",
    url: "https://exrx.net/WeightExercises/Quadriceps/DBWalkingLunge",
    gifUrl: IMG_BASE + "Bodyweight_Walking_Lunge/1.jpg" // Confirmé
  },
  {
    name: "Step Up",
    url: "https://exrx.net/WeightExercises/Quadriceps/DBStepUp",
    gifUrl: IMG_BASE + "Dumbbell_Step_Ups/1.jpg" // Confirmé
  },

  // Chaîne Postérieure
  {
    name: "Romanian Deadlift",
    url: "https://exrx.net/WeightExercises/Hamstrings/DBStraightLegDeadlift",
    gifUrl: IMG_BASE + "Barbell_Deadlift/1.jpg" // Proxy (RDL absent de la liste, Deadlift classique utilisé)
  },
  {
    name: "Glute Bridge",
    url: "https://exrx.net/WeightExercises/GluteusMaximus/BWGluteBridge",
    gifUrl: IMG_BASE + "Butt_Lift_Bridge/1.jpg" // Confirmé (Nom exact dans ta liste)
  },
  {
    name: "Hip Thrust",
    url: "https://exrx.net/WeightExercises/GluteusMaximus/BBHipThrust",
    gifUrl: IMG_BASE + "Barbell_Hip_Thrust/1.jpg" // Confirmé
  },
  {
    name: "Kettlebell Swing",
    url: "https://exrx.net/WeightExercises/Kettlebell/KBSwing",
    gifUrl: IMG_BASE + "One-Arm_Kettlebell_Swings/1.jpg" // Confirmé (Variante 1 bras)
  },
  {
    name: "Good Morning",
    url: "https://exrx.net/WeightExercises/Hamstrings/BWGoodMorning",
    gifUrl: IMG_BASE + "Good_Morning/1.jpg" // Confirmé
  },

  // Mollets
  {
    name: "Calf Raise",
    url: "https://exrx.net/WeightExercises/Gastrocnemius/BWSingleLegCalfRaise",
    gifUrl: IMG_BASE + "Calf_Raise_On_A_Dumbbell/1.jpg" // Confirmé
  },

  // --- PECTORAUX (Chest) ---
  {
    name: "Push Up",
    url: "https://exrx.net/WeightExercises/PectoralSternal/BWPushup",
    gifUrl: IMG_BASE + "Incline_Push-Up_Medium/1.jpg" // Proxy (Push Up simple absent, variante Incline utilisée)
  },
  {
    name: "Dumbbell Bench Press",
    url: "https://exrx.net/WeightExercises/PectoralSternal/DBBenchPress",
    gifUrl: IMG_BASE + "Dumbbell_Bench_Press/1.jpg" // Confirmé
  },
  {
    name: "Dumbbell Floor Press",
    url: "https://exrx.net/WeightExercises/PectoralSternal/DBFloorPress",
    gifUrl: IMG_BASE + "Dumbbell_Floor_Press/1.jpg" // Confirmé
  },
  {
    name: "Incline Dumbbell Press",
    url: "https://exrx.net/WeightExercises/PectoralClavicular/DBInclineBenchPress",
    gifUrl: IMG_BASE + "Incline_Dumbbell_Press/1.jpg" // Confirmé
  },
  {
    name: "Dumbbell Fly",
    url: "https://exrx.net/WeightExercises/PectoralSternal/DBFly",
    gifUrl: IMG_BASE + "Dumbbell_Flyes/1.jpg" // Confirmé
  },
  {
    name: "Dips",
    url: "https://exrx.net/WeightExercises/Triceps/BWBenchDip",
    gifUrl: IMG_BASE + "Bench_Dips/1.jpg" // Confirmé
  },

  // --- DOS (Back) ---
  {
    name: "Pull Up",
    url: "https://exrx.net/WeightExercises/LatissimusDorsi/BWPullup",
    gifUrl: IMG_BASE + "Chin-Up/1.jpg" // Confirmé (Chin-Up présent dans la liste)
  },
  {
    name: "Dumbbell Row",
    url: "https://exrx.net/WeightExercises/BackGeneral/DBBentOverRow",
    gifUrl: IMG_BASE + "One-Arm_Dumbbell_Row/1.jpg" // Confirmé
  },
  {
    name: "Inverted Row",
    url: "https://exrx.net/WeightExercises/BackGeneral/BWSupineRow",
    gifUrl: IMG_BASE + "Inverted_Row/1.jpg" // Confirmé
  },
  {
    name: "Superman",
    url: "https://exrx.net/WeightExercises/ErectorSpinae/Superman",
    gifUrl: IMG_BASE + "Hyperextensions_Back_Extensions/1.jpg" // Proxy le plus proche
  },
  {
    name: "Renegade Row",
    url: "https://exrx.net/WeightExercises/BackGeneral/DBRenegadeRow",
    gifUrl: IMG_BASE + "Alternating_Renegade_Row/1.jpg" // Confirmé
  },

  // --- ÉPAULES (Shoulders) ---
  {
    name: "Dumbbell Shoulder Press",
    url: "https://exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress",
    gifUrl: IMG_BASE + "Dumbbell_Shoulder_Press/1.jpg" // Confirmé
  },
  {
    name: "Arnold Press",
    url: "https://exrx.net/WeightExercises/DeltoidAnterior/DBArnoldPress",
    gifUrl: IMG_BASE + "Arnold_Dumbbell_Press/1.jpg" // Confirmé
  },
  {
    name: "Lateral Raise",
    url: "https://exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise",
    gifUrl: IMG_BASE + "Alternating_Deltoid_Raise/1.jpg" // Proxy (Lateral Raise simple absent, Alternating utilisé)
  },
  {
    name: "Front Raise",
    url: "https://exrx.net/WeightExercises/DeltoidAnterior/DBFrontRaise",
    gifUrl: IMG_BASE + "Front_Dumbbell_Raise/1.jpg" // Confirmé
  },
  {
    name: "Pike Push Up",
    url: "https://exrx.net/WeightExercises/DeltoidAnterior/BWPikePress",
    gifUrl: IMG_BASE + "Hanging_Pike/1.jpg" // Proxy (Pike push up absent)
  },

  // --- BRAS (Arms) ---
  {
    name: "Dumbbell Curl",
    url: "https://exrx.net/WeightExercises/Biceps/DBCurl",
    gifUrl: IMG_BASE + "Dumbbell_Bicep_Curl/1.jpg" // Confirmé
  },
  {
    name: "Hammer Curl",
    url: "https://exrx.net/WeightExercises/Brachioradialis/DBHammerCurl",
    gifUrl: IMG_BASE + "Hammer_Curls/1.jpg" // Confirmé
  },
  {
    name: "Concentration Curl",
    url: "https://exrx.net/WeightExercises/Brachialis/DBConcentrationCurl",
    gifUrl: IMG_BASE + "Concentration_Curls/1.jpg" // Confirmé
  },
  {
    name: "Triceps Extension",
    url: "https://exrx.net/WeightExercises/Triceps/DBOneArmTriExt",
    gifUrl: IMG_BASE + "Dumbbell_One-Arm_Triceps_Extension/1.jpg" // Confirmé
  },
  {
    name: "Skull Crusher",
    url: "https://exrx.net/WeightExercises/Triceps/DBLyingTriExt",
    gifUrl: IMG_BASE + "Lying_Dumbbell_Tricep_Extension/1.jpg" // Confirmé
  },
  {
    name: "Bench Dip",
    url: "https://exrx.net/WeightExercises/Triceps/BWBenchDip",
    gifUrl: IMG_BASE + "Bench_Dips/1.jpg" // Confirmé
  },

  // --- ABDOS & CORE ---
  {
    name: "Plank",
    url: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
    gifUrl: IMG_BASE + "Inchworm/0.jpg" // Proxy (Planche statique absente, Inchworm démarre en planche)
  },
  {
    name: "Crunch",
    url: "https://exrx.net/WeightExercises/RectusAbdominis/BWCrunch",
    gifUrl: IMG_BASE + "Crunches/1.jpg" // Confirmé
  },
  {
    name: "Leg Raise",
    url: "https://exrx.net/WeightExercises/HipFlexors/BWStraightLegRaise",
    gifUrl: IMG_BASE + "Leg_Lift/1.jpg" // Confirmé (Nommé Leg_Lift dans la liste)
  },
  {
    name: "Russian Twist",
    url: "https://exrx.net/WeightExercises/Obliques/BWRussianTwist",
    gifUrl: IMG_BASE + "Cable_Russian_Twists/1.jpg" // Proxy (Variante Cable utilisée pour visuel)
  },
  {
    name: "Dead Bug",
    url: "https://exrx.net/WeightExercises/RectusAbdominis/BWDeadBug",
    gifUrl: IMG_BASE + "Dead_Bug/1.jpg" // Confirmé
  },
  {
    name: "Mountain Climber",
    url: "https://exrx.net/WeightExercises/HipFlexors/BWMountainClimber",
    gifUrl: IMG_BASE + "Mountain_Climbers/1.jpg" // Confirmé
  },

  // --- CARDIO ---
  {
    name: "Burpee",
    url: "https://exrx.net/Aerobic/Exercises/Burpee",
    gifUrl: IMG_BASE + "Frog_Hops/1.jpg" // Proxy visuel le plus proche
  },
  {
    name: "Box Jump",
    url: "https://exrx.net/Plyometrics/BoxJump",
    gifUrl: IMG_BASE + "Front_Box_Jump/1.jpg" // Confirmé
  },
  {
    name: "Farmers Walk",
    url: "https://exrx.net/WeightExercises/TrapeziusUpper/DBFarmersWalk",
    gifUrl: IMG_BASE + "Farmers_Walk/1.jpg" // Confirmé
  }
];