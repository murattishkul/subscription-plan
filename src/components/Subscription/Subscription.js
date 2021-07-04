import React, { useContext } from 'react';
import { SubscriptionSlider } from '../Slider/Slider';
import Tooltip from '../Tooltip/Tooltip';
import styled from 'styled-components';
import { PurpleSwitch } from '../Switch/Switch';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../App.js'
import TotalPrice from '../TotalPrice/TotalPrice';
import Plan from '../Plan/Plan';

const Subscription = () => {
    const {
      GB,
      upfront,
      months,
      totalPrice,
      setUpfront,
      setMonths
    } = useContext(AppContext);
    const history = useHistory();

    return (
        <Container>
            <TopContainer>
                <LargeText style={{fontSize:'32px', marginLeft: '30px',marginTop:30, 
                    textAlign: 'left', marginBottom: 0}}>
                    Choose your subscription plan
                </LargeText>
                <div style={{display: 'flex',justifyContent:'space-between',marginTop: 30, marginRight: 30}}>
                    {totalPrice && <TotalPrice small price={totalPrice} months={months} GB={GB}/>}
                    <Button style={{marginLeft:50,width: 100}} onClick={() => history.push('/payment')}>
                        Continue
                    </Button>
                </div>
            </TopContainer>
            <TopGrayText style={{ marginLeft: '30px',paddingTop:0}}>
                Simple. Fast. Reliable.
            </TopGrayText>
            <SliderContainer>
                <MediumText style={{marginTop: 5}}>
                    Upfront Payment
                </MediumText>
                <PurpleSwitch checked={upfront} onChange={()=>setUpfront(!upfront)}/>
            </SliderContainer>
            <div style={{width:'60%', alignSelf:'center'}}> 
                <SubscriptionSlider
                    valueLabelDisplay="on" 
                    ValueLabelComponent={Tooltip}
                    value={months}
                    defaultValue={12} 
                    onChange={(e,v) => {
                        setMonths(v)
                    }}
                    step={null}
                    marks={[{value: 3},{value: 6},{value: 12}]}
                    min={3}
                    max={12}
                    />
            </div>
            <PlansContainer>
                <Plan planGB={5}  text="For new customers" name="Intro"/>
                <Plan planGB={10} text="For most customers" name="Basic"/>
                <Plan planGB={50} text="For pro customers/businesses" name="Pro"/>
            </PlansContainer>
        </Container>
    )
}

const TopContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
`

const PlansContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 10px;
`

const SliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -40px; 
    justify-content: center;
    margin-right: 0px;
    margin-bottom: -30px;
`

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
    // overflow-y: auto;

`

export const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    // overflow-y: auto;
    margin-left: 18px;
    margin-right: 18px; 
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 20px;
    border: 1px solid #f1f1f5;
    box-shadow: ${props => props.GB ? '' : '3px 3px 3px rgba(0,0,0,0.5)'};
    width: 25%;
    height: 100%;
    justify-content: center;
    background: ${props => props.GB ? '#5f2fe2': ''};
    max-height: 400px;
    max-width: 335px;
    min-width: 300px;
`

export const Button = styled.button`
    align-self: center;
    width: 100%;
    height: 50px;
    background: ${props=> props.GB ? '#fcd3c7': '#fff'};
    border-radius: 10px;
    border-color: #7a56e7;
    color: #7a56e7;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    :hover{
        background: ${props=> props.GB ? '' : '#5f2fe2'};
        color: ${props=> props.GB ? '' : '#f9f9fe'};
    }
`

export const LargeText = styled.p`
    color: ${props => props.GB ? '#fff' : '#02044a'};
    font-size: xx-large;
    font-weight: 600;
    text-align: left;
    margin-bottom: 0px;
    margin-top: 0px;
`

export const MediumText = styled.p`
    color: ${props => props.GB ? '#fff' : '#02044a'};
    font-size: larger;
    font-weight: 400;
    text-align: left;
    margin-bottom: 0px;
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

export const GrayText = styled.p`
    color: ${props => props.GB ? '#9979f6' : '#707099'};
    // font-size: larger;
    // font-weight: 400;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 3px;
`
export const CheckText = styled.p`
    color: ${props => props.GB ? '#dfd6fa' : '#707099'};
    // font-size: larger;
    // font-weight: 400;
    text-align: left;
    margin-top: 0px;
    margin-left: 3px;
    line-height: 25px;
`

export default Subscription;