import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { careerPaths } from "@/data/careerPaths";

interface QuizQuestion {
  question: string;
  options: { text: string; paths: string[] }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What excites you most about technology?",
    options: [
      { text: "Building apps and websites", paths: ["software"] },
      { text: "Finding patterns in data and predicting things", paths: ["data"] },
      { text: "Protecting systems from hackers", paths: ["security"] },
      { text: "Creating beautiful designs and experiences", paths: ["design"] },
      { text: "Leading teams and solving business problems", paths: ["business"] },
    ],
  },
  {
    question: "How do you feel about mathematics?",
    options: [
      { text: "Love it! Especially problem-solving", paths: ["software", "data", "security"] },
      { text: "It's okay, I prefer creative work", paths: ["design"] },
      { text: "I prefer applied/business math", paths: ["business", "data"] },
      { text: "Not my favorite, but I can manage", paths: ["design", "business"] },
    ],
  },
  {
    question: "Which best describes your working style?",
    options: [
      { text: "I like working alone on complex problems", paths: ["software", "data"] },
      { text: "I love collaborating with diverse teams", paths: ["business", "design"] },
      { text: "I want to investigate and uncover things", paths: ["security", "data"] },
      { text: "I enjoy presenting and communicating ideas", paths: ["business", "design"] },
    ],
  },
  {
    question: "What would you build with tech skills?",
    options: [
      { text: "A mobile app that helps people", paths: ["software"] },
      { text: "An AI that predicts the future", paths: ["data"] },
      { text: "A secure system that protects privacy", paths: ["security"] },
      { text: "A beautiful website or product", paths: ["design"] },
      { text: "A startup that changes industries", paths: ["business", "software"] },
    ],
  },
  {
    question: "Which sounds most interesting to learn?",
    options: [
      { text: "Programming languages like Python or JavaScript", paths: ["software", "data"] },
      { text: "How networks and systems work", paths: ["security"] },
      { text: "Design tools like Figma", paths: ["design"] },
      { text: "Data analysis and visualization", paths: ["data", "business"] },
      { text: "Project management and strategy", paths: ["business"] },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getResults = () => {
    const pathScores: Record<string, number> = {};
    
    answers.forEach((answerIndex, questionIndex) => {
      const selectedOption = quizQuestions[questionIndex].options[answerIndex];
      selectedOption.paths.forEach((path) => {
        pathScores[path] = (pathScores[path] || 0) + 1;
      });
    });

    const sortedPaths = Object.entries(pathScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2);

    return sortedPaths.map(([pathId]) => 
      careerPaths.find((p) => p.id === pathId)!
    ).filter(Boolean);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🎯 Career Quiz
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Help Me Choose
          </h2>
          <p className="text-lg text-muted-foreground">
            Answer a few questions and we'll suggest the best tech path for you
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-medium"
              >
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-gradient-hero rounded-full"
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="font-display text-xl md:text-2xl font-bold mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left p-4 rounded-xl border border-border bg-background hover:bg-secondary hover:border-primary/30 transition-all group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-medium">{option.text}</span>
                      </span>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                {currentQuestion > 0 && (
                  <button
                    onClick={goBack}
                    className="mt-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous question
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-medium"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    Your Results! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    Based on your answers, you may enjoy:
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {getResults().map((path, index) => (
                    <div
                      key={path.id}
                      className={`p-6 rounded-xl border ${
                        index === 0 
                          ? "bg-primary/5 border-primary/30" 
                          : "bg-secondary border-border"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-3xl">{path.icon}</span>
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">
                            {index === 0 ? "Best Match" : "Also Great For You"}
                          </div>
                          <h4 className="font-display font-bold text-lg">{path.title}</h4>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{path.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {path.degrees.slice(0, 2).map((degree) => (
                          <span
                            key={degree}
                            className="text-xs px-3 py-1 rounded-full bg-background border border-border"
                          >
                            {degree}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#careers"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Explore All Careers
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
