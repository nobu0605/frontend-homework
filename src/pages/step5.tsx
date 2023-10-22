import { ColorRadio, Color } from "../components/features/ColorRadio";
import {
  CustomerTypeRadio,
  CustomerType,
} from "../components/features/CustomerTypeRadio";
import {
  CompanySelect,
  companyMenuItems,
} from "../components/features/CompanySelect";
import { Flex } from "../components/ui/Flex";
import { useState, useEffect } from "react";
import { ProductSelect, Product } from "../components/features/ProductSelect";
import {
  DeliverySelect,
  Delivery,
} from "../components/features/DeliverySelect";
import { BranchNameTextField } from "../components/features/BranchNameTextField";
import { MemoTextField } from "../components/features/MemoTextField";
import { InvoiceRadio, Invoice } from "../components/features/InvoiceRadio";

type CompanyBranchNames = {
  [key: string]: string;
};

function Step5() {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [delivery, setDelivery] = useState<Delivery | undefined>(undefined);
  const [color, setColor] = useState<Color>(Color.Red);
  const [customerType, setCustomerType] = useState(CustomerType.Personal);
  const [companies, setCompanies] = useState("");
  const [invoice, setInvoice] = useState(Invoice.Post);
  const [memo, setMemo] = useState("");
  const companyBranchNames: CompanyBranchNames = {};

  for (const item of companyMenuItems) {
    if (typeof item.value === "string") {
      companyBranchNames[item.value] = "";
    }
  }
  const [branchNames, setBranchNames] = useState(companyBranchNames);

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
      {customerType === CustomerType.Company && (
        <>
          <CompanySelect value={companies} setValue={setCompanies} />
          <BranchNameTextField
            value={companies && branchNames[companies]}
            onChange={(e) =>
              setBranchNames({
                ...branchNames,
                [companies]: e.target.value,
              })
            }
          />
        </>
      )}
      <ProductSelect value={product} setValue={setProduct} />
      {product === Product.Flower && (
        <ColorRadio value={color} setValue={setColor} />
      )}
      <DeliverySelect
        deliveryValue={delivery}
        setDeliveryValue={setDelivery}
        productValue={product}
      />
      {customerType === CustomerType.Personal && (
        <MemoTextField value={memo} onChange={(e) => setMemo(e.target.value)} />
      )}
      {customerType === CustomerType.Company && (
        <InvoiceRadio value={invoice} setValue={setInvoice} />
      )}
    </Flex>
  );
}

export default Step5;
