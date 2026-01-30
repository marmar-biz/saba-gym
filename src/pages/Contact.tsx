import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-primary/10 flex flex-col items-center text-center gap-6"
          >
            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center">
              <Phone className="w-10 h-10 text-[#25D366]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">واتساپ</h3>
              <p className="text-muted-foreground mb-6">
                ارتباط مستقیم و سریع
              </p>
              import { Link } from "react-router-dom";
              <Link href="/request?type=Consultation" className="w-full block">
                <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2">
                  <Phone className="w-4 h-4" />
                  ارسال پیام در واتساپ
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-primary/10 flex flex-col items-center text-center gap-6"
          >
            <div className="w-20 h-20 bg-[#E1306C]/10 rounded-full flex items-center justify-center">
              <Instagram className="w-10 h-10 text-[#E1306C]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">اینستاگرام</h3>
              <p className="text-muted-foreground mb-6">
                مشاهده نمونه کارها و آموزش‌های رایگان
              </p>
              <a 
                href="https://instagram.com/sabagymstudio" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block"
              >
                <Button variant="outline" className="w-full border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C]/10 gap-2">
                  <Instagram className="w-4 h-4" />
                  دنبال کردن در اینستاگرام
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-secondary/50 p-8 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-right"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
             <div className="bg-white p-3 rounded-xl shadow-sm mb-2">
                <MapPin className="w-6 h-6 text-accent" />
             </div>
             <h4 className="font-bold text-accent">آدرس باشگاه</h4>
             <p className="text-muted-foreground">رشت،گلسار،پلاک ۱۲</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
             <div className="bg-white p-3 rounded-xl shadow-sm mb-2">
                <Mail className="w-6 h-6 text-accent" />
             </div>
             <h4 className="font-bold text-accent">ایمیل پشتیبانی</h4>
             <p className="text-muted-foreground">info@sabagym.ir</p>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-display text-primary/80 italic">
            "بدن تو خونه‌ی همیشگی توست، مراقبش باش."
          </p>
        </div>
      </div>
    </div>
  );
}

