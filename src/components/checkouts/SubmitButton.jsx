const SubmitButton = ({products}) => {

  return (
    <div className="mt-10 w-full">
      <button disabled={products?.length  > 0 ? false : true} type="submit" className="text-lg font-medium h-[54px] bg-blue-950 disabled:bg-gray-600 text-white w-full rounded-md hover:bg-gray-800 transition-all duration-150">
        Complete order
      </button>
    </div>
  );
};

export default SubmitButton;
