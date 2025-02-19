import { motion, useAnimation } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Star } from "lucide-react";

export function Wow() {
  const controls = useAnimation();

  const triggerAnimation = async () => {
    await controls.start({
      scale: [1, 1.2, 0.9, 1.1, 1],
      rotate: [0, 10, -10, 5, 0],
      transition: { duration: 0.5 },
    });
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
          <Typography.H1>ВАУ! ✨</Typography.H1>
          <Typography.Lead className="mt-4">
            Эта страница настолько удивительная, что у нас закончились слова!
          </Typography.Lead>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div animate={controls}>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="grid gap-4 text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-primary" />
                  <Typography.H3>Невероятно!</Typography.H3>
                  <Typography.P>
                    Эта карточка может танцевать! Нажми кнопку ниже!
                  </Typography.P>
                  <Button
                    variant="outline"
                    onClick={triggerAnimation}
                    className="text-foreground"
                  >
                    Заставь меня танцевать!
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="grid gap-4 text-center">
                <Zap className="mx-auto h-12 w-12 text-primary animate-pulse" />
                <Typography.H3>Поразительно!</Typography.H3>
                <Typography.P>
                  Эта иконка пульсирует сама по себе! Технологии дошли до этого!
                </Typography.P>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="grid gap-4 text-center">
                <Star className="mx-auto h-12 w-12 text-primary animate-spin" />
                <Typography.H3>Удивительно!</Typography.H3>
                <Typography.P>
                  А эта звезда крутится! Мы сами не знаем, как это получилось!
                </Typography.P>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden bg-primary/10">
          <CardContent className="p-6">
            <div className="grid gap-4 text-center">
              <Typography.H2>Секретное Сообщение</Typography.H2>
              <Typography.P>
                Если ты дочитал до этого места, то ты официально самый
                терпеливый посетитель нашего сайта! 🏆
              </Typography.P>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}