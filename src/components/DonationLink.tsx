import { FC } from 'react';
import styled from 'styled-components';

type Props = {
    url: string;
};

const DonationLinkWrapper = styled.a`
    color: #ee6834;
    display: flex;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    .icon {
        display: block;
        position: relative;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 2px solid #ee6834;
        margin-right: 8px;
        background: #fff;
        &:before {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            border-left: 2px solid #ee6834;
            border-top: 2px solid #ee6834;
            margin: auto;
            left: 2px;
            right: 0;
            top: 0;
            bottom: 0;
            transform: rotate(-45deg);
        }
    }
`;

export const DonationLink: FC<Props> = ({ url }) => {
    return <>
        {(() => {
            if(url.length > 0){
                return <DonationLinkWrapper href={url}>
                    <span className='icon'></span>通常購入に戻る
                    </DonationLinkWrapper>
            }
        })()}
    </>;
};
