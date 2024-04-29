// This component imports the PackageDetails type from "../types/packageDetails"
// and defines an array called FEATURES_PACKAGES containing the names of certain packages.
// The getFeaturedPackages function asynchronously fetches data from the npm registry
// for each package listed in FEATURES_PACKAGES. It returns a Promise that resolves
// to an array of package details, each conforming to the PackageDetails type.
import type { PackageDetails } from "../types/packageDetails";

const FEATURES_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function getFeaturedPackages() {
  const promises = FEATURES_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  const data = await Promise.all(promises);

  return data as PackageDetails[];
}
