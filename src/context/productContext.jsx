import axios from "axios";
import { createContext, useEffect, useState } from "react";

/*
! Context API | useContext
* Uygulamada birden çok bileşenin ihtiyacı olan verileri bileşenlerden bağımsız merkezlerde yönetmek için kullanırız.
* Context yapısı içerisinde state'leri ve state'leri güncelleyen fonksiyonları tanımlarız.
*Context, tuttuğumuz state'leri bileşenlere doğrudan aktarım yapabilen state yönetim aracıdır.
*/

//! Context oluşturma
export const ProductContext = createContext();

//! Context sağlayıcı component'ini oluşturma (HOC)
export const ProductProvider = ({ children }) => {
  // context yapısında tutulan state'ler
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bileşen ekrana basılınca:
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  // value prop'uyla sağlayıcı context yapısından diğer compenent'lere aktarmak istediğiniz verileri belirleyebilirsiniz.

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
