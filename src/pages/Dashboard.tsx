
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, BookOpen, LockKeyhole } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ExamCardProps {
  title: string;
  description: string;
  duration: number;
  questions: number;
  status: "available" | "completed" | "upcoming";
  date?: string;
  score?: number;
}

const ExamCard: React.FC<ExamCardProps> = ({
  title,
  description,
  duration,
  questions,
  status,
  date,
  score,
}) => {
  const navigate = useNavigate();

  const statusColors = {
    available: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    upcoming: "bg-yellow-100 text-yellow-800",
  };

  const handleAction = () => {
    if (status === "available") {
      navigate("/exam-verification");
    } else if (status === "completed") {
      navigate("/results");
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-2 h-4 w-4" />
            <span>{duration} minutes</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>{questions} questions</span>
          </div>
          {date && (
            <div className="flex items-center text-sm text-gray-500">
              <LockKeyhole className="mr-2 h-4 w-4" />
              <span>{date}</span>
            </div>
          )}
          {score !== undefined && (
            <div className="flex items-center text-sm text-green-600">
              <CheckCircle className="mr-2 h-4 w-4" />
              <span>Score: {score}%</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleAction}
          disabled={status === "upcoming"}
          className="w-full"
        >
          {status === "available"
            ? "Start Exam"
            : status === "completed"
            ? "View Results"
            : "Coming Soon"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Dashboard = () => {
  const exams: ExamCardProps[] = [
    {
      title: "Introduction to Programming",
      description: "Basic concepts of programming and algorithms",
      duration: 60,
      questions: 30,
      status: "available",
    },
    {
      title: "Data Structures",
      description: "Arrays, linked lists, trees, and graphs",
      duration: 90,
      questions: 45,
      status: "upcoming",
      date: "April 20, 2025",
    },
    {
      title: "Web Development Fundamentals",
      description: "HTML, CSS, and JavaScript basics",
      duration: 45,
      questions: 25,
      status: "completed",
      score: 92,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Exams</h1>
            <p className="mt-2 text-gray-600">
              View and manage your upcoming and past examinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam, index) => (
              <ExamCard key={index} {...exam} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
