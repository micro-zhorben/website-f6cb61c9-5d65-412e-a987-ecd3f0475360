import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Party, Rocket, Sparkles } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function SillyHeader() {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Party
            className={`h-6 w-6 text-primary transition-transform duration-300 ${
              bounce ? "translate-y-[-4px]" : ""
            }`}
          />
          <Typography.H3>Глупый Сайт</Typography.H3>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/fun"
            className="group flex items-center gap-1 text-foreground"
          >
            <Sparkles className="h-4 w-4 text-primary transition-transform group-hover:rotate-12" />
            <span>Веселье</span>
          </Link>
          <Link
            to="/wow"
            className="group flex items-center gap-1 text-foreground"
          >
            <Rocket className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            <span>Вау</span>
          </Link>
          <ModeToggle />
          <Button variant="default" size="sm">
            Нажми меня!
          </Button>
        </nav>
      </div>
    </header>
  );
}