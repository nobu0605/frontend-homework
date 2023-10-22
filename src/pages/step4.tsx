import {
  CustomerTypeRadio,
  CustomerType,
} from "../components/features/CustomerTypeRadio";
import { ColorRadio, Color } from "../components/features/ColorRadio";
import {
  DeliverySelect,
  Delivery,
} from "../components/features/DeliverySelect";
import { ProductSelect, Product } from "../components/features/ProductSelect";
import { Flex } from "../components/ui/Flex";
import { useState, useEffect } from "react";

function Step4() {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [delivery, setDelivery] = useState<Delivery | undefined>(undefined);
  const [color, setColor] = useState<Color>(Color.Red);
  const [customerType, setCustomerType] = useState(CustomerType.Personal);

  useEffect(() => {
    // Companyの場合だけProductを変更しても配送方法は未選択に戻されない。
    if (customerType === CustomerType.Company) {
      if (product === Product.Car && delivery === Delivery.Ships) {
        // car選択時にshipsはdisabledなので、強制的にpickUpにする。
        setDelivery(Delivery.PickUp);
      }
      return;
    }

    setDelivery(undefined);
  }, [product]);

  return (
    <Flex $direction="column" $gap="16px">
      <span>Order Form</span>
      <CustomerTypeRadio value={customerType} setValue={setCustomerType} />
      <ProductSelect value={product} setValue={setProduct} />
      {product === Product.Flower && (
        <ColorRadio value={color} setValue={setColor} />
      )}
      <DeliverySelect
        deliveryValue={delivery}
        setDeliveryValue={setDelivery}
        productValue={product}
      />
    </Flex>
  );
}

export default Step4;
