const scienceQuestions = [
    {
      question: "What is the chemical symbol for water?",
      answer: "H2O",
      options: ["CO2", "NaCl", "H2O", "O2"],
    },
    {
      question: "What is the force that causes objects to fall to the ground?",
      answer: "Gravity",
      options: ["Friction", "Magnetism", "Gravity", "Inertia"],
    },
    {
      question: "What is the smallest unit of matter?",
      answer: "Atom",
      options: ["Molecule", "Cell", "Atom", "Element"],
    },
    {
      question: "What process allows plants to convert sunlight into energy?",
      answer: "Photosynthesis",
      options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answer: "Mars",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
    },
    {
      question: "What is the main function of the human heart?",
      answer: "Pumping blood",
      options: ["Filtering waste", "Digesting food", "Pumping blood", "Producing hormones"],
    },
    {
      question: "What is the chemical symbol for iron?",
      answer: "Fe",
      options: ["Ir", "Au", "Fe", "Cu"],
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      answer: "Nitrogen",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answer: "Diamond",
      options: ["Graphite", "Quartz", "Topaz", "Diamond"],
    },
    {
      question: "Which scientist proposed the theory of relativity?",
      answer: "Albert Einstein",
      options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
    },
    {
        question: "What is the chemical formula for table salt?",
        answer: "NaCl",
        options: ["NaOH", "HCl", "NaCl", "H2SO4"],
      },
      {
        question: "What is the process by which plants release water vapor into the atmosphere?",
        answer: "Transpiration",
        options: ["Condensation", "Evaporation", "Transpiration", "Precipitation"],
      },
      {
        question: "Which element has the atomic number 1?",
        answer: "Hydrogen",
        options: ["Helium", "Carbon", "Oxygen", "Hydrogen"],
      },
      {
        question: "What is the unit of measurement for electric current?",
        answer: "Ampere (A)",
        options: ["Volt (V)", "Ohm (Ω)", "Watt (W)", "Ampere (A)"],
      },
      {
        question: "What is the study of living organisms called?",
        answer: "Biology",
        options: ["Chemistry", "Physics", "Biology", "Geology"],
      },
      {
        question: "Which metal is liquid at room temperature?",
        answer: "Mercury (Hg)",
        options: ["Iron (Fe)", "Copper (Cu)", "Aluminum (Al)", "Mercury (Hg)"],
      },
      {
        question: "What is the main function of the respiratory system?",
        answer: "Gas exchange",
        options: ["Digestion", "Circulation", "Gas exchange", "Immunity"],
      },
      {
        question: "Which gas is responsible for the Earth's ozone layer?",
        answer: "Oxygen (O2)",
        options: ["Carbon dioxide (CO2)", "Nitrogen (N2)", "Oxygen (O2)", "Methane (CH4)"],
      },
      {
        question: "What is the chemical symbol for gold?",
        answer: "Au",
        options: ["Ag", "Cu", "Au", "Pb"],
      },
      {
        question: "What is the energy currency of the cell?",
        answer: "Adenosine triphosphate (ATP)",
        options: ["Glucose", "Lactic acid", "Adenosine triphosphate (ATP)", "Pyruvate"],
      },
      {
        question: "What is the chemical formula for glucose?",
        answer: "C6H12O6",
        options: ["H2O", "CO2", "C6H12O6", "NaCl"],
      },
      {
        question: "Which gas is known as laughing gas?",
        answer: "Nitrous oxide (N2O)",
        options: ["Carbon monoxide (CO)", "Nitrous oxide (N2O)", "Sulfur dioxide (SO2)", "Methane (CH4)"],
      },
      {
        question: "What is the pH scale used to measure?",
        answer: "Acidity or alkalinity",
        options: ["Temperature", "Pressure", "Acidity or alkalinity", "Density"],
      },
      {
        question: "What is the chemical symbol for silver?",
        answer: "Ag",
        options: ["Au", "Ag", "Al", "Fe"],
      },
      {
        question: "Which planet is known as the 'Morning Star'?",
        answer: "Venus",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
      },
      {
        question: "What is the study of fossils called?",
        answer: "Paleontology",
        options: ["Archaeology", "Geology", "Paleontology", "Anthropology"],
      },
      {
        question: "What is the smallest bone in the human body?",
        answer: "Stapes (in the ear)",
        options: ["Femur", "Tibia", "Radius", "Stapes (in the ear)"],
      },
      {
        question: "Which scientist proposed the theory of evolution by natural selection?",
        answer: "Charles Darwin",
        options: ["Gregor Mendel", "Albert Einstein", "Isaac Newton", "Charles Darwin"],
      },
      {
        question: "What is the process by which plants convert carbon dioxide and water into glucose and oxygen?",
        answer: "Photosynthesis",
        options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
      },
      {
        question: "What is the chemical symbol for lead?",
        answer: "Pb",
        options: ["Fe", "Au", "Pb", "Ag"],
      },
      {
        question: "Which type of electromagnetic radiation has the longest wavelength?",
        answer: "Radio waves",
        options: ["Microwaves", "Infrared", "Visible light", "Radio waves"],
      },
      {
        question: "What is the process by which water changes from a liquid to a gas?",
        answer: "Evaporation",
        options: ["Condensation", "Sublimation", "Evaporation", "Boiling"],
      },
      {
        question: "Which organ in the human body produces insulin?",
        answer: "Pancreas",
        options: ["Liver", "Stomach", "Pancreas", "Kidney"],
      },
      {
        question: "What is the chemical symbol for potassium?",
        answer: "K",
        options: ["Pt", "Po", "K", "Kr"],
      },
      {
        question: "Which gas is known as the 'Greenhouse gas'?",
        answer: "Carbon dioxide (CO2)",
        options: ["Oxygen (O2)", "Nitrogen (N2)", "Carbon dioxide (CO2)", "Methane (CH4)"],
      },
      {
        question: "What is the study of earthquakes called?",
        answer: "Seismology",
        options: ["Meteorology", "Geology", "Seismology", "Astronomy"],
      },
      {
        question: "Which part of the human brain is responsible for intelligence and reasoning?",
        answer: "Cerebrum",
        options: ["Cerebellum", "Medulla oblongata", "Thalamus", "Cerebrum"],
      },
      {
        question: "What is the process by which plants absorb water through their roots?",
        answer: "Osmosis",
        options: ["Photosynthesis", "Transpiration", "Diffusion", "Osmosis"],
      },
      {
        question: "What is the chemical formula for hydrogen peroxide?",
        answer: "H2O2",
        options: ["H2SO4", "NaOH", "H2O2", "NH3"],
      },
      {
        question: "Which gas is produced during the process of respiration?",
        answer: "Carbon dioxide (CO2)",
        options: ["Oxygen (O2)", "Carbon dioxide (CO2)", "Nitrogen (N2)", "Hydrogen (H2)"],
      },
      {
        question: "What is the study of the Earth's atmosphere called?",
        answer: "Meteorology",
        options: ["Geology", "Astronomy", "Meteorology", "Ecology"],
      },
      {
        question: "Which type of electromagnetic radiation has the shortest wavelength?",
        answer: "Gamma rays",
        options: ["X-rays", "Ultraviolet", "Gamma rays", "Visible light"],
      },
      {
        question: "What is the process by which rocks are broken down into smaller pieces?",
        answer: "Weathering",
        options: ["Erosion", "Deposition", "Weathering", "Subduction"],
      },
      {
        question: "What is the unit of measurement for electric charge?",
        answer: "Coulomb (C)",
        options: ["Ampere (A)", "Ohm (Ω)", "Volt (V)", "Coulomb (C)"],
      },
      {
        question: "Which subatomic particle has a positive charge?",
        answer: "Proton",
        options: ["Electron", "Neutron", "Proton", "Quark"],
      },
      {
        question: "What is the study of the behavior of matter and energy at the atomic and subatomic levels?",
        answer: "Quantum mechanics",
        options: ["Thermodynamics", "Kinematics", "Quantum mechanics", "Relativity"],
      },
      {
        question: "Which metal is the best conductor of electricity?",
        answer: "Silver",
        options: ["Gold", "Copper", "Aluminum", "Silver"],
      },
      {
        question: "What is the chemical symbol for sodium?",
        answer: "Na",
        options: ["Si", "So", "Sa", "Na"],
      },
      {
        question: "Which element has the highest melting point?",
        answer: "Tungsten",
        options: ["Platinum", "Titanium", "Tungsten", "Lead"],
      },
      {
        question: "What is the process by which plants lose water vapor through their leaves?",
        answer: "Transpiration",
        options: ["Evaporation", "Condensation", "Transpiration", "Photosynthesis"],
      },
  ];
  
module.exports = scienceQuestions;