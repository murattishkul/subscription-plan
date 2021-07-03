import React, {useState, useEffect} from 'react';
import { SubscriptionSlider } from '../Slider/Slider';
import Tooltip from '../Tooltip/Tooltip';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { PurpleSwitch } from '../Switch/Switch';
import { useHistory } from 'react-router-dom';

const BASE_URL = 'https://cloud-storage-prices-moberries.herokuapp.com/prices'
const Subscription = () => {
    const [prices,setPrices] = useState();
    const [checked, setChecked] = useState(0);
    const [upfront, setUpfront] = useState(false);
    const history = useHistory();
    useEffect(()=>{
        fetch(BASE_URL)
        .then( (res) => res.json())
        .then( data => setPrices(data?.subscription_plans))
    }, []);
    console.log(prices, checked)
    return (
        <Container>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <LargeText style={{fontSize:'32px', marginLeft: '30px',marginTop:30, textAlign: 'left', marginBottom: 0}}>Choose your subscription plan</LargeText>
                <div style={{marginTop: 30, marginRight: 30}}><Button style={{width: 100}} onClick={() => history.push('/payment')}>Continue</Button></div>
            </div>
            <div>
                <TopGrayText style={{ marginLeft: '30px',paddingTop:0}}>Simple. Fast. Reliable.</TopGrayText>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: -40, justifyContent:'center', marginRight: 0, marginBottom: -30}}>
                <MediumText style={{marginTop: 5}}>Upfront Payment</MediumText>
                <PurpleSwitch checked={upfront} onChange={()=>setUpfront(!upfront)} name="sdfs" />
            </div>
            <div style={{width:'60%', alignSelf:'center'}}> 
                <SubscriptionSlider
                    valueLabelDisplay="on" 
                    ValueLabelComponent={Tooltip}
                    defaultValue={12} 
                    step={null}
                    marks={[{value: 3,},{value: 9,},{value: 12,}]}
                    min={3}
                    max={12}
                    />
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', paddingRight: 40, paddingLeft:40, paddingBottom: 10}}>
                <Plan checked={checked===0}>
                    <div><MediumText checked={checked===0}>Intro</MediumText></div>
                    <div><LargeText checked={checked===0}>5GB</LargeText></div>
                    <div><GrayText checked={checked===0}>For new customers</GrayText></div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===0}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===0}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===0}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===0}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===0}>Lorem ipsum dolor sit amet</CheckText></div>
                    </div>
                    <div style={{paddingRight: 20,display:'flex', justifyContent:'center'}}><Button checked={checked===0} onClick={()=>setChecked(0)}>Choose Plan</Button></div>
                </Plan>
                <Plan checked={checked===1}>
                    <div><MediumText checked={checked===1}>Basic</MediumText></div>
                    <div><LargeText checked={checked===1}>10GB</LargeText></div>
                    <div><GrayText checked={checked===1}>For most customers</GrayText></div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===1}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===1}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===1}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===1}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===1}>Lorem ipsum dolor sit amet</CheckText></div>
                    </div>
                    <div style={{paddingRight: 20, display:'flex', justifyContent:'center'}}><Button checked={checked===1} onClick={()=>setChecked(1)}>Choose Plan</Button></div>
                </Plan>
                <Plan checked={checked===2}>
                    <div><MediumText checked={checked===2}>Pro</MediumText></div>
                    <div><LargeText checked={checked===2}>50GB</LargeText></div>
                    <div><GrayText checked={checked===2}>For pro customers or businesses</GrayText></div>
                    <div style={{marginTop: 10, marginBottom: 10}}>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===2}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===2}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===2}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===2}>Lorem ipsum dolor sit amet</CheckText></div>
                    <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText checked={checked===2}>Lorem ipsum dolor sit amet</CheckText></div>
                    </div>
                    <div style={{paddingRight: 20,display:'flex', justifyContent:'center'}}><Button checked={checked===2} onClick={()=>setChecked(2)}>Choose Plan</Button></div>
                </Plan>
            </div>
        </Container>
    )
}

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    align-self: center;
    height : 98vh;
    border: 1px;
    border-radius: 30px;
    background: #fff;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
`

const Plan = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px; 
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 20px;
    border: 1px solid #f1f1f5;
    box-shadow: ${props => props.checked ? '' : '3px 3px 3px rgba(0,0,0,0.5)'};
    width: 25%;
    height: 60vh;
    justify-content: center;
    background: ${props => props.checked ? '#5f2fe2': ''}
`

export const Button = styled.button`
    align-self: center;
    width: 100%;
    height: 50px;
    background: ${props=> props.checked ? '#fcd3c7': '#fff'};
    border-radius: 10px;
    border-color: #7a56e7;
    color: #7a56e7;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    :hover{
        background: ${props=> props.checked ? '' : '#5f2fe2'};
        color: ${props=> props.checked ? '' : '#f9f9fe'};
    }
`

export const LargeText = styled.p`
    color: ${props => props.checked ? '#fff' : '#02044a'};
    font-size: xx-large;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 0px;
`

const MediumText = styled.p`
    color: ${props => props.checked ? '#fff' : '#02044a'};
    font-size: larger;
    font-weight: 400;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 0px;

`
const TopGrayText = styled.p`
    color: #707099;
    // font-size: larger;
    // font-weight: 400;
    text-align: left;
    margin-top: 0px;
    margin-left: 3px;
`

const GrayText = styled.p`
    color: ${props => props.checked ? '#9979f6' : '#707099'};
    // font-size: larger;
    // font-weight: 400;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 3px;
`
const CheckText = styled.p`
    color: ${props => props.checked ? '#dfd6fa' : '#707099'};
    // font-size: larger;
    // font-weight: 400;
    text-align: left;
    margin-top: 0px;
    margin-left: 3px;
    line-height: 25px;
`

export default Subscription;