"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CodeOTPPage = () => {
  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("OTP:", code);
  };

  return (
    <Card className="w-full h-125 rounded-2xl border-0 p-4 flex flex-col gap-2 justify-between">
      <CardHeader>
        <CardTitle className="font-bold text-3xl">Code OTP</CardTitle>
        <CardDescription className="font-bold text-black">
          Veuillez saisir le code OTP reçu par message sur votre adresse email
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between h-full"
        >
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label>Code OTP</Label>

              <div className="flex gap-4 justify-center">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputs.current[index] = el;
                    }}
                    value={digit}
                    maxLength={1}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-14 h-14 text-center text-xl"
                  />
                ))}
              </div>

              <p>
                Pas encore reçu ? <span className="text-gray-500">00:51</span>{" "}
                <Button variant="ghost"  className="text-red-500 hover:bg-white ">Renvoyer</Button>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-4/5 rounded-full font-bold text-xl bg-red-500 h-12"
            >
              Valider
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CodeOTPPage;
