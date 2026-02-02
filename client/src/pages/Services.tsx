import { ServiceCard } from "@/components/ServiceCard";
import { Dumbbell, Target, Heart, Zap, UserCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "برنامه تمرینی اختصاصی",
    description: "طراحی برنامه کاملاً شخصی‌سازی شده بر اساس آناتومی بدن، اهداف و سابقه ورزشی شما.",
    icon: Target,
  },
  {
    title: "کلاس خصوصی حضوری",
    description: "تمرین زیر نظر مستقیم مربی با اصلاح تکنیک لحظه‌ای برای حداکثر بازدهی.",
    icon: UserCheck,
  },
  {
    title: "تمرینات چربی‌سوزی",
    description: "متدهای علمی و مدرن برای کاهش درصد چربی بدن در کمترین زمان ممکن.",
    icon: Zap,
  },
  {
    title: "فرم‌دهی و عضله‌سازی",
    description: "تمرینات تخصصی هایپرتروفی برای ساختن بدنی خوش‌فرم و متناسب.",
    icon: Dumbbell,
  },
  {
    title: "اصلاح فرم بدن",
    description: "تمرینات اصلاحی برای بهبود پاسچر، رفع گودی کمر و قوز پشتی.",
    icon: Heart,
  },
  {
    title: "تمرینات ویژه بانوان",
    description: "در نظر گرفتن ملاحظات هورمونی و فیزیولوژیک بانوان در طراحی تمرین.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-2 block">خدمات ما</span>
          <h1 className="text-4xl lg:text-5xl font-display text-accent mb-6">مسیر تناسب اندام شما</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            چه به دنبال کاهش وزن باشید و چه عضله‌سازی، ما ابزار و دانش لازم برای رساندن شما به هدفتان را داریم.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
