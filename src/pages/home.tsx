import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { BouncingCard } from "@/components/bouncing-card";

export function Home() {
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8"
      >
        <div className="text-center">
          <Typography.H1>
            Добро пожаловать на Самый Глупый Сайт в Мире! 🎉
          </Typography.H1>
          <Typography.Lead className="mt-4">
            Здесь нет ничего серьезного, только веселье и радость!
          </Typography.Lead>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BouncingCard
            title="Почему этот сайт существует? 🤔"
            content="Потому что иногда нам всем нужно немного глупости в жизни! Особенно в мире веб-разработки."
          />
          <BouncingCard
            title="Что здесь происходит? 🎪"
            content="Абсолютно ничего важного! Просто куча анимаций, глупых кнопок и веселых эффектов."
          />
          <BouncingCard
            title="Нужно ли это кому-то? 🌈"
            content="Вероятно, нет! Но разве это не делает сайт еще более особенным?"
          />
        </div>

        <div className="rounded-lg bg-muted p-8 text-center">
          <Typography.H2>Предупреждение! ⚠️</Typography.H2>
          <Typography.P className="mt-4">
            Этот сайт может вызвать неконтролируемые приступы смеха, улыбку и
            общее ощущение счастья. Используйте с осторожностью!
          </Typography.P>
        </div>
      </motion.div>
    </div>
  );
}