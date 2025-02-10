import Image from "next/image";
import "./ProductCard.css";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import AddToCartHomePage from "../buttons/AddToCartHomePage";

const ProductCard = ({ product, idx }) => {
  return (
    <div className="ProductCard-Wrapper">
      <Link href={`/product/${product?._id}`}>
        <div className="w-full relative img-container overflow-hidden max-h-[350px]">
          <Image
            src={`/img3.jpeg`}
            alt="img"
            layout="responsive"
            width={800}
            height={500}
            className="object-cover main-img transition-opacity duration-500"
          />
          <Image
            src={`/img4.jpeg`}
            alt="Secondary Image"
            layout="responsive"
            width={800}
            height={500}
            className="object-cover second-img transition-opacity duration-500"
          />
        </div>

        <div className="mt-2">
          <h2 className="md:text-lg font-medium">{product?.title}</h2>

          <div className="flex justify-between md:flex-start items-center sm:gap-2 md:gap-x-4">
            <div className="flex flex-col xl:flex-row items-center gap-x-4">
              <p className="font-medium text-sm text-primary">
                Price: {product?.sale_price} BDT
              </p>
              <p className="hidden lg:block md:font-medium line-through text-gray-500 text-sm">
                Price: {product?.discount_price} BDT
              </p>
            </div>

            <div
              className={`${
                product?.current_status === "sale" ? "bg-primary" : "bg-red-500"
              }   text-white text-xs px-2`}
            >
              {product?.current_status}
            </div>
          </div>
        </div>
      </Link>

      {/* <div className="w-full mt-2 h-[30px] md:h-[35px]">
        <div className="cartBtn w-full h-full text-sm md:text-base">
          <AddToCartHomePage product={product} />
        </div>
      </div> */}

    </div>
  );
};

export default ProductCard;
