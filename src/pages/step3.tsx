import { ProductSelect, Product } from "../components/features/ProductSelect";
import { Flex } from "../components/ui/Flex";
import { useState, useEffect } from "react";
import {
  DeliverySelect,
  Delivery,
} from "../components/features/DeliverySelect";
import { ColorRadio, Color } from "../components/features/ColorRadio";

function Step3() {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [delivery, setDelivery] = useState<Delivery | undefined>(undefined);
  const [color, setColor] = useState<Color>(Color.Red);

  useEffect(() => {
    setDelivery(undefined);
  }, [product]);

  return (
    <Flex $direction="column" $gap="16px">
      <span>Order Form</span>
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

export default Step3;
