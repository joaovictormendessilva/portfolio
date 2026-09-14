import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24">
      <p className="font-display text-sm font-semibold text-brass">404</p>
      <h1 className="mt-3 font-display text-title font-semibold">
        This page does not exist.
      </h1>
      <p className="measure mt-4 text-muted">
        The link may be out of date, or the address may have a typo in it.
      </p>
      <Link
        href="/en"
        className="mt-8 inline-flex items-center gap-2 self-start text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft size={14} aria-hidden />
        Go to the home page
      </Link>
    </main>
  );
}
