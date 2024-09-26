import { FC } from 'react';

type Props = {
    stock: number;
};

export const Stock: FC<Props> = ({ stock }) => {
    let stockText;
    return <>
       {(() => {
        if(stock > 5){
            stockText = stock + ' 個';
        }else if(stock > 0){
            stockText = '残りわずか。寄付はお早めに';
        }else{
            stockText = '品切れ';
        }
        return stockText;
        })()}
    </>;
};