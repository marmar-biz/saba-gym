import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "اطلاعات وارد شده صحیح نیست");
        }
        throw new Error("خطا در ثبت درخواست");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: (data) => {
      toast({
        title: "درخواست ثبت شد",
        description: "در حال انتقال به واتس‌اپ برای تکمیل فرآیند...",
        className: "bg-primary text-primary-foreground font-sans",
      });
      
      // WhatsApp redirection logic
      const message = `سلام 👋
من درخواست ${data.requestType === 'Program' ? 'برنامه ورزشی' : data.requestType === 'Class' ? 'کلاس خصوصی' : 'مشاوره'} دارم:
نام: ${data.fullName}
سن: ${data.age}
هدف: ${data.goal}
سابقه تمرین: ${data.experience}
${data.notes ? `توضیحات: ${data.notes}` : ''}`;

      const encodedMessage = encodeURIComponent(message);
      // Replace with actual gym number
      const phoneNumber = "989118323963"; 
      
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      }, 1500);
    },
    onError: (error) => {
      toast({
        title: "خطا",
        description: error.message,
        variant: "destructive",
        className: "font-sans",
      });
    },
  });
}
