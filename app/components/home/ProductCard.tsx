import { Rating } from "@mui/material"
import Image from "next/image"

const ProductCard = ({product}: {product: any}) => {
  return (
    <div className="bg-red-500 w-[240px] cursor-pointer flex flex-col flex-col-1 shadow-lg p-2 rounded-md">
      <div className="relative h-[200px]">
        <Image src={product.image} fill alt="" className="object-contain"></Image>
      </div>
      <div className="text-center mt-2 space-y-1">
        <div>{product.name}</div>
        <Rating name="read-only" value={4} readOnly />
        <div className="text-orange-600 font-bold text-lg md:text-xl">
          {product.price} TL
        </div>
      </div>
    </div>
  ) 
}

export default ProductCard