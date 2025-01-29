import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination = ({orderList, page, setPage}) => {

    const handlePageination = (value) => {
        if (value === "dec" && page > 1) {
          setPage(page - 1);
        }
        if (value === "inc" && page < orderList?.totalPage) {
          setPage(page + 1);
        }
      };

  return (
    <div className="w-full flex items-center justify-between px-4 py-1">
          <p className="text-sm text-gray-700 italic">
            Total- {orderList?.totalOrders} orders
          </p>

          <div className="flex items-center gap-6 text-lg text-gray-500">
            <button
              onClick={() => handlePageination("dec")}
              disabled={page > 1 ? false : true}
              className="disabled:text-gray-300 hover:text-primary"
            >
              <MdOutlineArrowBackIos />
            </button>
            <p className="text-sm">
              {orderList?.currentPage} of {orderList?.totalPage} page
            </p>
            <button
              onClick={() => handlePageination("inc")}
              disabled={page < orderList?.totalPage ? false : true}
              className=" disabled:text-gray-300 hover:text-primary"
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
  );
};

export default Pagination;
