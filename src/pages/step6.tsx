import { ColorRadio, Color } from "../components/features/ColorRadio";
import {
  CustomerTypeRadio,
  CustomerType,
} from "../components/features/CustomerTypeRadio";
import {
  CompanySelect,
  companyMenuItems,
} from "../components/features/CompanySelect";
import { styled } from "@mui/material";
import { useState, useEffect } from "react";
import { Flex } from "../components/ui/Flex";
import { ProductSelect, Product } from "../components/features/ProductSelect";
import {
  FormSwitchButton,
  Form,
} from "../components/features/FormSwitchButton";
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

type FullPageProps = {
  product: Product | undefined;
  setProduct: (v: Product | undefined) => void;
  customerType: CustomerType;
  setCustomerType: (v: CustomerType) => void;
};

type SimpleProps = {
  product: Product | undefined;
  setProduct: (v: Product | undefined) => void;
  customerType: CustomerType;
};

function FullPageForm({
  product,
  setProduct,
  customerType,
  setCustomerType,
}: FullPageProps) {
  const [delivery, setDelivery] = useState<Delivery | undefined>(undefined);
  const [color, setColor] = useState<Color>(Color.Red);
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

function SimpleForm({ product, setProduct }: SimpleProps) {
  return (
    <Flex $direction="column" $gap="16px">
      <ProductSelect value={product} setValue={setProduct} />
    </Flex>
  );
}

function Step6() {
  const [formType, setFormType] = useState<Form>(Form.Simple);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [customerType, setCustomerType] = useState(CustomerType.Personal);

  return (
    <Flex $direction="column" $gap="16px">
      {product && (
        <Flex content="center">
          <StyledProductImage src={`/img/${product}.png`} alt="" />
        </Flex>
      )}
      <Flex $content="space-between" $gap="10px">
        <Flex $gap="10px">
          <span>Order Form</span>
          {formType === Form.Simple && (
            <StyledCustomerTypeSpan>{customerType}</StyledCustomerTypeSpan>
          )}
        </Flex>
        <FormSwitchButton
          onClick={() =>
            setFormType(formType === Form.Simple ? Form.FullPage : Form.Simple)
          }
          formType={formType}
        />
      </Flex>
      {formType === Form.Simple && (
        <SimpleForm
          {...{
            product,
            setProduct,
            customerType,
          }}
        />
      )}
      {formType === Form.FullPage && (
        <FullPageForm
          {...{
            product,
            setProduct,
            customerType,
            setCustomerType,
          }}
        />
      )}
    </Flex>
  );
}

const StyledProductImage = styled("img")`
  width: 200px;
  height: 200px;
`;

const StyledCustomerTypeSpan = styled("span")`
  color: gray;
`;

export default Step6;
