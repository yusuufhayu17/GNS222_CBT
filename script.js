

const questions = [
  {
    question: "According to the course material, peace is best defined as:",
    options: [
      "The absence of war",
      "The absence of fear and anxiety",
      "The existence of justice and equality",
      "A state of tranquility and silence"
    ],
    answer: 2
  },
  {
    question: "A latent conflict is one that is:",
    options: [
      "Open and violent",
      "Hidden and not yet manifested",
      "In its final stage of resolution",
      "Managed by a third party"
    ],
    answer: 1
  },
  {
    question: "The World Health Organization (WHO) defines violence as:",
    options: [
      "Only physical assault",
      "The premeditated use of physical force or power, threatened or actual",
      "A natural human instinct",
      "Synonymous with conflict"
    ],
    answer: 1
  },
  {
    question: "A cease-fire agreement primarily aims to:",
    options: [
      "Solve the root causes of a conflict",
      "Serve as a final peace treaty",
      "Halt aggressive military actions to reduce tension",
      "Apportion blame to the aggressor"
    ],
    answer: 2
  },
  {
    question: "Peacekeeping differs from peace enforcement because peacekeeping requires:",
    options: [
      "The use of maximum military force",
      "The consent of the nation state on whose territory it is deployed",
      "The imposition of a political solution",
      "The involvement of only civilian forces"
    ],
    answer: 1
  },
  {
    question: "A conflict that occurs within an individual is known as:",
    options: [
      "Inter-personal conflict",
      "Intra-group conflict",
      "Intra-personal conflict",
      "National conflict"
    ],
    answer: 2
  },
  {
    question: "A dispute between two families over land is an example of:",
    options: [
      "Intra-personal conflict",
      "Inter-group conflict",
      "International conflict",
      "Intra-group conflict"
    ],
    answer: 1
  },
  {
    question: "A major root cause of conflict in Africa, as identified in the text, is:",
    options: [
      "Excessive foreign aid",
      "Homogeneous ethnic composition",
      "The creation of arbitrary borders by colonial powers",
      "An overabundance of natural resources"
    ],
    answer: 2
  },
  {
    question: "According to the material, incompetent leadership in Africa has contributed to conflict by:",
    options: [
      "Speeding up political integration",
      "Slowing down political integration and unity",
      "Promoting equitable resource distribution",
      "Eradicating corruption"
    ],
    answer: 1
  },
  {
    question: "The phrase \"a hungry man is an angry man\" is used in the context of which root cause of conflict?",
    options: [
      "Denial of Identity",
      "Corruption",
      "Poverty",
      "Communication Gap"
    ],
    answer: 2
  },
  {
    question: "In the \"indigene-settler\" phenomenon in Nigeria, the primary sources of contention are:",
    options: [
      "Climate and weather patterns",
      "Access to power, resources, and questions of identity",
      "International trade agreements",
      "Sporting competitions"
    ],
    answer: 1
  },
  {
    question: "The concept of peacebuilding aims to move society from:",
    options: [
      "Negative peace to positive peace",
      "War to a cease-fire",
      "Positive peace to negative peace",
      "Litigation to arbitration"
    ],
    answer: 0
  },
  {
    question: "Peace mediation is best described as a process that is:",
    options: [
      "Compulsory and binding",
      "Voluntary and assisted by a neutral third party",
      "Conducted only by the United Nations",
      "Focused solely on military solutions"
    ],
    answer: 1
  },
  {
    question: "The main goal of Alternative Dispute Resolution (ADR) is to:",
    options: [
      "Increase the workload of courts",
      "Settle disputes without litigation",
      "Ensure one party wins decisively",
      "Prolong the dispute process"
    ],
    answer: 1
  },
  {
    question: "Which of these is NOT a form of ADR?",
    options: [
      "Litigation",
      "Negotiation",
      "Mediation",
      "Conciliation"
    ],
    answer: 0
  },
  {
    question: "In negotiation, the process is characterized by:",
    options: [
      "Involvement of a judge",
      "Direct dialogue between the disputing parties without a third party",
      "A binding decision from an arbitrator",
      "The use of military force"
    ],
    answer: 1
  },
  {
    question: "A mediator's role is to:",
    options: [
      "Impose a solution on the parties",
      "Facilitate communication and promote understanding between parties",
      "Represent one party in court",
      "Act as a law enforcement agent"
    ],
    answer: 1
  },
  {
    question: "The resolution from an arbitrator is called:",
    options: [
      "A judgment",
      "A verdict",
      "An award",
      "A settlement"
    ],
    answer: 2
  },
  {
    question: "An advantage of ADR over litigation is:",
    options: [
      "It is more formal",
      "It is more expensive",
      "It helps preserve relationships between parties",
      "It always takes longer"
    ],
    answer: 2
  },
  {
    question: "The stage of conflict characterized by occasional fighting and mobilization of resources is the:",
    options: [
      "Pre-Conflict Stage",
      "Confrontation Stage",
      "Crisis Stage",
      "Post-Conflict Stage"
    ],
    answer: 1
  },
  {
    question: "The peak of violent conflict, involving killings and large-scale displacement, is the:",
    options: [
      "Pre-Conflict Stage",
      "Outcome Stage",
      "Crisis Stage",
      "Post-Conflict Stage"
    ],
    answer: 2
  },
  {
    question: "The stage where the underlying causes of conflict must be addressed to prevent recurrence is the:",
    options: [
      "Pre-Conflict Stage",
      "Confrontation Stage",
      "Outcome Stage",
      "Post-Conflict Stage"
    ],
    answer: 3
  },
  {
    question: "The Attributive Theory of conflict suggests that people tend to:",
    options: [
      "Blame themselves for conflicts",
      "Blame the characteristics and intentions of others for conflicts",
      "Always seek collaborative solutions",
      "Ignore the causes of conflict"
    ],
    answer: 1
  },
  {
    question: "The Coordinated Management Theory (CMM) emphasizes that the meaning of communication depends on:",
    options: [
      "The time of day",
      "The context and the relationship between the discussants",
      "The volume of the speaker's voice",
      "Government regulations"
    ],
    answer: 1
  },
  {
    question: "The Integrative Theory of conflict emphasizes:",
    options: [
      "Problem-solving and collaboration",
      "Verbal aggression",
      "Military victory",
      "Attributing blame"
    ],
    answer: 0
  },
  {
    question: "According to the Verbal Aggressiveness Theory (VAT), aggression can be ignited by:",
    options: [
      "High argumentative skills",
      "Frustration and a lack of verbal skills",
      "Excessive wealth",
      "International diplomacy"
    ],
    answer: 1
  },
  {
    question: "Conflict management is primarily the process of:",
    options: [
      "Ignoring all conflicts",
      "Reducing the negative aspects of conflict",
      "Ensuring one side wins",
      "Starting wars"
    ],
    answer: 1
  },
  {
    question: "A pro-active method of managing conflict is:",
    options: [
      "Waiting for violence to erupt",
      "Collaboration and joint projects",
      "Litigation after a dispute",
      "Peace enforcement"
    ],
    answer: 1
  },
  {
    question: "Grassroot community activities like festivals help in peacebuilding by:",
    options: [
      "Creating social bonding and preventing conflict",
      "Highlighting differences between groups",
      "Serving as a platform for political campaigns",
      "Replacing government functions"
    ],
    answer: 0
  },
  {
    question: "Good governance assists in conflict prevention by:",
    options: [
      "Delivering public goods and gaining citizens' support",
      "Encouraging corruption",
      "Promoting inequality",
      "Ignoring the rule of law"
    ],
    answer: 0
  },
  {
    question: "A re-active method of conflict management is:",
    options: [
      "Good governance",
      "Collaboration",
      "Mediation",
      "Communication"
    ],
    answer: 2
  },
  {
    question: "In conciliation, the third party:",
    options: [
      "Makes a binding decision",
      "Communicates separately with parties to persuade them towards peace",
      "Uses military force",
      "Represents one party in court"
    ],
    answer: 1
  },
  {
    question: "A major disadvantage of litigation (adjudication) is that it:",
    options: [
      "Is always faster than ADR",
      "Tends to destroy trust and respect between parties",
      "Is less formal",
      "Is cheaper"
    ],
    answer: 1
  },
  {
    question: "The Multi-Track approach to peace emphasizes that peacemaking should involve:",
    options: [
      "Only the government",
      "Only the military",
      "A variety of stakeholders including NGOs, business, and media",
      "Only international organizations"
    ],
    answer: 2
  },
  {
    question: "Conflict transformation aims to:",
    options: [
      "Change the parties, their relationship, and the conditions that created the conflict",
      "Suppress conflict through force",
      "Ignore the root causes of conflict",
      "Appoint a winner and a loser"
    ],
    answer: 0
  },
  {
    question: "For mediation to be effective, it is necessary that:",
    options: [
      "The mediator is from the same family as one party",
      "The conflicting parties desire a resolution",
      "The conflict has reached the crisis stage",
      "A court order mandates it"
    ],
    answer: 1
  },
  {
    question: "The four ingredients of reconciliation are:",
    options: [
      "War, victory, defeat, treaty",
      "Power, money, land, resources",
      "Peace, mercy, truth, justice",
      "Mediation, negotiation, arbitration, adjudication"
    ],
    answer: 2
  },
  {
    question: "The primary purpose of the Multi-Door Courthouse (MDC) system is to:",
    options: [
      "Increase the number of cases in court",
      "Provide a cheaper, faster alternative to litigation with an emphasis on reconciliation",
      "Replace all lawyers with mediators",
      "Handle only international conflicts"
    ],
    answer: 1
  },
  {
    question: "A common type of conflict in Nigeria stemming from contests for political power is:",
    options: [
      "Industrial Conflict",
      "Religious Conflict",
      "Political Conflict",
      "Resource Conflict"
    ],
    answer: 2
  },
  {
    question: "Conflict over land ownership or control of farmlands in Nigeria is an example of:",
    options: [
      "Ethnic Conflict",
      "Resource Conflict",
      "Educational Conflict",
      "Ideological Conflict"
    ],
    answer: 1
  },
  {
    question: "Early warning signs of conflict include all EXCEPT:",
    options: [
      "Evidence of prolonged distrust",
      "A history of animosity",
      "A sudden surge in economic prosperity",
      "Gradual escalation of violence"
    ],
    answer: 2
  },
  {
    question: "Early warning response involves actions taken by:",
    options: [
      "Only the military",
      "Peace guarantors, political leaders, and security agencies",
      "Only international organizations",
      "Only the parties in conflict"
    ],
    answer: 1
  },
  {
    question: "Peace education seeks to promote:",
    options: [
      "A culture of violence",
      "The culture of peace, tolerance, and forgiveness",
      "Ethnic supremacy",
      "Political apathy"
    ],
    answer: 1
  },
  {
    question: "Negative peace is best described as:",
    options: [
      "The presence of justice and development",
      "The absence of direct violence",
      "A state of inner tranquility",
      "The same as positive peace"
    ],
    answer: 1
  },
  {
    question: "Which of these is an indicator of an impending conflict?",
    options: [
      "High employment rates",
      "Social cohesion",
      "Growing poverty and inequality",
      "Spirituality"
    ],
    answer: 2
  },
  {
    question: "Stakeholders in a conflict are:",
    options: [
      "Uninvolved bystanders",
      "Parties directly involved in the conflict and its outcome",
      "Only international observers",
      "The media only"
    ],
    answer: 1
  },
  {
    question: "The culture of peace includes all of the following EXCEPT:",
    options: [
      "Values",
      "Attitudes",
      "Traditions",
      "Militarism"
    ],
    answer: 3
  },
  {
    question: "Which is important to the security of a nation?",
    options: [
      "Apathy",
      "Territorial integrity",
      "Weak government",
      "Absence of sovereignty"
    ],
    answer: 1
  },
  {
    question: "Confrontation is NOT typically associated with:",
    options: [
      "Negotiation",
      "Aggression",
      "Dialogue",
      "Physical fighting"
    ],
    answer: 0
  },
  {
    question: "The two types of power often used in conflict are:",
    options: [
      "Soft and hard power",
      "Positive and negative power",
      "Electrical and solar power",
      "Major and minor power"
    ],
    answer: 0
  },
  {
    question: "Conflict management can occur:",
    options: [
      "Only after conflict",
      "Only before conflict",
      "Before, during, and after conflict",
      "Only during violent conflict"
    ],
    answer: 2
  },
  {
    question: "A positive impact of conflict can be:",
    options: [
      "Suspicion",
      "Mutual respect",
      "Destruction",
      "Death"
    ],
    answer: 1
  },
  {
    question: "Conflict can create or modify ______ in society.",
    options: [
      "Peace",
      "Sanctions",
      "Norms",
      "Absolute harmony"
    ],
    answer: 2
  },
  {
    question: "Conflict prevention aims to stop conflict from transforming into:",
    options: [
      "A discussion",
      "Active violence or crisis",
      "A negotiation",
      "A treaty"
    ],
    answer: 1
  },
  {
    question: "Which of these is NOT a type of peace?",
    options: [
      "Stable peace",
      "Unstable peace",
      "Instable peace",
      "Durable peace"
    ],
    answer: 2
  },
  {
    question: "Militarism does NOT guarantee:",
    options: [
      "Social cohesion",
      "A strong army",
      "Peace and stability",
      "National defence"
    ],
    answer: 2
  },
  {
    question: "Intra-personal conflict usually involves:",
    options: [
      "Other people",
      "Groups",
      "One's own emotions and heart",
      "Nations"
    ],
    answer: 2
  },
  {
    question: "An example of an Early Warning Sign of conflict is:",
    options: [
      "A decrease in population",
      "An influx of Internally Displaced Persons (IDPs)",
      "Economic stability",
      "Free and fair elections"
    ],
    answer: 1
  },
  {
    question: "Conflict occurs when two or more parties pursue:",
    options: [
      "Mutual inclusive goals",
      "Incompatible goals",
      "Identical goals",
      "No goals"
    ],
    answer: 1
  },
  {
    question: "IDPs stands for:",
    options: [
      "Internally Displaced Persons",
      "Internally Disabled Persons",
      "International Diplomatic Personnel",
      "Intensive Disorder Problem"
    ],
    answer: 0
  },
  {
    question: "Which concept is NOT primarily associated with peace?",
    options: [
      "Interest",
      "Fairness",
      "Justice",
      "Virtue"
    ],
    answer: 0
  },
  {
    question: "Which group is NOT typically associated with conflict creation?",
    options: [
      "Ethnic groups",
      "Religious groups",
      "Minority groups",
      "Active citizenship groups promoting dialogue"
    ],
    answer: 3
  },
  {
    question: "The word \"conflict\" is derived from the Latin word:",
    options: [
      "Conflicts",
      "Confligere",
      "Confliction",
      "Conflagration"
    ],
    answer: 1
  },
  {
    question: "Which term is NOT related to conflict?",
    options: [
      "Contention",
      "Confrontation",
      "Contentment",
      "Conflagration"
    ],
    answer: 2
  },
  {
    question: "Peace can best be maintained through:",
    options: [
      "Social justice",
      "Constant warfare",
      "Suppression of dissent",
      "Isolationism"
    ],
    answer: 0
  },
  {
    question: "The process of mediation is largely:",
    options: [
      "Compulsory",
      "Voluntary",
      "Avoidable",
      "Unnecessary"
    ],
    answer: 1
  },
  {
    question: "Which is a concept associated with conflict management?",
    options: [
      "Litigation",
      "Persecution",
      "Containment",
      "Ignition"
    ],
    answer: 2
  },
  {
    question: "Which is NOT associated with direct violence?",
    options: [
      "Physical injury",
      "Deformity",
      "Depression (a psychological effect)",
      "Lynching"
    ],
    answer: 2
  },
  {
    question: "The most prevalent type of conflict in Africa is:",
    options: [
      "Ethno-religious conflicts",
      "Anti-Semitism",
      "Class struggle in a Marxist sense",
      "Cold War proxy wars"
    ],
    answer: 0
  },
  {
    question: "An example of a regional organization is:",
    options: [
      "The United Nations (UNO)",
      "The African Union (AU)",
      "The International Monetary Fund (IMF)",
      "The World Health Organization (WHO)"
    ],
    answer: 1
  },
  {
    question: "Which of these is an international, not primarily regional, organization?",
    options: [
      "European Union (EU)",
      "Association of Southeast Asian Nations (ASEAN)",
      "United Nations (UNO)",
      "African Union (AU)"
    ],
    answer: 2
  },
  {
    question: "A good peace facilitator should possess all these qualities EXCEPT:",
    options: [
      "Openness",
      "Impartiality",
      "Pride",
      "Fairness"
    ],
    answer: 2
  },
  {
    question: "Which is a genuine Nigerian military operation?",
    options: [
      "Operation Python Dance",
      "Operation Scorpion Sting",
      "Operation Free Chibok Girls",
      "Operation Crocodile Smile"
    ],
    answer: 0
  },
  {
    question: "Which is NOT a constructive procedure for resolving conflict?",
    options: [
      "Collaboration",
      "Combatting",
      "Compromise",
      "Accommodation"
    ],
    answer: 1
  },
  {
    question: "The violent stage of conflict characterized by death and destruction is the:",
    options: [
      "Escalation stage",
      "Crisis stage",
      "Post-conflict stage",
      "Latent stage"
    ],
    answer: 1
  },
  {
    question: "A rule for peace educators is to:",
    options: [
      "Encourage students to be conflict mongers",
      "Inform students about the value of peace and justice",
      "Promote hate speech",
      "Advocate for violence"
    ],
    answer: 1
  },
  {
    question: "The UN Security Council does NOT:",
    options: [
      "Maintain international peace and security",
      "Investigate security threats",
      "Order military action",
      "Make binding laws for the internal affairs of all member countries"
    ],
    answer: 3
  },
  {
    question: "In Nigeria, militancy is a major security threat in the:",
    options: [
      "South-South (Niger Delta) region",
      "South-West region",
      "South-East region",
      "North-West region"
    ],
    answer: 0
  },
  {
    question: "Which is a major security threat in present-day Nigeria?",
    options: [
      "Kidnapping",
      "Bunkering",
      "Cattle rustling",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Peace education helps an individual understand:",
    options: [
      "Various conflict resolution methods",
      "How to start a war",
      "Only their own culture",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "A strategy involved in negotiation is:",
    options: [
      "Collaborative Bargaining",
      "Ignoring the other party",
      "Imposing demands",
      "Physical intimidation"
    ],
    answer: 0
  },
  {
    question: "The most important objective of teaching GNS 222 is to:",
    options: [
      "Increase students' capacity in peace activities",
      "Meet credit requirements only",
      "Promote radicalism",
      "Stimulate desire for further research in peace studies"
    ],
    answer: 0
  },
  {
    question: "In multicultural Nigeria, a common cause of conflict is:",
    options: [
      "Value differences",
      "Uniformity of thought",
      "Absolute justice",
      "Lack of ideological differences"
    ],
    answer: 0
  },
  {
    question: "Frequent communal clashes in Nigeria are caused by:",
    options: [
      "Failure of leadership",
      "Poverty and hunger",
      "Population growth",
      "All of the options"
    ],
    answer: 3
  },
  {
    question: "The group associated with militancy in the Niger Delta is:",
    options: [
      "The Niger Delta Avengers",
      "IPOB",
      "Afenifere",
      "MOSSOB"
    ],
    answer: 0
  },
  {
    question: "Electoral violence in Nigeria is caused by:",
    options: [
      "Desperate politicians",
      "Poor election management",
      "Thuggery",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Hate speech is:",
    options: [
      "Inimical to peace and security",
      "A tool for creating mutual trust",
      "Needed for national growth",
      "A solution to crisis"
    ],
    answer: 0
  },
  {
    question: "A broad classification of conflict is:",
    options: [
      "Violent and non-violent",
      "Good and bad",
      "Big and small",
      "Simple and complex"
    ],
    answer: 0
  },
  {
    question: "A gun famously associated with conflicts worldwide is the:",
    options: [
      "AK-47",
      "Water pistol",
      "Musket",
      "Bow and arrow"
    ],
    answer: 0
  },
  {
    question: "A component of conflict analysis is:",
    options: [
      "Context",
      "Ignoring facts",
      "Prejudice",
      "Assumption"
    ],
    answer: 0
  },
  {
    question: "Which is a communication barrier that can lead to conflict?",
    options: [
      "Politeness",
      "Rudeness",
      "Active listening",
      "Clarity"
    ],
    answer: 1
  },
  {
    question: "The stage where violence has stopped is the:",
    options: [
      "Post-conflict stage",
      "Pre-conflict stage",
      "Confrontation stage",
      "Crisis stage"
    ],
    answer: 0
  },
  {
    question: "The Frustration-Aggression theory is similar to:",
    options: [
      "The Human Need Theory",
      "The Realist Theory",
      "The Structural Theory",
      "The Verbal Aggression Theory"
    ],
    answer: 0
  },
  {
    question: "According to the Traditional Structural Theory, society is made up of:",
    options: [
      "Bourgeoisie and Proletariat",
      "Good and bad people",
      "Farmers and industrialists",
      "Leaders and followers"
    ],
    answer: 0
  },
  {
    question: "The idea that \"conflict is due to a flaw in human nature\" aligns with:",
    options: [
      "The Realist Theory",
      "The Human Need Theory",
      "The Frustration-Aggression Theory",
      "The Structural Theory"
    ],
    answer: 0
  },
  {
    question: "A key to Conflict Resolution is:",
    options: [
      "Ignoring the root cause",
      "Addressing the causes of conflict",
      "Allying fear (incorrect phrasing, likely \"allying\" is a error for \"denying\" or \"ignoring\")",
      "Promoting suspicion"
    ],
    answer: 1
  },
  {
    question: "The central idea behind Conflict Management is to:",
    options: [
      "Regulate conflict",
      "Always resolve it completely",
      "Ignore it",
      "Let it escalate"
    ],
    answer: 0
  },
  {
    question: "A correct step in conflict analysis could be:",
    options: [
      "Case study → Fact finding → Analysis Meeting",
      "Analysis Meeting → Fact finding → Case study",
      "Ignoring context",
      "Jumping to conclusions"
    ],
    answer: 0
  },
  {
    question: "A true statement about Boko Haram is:",
    options: [
      "Their guerrilla tactics have made them elusive",
      "They are better armed than the Nigerian army",
      "They are no longer a threat",
      "They control the entire northeast"
    ],
    answer: 0
  },
  {
    question: "The relationship between development and violence is that:",
    options: [
      "They are mutually exclusive",
      "They are not directly related",
      "Violence often hinders development",
      "Development requires violence"
    ],
    answer: 2
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
