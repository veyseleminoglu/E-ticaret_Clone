import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const BasketInfo = () => {
  const { basket, clearBasket } = useContext(BasketContext);

  //sepetteki toplam ürün adedini hesapla
  const totalAmount = basket.reduce((total, item) => total + item.amount, 0);

  //sepetteki toplam fiyatı hesapla
  const totalPrice = basket.reduce(
    (total, item) => total + item.amount * item.price,
    0,
  );

  return (
    <div className="border p-4 rounded-md text-lg lg:min-w-70 h-fit">
      <h2 className="text-xl font-semibold mb-4">Sepet Özeti</h2>
      <p className="flex gap-3">
        <span>Toplam Ürün: {totalAmount} adet</span>
      </p>
      <p className="flex gap-3">
        <span>Toplam Fiyat: {totalPrice.toFixed(2)} ₺</span>
      </p>

      <button
        onClick={clearBasket}
        className="border w-full mt-5 cursor-pointer"
      >
        Ödeme Yap
      </button>
    </div>
  );
};

export default BasketInfo;
