import Image from "next/image"

const ProductCard = ({product}: {product: any}) => {
  return (
    <div className="w-[240px] shadow-lg p-2 rounded-md">
      <div className="relative h-[200px]">
        <Image src={product.image} fill alt="" className="object-contain"></Image>
      </div>
      <div className="text-center mt-2">
        <div>{product.name}</div>
        <div>{product.price} TL</div>
        <div>{product.description}</div>
        <div>{product.brand}</div>
        <div>{product.category}</div>
      </div>
    </div>
  ) 
}

export default ProductCard