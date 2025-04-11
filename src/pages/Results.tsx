
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOCK_RESULTS = {
  totalQuestions: 5,
  correctAnswers: 4,
  score: 80,
  timeTaken: "45:22",
  questions: [
    {
      id: 1,
      question: "What is the primary purpose of an operating system?",
      yourAnswer: "All of the above",
      correctAnswer: "All of the above",
      isCorrect: true,
    },
    {
      id: 2,
      question: "Which of the following is not a programming language?",
      yourAnswer: "Microsoft Excel",
      correctAnswer: "Microsoft Excel",
      isCorrect: true,
    },
    {
      id: 3,
      question: "What does CPU stand for?",
      yourAnswer: "Central Processing Unit",
      correctAnswer: "Central Processing Unit",
      isCorrect: true,
    },
    {
      id: 4,
      question: "Which data structure operates on a Last-In-First-Out (LIFO) principle?",
      yourAnswer: "Queue",
      correctAnswer: "Stack",
      isCorrect: false,
    },
    {
      id: 5,
      question: "What is the time complexity of binary search?",
      yourAnswer: "O(log n)",
      correctAnswer: "O(log n)",
      isCorrect: true,
    },
  ],
};

const Results = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Exam Results</h1>
            <p className="mt-2 text-gray-600">
              Review your performance on the Introduction to Programming exam
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Overall Score</p>
                    <div className="text-3xl font-bold text-primary">{MOCK_RESULTS.score}%</div>
                    <Progress value={MOCK_RESULTS.score} className="h-2" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Correct Answers</p>
                    <div className="text-3xl font-bold">
                      {MOCK_RESULTS.correctAnswers} / {MOCK_RESULTS.totalQuestions}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time Taken</p>
                    <div className="text-3xl font-bold">{MOCK_RESULTS.timeTaken}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {MOCK_RESULTS.questions.map((q) => (
                    <div key={q.id} className="border rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1">
                          {q.isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">
                            Question {q.id}: {q.question}
                          </h3>
                          <div className="mt-2 space-y-1">
                            <p className="text-sm">
                              <span className="text-gray-500">Your answer: </span>
                              <span className={q.isCorrect ? "text-green-600" : "text-red-600"}>
                                {q.yourAnswer}
                              </span>
                            </p>
                            {!q.isCorrect && (
                              <p className="text-sm">
                                <span className="text-gray-500">Correct answer: </span>
                                <span className="text-green-600">{q.correctAnswer}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button onClick={() => navigate("/dashboard")}>
                Return to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
