// Importing necessary type definition for PackageSummary
import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

// Props interface for PackageListItem component
interface PackageListItemProps {
  pack: PackageSummary; // Package summary object
}

// Component to render a single package item
export default function PackageListItem({ pack }: PackageListItemProps) {
  // Function to render keywords of a package
  const renderedKeywords = (pack.keywords || []).map((keyword) => {
    return (
      <div
        key={keyword}
        className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
      >
        {keyword}
      </div>
    );
  });

  return (
    // Container for a package item
    <div className="border p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        {/* Link to the package details */}
        <Link to={`/packages/${pack.name}`} className="text-xl font-bold">
          {pack.name}
        </Link>
        {/* Description of the package */}
        <p className="text-sm text-gray-500">{pack.description}</p>
        {/* Rendered keywords of the package */}
        <div className="flex gap-1">{renderedKeywords}</div>
      </div>
      {/* Button to view package details */}
      <div className="mr-6">
        <Link
          to={`/packages/${pack.name}`}
          className="py-2 px-3 rounded bg-black text-white text-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
