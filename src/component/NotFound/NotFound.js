import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-2">Page Not Found</p>
        <p className="mt-4">
          <a href="/" className="text-blue-500 hover:underline">
            Go back to Home
          </a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
