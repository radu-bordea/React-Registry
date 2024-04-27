// Importing necessary type definition for PackageSummary
import type { PackageSummary } from "../../api/types/packageSummary";
// Importing the searchPackages function from the API queries
import { searchPackages } from "../../api/queries/searchPackages";

// Interface representing the result of the search loader
export interface SearchLoaderResult {
  searchResults: PackageSummary[]; // Array of package summaries
}

// Async function to load search results
export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided");
  }

  const results = await searchPackages(term);

  return {
    searchResults: results,
  };
}
