import Link from 'next/link';

// Common button classes
const buttonBaseClass = "flex-1 inline-flex justify-center items-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
const primaryButtonClass = `${buttonBaseClass} border-transparent text-white bg-blue-600 hover:bg-blue-700`;
const secondaryButtonClass = `${buttonBaseClass} border-gray-300 text-gray-700 bg-white hover:bg-gray-50`;

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          Supply Chain Item Tracker
        </h1>
        <p className="text-gray-600">
          Track and monitor your supply chain items
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
        <Link
          href="/items"
          className={secondaryButtonClass}
        >
          View Items
        </Link>

        <Link
          href="/items/new"
          className={primaryButtonClass}
        >
          Add New Item
        </Link>
      </div>
    </div>
  );
}
