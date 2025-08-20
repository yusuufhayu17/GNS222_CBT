

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
  },
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
    question: "According to the lecture notes, conflict is inevitable because it arises from:",
    options: [
      "The inherent evil in humanity",
      "Everyday interactions and the pursuit of incompatible goals",
      "Government policies alone",
      "A lack of military power"
    ],
    answer: 1
  },
  {
    question: "The three general categories of conflict causes are:",
    options: [
      "Political, economic, social",
      "Communication, organisational structure, personal variables",
      "Local, national, international",
      "Violent, non-violent, latent"
    ],
    answer: 1
  },
  {
    question: "A semantic misunderstanding leading to conflict is an example of a failure in:",
    options: [
      "Organisational Structure",
      "Personality Types",
      "Communication",
      "Value System"
    ],
    answer: 2
  },
  {
    question: "The potential for conflict increases when parties are highly interdependent and must share:",
    options: [
      "The same birthday",
      "Scarce or improperly managed resources",
      "Identical opinions",
      "A common language"
    ],
    answer: 1
  },
  {
    question: "A key identifiable cause of conflict mentioned in the notes is:",
    options: [
      "Excessive cooperation",
      "Standardized performance",
      "Value differences",
      "Uniform goals"
    ],
    answer: 2
  },
  {
    question: "In the pre-conflict stage, the relationship between parties is best described as:",
    options: [
      "Openly hostile and violent",
      "Characterized by a \"cold war\" and undermined communication",
      "Perfectly harmonious",
      "Already resolved"
    ],
    answer: 1
  },
  {
    question: "Mobilisation of resources and the search for allies are characteristics of the:",
    options: [
      "Pre-Conflict Stage",
      "Confrontation Stage",
      "Crisis Stage",
      "Post-Conflict Stage"
    ],
    answer: 1
  },
  {
    question: "The stage that represents the peak of violence, with killings and mass displacement, is the:",
    options: [
      "Outcome Stage",
      "Crisis Stage",
      "Confrontation Stage",
      "Pre-Conflict Stage"
    ],
    answer: 1
  },
  {
    question: "The Outcome Stage is critical because:",
    options: [
      "Violence increases dramatically",
      "It allows room for discussion to commence as violence decreases",
      "The root causes are finally ignored",
      "One party is always annihilated"
    ],
    answer: 1
  },
  {
    question: "The primary task of the Post-Conflict Stage is to:",
    options: [
      "Re-enact the cycle of violence",
      "Address the underlying causes and incompatible goals that started the conflict",
      "Assign blame to the losing side",
      "Disband all social institutions"
    ],
    answer: 1
  },
  {
    question: "Miller and King defined peace as a potential condition that ensures justice through:",
    options: [
      "Military dominance",
      "Formal and informal resolution practices and norms",
      "Economic sanctions",
      "Religious doctrine"
    ],
    answer: 1
  },
  {
    question: "\"Peace as wholeness\" implies a state of being:",
    options: [
      "Broken and fragmented",
      "Complete and entire",
      "At war",
      "In a temporary truce"
    ],
    answer: 1
  },
  {
    question: "Theories in conflict studies are primarily used as:",
    options: [
      "Unquestionable laws",
      "Guidelines for explaining human behaviour and phenomena",
      "Tools for assigning blame",
      "Religious texts"
    ],
    answer: 1
  },
  {
    question: "The Attributive Theory explains that people analyse conflict by:",
    options: [
      "Examining their own faults first",
      "Blaming the characteristics and intentions of others",
      "Looking for collaborative solutions",
      "Ignoring the causes entirely"
    ],
    answer: 1
  },
  {
    question: "The Confrontation Episode Theory suggests conflict emanates from:",
    options: [
      "A desire for wealth",
      "The denial of good behaviour, rules, and responsibility",
      "Good communication",
      "Fair weather"
    ],
    answer: 1
  },
  {
    question: "The Coordinated Management Theory (CMM) states that the meaning of a conversation depends heavily on:",
    options: [
      "The time of day",
      "The colour of the speakers' clothes",
      "The context and nature of the relationship between the discussants",
      "Government policy"
    ],
    answer: 2
  },
  {
    question: "The Social Influence Theory posits that coercive acts:",
    options: [
      "Are always perceived as aggressive",
      "Are never justified",
      "May not be perceived as aggressive if the actor can find justification",
      "Are the only way to resolve conflict"
    ],
    answer: 2
  },
  {
    question: "The Integrative Theory calls for conflict resolution through:",
    options: [
      "Problem-solving and collaboration",
      "Verbal aggression",
      "Military victory",
      "Isolation of the parties"
    ],
    answer: 0
  },
  {
    question: "According to the Verbal Aggressiveness Theory (VAT), aggression can be triggered in people with:",
    options: [
      "High argumentative skills",
      "Low argumentative skills who feel frustrated",
      "Excessive wealth",
      "Too much peace education"
    ],
    answer: 1
  },
  {
    question: "Peacebuilding, as a process, uses:",
    options: [
      "Exclusively violent methods",
      "Peaceful, non-violent methods",
      "Only economic strategies",
      "Military enforcement first"
    ],
    answer: 1
  },
  {
    question: "Conflict management is essentially the process of:",
    options: [
      "Ensuring one side wins",
      "Reducing the negative aspects of conflict",
      "Ignoring the conflict",
      "Starting a larger conflict to overshadow the first one"
    ],
    answer: 1
  },
  {
    question: "The text states that conflict management is an admission that:",
    options: [
      "All conflicts can be easily resolved",
      "Conflict is inevitable and not all conflicts can always be resolved",
      "Violence is the only solution",
      "Third parties are unnecessary"
    ],
    answer: 1
  },
  {
    question: "A wide range of non-violent methods for managing conflict are available at the:",
    options: [
      "International level only",
      "Individual, family, group, community, and international levels",
      "National level only",
      "Community level only"
    ],
    answer: 1
  },
  {
    question: "Pro-active methods of conflict management are designed to:",
    options: [
      "Respond to ongoing violence",
      "Prevent the occurrence of conflict in the first place",
      "Punish aggressors",
      "Manage the aftermath of war"
    ],
    answer: 1
  },
  {
    question: "Collaboration as a pro-active method helps to build:",
    options: [
      "Distrust and suspicion",
      "Larger armies",
      "Trust, confidence, and mutual respect",
      "Higher walls"
    ],
    answer: 2
  },
  {
    question: "In the context of peacebuilding, communication assists by:",
    options: [
      "Spreading misinformation",
      "Removing doubt and suspicion and contributing to confidence building",
      "Increasing tension",
      "Ensuring one narrative dominates"
    ],
    answer: 1
  },
  {
    question: "Grassroot community activities promote peace by:",
    options: [
      "Highlighting differences",
      "Creating social bonding and preventing conflict",
      "Serving as a platform for political rallies",
      "Replacing the need for government"
    ],
    answer: 1
  },
  {
    question: "Good governance delivers \"public goods,\" which helps to:",
    options: [
      "Increase corruption",
      "Reduce tension and gain citizens' support",
      "Create more bureaucracy",
      "Encourage nepotism"
    ],
    answer: 1
  },
  {
    question: "Re-active methods of conflict management are used:",
    options: [
      "Before any sign of conflict appears",
      "In response to situations that are already or potentially conflicting",
      "Only by military forces",
      "To replace pro-active methods entirely"
    ],
    answer: 1
  },
  {
    question: "A key characteristic of mediation is that it is:",
    options: [
      "A binding process where the mediator imposes a solution",
      "A voluntary process where a third party facilitates a negotiation",
      "Always conducted by a judge",
      "Synonymous with arbitration"
    ],
    answer: 1
  },
  {
    question: "The primary goal of negotiation is to:",
    options: [
      "Win at all costs",
      "Reach an agreement through joint decision-making",
      "Impress observers",
      "Prolong the discussion"
    ],
    answer: 1
  },
  {
    question: "Conciliation involves a third party who:",
    options: [
      "Makes a legally binding award",
      "Communicates separately with parties to persuade them towards peace",
      "Uses military force to separate parties",
      "Represents the government's interest"
    ],
    answer: 1
  },
  {
    question: "In arbitration, the decision rendered by the neutral third party is called:",
    options: [
      "A Judgment",
      "A Verdict",
      "An Award",
      "A Settlement"
    ],
    answer: 2
  },
  {
    question: "A significant disadvantage of adjudication (litigation) is that it:",
    options: [
      "Is always faster than ADR",
      "Preserves relationships and builds trust",
      "Allows parties to control the outcome",
      "Tends to destroy trust and respect between parties"
    ],
    answer: 3
  },
  {
    question: "The Multi-Track approach argues that peacemaking is the responsibility of:",
    options: [
      "The government and military only",
      "Various stakeholders including NGOs, businesses, and the media",
      "Only the United Nations",
      "The conflicting parties alone"
    ],
    answer: 1
  },
  {
    question: "Track 3 of the Multi-Track approach is:",
    options: [
      "Government",
      "Business (Peacemaking through commerce)",
      "Private Citizens (Peacemaking through personal involvement)",
      "Religion"
    ],
    answer: 1
  },
  {
    question: "Conflict transformation seeks to change:",
    options: [
      "Only the winning party",
      "The parties, their relationship, and the conflict's root conditions",
      "Only the geographical location of the conflict",
      "The conflict into a larger war"
    ],
    answer: 1
  },
  {
    question: "A necessary condition for effective mediation is:",
    options: [
      "That the parties are forced to participate",
      "That the mediator is from a powerful country",
      "That the conflicting parties desire a resolution",
      "That the conflict has already been won by one side"
    ],
    answer: 2
  },
  {
    question: "The ingredient of reconciliation that includes tolerance, love, and kindness is:",
    options: [
      "Justice",
      "Truth",
      "Peace",
      "Mercy"
    ],
    answer: 2
  },
  {
    question: "The Multi-Door Courthouse (MDC) system emphasizes:",
    options: [
      "Litigation and prolonged court cases",
      "Reconciliation and forgiveness as cheaper, faster alternatives",
      "Increasing lawyer fees",
      "Handling only criminal cases"
    ],
    answer: 1
  },
  {
    question: "The lecture notes posit that conflict in social life:",
    options: [
      "Can be completely eradicated",
      "Is purely negative and must be avoided",
      "Has both negative and positive aspects and is a basic unit for understanding society",
      "Is only important in political settings"
    ],
    answer: 2
  },
  {
    question: "The most problematic aspect of conflict is its:",
    options: [
      "Ability to foster creativity",
      "Explosion into violence",
      "Role in social change",
      "Inevitability"
    ],
    answer: 1
  },
  {
    question: "Ethnic conflict in Nigeria is often linked to:",
    options: [
      "Sporting events",
      "Political issues and allegations of marginalization",
      "Uniform weather patterns",
      "A single national language"
    ],
    answer: 1
  },
  {
    question: "Religious conflict in Nigeria is often fueled by:",
    options: [
      "Excessive cooperation among faiths",
      "Intolerance and bigotry",
      "A unified religious doctrine",
      "Government enforcement of a state religion"
    ],
    answer: 1
  },
  {
    question: "A serious consequence of political conflict in Nigeria has been:",
    options: [
      "Economic prosperity",
      "Election crises leading to killings and destruction",
      "Increased international aid",
      "The dissolution of all political parties"
    ],
    answer: 1
  },
  {
    question: "Resource conflict arises primarily because societal resources are:",
    options: [
      "Infinite and abundant",
      "Scarce or limited, leading to competition",
      "Evenly distributed by nature",
      "Only valued by foreigners"
    ],
    answer: 1
  },
  {
    question: "Industrial conflict occurs when groups disagree over:",
    options: [
      "The colour of the factory walls",
      "The distribution of common resources within industries",
      "The weather",
      "International politics"
    ],
    answer: 1
  },
  {
    question: "An element of peacebuilding that involves identifying social developments that suggest future conflict is:",
    options: [
      "Early Morning Response",
      "Early Morning Signs",
      "Post-Conflict Justice",
      "Litigation"
    ],
    answer: 1
  },
  {
    question: "Actions taken by peace guarantors or leaders to address observed signs of conflict are known as:",
    options: [
      "Early Morning Signs",
      "Early Morning Response",
      "Provocation",
      "Escalation"
    ],
    answer: 1
  },
  {
    question: "The systematic enlightenment of individuals and groups on the ideals of peace is called:",
    options: [
      "Conflict escalation",
      "Military training",
      "Peace education",
      "Political campaigning"
    ],
    answer: 2
  },
  {
    question: "The Latin root of the word \"conflict\" implies:",
    options: [
      "To strike together",
      "To agree",
      "To love",
      "To build"
    ],
    answer: 0
  },
  {
    question: "A conflict that is hidden and has not yet manifested openly is termed:",
    options: [
      "Manifest conflict",
      "Latent conflict",
      "International conflict",
      "Resolved conflict"
    ],
    answer: 1
  },
  {
    question: "Structural violence refers to:",
    options: [
      "Direct physical assault",
      "The systematic way a social structure harms people by preventing them from meeting their basic needs",
      "A natural disaster",
      "Verbal arguments"
    ],
    answer: 1
  },
  {
    question: "Positive peace is characterized by:",
    options: [
      "The absence of war only",
      "The presence of justice, equality, and the conditions for human flourishing",
      "A strong military presence",
      "The suppression of all dissent"
    ],
    answer: 1
  },
  {
    question: "A peacekeeper's role is primarily to:",
    options: [
      "Impose a political solution by force",
      "Act as a combatant for one side",
      "Maintain ceasefires and stabilize situations consensually",
      "Replace local government"
    ],
    answer: 2
  },
  {
    question: "An example of an inter-personal conflict is a dispute between:",
    options: [
      "Two departments within a company",
      "Two nations",
      "Two individuals over a personal issue",
      "An individual and their conscience"
    ],
    answer: 2
  },
  {
    question: "The \"Indigene-Settler\" phenomenon is a classic example of a conflict over:",
    options: [
      "International trade",
      "Identity, power, and resource allocation",
      "Climate change",
      "Musical preferences"
    ],
    answer: 1
  },
  {
    question: "The primary goal of a conciliator is to:",
    options: [
      "Render a binding legal judgment",
      "Persuade parties towards a peaceful solution through separate communication",
      "Provide military support",
      "Write new laws"
    ],
    answer: 1
  },
  {
    question: "A major advantage of arbitration over litigation is its:",
    options: [
      "Formality and public nature",
      "Speed and potential cost-effectiveness",
      "Ability to destroy relationships",
      "Requirement for lengthy appeals"
    ],
    answer: 1
  },
  {
    question: "The \"Crisis Stage\" of conflict is also often referred to as the stage of:",
    options: [
      "Latent tension",
      "War",
      "Post-war reconstruction",
      "Celebration"
    ],
    answer: 1
  },
  {
    question: "The concept of \"inner peace\" refers to:",
    options: [
      "A peace treaty between nations",
      "A state of spiritual or mental calmness",
      "The absence of all conflict",
      "Economic prosperity"
    ],
    answer: 1
  },
  {
    question: "According to the provided materials, a lasting solution to conflicts in Africa requires:",
    options: [
      "More arbitrary borders",
      "Committed leadership and equitable resource distribution",
      "Increased foreign debt",
      "The denial of human rights"
    ],
    answer: 1
  },
  {
    question: "The UN Security Council has the power to:",
    options: [
      "Impose sanctions and authorize military action to maintain peace",
      "Govern member countries directly",
      "Control the world's economy",
      "Overrule national constitutions"
    ],
    answer: 0
  },
  {
    question: "The Niger Delta region of Nigeria has experienced conflict primarily related to:",
    options: [
      "Religious doctrine",
      "Resources (oil) and environmental degradation",
      "Disputes over national language",
      "International sports"
    ],
    answer: 1
  },
  {
    question: "A key principle for a mediator is:",
    options: [
      "Partiality towards the stronger party",
      "Impartiality and neutrality",
      "Advocating for a specific outcome",
      "Using coercion"
    ],
    answer: 1
  },
  {
    question: "The term \"conflict resolution\" implies:",
    options: [
      "Merely stopping the violence",
      "Addressing the root causes to achieve a durable settlement",
      "Allowing one party to win completely",
      "Ignoring the problem"
    ],
    answer: 1
  },
  {
    question: "\"Hate speech\" is dangerous because it:",
    options: [
      "Promotes mutual understanding",
      "Is inimical to peace and security",
      "Is a protected form of expression everywhere",
      "Always leads to immediate economic growth"
    ],
    answer: 1
  },
  {
    question: "The Frustration-Aggression theory suggests that aggression is often a result of:",
    options: [
      "Having all one's needs met",
      "Being blocked from achieving a goal (frustration)",
      "Excessive happiness",
      "Good governance"
    ],
    answer: 1
  },
  {
    question: "The Traditional Structural Theory views society as divided by:",
    options: [
      "Hair colour",
      "Economic class (e.g., Bourgeoisie vs. Proletariat)",
      "Musical taste",
      "Athletic ability"
    ],
    answer: 1
  },
  {
    question: "The Realist Theory of conflict argues that conflict is driven by:",
    options: [
      "Flaws in human nature, such as the desire for power",
      "The need for love and belonging",
      "Miscommunication only",
      "Environmental factors alone"
    ],
    answer: 0
  },
  {
    question: "A crucial step in conflict analysis is:",
    options: [
      "Jumping to conclusions",
      "Ignoring the context",
      "Fact-finding",
      "Blaming the victim"
    ],
    answer: 2
  },
  {
    question: "Boko Haram's use of asymmetric tactics is an example of:",
    options: [
      "Conventional warfare",
      "Guerrilla warfare, making them elusive",
      "Peaceful protest",
      "Diplomatic negotiation"
    ],
    answer: 1
  },
  {
    question: "The relationship between violence and development is typically:",
    options: [
      "Positive and reinforcing",
      "Negative, as violence destroys infrastructure and social fabric",
      "Non-existent",
      "Always calculated by economists"
    ],
    answer: 1
  },
  {
    question: "The number of primary actors in a conflict analysis framework is usually:",
    options: [
      "One",
      "Two or more",
      "Unimportant",
      "Always thousands"
    ],
    answer: 1
  },
  {
    question: "The absence of war most directly suggests the absence of:",
    options: [
      "Structural violence",
      "Direct violence",
      "All forms of injustice",
      "Poverty"
    ],
    answer: 1
  },
  {
    question: "A formal debate between schools would be an example of:",
    options: [
      "Violent conflict",
      "Managed or institutionalized conflict, not necessarily negative",
      "A root cause of war",
      "Personal variable conflict"
    ],
    answer: 1
  },
  {
    question: "A method of peaceful dispute settlement is:",
    options: [
      "Armed rebellion",
      "Assassination",
      "Mediation",
      "Ethnic cleansing"
    ],
    answer: 2
  },
  {
    question: "A core function of peace education is to:",
    options: [
      "Teach advanced military strategy",
      "Promote a culture of peace, tolerance, and non-violent resolution",
      "Encourage religious conversion",
      "Support a single political party"
    ],
    answer: 1
  },
  {
    question: "The concept of \"sovereignty\" is important to national security because it implies:",
    options: [
      "Dependence on foreign powers",
      "A state's supreme authority within its territory",
      "The absence of any government",
      "Constant intervention in other states' affairs"
    ],
    answer: 1
  },
  {
    question: "\"Territorial integrity\" refers to:",
    options: [
      "The wealth of a nation",
      "The inviolability of a state's borders",
      "The political party in power",
      "The number of universities in a country"
    ],
    answer: 1
  },
  {
    question: "A society with strong \"social cohesion\" is likely to:",
    options: [
      "Experience more internal conflict",
      "Be more resilient and peaceful",
      "Have no rules or laws",
      "Be controlled by a foreign power"
    ],
    answer: 1
  },
  {
    question: "The emotional and perceptual change desired in an individual through conflict transformation is a ______ level change.",
    options: [
      "International",
      "Personal",
      "Geological",
      "Technological"
    ],
    answer: 1
  },
  {
    question: "The track of peacemaking that involves providing funding and resources is:",
    options: [
      "Track 1: Government",
      "Track 8: Funding",
      "Track 5: Research, Training & Education",
      "Track 9: Communication & Media"
    ],
    answer: 1
  },
  {
    question: "The track of peacemaking that uses faith in action is:",
    options: [
      "Track 7: Religion",
      "Track 2: Business",
      "Track 4: Private Citizens",
      "Track 6: Activism"
    ],
    answer: 0
  },
  {
    question: "ADR processes are designed to ______ the formal court system.",
    options: [
      "Replace entirely",
      "Decongest and serve as an alternative to",
      "Complicate",
      "Ignore"
    ],
    answer: 1
  },
  {
    question: "A \"conflict trigger\" is an event that:",
    options: [
      "Resolves a latent conflict",
      "Turns a latent conflict into a manifest one",
      "Happens after the conflict is over",
      "Is always planned years in advance"
    ],
    answer: 1
  },
  {
    question: "A \"harmony\" model of conflict assumes that conflict is:",
    options: [
      "Natural and inevitable",
      "Abnormal and a sign of a malfunctioning system",
      "Always positive",
      "Always negative"
    ],
    answer: 1
  },
  {
    question: "A \"conflict\" model of society assumes that conflict is:",
    options: [
      "Abnormal",
      "A natural and inevitable part of social life",
      "Always easily resolved",
      "Caused by external forces only"
    ],
    answer: 1
  },
  {
    question: "A \"win-lose\" approach to negotiation is called:",
    options: [
      "Collaborative bargaining",
      "Competitive bargaining",
      "Compromising bargaining",
      "Avoidance"
    ],
    answer: 1
  },
  {
    question: "A \"win-win\" approach to negotiation, aiming for a solution beneficial to all, is called:",
    options: [
      "Competitive bargaining",
      "Collaborative bargaining",
      "Attrition",
      "Domination"
    ],
    answer: 1
  },
  {
    question: "The process of making concessions to find a middle ground is:",
    options: [
      "Competition",
      "Compromise",
      "Avoidance",
      "Accommodation"
    ],
    answer: 1
  },
  {
    question: "In conflict analysis, the \"context\" refers to the:",
    options: [
      "Personal biography of the analyst",
      "Broot social, political, historical, and economic environment",
      "Weather forecast",
      "Time of day the conflict started"
    ],
    answer: 1
  },
  {
    question: "A \"stakeholder\" in a conflict is any person or group:",
    options: [
      "With no interest in the outcome",
      "Who is directly affected by or can affect the outcome",
      "From a different country",
      "Who is neutral"
    ],
    answer: 1
  },
  {
    question: "A \"third party\" in conflict resolution is:",
    options: [
      "Always a government",
      "An external individual or group not directly involved in the conflict",
      "The main aggressor",
      "The same as a stakeholder"
    ],
    answer: 1
  },
  {
    question: "\"Ripeness\" in conflict resolution refers to the point when:",
    options: [
      "Parties are exhausted and ready to consider settlement",
      "The conflict is just beginning",
      "One party has been completely defeated",
      "A third party forces a solution"
    ],
    answer: 0
  },
  {
    question: "\"Peace enforcement\" involves:",
    options: [
      "Diplomatic persuasion only",
      "The use of coercive force to impose peace, often without full consent",
      "Activities only after a peace treaty is signed",
      "Community festivals"
    ],
    answer: 1
  },
  {
    question: "\"Peacemaking\" refers to diplomatic efforts to:",
    options: [
      "Start a war",
      "End a war and reach a settlement",
      "Ignore a conflict",
      "Build infrastructure after a war"
    ],
    answer: 1
  },
  {
    question: "The \"conflict triangle\" model often analyses the links between:",
    options: [
      "Attitude, Behaviour, and Contradiction",
      "Earth, Wind, and Fire",
      "Only economic factors",
      "Only political factors"
    ],
    answer: 0
  },
  {
    question: "\"Track II diplomacy\" involves unofficial dialogue facilitated by:",
    options: [
      "Heads of state",
      "Military generals",
      "Non-governmental entities (e.g., academics, NGOs)",
      "Only religious leaders"
    ],
    answer: 2
  },
  {
    question: "The ultimate goal of studying Peace and Conflict Resolution is to contribute to:",
    options: [
      "More efficient warfare",
      "The creation of a more just and peaceful world",
      "Promoting one culture over others",
      "The dominance of a single economic system"
    ],
    answer: 1
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
