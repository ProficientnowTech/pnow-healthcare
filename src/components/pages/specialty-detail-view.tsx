"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SpecialtyDetail } from "@/data/specialty-details";
import { ArrowRight, Sparkles } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type SpecialtyDetailViewProps = {
  specialty: SpecialtyDetail;
};

export function SpecialtyDetailView({ specialty }: SpecialtyDetailViewProps) {
  return (
    <main className="min-h-screen bg-white text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
          <motion.div
            className="absolute -right-10 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-[140px]"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/25 blur-[120px]"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.div
            className="absolute right-1/3 top-1/2 h-72 w-72 rounded-full bg-purple-500/25 blur-[110px]"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="container relative grid gap-12 pt-[70px] pb-20 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:pt-32 lg:pb-28">
          <div className="space-y-7">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-blue-200" />
              {specialty.name}
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ duration: 0.6 }}
              style={{
                background:
                  "linear-gradient(to bottom right, #fff, #93c5fd, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {specialty.heroTitle}
            </motion.h1>

            <motion.p
              className="text-lg text-blue-100/85 lg:text-xl"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {specialty.heroSubtitle}
            </motion.p>

            <motion.p
              className="text-base text-blue-100/75 max-w-4xl leading-relaxed"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              {specialty.summary}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {specialty.keyPoints.map((point) => (
                <Badge
                  key={point}
                  variant="secondary"
                  className="border border-white/10 bg-white/10 text-white"
                >
                  {point}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <Button
                className="group relative overflow-hidden px-6 py-3 text-base font-semibold shadow-xl shadow-blue-500/30"
                asChild
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Talk with us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/15"
                asChild
              >
                <Link href="/specialties">Back to specialties</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
            <div className="relative space-y-4">
              <p className="text-sm font-semibold text-blue-100/80">
                Why teams choose us
              </p>
              <ul className="space-y-3 text-sm text-blue-100/80">
                {specialty.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-blue-100/70">
                All services are delivered under HIPAA-compliant workflows with
                structured QA before delivery.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0">
          <svg
            className="w-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 8.33C120 16.7 240 33.3 360 41.7C480 50 600 50 720 45C840 40 960 30 1080 28.3C1200 26.7 1320 33.3 1380 36.7L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="container space-y-8 py-16 lg:py-24">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-blue-700">
              Deep specialty coverage
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Documentation-driven coding for {specialty.name}
            </h2>
            <p className="max-w-4xl text-base text-slate-600">
              Each section below mirrors the operational needs outlined for this
              specialty so your team can see how we work end-to-end.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {specialty.sections.map((section) => (
              <Card key={section.title} className="h-full border-slate-200">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  {section.paragraphs?.length ? (
                    <CardDescription className="space-y-2 text-slate-600">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </CardDescription>
                  ) : null}
                </CardHeader>
                {section.bullets?.length ? (
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
