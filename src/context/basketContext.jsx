import { createContext, useState } from "react";

//! context yapısının temelini oluştur
export const BasketContext = createContext();

//! context yapısının sağlayıcı component'ini oluşturalım
export const BasketProvider = ({ children }) => {
  // sepet state'i
  const [basket, setBasket] = useState([]);

  // sepete ürün ekle
  const addToBasket = (newproduct) => {
    // sepette aynı ürün var mı kontrol et
    const found = basket.find((i) => i.id === newproduct.id);

    if (found) {
      // ürün sepette varsa miktarını artır
      // a) bulunan ürünün miktarını 1 artır
      const updated = { ...found, amount: found.amount + 1 };

      // b) sepet dizisinde bulunan ürünü güncellenmiş ürünle değiştir
      const updatedBasket = basket.map((item) =>
        item.id === updated.id ? updated : item,
      );

      // c) sepet state'ini güncelle
      setBasket(updatedBasket);
    } else {
      // eğer ürün sepette yoksa: ürünü sepet dizisine ekle
      setBasket([...basket, { ...newproduct, amount: 1 }]);
    }
  };

  // sepetteki ürünleri kaldır
  const removeFromBasket = (productId) => {
    const found = basket.find((i) => i.id === productId);

    if (found.amount > 1) {
      //miktarı azalt
      //a) nesneyi güncelle
      const updated = { ...found, amount: found.amount - 1 };

      //b) sepet dizisini güncelle
      setBasket(basket.map((i) => (i.id === updated.id ? updated : i)));
    } else {
      // sepetten kaldır
      setBasket(basket.filter((i) => i.id !== productId));
    }
  };

  // sepetteki ürünleri temizle
  const clearBasket = () => {
    setBasket([]);
  };

  // component'lara aktarılacak verileri belirle
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
