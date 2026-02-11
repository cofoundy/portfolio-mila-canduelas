import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="text-2xl mb-4">404 - Page Not Found</h2>
      <p className="mb-4">The requested page could not be found.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-[#C4935A] text-white rounded hover:bg-[#D4A36A]"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
