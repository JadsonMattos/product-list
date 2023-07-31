export type ProductType = {
  id:number,
  title: string,
  price: number,
  image: string,
};

export type ProductProps = {
  productInfo: ProductType;
};
