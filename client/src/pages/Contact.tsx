import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-display text-accent mb-6">تماس با ما</h1>
          <p className="text-muted-foreground text-lg">
            برای مشاوره و هماهنگی کلاس‌ها می‌توانید از طریق راه‌های زیر با ما در ارتباط باشید.
          </p>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a 
              href="https://wa.me/989118323963" 
              target="_blank" 
              rel="noreferrer"
              className="block group"
            >
              <Button 
                size="lg"
                className="w-full h-20 text-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-2xl flex items-center justify-center gap-4 shadow-lg transition-all duration-300 group-hover:scale-[1.02] border-0"
              >
                <Phone className="w-8 h-8" />
                ارتباط از طریق واتساپ
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a 
              href="https://instagram.com/sabagymstudio" 
              target="_blank" 
              rel="noreferrer"
              className="block group"
            >
              <Button 
                size="lg"
                className="w-full h-20 text-xl bg-[#E1306C] hover:bg-[#E1306C]/90 text-white rounded-2xl flex items-center justify-center gap-4 shadow-lg transition-all duration-300 group-hover:scale-[1.02] border-0"
              >
                <Instagram className="w-8 h-8" />
                مشاهده اینستاگرام ما
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-display text-primary/80 italic">
            "بدن تو خونه‌ی همیشگی توست، مراقبش باش."
          </p>
        </div>
      </div>
    </div>
  );
}
