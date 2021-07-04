import React, { useState, useContext } from 'react'
import { LargeText, Button } from '../Subscription/Subscription';
import Checkbox from '@material-ui/core/Checkbox';
import {TextField} from '@material-ui/core';
import TotalPrice  from '../TotalPrice/TotalPrice';
import { AppContext } from '../../App.js'
import styled from 'styled-components';

const Confirmation = () => {
    const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState('');
    const { GB, months, totalPrice} = useContext(AppContext);

    const onSubmit = async (e) => {
        e.preventDefault()
        const rawResponse = await fetch('https://httpbin.org/post', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              userEmail: email,
              termsAgreed: checked,
              gigabytes: GB,
              months: months,
              price: totalPrice
          })
        });
        const content = await rawResponse.json();
        console.log(content);
    }
    return (
    <ConfirmationContainer>
        <TopConfirmationContainer>
            <LargeText style={{fontSize:'32px', marginLeft: '60px',
            marginTop:60, textAlign: 'left', marginBottom: 0}}>
                Confirm your payment
            </LargeText>
            <div style={{paddingTop:50}}>
                <TotalPrice price={totalPrice} months={months} GB={GB}/>
            </div>
        </TopConfirmationContainer>

        <ConfirmationFormContainer>
            <form onSubmit={(e,data)=>onSubmit(e, data)}>
                <EmailField>
                    <Label>Enter your email:</Label>
                    <TextField 
                      required
                      label='Email'
                      id="outlined-size-smallfasdf"
                      variant="outlined"
                      size="small"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </EmailField>
                <TermsField>
                    <Checkbox
                          checked={checked}
                          onChange={event=>setChecked(event.target.checked)}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                          required
                          name="agree"
                        />
                    <TermsText>Agree with Terms and Conditions</TermsText>
                </TermsField>
                <div style={{width: 100}}>
                    <Button type="submit">Confirm</Button>
                </div>
                </form>
            
        </ConfirmationFormContainer>
    </ConfirmationContainer>
    )
}

const TermsField = styled.div`
    display: flex;
    justify-content: center; 
    margin-bottom: 10px;
`

const EmailField = styled.div`
    display: flex; 
    flex-direction: column;
    margin-bottom: 10px;
`

const Label = styled.p`
    line-height: 35px; 
    text-align: left; 
    margin-bottom: 0px;
`
const TermsText = styled.p`
    vertical-align: middle;
    line-height: 35px;
    margin-top:15px;
`

const ConfirmationFormContainer = styled.div`
justify-content: space-evenly; 
flex-direction: row; 
display: flex;
align-content: center; 
align-items: center;
`

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 98vh;
    align-content: center;
    justify-content: flex-start;
    align-self: center;
    border: 1px;
    border-radius: 30px;
    background: #fff;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
`

const TopConfirmationContainer = styled.div`
    display: flex; 
    flex-direction: row;
    width:100%; 
    margin-bottom: 100px; 
    justify-content: space-around;
`

export default Confirmation;