import Image from "next/image";
import "./ProductCard.css";
import Link from "next/link";

const SuggestionProductCard = ({ product }) => {


  return (
    <Link href="/product/1">
      <div className="relative img-container overflow-hidden">
        <Image
          src="/img2.webp"
          alt="Main Image"
          width={250}
          height={250}
          layout="responsive"
          className="object-cover main-img transition-opacity duration-500"
        />
        <Image
          src="/img1.webp"
          alt="Secondary Image"
          fill
          className="object-cover second-img transition-opacity duration-500"
        />
      </div>

      <div className="mt-2">
        <h2 className="text-sm sm:text-base sm:font-medium">Winter Jacket</h2>
        <div className="flex items-center gap-3 text-sm sm:font-medium">
          <p className="text-primary">Tk: 1500 BDT</p>
          {/* <p className="line-through text-gray-500">
            Tk: 1800 BDT
          </p> */}

          {/* <div className="bg-primary text-white text-xs px-2">Sale</div> */}
        </div>
      </div>
    </Link>
  );
};

export default SuggestionProductCard;
