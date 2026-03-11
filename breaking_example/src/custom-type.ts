import { ParcelSchema } from "./gen";
import { ProductDetailsSchema } from "./gen";

// Example of using the generated inferred types
export type CustomType = {
  parcel: ParcelSchema;
  productDetails: ProductDetailsSchema;
};
