import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Home page</div>
      <Link className="underline" href="/member">Go to member</Link>
      <Link className="underline" href="/posts">Posts</Link>
      <Link className="underline" href="/drafts">Drafts</Link>
      <Link className="underline" href="/create">Create</Link>
      <Link className="underline" href="/login">Signin</Link>
      <Link className="underline" href="/signup">Signup</Link>
    </main>
  );
}
