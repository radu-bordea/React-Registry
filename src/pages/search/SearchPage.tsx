// Importing necessary type definition for SearchLoaderResult
import type { SearchLoaderResult } from "./searchLoader";
// Importing hook to access loader data from React Router
import { useLoaderData } from "react-router-dom";
// Importing PackageListItem component to render individual package items
import PackageListItem from "../../components/PackageListItem";

// Component for rendering search results page
export default function SearchPage() {
  // Extracting searchResults from loader data
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  // Rendering search results as PackageListItem components
  const renderedResults = searchResults.map((result) => {
    return <PackageListItem pack={result} key={result.name} />;
  });

  return (
    <div>
      {/* Heading for search results */}
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      {/* Container for rendered search results */}
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}
