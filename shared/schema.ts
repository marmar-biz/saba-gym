import { pgTable, text, serial, integer, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  age: text("age").notNull(), // text to allow "25 years" etc
  height: text("height").notNull(),
  weight: text("weight").notNull(),
  goal: text("goal").notNull(),
  experience: text("experience").notNull(),
  sportsHistory: text("sports_history").notNull(),
  injuries: text("injuries"),
  requestType: text("request_type").notNull(), // Program, Class, Consultation
  sessionsPerWeek: text("sessions_per_week"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ 
  id: true, 
  createdAt: true 
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
