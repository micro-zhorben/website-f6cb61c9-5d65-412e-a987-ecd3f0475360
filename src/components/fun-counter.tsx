import { useState } from "react";
import { Confetti, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FunCounter() {
  const [count, setCount] = useState(0);
  const [isPartying, setIsPartying] = useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setIsPartying(true);
    setTimeout(() => setIsPartying(false), 500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PartyPopper
            className={`h-6 w-6 text-primary transition-transform duration-300 ${
              isPartying ? "scale-150" : ""
            }`}
          />
          Счетчик Веселья
        </CardTitle>
        <CardDescription>Нажми кнопку, будет весело!</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 text-center">
        <Typography.Large
          className={`text-4xl font-bold ${isPartying ? "animate-bounce" : ""}`}
        >
          {count}
        </Typography.Large>
        <Button
          variant="default"
          size="lg"
          onClick={handleClick}
          className="group"
        >
          <Confetti className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
          Добавить Веселья!
        </Button>
      </CardContent>
    </Card>
  );
}