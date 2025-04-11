
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import CameraVerification from "@/components/CameraVerification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ExamVerification = () => {
  const [step, setStep] = useState<"camera" | "otp">("camera");
  const [otp, setOtp] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCameraVerificationComplete = () => {
    setStep("otp");
    toast({
      title: "Verification Code Sent",
      description: "Enter the OTP sent to your registered email",
    });
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit verification code",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would verify the OTP with a backend service
    toast({
      title: "OTP Verified",
      description: "You can now start your exam",
    });
    navigate("/exam");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md mx-4">
          {step === "camera" ? (
            <CameraVerification onVerificationComplete={handleCameraVerificationComplete} />
          ) : (
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Exam Access Code</CardTitle>
                <CardDescription>
                  Enter the verification code sent to your email to start the exam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Enter 6-digit verification code"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Verify & Start Exam
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <div className="text-sm text-gray-500">
                  <button
                    onClick={() => setStep("camera")}
                    className="text-primary hover:underline"
                  >
                    Go back to camera verification
                  </button>
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExamVerification;
