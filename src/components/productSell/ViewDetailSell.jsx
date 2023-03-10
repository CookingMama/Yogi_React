import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getDetailProduct } from "../store/productSell/detailProductSellSlice";
import { getProduct } from "../store/productSell/productSellSlice";

const ViewDetailSell = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.detailProduct);
  //   const location = useLocation();
  const param = useParams();
  console.log(param);
  useEffect(() => {
    dispatch(getDetailProduct(param.id));
  }, []);

  return (
    <div className="bg-white whitespace-nowrap">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          {data.title}
        </h2>

        <div className="mt-6 flex justify-center">
          {console.log(data)}
          <div className="group relative w-1/3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
              <img
                src={data.url}
                alt={data.url}
                className="h-full w-full object-fill"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-gray-500">
                  {data.sellerNickName}
                </p>
                <p className="mt-1 text-sm text-gray-500">{data.category}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailSell;
