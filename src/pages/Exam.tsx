
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Camera, Clock } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: number;
}

const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of an operating system?",
    options: [
      "To provide a user interface",
      "To manage hardware resources",
      "To run applications",
      "All of the above"
    ],
    correctAnswer: 3,
  },
  {
    id: 2,
    question: "Which of the following is not a programming language?",
    options: [
      "Python",
      "Java",
      "HTML",
      "Microsoft Excel"
    ],
    correctAnswer: 3,
  },
  {
    id: 3,
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Processor Underwriter",
      "Central Program Utility"
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Which data structure operates on a Last-In-First-Out (LIFO) principle?",
    options: [
      "Queue",
      "Stack",
      "Linked List",
      "Array"
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "What is the time complexity of binary search?",
    options: [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    correctAnswer: 2,
  },
];

const Exam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(MOCK_QUESTIONS.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState<"submit" | "timeout" | "leave">("submit");
  const navigate = useNavigate();
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start camera for proctoring
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: "user"
          } 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        toast({
          title: "Proctoring Error",
          description: "Unable to access camera for exam proctoring. You may not be able to continue.",
          variant: "destructive",
        });
      }
    };

    setupCamera();

    // Check for window/tab visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        toast({
          title: "Warning!",
          description: "Leaving the exam window may be considered cheating. Please return immediately.",
          variant: "destructive",
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setAlertType("timeout");
          setIsAlertOpen(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      
      // Stop camera
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [toast]);

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = parseInt(value);
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setAlertType("submit");
    setIsAlertOpen(true);
  };

  const confirmSubmit = () => {
    // In a real app, we would send the answers to a backend service
    // For demo purposes, we'll just navigate to a results page
    navigate("/results");
  };

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    const message = "Are you sure you want to leave? Your exam progress will be lost.";
    e.returnValue = message;
    return message;
  };

  // Add event listener for page unload/refresh
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Proctoring camera (hidden from user's view) */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="fixed top-0 right-0 w-1 h-1 opacity-0 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <Camera className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm">Proctoring Active</span>
          </div>
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
            <Clock className="h-5 w-5 text-primary mr-2" />
            <span className="font-mono font-medium">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <div className="mb-6">
            <h1 className="text-xl font-bold">
              Question {currentQuestion + 1} of {MOCK_QUESTIONS.length}
            </h1>
            <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{
                  width: `${((currentQuestion + 1) / MOCK_QUESTIONS.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-medium mb-4">
                {MOCK_QUESTIONS[currentQuestion].question}
              </h2>

              <RadioGroup
                value={selectedAnswers[currentQuestion]?.toString() || ""}
                onValueChange={handleAnswerSelect}
                className="space-y-3"
              >
                {MOCK_QUESTIONS[currentQuestion].options.map((option, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2 p-3 rounded-md hover:bg-gray-50"
                  >
                    <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                    <Label
                      htmlFor={`option-${idx}`}
                      className="font-normal cursor-pointer flex-grow"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            {currentQuestion < MOCK_QUESTIONS.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleSubmit}>Submit Exam</Button>
            )}
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Question Navigator</h2>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {MOCK_QUESTIONS.map((_, idx) => (
              <Button
                key={idx}
                variant={idx === currentQuestion ? "default" : selectedAnswers[idx] >= 0 ? "outline" : "secondary"}
                className={`h-10 w-10 p-0 ${idx === currentQuestion ? "ring-2 ring-primary ring-offset-2" : ""}`}
                onClick={() => setCurrentQuestion(idx)}
              >
                {idx + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {alertType === "submit"
                ? "Submit Exam"
                : alertType === "timeout"
                ? "Time's Up!"
                : "Warning!"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {alertType === "submit"
                ? "Are you sure you want to submit your exam? You won't be able to change your answers after submission."
                : alertType === "timeout"
                ? "Your exam time has expired. Your answers will be automatically submitted."
                : "Leaving the exam page may be considered cheating. Do you want to continue?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {alertType !== "timeout" && (
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            )}
            <AlertDialogAction onClick={confirmSubmit}>
              {alertType === "submit"
                ? "Submit Exam"
                : alertType === "timeout"
                ? "OK"
                : "Leave Anyway"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Exam;
