import React, {useContext} from 'react'
import CreditCard  from '../CreditCard/CreditCard';
import { LargeText,  } from '../Subscription/Subscription';
import  TotalPrice  from '../TotalPrice/TotalPrice';
import { AppContext } from '../../App.js'
import styled from 'styled-components';

const Payment = () => {
    const { GB, months, totalPrice } = useContext(AppContext);

    return (
        <PaymentContainer>
            <TopPaymentContainer>
                <LargeText style={{marginTop: 50,fontSize:'32px', marginLeft: '60px', textAlign: 'left', marginBottom: 0}}>
                    Fill out credit card information
                </LargeText>
                <div style={{paddingTop:50}}>
                    <TotalPrice  price={totalPrice} months={months} GB={GB} />
                </div>
            </TopPaymentContainer>

            <CreditCardContainer>
                <CreditCard/>
            </CreditCardContainer>
        </PaymentContainer>
    )
}

const TopPaymentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    width:90%;
    align-content: center;
    margin-bottom: 50px;
`

const CreditCardContainer = styled.div`
    justify-content: space-around; 
    flex-direction: row;
    display: flex;
    align-content: center;
    align-items: center;
`

const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width: 90%; 
    height: 98vh;
    justify-content: start;
    align-content: center;
    border: 1px;
    align-self: center;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    background-color: #fff;

`

export default Payment;