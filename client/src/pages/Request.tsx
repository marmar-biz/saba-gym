import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { z } from "zod";

// Extend schema for validation messages if needed, or rely on shared schema
const formSchema = insertInquirySchema.extend({
  fullName: z.string().min(3, "نام کامل باید حداقل ۳ حرف باشد"),
  age: z.string().min(1, "لطفا سن خود را وارد کنید"),
  height: z.string().min(2, "لطفا قد خود را وارد کنید"),
  weight: z.string().min(1, "لطفا وزن خود را وارد کنید"),
  goal: z.string().min(3, "لطفا هدف خود را وارد کنید"),
  experience: z.string().min(2, "لطفا سابقه تمرین خود را با سال وارد کنید"),
  sportsHistory: z.string().min(1, "لطفا سابقه ورزشی خود را با سال وارد کنید"),
});

export default function Request() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const defaultType = searchParams.get("type") || "Program";
  
  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: "",
      height: "",
      weight: "",
      goal: "",
      experience: "",
      sportsHistory: "",
      injuries: "",
      requestType: defaultType,
      sessionsPerWeek: "",
      notes: "",
    },
  });

  // Update requestType if URL param changes
  useEffect(() => {
    if (defaultType) {
      form.setValue("requestType", defaultType);
    }
  }, [defaultType, form]);

  function onSubmit(data: InsertInquiry) {
    mutate(data);
    
    // Construct structured WhatsApp message
    const requestTypeLabel = {
      'Program': 'برنامه تمرینی',
      'Class': 'کلاس خصوصی',
      'SemiPrivateClass': 'کلاس نیمه خصوصی',
      'Consultation': 'مشاوره'
    }[data.requestType] || 'درخواست جدید';

    const message = `سلام 👋
من درخواست ${requestTypeLabel} دارم:

👤 نام و نام خانوادگی: ${data.fullName}
📞 شماره تماس: ${data.phoneNumber || 'ثبت نشده'}
🎂 سن: ${data.age}
📏 قد: ${data.height}
⚖️ وزن: ${data.weight}
🎯 هدف اصلی: ${data.goal}
💪 سابقه تمرین: ${data.experience}
🏃 سوابق ورزشی: ${data.sportsHistory}
🗓️ جلسات در هفته: ${data.sessionsPerWeek || 'نامشخص'}
⚠️ آسیب‌دیدگی: ${data.injuries || 'ندارم'}
📝 توضیحات تکمیلی: ${data.notes || 'ندارم'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/989118323963?text=${encodedMessage}`, '_blank');
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-display text-accent mb-4">Request Program / Class</h1>
          <p className="text-muted-foreground">
            فرم زیر را پر کنید تا بهترین برنامه متناسب با شرایط شما طراحی شود.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-primary/10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام و نام خانوادگی</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: سارا محمدی" className="bg-background/50 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>سن</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: ۲۵" className="bg-background/50 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>قد (سانتی‌متر)</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: ۱۶۵" className="bg-background/50 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>وزن (کیلوگرم)</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: ۶۰" className="bg-background/50 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="requestType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نوع درخواست</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50 rounded-xl">
                          <SelectValue placeholder="انتخاب کنید" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Program">برنامه تمرینی</SelectItem>
                        <SelectItem value="SemiPrivateClass">کلاس نیمه خصوصی</SelectItem>
                        <SelectItem value="Class">کلاس خصوصی</SelectItem>
                        <SelectItem value="Consultation">مشاوره</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>هدف اصلی</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: کاهش وزن، عضله سازی..." className="bg-background/50 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>سابقه تمرین</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: ۳ ماه، مبتدی" className="bg-background/50 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="sportsHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>سوابق ورزشی</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="ورزش‌هایی که قبلا انجام داده‌اید..." 
                        className="bg-background/50 rounded-xl min-h-[80px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="sessionsPerWeek"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تعداد جلسات در هفته (اختیاری)</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: ۳ جلسه" className="bg-background/50 rounded-xl" {...field} value={field.value || ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="injuries"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>آسیب‌دیدگی (اختیاری)</FormLabel>
                      <FormControl>
                        <Input placeholder="اگر آسیب خاصی دارید بنویسید" className="bg-background/50 rounded-xl" {...field} value={field.value || ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>توضیحات تکمیلی (اختیاری)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="هر نکته‌ای که مربی باید بداند..." 
                        className="bg-background/50 rounded-xl min-h-[100px]" 
                        {...field} 
                        value={field.value || ''} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full text-lg h-14 rounded-2xl" 
                disabled={isPending}
                variant="default"
              >
                {isPending ? (
                  <>
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                    در حال ثبت...
                  </>
                ) : (
                  "ثبت درخواست و ارسال به واتس‌اپ"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
}
