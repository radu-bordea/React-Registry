// This component imports the PackageDetails type from "../types/packageDetails"
// and defines a function called getPackage. This function asynchronously fetches
// data from the npm registry for a specific package specified by the 'name' parameter.
// It returns a Promise that resolves to the package details, conforming to the PackageDetails type.
import { PackageDetails } from "../types/packageDetails";

export async function getPackage(name: string): Promise<PackageDetails> {
  const res = await fetch(`https://registry.npmjs.org/${name}`);
  const data = await res.json();

  return data as PackageDetails;
}
