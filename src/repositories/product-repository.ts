abstract class ProductRepository {
  abstract create(
    restaurant: string,
    category: string,
    productName: string,
    productDescription: string,
    productValue: number,
    productFoto: string
  ): Promise<void>

  abstract get(
    category: string
  ): Promise<void>
}

export default ProductRepository