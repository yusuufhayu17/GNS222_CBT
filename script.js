const questions = [
  {
    question: "Conflict is best described as a situation where two or more parties:",
    options: [
      "Share common goals equally",
      "Perceive incompatible goals",
      "Agree on all issues"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a cause of conflict?",
    options: [
      "Identity",
      "Economic conditions",
      "Tolerance"
    ],
    answer: 2
  },
  {
    question: "The process of a neutral third party helping disputants reach a resolution is called:",
    options: [
      "Arbitration",
      "Mediation",
      "Confrontation"
    ],
    answer: 1
  },
  {
    question: "Which of the following are components of conflict resolution?",
    options: [
      "Peacebuilding, peacekeeping, peacemaking",
      "Peace enforcement only",
      "Violence management"
    ],
    answer: 0
  },
  {
    question: "Negative peace is characterized by:",
    options: [
      "The presence of justice and equality",
      "The absence of direct violence",
      "Fair distribution of resources"
    ],
    answer: 1
  },
  {
    question: "The violent stage of conflict, marked by death and destruction, is called:",
    options: [
      "Pre-conflict stage",
      "Escalation stage",
      "Outcome stage"
    ],
    answer: 1
  },
  {
    question: "Direct violence includes all EXCEPT:",
    options: [
      "Physical injury",
      "Lynching",
      "Repression"
    ],
    answer: 2
  },
  {
    question: "Which of these is an example of a major security threat in South-South Nigeria?",
    options: [
      "Militancy",
      "Car theft",
      "Traffic congestion"
    ],
    answer: 0
  },
  {
    question: "One of the major causes of communal clashes in Nigeria is:",
    options: [
      "Religious harmony",
      "Population growth",
      "Spirituality"
    ],
    answer: 1
  },
  {
    question: "Which of the following best describes Alternative Dispute Resolution (ADR)?",
    options: [
      "Slow and expensive",
      "Cheaper and faster",
      "Only involves court procedures"
    ],
    answer: 1
  },
  {
    question: "The abbreviation ICJ stands for:",
    options: [
      "International Criminal Justice",
      "International Court of Justice",
      "International Conflict Jurisdiction"
    ],
    answer: 1
  },
  {
    question: "According to the structural theory of conflict, conflict is built into:",
    options: [
      "The human nature of aggression",
      "The particular ways societies are organized and structured",
      "Random social events"
    ],
    answer: 1
  },
  {
    question: "The CMM theory of conflict emphasizes that:",
    options: [
      "Economic status determines conflict",
      "Beliefs and values affect people's actions",
      "Violence is unavoidable"
    ],
    answer: 1
  },
  {
    question: "Peace education initiatives serve as:",
    options: [
      "Early warning signs",
      "Early response measures",
      "Peace enforcement actions"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a peaceful dispute settlement method?",
    options: [
      "Mediation",
      "Conciliation",
      "Bribery"
    ],
    answer: 2
  },
  {
    question: "The Avengers in Nigeria are associated with:",
    options: [
      "Electoral violence",
      "Militancy in the Niger Delta",
      "Student union activities"
    ],
    answer: 1
  },
  {
    question: "Peace as justice and development can also be referred to as:",
    options: [
      "Harmonies",
      "Armament",
      "Repression"
    ],
    answer: 0
  },
  {
    question: "A major area of conflict in Nigeria is:",
    options: [
      "Resource control",
      "Political apathy",
      "Educational policy"
    ],
    answer: 0
  },
  {
    question: "The role of student unions in conflict resolution does NOT include:",
    options: [
      "Providing humanitarian assistance",
      "Defending human rights",
      "Arming conflicting parties"
    ],
    answer: 2
  },
  {
    question: "Which of the following is an indicator of impending conflict?",
    options: [
      "Growing poverty",
      "Increased spirituality",
      "Political stability"
    ],
    answer: 0
  },
  {
    question: "Collaborative bargaining is also known as:",
    options: [
      "Competition",
      "Win-win negotiation",
      "Avoidance"
    ],
    answer: 1
  },
  {
    question: "The Security Council of the United Nations:",
    options: [
      "Makes laws for member countries",
      "Investigates security threats and may order military action",
      "Only organizes humanitarian aid"
    ],
    answer: 1
  },
  {
    question: "The term ‘conflict’ derives from the Latin word:",
    options: [
      "Conflictus",
      "Confligere",
      "Conflation"
    ],
    answer: 1
  },
  {
    question: "Peacebuilders are characterized by:",
    options: [
      "Partiality",
      "Being non-defensive and creative",
      "Pride and bias"
    ],
    answer: 1
  },
  {
    question: "The process of addressing causes of conflict is called:",
    options: [
      "Conflict management",
      "Conflict resolution",
      "Conflict avoidance"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a stage of conflict?",
    options: [
      "Pre-conflict",
      "Violence",
      "Collaboration"
    ],
    answer: 2
  },
  {
    question: "The orthodox liberal theorists advocate for:",
    options: [
      "Maintaining structural defects",
      "Eliminating structural defects peacefully",
      "Violent revolution"
    ],
    answer: 1
  },
  {
    question: "IDPs stands for:",
    options: [
      "International Displaced Persons",
      "Internally Displaced Persons",
      "International Development Program"
    ],
    answer: 1
  },
  {
    question: "Which of the following best describes ‘early warning signs’ of conflict?",
    options: [
      "Social developments indicating potential conflict",
      "Military interventions",
      "Economic sanctions"
    ],
    answer: 0
  },
  {
    question: "In negotiation, the main goal is to:",
    options: [
      "Reach an agreement through discussion and dialogue",
      "Engage in confrontation",
      "Enforce unilateral decisions"
    ],
    answer: 0
  },
  {
    question: "Which is NOT a strategy used in negotiation?",
    options: [
      "Compromising",
      "Collaboration",
      "Understanding"
    ],
    answer: 2
  },
  {
    question: "The main cause of conflict according to the Marxian theory is:",
    options: [
      "Unequal distribution of resources",
      "Human nature",
      "Religious differences"
    ],
    answer: 0
  },
  {
    question: "The prevention of war is:",
    options: [
      "An effort toward achieving positive peace",
      "Not necessarily linked to positive peace",
      "The only factor in peacebuilding"
    ],
    answer: 1
  },
  {
    question: "Peace is the vehicle to:",
    options: [
      "Sustainable growth and development",
      "Constant conflict",
      "Social stagnation"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a form of conflict?",
    options: [
      "Genocide",
      "Mass murder",
      "Harmonious coexistence"
    ],
    answer: 2
  },
  {
    question: "The term conflict regulation is also known as:",
    options: [
      "Conflict management",
      "Conflict escalation",
      "Conflict avoidance"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT part of the five stages of conflict?",
    options: [
      "Confrontation",
      "Crisis",
      "Pacifism"
    ],
    answer: 2
  },
  {
    question: "The main cause of electoral violence in Nigeria is:",
    options: [
      "Desperate politicians",
      "Fair election management",
      "Peace education"
    ],
    answer: 0
  },
  {
    question: "The Frustration-Aggression theory is similar to:",
    options: [
      "Human Need theory",
      "Structural theory",
      "Realist theory"
    ],
    answer: 0
  },
  {
    question: "Which of the following best describes peacebuilding?",
    options: [
      "Only post-conflict efforts",
      "Efforts related to pre-conflict and post-conflict stages",
      "Military enforcement only"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a key condition for peacebuilding?",
    options: [
      "Tolerance",
      "Hostility",
      "Partiality"
    ],
    answer: 0
  },
  {
    question: "What is the full meaning of ADR?",
    options: [
      "Alternative Dispute Resolution",
      "Advanced Dispute Reaction",
      "Authorized Dispute Regulation"
    ],
    answer: 0
  },
  {
    question: "The process of resolving disputes by peaceful means includes:",
    options: [
      "Bribery",
      "Mediation",
      "Corruption"
    ],
    answer: 1
  },
  {
    question: "The Nigerian civil war was mainly caused by:",
    options: [
      "Personal differences between leaders",
      "Economic growth",
      "Political stability"
    ],
    answer: 0
  },
  {
    question: "The term \"early warning response\" refers to:",
    options: [
      "Ignoring signs of conflict",
      "Actions taken to address emerging conflict",
      "Military enforcement"
    ],
    answer: 1
  },
  {
    question: "Which of the following are stages of conflict?",
    options: [
      "Pre-conflict, confrontation, crisis, violence, outcome",
      "Negotiation, mediation, arbitration, enforcement, peacekeeping",
      "Peace education, peace enforcement, peacebuilding"
    ],
    answer: 0
  },
  {
    question: "Which is NOT a characteristic of peacebuilders?",
    options: [
      "Empathy",
      "Creativity",
      "Partiality"
    ],
    answer: 2
  },
  {
    question: "The term \"conflict management\" means:",
    options: [
      "Controlling conflict after it occurs",
      "Eliminating the causes of conflict",
      "Ignoring conflict"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an example of conflict over values?",
    options: [
      "Resource disputes",
      "Religious disagreements",
      "Land ownership conflicts"
    ],
    answer: 1
  },
  {
    question: "Theories of conflict explain:",
    options: [
      "The causes and nature of conflicts",
      "Only how to solve conflicts",
      "Military strategies"
    ],
    answer: 0
  },
  {
    question: "The orthodox liberal theorists focus on:",
    options: [
      "Social and economic inequalities",
      "Structural defects and how to eliminate them peacefully",
      "Violent revolution"
    ],
    answer: 1
  },
  {
    question: "Which is NOT an element of peace?",
    options: [
      "Justice",
      "Development",
      "Violence"
    ],
    answer: 2
  },
  {
    question: "What does ICC stand for?",
    options: [
      "International Conflict Council",
      "International Criminal Court",
      "International Court of Commerce"
    ],
    answer: 1
  },
  {
    question: "Which of these is NOT a negotiation strategy?",
    options: [
      "Competition",
      "Compromising",
      "Confrontation"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a cause of conflict in Nigeria?",
    options: [
      "Poor development policies",
      "Effective leadership",
      "Religious tolerance"
    ],
    answer: 0
  },
  {
    question: "The concept of conflict is derived from the Latin word:",
    options: [
      "Conflictus",
      "Confligere",
      "Conflation"
    ],
    answer: 1
  },
  {
    question: "Which is NOT a direct violence action?",
    options: [
      "Physical injury",
      "Deformity",
      "Repression"
    ],
    answer: 2
  },
  {
    question: "What is the role of ECOWAS in West African conflicts?",
    options: [
      "Negotiation and military intervention",
      "Ignoring conflicts",
      "Providing only humanitarian aid"
    ],
    answer: 0
  },
  {
    question: "What is one benefit of ADR?",
    options: [
      "It is more expensive than court trials",
      "It encourages participation of parties involved",
      "It always requires lawyers"
    ],
    answer: 1
  },
  {
    question: "Which of the following does NOT cause electoral violence in Nigeria?",
    options: [
      "Desperate politicians",
      "Poor election management",
      "Peace education"
    ],
    answer: 2
  },
  {
    question: "What does MDC stand for in conflict resolution context?",
    options: [
      "Mediation, Dialogue, and Conciliation",
      "Military Dispute Council",
      "Management of Dispute Cases"
    ],
    answer: 0
  },
  {
    question: "Which of the following best describes positive peace?",
    options: [
      "Absence of direct violence only",
      "Social justice, fair resource distribution, and law enforcement",
      "Lack of communication"
    ],
    answer: 1
  },
  {
    question: "The violent stage in conflict is also known as:",
    options: [
      "Crisis stage",
      "Pre-conflict stage",
      "Post-conflict stage"
    ],
    answer: 0
  },
  {
    question: "The CMM theory stands for:",
    options: [
      "Coordinated Management of Meaning",
      "Conflict Management Model",
      "Collaborative Mediation Method"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a function of peace education?",
    options: [
      "Early response measure",
      "Promoting violence",
      "Raising awareness"
    ],
    answer: 1
  },
  {
    question: "Conflict is inevitable because:",
    options: [
      "People always agree",
      "Differences and incompatible goals exist in societies",
      "Society has no diversity"
    ],
    answer: 1
  },
  {
    question: "Which is NOT an effect of unresolved conflict?",
    options: [
      "Social instability",
      "Economic development",
      "Increased distrust"
    ],
    answer: 1
  },
  {
    question: "Which is a major source of conflict in Nigeria?",
    options: [
      "Substandard performance of leaders",
      "Religious unity",
      "Effective resource management"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a peaceful dispute settlement method?",
    options: [
      "Arbitration",
      "Mediation",
      "Violence"
    ],
    answer: 2
  },
  {
    question: "The term “security response” refers to:",
    options: [
      "The use of illegal firearms by security agencies",
      "Peace negotiations",
      "Community dialogue"
    ],
    answer: 0
  },
  {
    question: "Theories of conflict provide:",
    options: [
      "Ways to cause conflict",
      "Frameworks to understand conflict causes and effects",
      "Legal laws"
    ],
    answer: 1
  },
  {
    question: "Which of the following best describes the realist theory of conflict?",
    options: [
      "Conflict arises from human desire for power",
      "Conflict is caused by resource scarcity only",
      "Conflict is caused by environmental factors"
    ],
    answer: 0
  },
  {
    question: "Which of these is a stage of conflict?",
    options: [
      "Violence",
      "Peace enforcement",
      "Arbitration"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a cause of conflict in society?",
    options: [
      "Economic inequality",
      "Cultural differences",
      "Religious tolerance"
    ],
    answer: 2
  },
  {
    question: "What is the key feature of mediation?",
    options: [
      "Neutral third party facilitates discussion",
      "One party imposes decision",
      "Parties avoid communication"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a characteristic of a peacebuilder?",
    options: [
      "Partiality",
      "Empathy",
      "Creativity"
    ],
    answer: 0
  },
  {
    question: "The term “mass murder of unarmed civilians” is an example of:",
    options: [
      "Genocide",
      "Peacebuilding",
      "Negotiation"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a stage in the conflict escalation process?",
    options: [
      "Pre-conflict",
      "Negotiation",
      "Crisis"
    ],
    answer: 1
  },
  {
    question: "Which of these best explains “conflict regulation”?",
    options: [
      "Managing conflict to prevent escalation",
      "Causing conflict",
      "Ignoring conflict"
    ],
    answer: 0
  },
  {
    question: "Which of the following statements is true about peacekeeping?",
    options: [
      "It involves the use of military forces to maintain peace",
      "It always leads to violent outcomes",
      "It is unrelated to conflict resolution"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a characteristic of positive peace?",
    options: [
      "Social justice",
      "Absence of structural violence",
      "Presence of direct violence"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT part of the Nigerian security challenges?",
    options: [
      "Bunkering",
      "Kidnapping",
      "Car theft"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a cause of conflict according to the document?",
    options: [
      "Poor leadership",
      "Competition over resources",
      "Spirituality"
    ],
    answer: 2
  },
  {
    question: "The process of peacebuilding is linked to:",
    options: [
      "Only post-conflict phase",
      "Both pre-conflict and post-conflict phases",
      "Only conflict management"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT an advantage of ADR?",
    options: [
      "Cheaper",
      "Faster",
      "More adversarial"
    ],
    answer: 2
  },
  {
    question: "Which theory says conflict is due to structural inequalities in society?",
    options: [
      "Marxian theory",
      "Realist theory",
      "Human Need theory"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a peaceful method of dispute settlement?",
    options: [
      "Arbitration",
      "Mediation",
      "Bribery"
    ],
    answer: 2
  },
  {
    question: "What does the acronym ADR stand for?",
    options: [
      "Alternative Dispute Resolution",
      "Advanced Dispute Regulation",
      "Authorized Defense Resource"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a cause of insurgency in Nigeria?",
    options: [
      "Social injustice",
      "Poor resource management",
      "Strong political will"
    ],
    answer: 2
  },
  {
    question: "What role does ECOWAS play in conflict resolution?",
    options: [
      "Negotiation and military intervention",
      "Ignoring conflicts",
      "Imposing unilateral decisions"
    ],
    answer: 0
  },
  {
    question: "The concept of “early warning signs” relates to:",
    options: [
      "Indicators of potential conflict",
      "Military enforcement",
      "Economic prosperity"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a peaceful dispute resolution mechanism?",
    options: [
      "Conciliation",
      "Corruption",
      "Mediation"
    ],
    answer: 1
  },
  {
    question: "Which of the following best defines “conflict resolution”?",
    options: [
      "Eliminating causes of conflict",
      "Ignoring conflict",
      "Enforcing military power"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT an element of peace?",
    options: [
      "Justice",
      "Violence",
      "Development"
    ],
    answer: 1
  },
  {
    question: "What is the meaning of “IDPs”?",
    options: [
      "Internally Displaced Persons",
      "International Displaced Persons",
      "International Development Program"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a type of peace?",
    options: [
      "Unstable peace",
      "Durable peace",
      "Permanent war"
    ],
    answer: 2
  },
  {
    question: "Which of these is a cause of electoral violence?",
    options: [
      "Poor election management",
      "Peace education",
      "Social justice"
    ],
    answer: 0
  },
  {
    question: "Which of the following best describes “conflict management”?",
    options: [
      "Controlling conflict after it arises",
      "Eliminating conflict causes",
      "Provoking conflict"
    ],
    answer: 0
  },
  {
    question: "Which of the following best explains “negative peace”?",
    options: [
      "Absence of direct violence",
      "Presence of justice",
      "Fair resource distribution"
    ],
    answer: 0
  },
  {
    question: "Which of the following best describes “positive peace”?",
    options: [
      "Absence of violence and presence of justice",
      "Absence of violence only",
      "Absence of dialogue"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a component of conflict resolution?",
    options: [
      "Peace enforcement",
      "Peacekeeping",
      "Peace destruction"
    ],
    answer: 2
  },
  {
    question: "Which of these is NOT a negotiation strategy?",
    options: [
      "Collaboration",
      "Competition",
      "Avoidance"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT associated with conflict resolution?",
    options: [
      "Negotiation",
      "Mediation",
      "Aberration"
    ],
    answer: 2
  },
  {
    question: "Which of the following describes “conflict over values”?",
    options: [
      "Difficult to resolve conflicts related to beliefs and principles",
      "Easily resolved economic conflicts",
      "Conflicts over land ownership"
    ],
    answer: 0
  },
  {
    question: "What is the meaning of “MDC” in conflict studies?",
    options: [
      "Mediation, Dialogue, Conciliation",
      "Military Defense Council",
      "Management Development Committee"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a stage in the conflict process?",
    options: [
      "Outcome",
      "Pre-conflict",
      "Repression"
    ],
    answer: 2
  },
  {
    question: "The term “pacifism” refers to:",
    options: [
      "Promotion of peace and avoidance of violence",
      "Use of force in conflict resolution",
      "Conflict escalation"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a method used by student unions in conflict resolution?",
    options: [
      "Providing humanitarian assistance",
      "Defending human rights",
      "Arming conflicting parties"
    ],
    answer: 2
  },
  {
    question: "What is the full form of ECOWAS?",
    options: [
      "Economic Community of West African States",
      "Economic Council of Western African States",
      "Economic Committee of West African Societies"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a cause of conflict in Nigerian context?",
    options: [
      "Competition over resources",
      "Poor development policies",
      "Effective leadership"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a direct violence indicator?",
    options: [
      "Physical injury",
      "Repression",
      "Lynching"
    ],
    answer: 1
  },
  {
    question: "What role does the Security Council of the United Nations play?",
    options: [
      "Investigates security threats and may order military action",
      "Makes laws for member countries",
      "Organizes elections"
    ],
    answer: 0
  },
  {
    question: "Which of the following best describes “conflict over resources”?",
    options: [
      "Disputes due to competition for scarce resources",
      "Religious conflict",
      "Political alliances"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT an example of Alternative Dispute Resolution?",
    options: [
      "Arbitration",
      "Mediation",
      "Bribery"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a major security threat in present-day Nigeria?",
    options: [
      "Bunkering",
      "Car theft",
      "Traffic violations"
    ],
    answer: 0
  },
  {
    question: "The process of conflict management includes:",
    options: [
      "Controlling conflict to prevent escalation",
      "Ignoring conflict",
      "Encouraging violence"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a function of peace education?",
    options: [
      "Prevention of conflict",
      "Promotion of hatred",
      "Raising awareness"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a cause of insurgency?",
    options: [
      "Social injustice",
      "Poor governance",
      "Effective political management"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a characteristic of peacebuilders?",
    options: [
      "Impartiality",
      "Partiality",
      "Creativity"
    ],
    answer: 1
  },
  {
    question: "The enforcement of law and fair distribution of resources are efforts aimed at achieving:",
    options: [
      "Positive peace",
      "Negative peace",
      "Violent peace"
    ],
    answer: 0
  }
];

 
    // UI Elements
    const questionNav = document.getElementById('question-nav');
    const startScreen = document.getElementById('start-screen');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const app = document.getElementById('app');
    const timerEl = document.getElementById('timer');
    const questionNumberEl = document.getElementById('question-number');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const scoreEl = document.getElementById('score');
    const resultsList = document.getElementById('results-list');
    const retryBtn = document.getElementById('retry-btn');
    const customConfirm = document.getElementById('customConfirm');
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Quiz variables
    const TOTAL_QUESTIONS = 45;
    const TIME_LIMIT = 45 * 60; // in seconds
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let timer;
    let timeRemaining = TIME_LIMIT;

    // Initialize quiz
    startQuizBtn.addEventListener('click', () => {
      startScreen.style.display = 'none';
      app.style.display = 'flex';
      initQuiz();
    });

    function initQuiz() {
      // Shuffle and pick questions
      const shuffled = shuffleArray([...questions]);
      selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

      currentQuestionIndex = 0;
      userAnswers = new Array(selectedQuestions.length).fill(null);

      timeRemaining = TIME_LIMIT;
      updateTimerDisplay();

      showQuestion();

      prevBtn.disabled = true;
      nextBtn.disabled = false;
      submitBtn.disabled = true;

      quizContainer.style.display = 'flex';
      resultContainer.style.display = 'none';

      startTimer();
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
          clearInterval(timer);
          finishQuiz();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      let min = Math.floor(timeRemaining / 60);
      let sec = timeRemaining % 60;
      timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
    }

    function renderQuestionNav() {
      questionNav.innerHTML = '';
      selectedQuestions.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        if (userAnswers[i] !== null) btn.classList.add('answered');
        if (i === currentQuestionIndex) btn.classList.add('current');
        btn.addEventListener('click', () => {
          currentQuestionIndex = i;
          showQuestion();
          renderQuestionNav();
        });
        questionNav.appendChild(btn);
      });
    }

    function showQuestion() {
      const q = selectedQuestions[currentQuestionIndex];
      questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
      questionTextEl.textContent = q.question;

      optionsContainer.innerHTML = '';

      q.options.forEach((optionText, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = String.fromCharCode(65 + i) + ". " + optionText;
        
        // Add keyboard shortcut badge
        const keyBadge = document.createElement('div');
        keyBadge.className = 'key-badge';
        keyBadge.textContent = String.fromCharCode(65 + i);
        optionDiv.appendChild(keyBadge);

        if(userAnswers[currentQuestionIndex] === i) {
          optionDiv.classList.add('selected');
        }

        optionDiv.addEventListener('click', () => {
          selectOption(i);
        });

        optionsContainer.appendChild(optionDiv);
      });

      prevBtn.disabled = currentQuestionIndex === 0;
      nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
      submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

      renderQuestionNav();
    }

    function selectOption(optionIndex) {
      userAnswers[currentQuestionIndex] = optionIndex;
      
      Array.from(optionsContainer.children).forEach((optEl, idx) => {
        optEl.classList.toggle('selected', idx === optionIndex);
      });

      submitBtn.disabled = false;
      renderQuestionNav();
    }

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
      if(currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
      }
    });

    nextBtn.addEventListener('click', () => {
      if(currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
      }
    });

    // Submit button shows custom confirmation dialog
    submitBtn.addEventListener('click', () => {
      customConfirm.style.display = 'flex';
    });

    // Confirm dialog buttons
    confirmYes.addEventListener('click', () => {
      customConfirm.style.display = 'none';
      finishQuiz();
    });

    confirmNo.addEventListener('click', () => {
      customConfirm.style.display = 'none';
    });

    function finishQuiz() {
      clearInterval(timer);
      quizContainer.style.display = 'none';
      resultContainer.style.display = 'flex';

      let correctCount = 0;
      resultsList.innerHTML = '';

      selectedQuestions.forEach((q, idx) => {
        const userAnsIndex = userAnswers[idx];
        const isCorrect = userAnsIndex === q.answer;
        if (isCorrect) correctCount++;

        const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
        const correctAnswerText = q.options[q.answer];

        const div = document.createElement('div');
        div.className = 'result-question';
        div.innerHTML = `
          <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
          <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span></div>
          ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`}
        `;
        resultsList.appendChild(div);
      });

      scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
      
      // Add performance comment
      let comment = "";
      const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
      
      if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
      else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
      else comment = "Keep studying! Focus on the topics you missed.";
      
      scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
    }

    retryBtn.addEventListener('click', () => {
      initQuiz();
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      // Ignore if focus is on input elements
      if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
        return;
      }
      
      const key = e.key.toUpperCase();
      
      // Option selection
      if (key >= 'A' && key <= 'E') {
        const optionIndex = key.charCodeAt(0) - 65;
        const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
        
        if (optionIndex < currentOptions.length) {
          selectOption(optionIndex);
        }
      }
      
      // Navigation
      switch(key) {
        case 'P':
          if (!prevBtn.disabled) prevBtn.click();
          break;
        case 'N':
          if (!nextBtn.disabled) nextBtn.click();
          break;
      }
    });

    // Initialize everything hidden
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  
  
