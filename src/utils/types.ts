export interface Product {
    sku: string,
    name: string,
    category: string,
    description: string,
    stock: number
}

export interface ProductWithId extends Product {
    id: string
}