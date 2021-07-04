import React, { useEffect, useState, useContext } from 'react'
import { PlanContainer, MediumText, LargeText, GrayText, CheckText, Button } from '../Subscription/Subscription'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { AppContext } from '../../App.js'

const Plan = ({planGB, text, name}) => {
    const { GB, setGB } = useContext(AppContext);
    const [checked, setChecked] = useState(GB===planGB);
    useEffect(()=>{setChecked(GB===planGB)},[GB])

    return (
        <PlanContainer GB={checked}>
            <MediumText GB={checked}>{name}</MediumText>
            <LargeText GB={checked}>{`${planGB}GB`}</LargeText>
            <GrayText GB={checked}>{text}</GrayText>
            <div style={{marginTop: 10, marginBottom: 10}}>
                <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText GB={checked}>Lorem ipsum dolor sit amet</CheckText></div>
                <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText GB={checked}>Lorem ipsum dolor sit amet</CheckText></div>
                <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText GB={checked}>Lorem ipsum dolor sit amet</CheckText></div>
                <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText GB={checked}>Lorem ipsum dolor sit amet</CheckText></div>
                <div style={{display:'flex'}}><CheckCircleOutlineIcon /> <CheckText GB={checked}>Lorem ipsum dolor sit amet</CheckText></div>
            </div>
            <div style={{paddingRight: 20,display:'flex', justifyContent:'center'}}><Button GB={checked} onClick={()=>setGB(planGB)}>Choose Plan</Button></div>
        </PlanContainer>
    )
}

export default Plan;