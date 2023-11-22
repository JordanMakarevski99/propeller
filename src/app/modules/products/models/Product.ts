export type Product = {
  id: string;
  name: string;
  description: string;
  featuredAsset?: {
    source: string;
  };
};

export type Query = {
  products: {
    items: Product[];
    totalItems: number;
  };
};
