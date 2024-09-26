import { FC, useState } from "react";
import { FormProduct } from "./components/FormProduct";
import { ButtonFunction } from "./components/ButtonFunction";
import styled from 'styled-components';
import { Quantity } from "./components/Quantity";
import { Price } from "./components/Price";
import { Stock } from "./components/Stock";
import { DonationLink } from "./components/DonationLink";

const InputWrapper = styled.div`
  margin-bottom: 16px;

  > .label {
    display: inline-flex;
    align-items: center;

    > .text {
      margin-right: 8px;
      &.-small {
        font-size: .8em;
      }
    }

    > .input {
      padding: 8px 16px;
    }
  }
`;
const ViewWrapper = styled.div`
  background: #f6f6f6;
  margin: 20px 0;
  padding: 16px;
  select {
    padding: 14px 16px;
    margin-right: 16px;
  }
  .label {
      font-size: 14px;
      color: #6b6b6b;
  }
  .column {
    margin-bottom: 16px;
  }
`;

export const App: FC = () => {
  const [price, setPrice] = useState(10000);
  const [stock, setStock] = useState(10);
  const [quantity, setQuantity] = useState(1);
  const [url, setUrl] = useState('index.html');

  return (<>
    <InputWrapper>
      <label className="label">
        <span className="text">お礼の品の金額</span>
        <input className="input" type="number" value={price} onChange={(event) => {
          setPrice(Number(event.currentTarget.value));
        }} />
      </label>
    </InputWrapper>
    <InputWrapper>
      <label className="label">
        <span className="text">お礼の品の在庫</span>
        <input className="input" type="number" value={stock} onChange={(event) => {
          setStock(Number(event.currentTarget.value));
        }} />
      </label>
    </InputWrapper>
    <InputWrapper>
      <label className="label">
        <span className="text">通常購入のURL</span>
        <input className="input" type="url" value={url} onChange={(event) => {
          setUrl(event.currentTarget.value);
        }} />
      </label>
    </InputWrapper>

    <ViewWrapper>
      <Price price={price * quantity}></Price>
      <div className="column">
        <span className="label">在庫：</span>
        <span><Stock stock={stock}></Stock></span>
      </div>
      <div className="column">
        <span className="label">数量：</span>
        <select onChange={(event) => {
              setQuantity(Number(event.currentTarget.value));
            }}>
              {/* TODO: keyつける */}
          <Quantity count={stock}></Quantity>
        </select>
        <ButtonFunction text="ふるさと納税でもらう" className="" fuction={undefined}  />
        
      </div>
      <div className="column">
        <DonationLink url={url}/>
      </div>
    </ViewWrapper>

    <FormProduct price={price * quantity} stock={stock - quantity} url={url} quantity={quantity}/>
  </>)
};
