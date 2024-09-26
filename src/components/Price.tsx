import { FC } from 'react';
import styled from 'styled-components';

type Props = {
    price: number;
};

const Column = styled.div`
    margin-bottom: 16px;
    .label {
        font-size: 14px;
        color: #6b6b6b;
    }
    .price {
        font-size: 18px;
        font-weight: bold;
    }
    .free_shipping {
        font-size: 12px;
        margin-left: 4px;
        font-weight: bold;
    }
    .red {
        font-size: 14px;
        color: red;
        margin: 8px 0 0;
    }
`;

export const Price: FC<Props> = ({ price }) => {
    return <>
        <Column>
            <div>
                <span className="label">寄付額：</span>
                <span className='price'>{ price.toLocaleString() }円</span>
                <span className='free_shipping'>送料無料</span>
            </div>
            <p className='red'>何回お礼の品をもらっても実質年間2,000円の負担</p>
        </Column>
    </>;
};
