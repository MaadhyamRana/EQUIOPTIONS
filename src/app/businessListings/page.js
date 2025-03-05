import Link from 'next/link';

export default function BusinessListings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-700 text-gray-300">
      <h1 className="text-3xl font-bold">Sample</h1>
      <p className="mt-2 text-lg">Business Listings Page</p>
      <Link href="/" className="mt-4 hover:underline">
        To Home
      </Link>
      <Link href="/businessProfile" className="mt-4 hover:underline">
        To Sample Profile Page
      </Link>
    </main>
  );
}