import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold text-secondary mb-3 text-center">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-center max-w-md text-primary">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-secondary rounded-md"
      >
        Go Back Home
      </Link>
    </div>
  );
}
