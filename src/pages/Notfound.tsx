import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9fa]">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-[#0055d4] text-white rounded-md hover:bg-[#0055d4]/80 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
