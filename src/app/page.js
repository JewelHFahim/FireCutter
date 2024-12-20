import ProductCard from "@/components/card/ProductCard";
import SuggestionProductCard from "@/components/card/SuggessionProductCard";
import FilterSort from "@/components/filter/FilterSort";
import Pagination from "@/components/pagination/Pagination";

const Home = () => {
  return (
    <div className="">
      <FilterSort />

      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-x-5 gap-y-8">
        {[...Array(9)].map((product, idx) => (
          <ProductCard
            key={idx}
            product={product}
          />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default Home;
