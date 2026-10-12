import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-slate md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © 2026 {profile.displayName}. Built with Next.js & TypeScript.
        </p>
        <p>{profile.title}</p>
      </div>
    </footer>
  );
}