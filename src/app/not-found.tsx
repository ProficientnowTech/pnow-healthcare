"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />

      {/* Floating glows */}
      <motion.div
        className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-200/70 blur-[120px]"
        variants={pulse}
        animate="animate"
      />
      <motion.div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/70 blur-[140px]"
        variants={pulse}
        animate="animate"
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-blue-700 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-500" />
            Page not found
          </div>
          <h1 className="text-5xl font-bold md:text-6xl">
            Lost in the charts.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500">
              Let’s get you back on track.
            </span>
          </h1>
          <p className="text-lg text-slate-600 md:text-xl max-w-3xl mx-auto">
            The page you’re looking for doesn’t exist, has been moved, or never got coded. Use the compass below to return to safety.
          </p>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.div
            className="absolute h-48 w-48 rounded-full border border-blue-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute h-64 w-64 rounded-full border border-blue-200"
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-blue-50 backdrop-blur-2xl border border-blue-100 shadow-2xl shadow-blue-200/60">
            <Compass className="h-14 w-14 text-blue-600" />
          </div>
        </motion.div>

        {/* 3D-ish floating tiles */}
        <div className="grid gap-4 sm:grid-cols-3">
          {["/images/404-cube-1", "/images/404-cube-2", "/images/404-cube-3"].map(
            (key, idx) => (
              <motion.div
                key={key}
                className="relative h-24 w-24 sm:h-28 sm:w-28"
                initial={{ opacity: 0, y: 10, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.15 * idx, duration: 0.6 }}
              >
                <motion.svg
                  viewBox="0 0 120 120"
                  className="h-full w-full"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <defs>
                    <linearGradient id={`face-${idx}-1`} x1="0" x2="1" y1="0" y2="1">
                      <stop stopColor="#e0f2fe" />
                      <stop offset="1" stopColor="#bfdbfe" />
                    </linearGradient>
                    <linearGradient id={`face-${idx}-2`} x1="0" x2="1" y1="1" y2="0">
                      <stop stopColor="#dbeafe" />
                      <stop offset="1" stopColor="#c7d2fe" />
                    </linearGradient>
                    <linearGradient id={`face-${idx}-3`} x1="0" x2="1" y1="0" y2="1">
                      <stop stopColor="#bae6fd" />
                      <stop offset="1" stopColor="#a5b4fc" />
                    </linearGradient>
                  </defs>
                  <g>
                    <path d="M60 10 L105 40 L60 70 L15 40 Z" fill={`url(#face-${idx}-1)`} />
                    <path d="M60 70 L105 40 L105 90 L60 120 Z" fill={`url(#face-${idx}-2)`} />
                    <path d="M60 70 L15 40 L15 90 L60 120 Z" fill={`url(#face-${idx}-3)`} />
                  </g>
                </motion.svg>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Button
            asChild
            className="rounded-2xl px-6 py-3 text-base font-semibold shadow-lg bg-blue-600 hover:bg-blue-700"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-2xl border border-blue-200 bg-white/80 text-blue-700 hover:bg-white px-6 py-3 text-base font-semibold shadow-lg"
          >
            <Link href="/contact">Contact Support</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
