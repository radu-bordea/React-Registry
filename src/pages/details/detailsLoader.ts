// This component imports Params type from "react-router-dom" and PackageDetails type
// from "../../api/types/packageDetails". It also imports the getPackage function from
// "../../api/queries/getPackage". It defines an interface LoaderArgs with a params property
// of type Params, and an interface DetailsLoaderResults with a details property of type PackageDetails.
// The detailsLoader function takes an object destructured from LoaderArgs as an argument and
// asynchronously fetches package details using the getPackage function. It then returns
// an object with the fetched details wrapped in a Promise.
import type { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/packageDetails";
import { getPackage } from "../../api/queries/getPackage";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResults {
    details: PackageDetails
}

export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderResults> {
  const { name } = params;

  if (!name) {
    throw new Error("Name must be provided");
  }
  const details = await getPackage(name);

  return {
    details,
  };
}
