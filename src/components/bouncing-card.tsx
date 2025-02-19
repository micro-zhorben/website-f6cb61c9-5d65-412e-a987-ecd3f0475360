import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

interface BouncingCardProps {
  title: string;
  content: string;
}

export function BouncingCard({ title, content }: BouncingCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.div
      animate={
        isAnimating
          ? {
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }
          : undefined
      }
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Typography.P>{content}</Typography.P>
          <Button
            variant="outline"
            className="text-foreground"
            onClick={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            Попрыгай!
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}