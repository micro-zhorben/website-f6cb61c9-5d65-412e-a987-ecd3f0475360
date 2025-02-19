import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { FunCounter } from "@/components/fun-counter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Confetti, PartyPopper, Sparkles } from "lucide-react";

export function Fun() {
  const [dancingEmoji, setDancingEmoji] = useState("🕺");

  const changeEmoji = () => {
    const emojis = ["🕺", "💃", "🎭", "🎪", "🎨", "🎯", "🎲", "🎮"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setDancingEmoji(randomEmoji);
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8"
      >
        <div className="text-center">
          <Typography.H1>Страница Веселья! {dancingEmoji}</Typography.H1>
          <Typography.Lead className="mt-4">
            Здесь происходит самое веселое веселье из всех веселий!
          </Typography.Lead>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FunCounter />

          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4 text-center">
                <Typography.H3 className="flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Генератор Эмодзи
                </Typography.H3>
                <div className="text-6xl">{dancingEmoji}</div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={changeEmoji}
                  className="group text-foreground"
                >
                  <PartyPopper className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  Сменить Эмодзи!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="grid gap-4 text-center">
              <Typography.H3 className="flex items-center justify-center gap-2">
                <Confetti className="h-6 w-6 text-primary" />
                Случайная Глупая Шутка
              </Typography.H3>
              <Typography.P>
                Почему программисты не любят природу? <br />
                Потому что там слишком много багов! 🐛
              </Typography.P>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}