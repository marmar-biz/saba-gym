import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Users, Award, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-right"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/20 text-accent text-sm font-medium mb-6 shadow-sm">
                ✨ باشگاه تخصصی بانوان
              </div>
              <h1 className="text-5xl lg:text-7xl font-display text-accent mb-6 leading-tight">
                تمرین هدفمند، <br/>
                <span className="text-primary">بدن قوی‌تر</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                اینجا جاییه که قراره نسخه قوی‌تر و سالم‌تری از خودت بسازی. با برنامه اختصاصی و نظارت دقیق، به هدفت می‌رسی.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/request?type=Program">
                  <Button size="lg" variant="gradient" className="w-full sm:w-auto text-lg gap-2">
                    دریافت برنامه ورزشی
                    <ArrowLeft className="w-5 h-5 rtl-flip" />
                  </Button>
                </Link>
                <Link href="/request?type=Class">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-2">
                    کلاس حضوری
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-12" />
              {/* Using a beautiful SVG illustration placeholder since we don't have stock photos */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border-8 border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-primary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                     <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                       <Award className="w-16 h-16 text-accent" />
                     </div>
                     <h3 className="font-display text-2xl text-accent mb-2">تغییر از امروز شروع میشه</h3>
                     <p className="text-muted-foreground">منتظر شنبه نباش، همین حالا شروع کن</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-accent rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display mb-6 text-white">آماده‌ای بدنت رو دگرگون کنی؟</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              هر قدمی که امروز برمی‌داری، سرمایه‌گذاری برای آینده‌ی سالم‌تر توست. ما کنارت هستیم تا این مسیر رو اصولی طی کنی.
            </p>
            <Link href="/request">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold text-lg px-12">
                شروع مشاوره رایگان
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
