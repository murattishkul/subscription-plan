import React from 'react'
// import Cards from 'react-credit-cards';
import CreditCard  from '../CreditCard/CreditCard';
import { Container, LargeText, Button } from '../Subscription/Subscription';
import { useHistory } from 'react-router';

const Payment = () => {
    const history = useHistory();
    return <div style={{ display:'flex', flexDirection: 'column', width:'90%', height:'98vh',
    alignContent:'center',
    justifyContent: 'start',
    alignSelf: "center",
    border: '1px',
    borderRadius: '30px',
    background: '#fff',
    backgroundColor: '#fff',
    boxShadow: '0 0 3px rgba(0,0,0,0.5)'
    }}>
        <div style={{display: 'flex', flexDirection:'row', width:'100%', marginBottom: 100}}>
            <LargeText style={{fontSize:'32px', marginLeft: '60px',
            marginTop:60, textAlign: 'left', marginBottom: 0}}>
                Fill out credit card information
            </LargeText>
        </div>

        <div style={{justifyContent: 'space-around', flexDirection: 'row',display:'flex',
            alignContent:'center', alignItems:'center'}}>
            <CreditCard/>
        </div>
    </div>
}

export default Payment;