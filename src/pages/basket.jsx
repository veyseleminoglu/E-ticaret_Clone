import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/basketItem";
import BasketInfo from "../components/basketInfo";

const Basket = () => {
  // basket context'e abone olup sepet verisine eriş
  const { basket, clearBasket } = useContext(BasketContext);

  return (
    <div className="container">
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Sepetiniz</h1>

        {basket.length > 0 && (
          <button
            onClick={clearBasket}
            className="bg-zinc-600 text-white py-1 px-4 rounded-md cursor-pointer"
          >
            Sepeti Temizle
          </button>
        )}
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        <div className="grid gap-5 flex-1">
          {basket.length === 0 ? (
            <p className="text-center my-40 text-xl grid gap-5">
              <span>Sepetiniz boş.</span>
              <Link to="/" className="text-blue-500 underline">
                Ürünler'e Git
              </Link>
            </p>
          ) : (
            basket.map((product) => (
              <BasketItem key={product.id} product={product} />
            ))
          )}
        </div>
        <BasketInfo />
      </div>
    </div>
  );
};

export default Basket;
