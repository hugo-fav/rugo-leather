// centralized product dataset; future-proof for fetching from API or CMS
export interface ProductData {
  name: string;
  price: string;
  image: string;
}

export const products: ProductData[] = [
  {
    name: "Zuri Leather Sandal",
    price: "₦45,000",
    image: "/product-1.jpg",
  },
  {
    name: "Kano Slide",
    price: "₦32,000",
    image: "/product-2.jpg",
  },
  {
    name: "Oba Classic Loafer",
    price: "₦68,000",
    image: "/product-3.jpg",
  },
];
