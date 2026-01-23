"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center bg-background px-6 py-24 sm:py-32 lg:px-8 relative overflow-hidden container">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03] dark:opacity-[0.05]">
        <h1 className="text-[20rem] font-black tracking-tighter sm:text-[30rem]">
          404
        </h1>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="mb-6 flex justify-center">
          <Link href="/" className="inline-flex items-center gap-3 group transition-all">
            <img
              src="/favicon.svg"
              alt="logo"
              className="h-16 w-16 transition-transform group-hover:rotate-12"
            />
          </Link>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 text-lg leading-7 text-muted-foreground max-w-lg mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
    </div>
  );
}