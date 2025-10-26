CREATE TABLE "answer" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" text NOT NULL,
	"temperature" numeric NOT NULL,
	"top_p" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"question_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "answer" ADD CONSTRAINT "answer_question_id_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."question"("id") ON DELETE cascade ON UPDATE no action;