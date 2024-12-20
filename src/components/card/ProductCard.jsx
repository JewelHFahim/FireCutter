import Image from "next/image";
import "./ProductCard.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href="/product/1" className="">
      <div className="w-full relative img-container overflow-hidden">
        <Image
          src="/img2.webp"
          alt="img"
          layout="responsive"
          width={800}
          height={500}
          className="object-cover main-img transition-opacity duration-500"
        />
        <Image
          src="/img1.webp"
          alt="Secondary Image"
          layout="responsive"
          width={800}
          height={500}
          className="object-cover second-img transition-opacity duration-500"
        />
      </div>

      <div className="mt-2">
        <h2 className="md:text-lg font-medium">Winter Jacket</h2>

        <div className="flex justify-between md:flex-start items-center sm:gap-2 md:gap-x-4">
          <div className="flex flex-col xl:flex-row items-center gap-x-4">
            <p className="font-medium text-sm text-primary">Price: 1500 BDT</p>
            <p className="hidden lg:block md:font-medium line-through text-gray-500 text-sm">
              Price: 1800 BDT
            </p>
          </div>

          <div className="bg-primary text-white text-xs px-2">Sale</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
