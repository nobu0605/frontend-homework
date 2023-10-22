import { useState, useEffect } from "react";
import { Flex } from "../components/ui/Flex";
import { ProductSelect, Product } from "../components/features/ProductSelect";
import {
  DeliverySelect,
  Delivery,
} from "../components/features/DeliverySelect";

function Step1() {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [delivery, setDelivery] = useState<Delivery | undefined>(undefined);

  useEffect(() => {
    setDelivery(undefined);
  }, [product]);

  return (
    <Flex $direction="column" $gap="16px">
      <span>Order Form</span>
      <ProductSelect value={product} setValue={setProduct} />
      <DeliverySelect deliveryValue={delivery} setDeliveryValue={setDelivery} />
    </Flex>
  );
}

export default Step1;
