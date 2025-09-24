export interface ProductCategory {
  id: string;
  name: string;
  description: string;
}

export interface ProductSpecifications {
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: ProductSpecifications;
  inStock: boolean;
  featured: boolean;
  rating: number;
}

export interface ProductData {
  categories: ProductCategory[];
  products: Product[];
}