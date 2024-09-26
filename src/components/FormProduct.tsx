import { FC } from 'react';

type Props = {
  price: number;
  stock: number;
  url: string;
  quantity: number;
};

export const FormProduct: FC<Props> = ({ price, stock: count, url, quantity }) => {
    return <>
      <div>寄付額：{price.toLocaleString()}</div>
      <div>在庫：{count}</div>
      <div>通常購入URL：{url}</div>
      <div>数量：{quantity}</div>
    </>;
};
