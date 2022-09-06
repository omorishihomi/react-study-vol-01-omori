import { FC, useState } from 'react';
import styled from 'styled-components';
import { FormProduct } from "./FormProduct";

type Props = {
    count: number;
};

export const Quantity: FC<Props> = ({ count}) => {
    // const [quantity, setQuantity] = useState(selectedQuantity);
    // const countQuantity = (event: { currentTarget: { value: any; }; }) => {
    //     setQuantity(Number(event.currentTarget.value));

    // };
    let keyCount = 0;
    return <>
       {(() => {
        const items = [];
        for (let i = 0; i < count; i++) {
            const selectedQuantity = i + 1;
            items.push(<option key={keyCount}>{selectedQuantity}</option>);
            keyCount++;
        }
        return items;
        })()}
    </>;
};