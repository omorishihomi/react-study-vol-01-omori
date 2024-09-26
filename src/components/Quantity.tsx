import { FC } from 'react';

type Props = {
    count: number;
};

export const Quantity: FC<Props> = ({ count}) => {
    let keyCount = 0;
    return <>
       {(() => {
        const items = [];
        for (let i = 0; i < count; i++) {
            const selectedQuantity = i + 1;
            if (i < 10) {
                items.push(<option key={keyCount}>{selectedQuantity}</option>);
                keyCount++;
            }
        }
        return items;
        })()}
    </>;
};