// This component imports PackageDetails type from "../../api/types/packageDetails"
// and the getFeaturedPackages function from "../../api/queries/getFeaturePackages".
// It defines an interface HomeLoaderResults with a featuredPackages property
// of type array of PackageDetails. The homeLoader function asynchronously fetches
// featured packages using the getFeaturedPackages function and returns an object
// with the fetched featured packages wrapped in a Promise.
import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturePackages";

export interface HomeLoaderResults {
  featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResults> {
  const featuredPackages = await getFeaturedPackages();

  return {
    featuredPackages,
  };
}
