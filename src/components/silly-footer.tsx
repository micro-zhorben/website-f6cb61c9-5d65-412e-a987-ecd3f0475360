import { Heart, PartyPopper, Smile } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function SillyFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex gap-2">
            <PartyPopper className="h-6 w-6 text-primary animate-bounce" />
            <Heart className="h-6 w-6 text-destructive animate-pulse" />
            <Smile className="h-6 w-6 text-primary animate-bounce" />
          </div>
          <Typography.P>
            Создано с огромным количеством глупости и веселья!
          </Typography.P>
          <Typography.Small className="text-muted-foreground">
            © {new Date().getFullYear()} Самый Глупый Сайт в Мире
          </Typography.Small>
        </div>
      </div>
    </footer>
  );
}