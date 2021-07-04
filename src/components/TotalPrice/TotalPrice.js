import { Container, LargeText, Button, GrayText } from '../Subscription/Subscription';

const TotalPrice = ({price, months, GB, small}) => {
    return price && price !==0 ? (
        <div style={{ display: 'flex', flexDirection:'column', maxWidth: 400,width: '120%', height: '100%', border: '1px solid #5f2fe2',boxShadow: '0 0 3px rgba(0,0,0,0.5)',borderRadius: 15,paddingRight: 20}}>
            <div style={{display:'flex', textAlign:'right', justifyContent: 'flex-end'}}>
                <LargeText style={{fontSize:30,textAlign: "right",marginRight:10}}>{`TOTAL:`}</LargeText>
                <LargeText style={{textAlign: "right"}}>{`${price} $`}</LargeText>
            </div>
            {!small && <><div style={{display:'flex', textAlign:'right', justifyContent: 'flex-end'}}>
                <GrayText style={{fontSize:30,textAlign: "right",marginRight:10}}>{`Duration:`}</GrayText>
                <GrayText style={{fontSize:30,textAlign: "right"}}>{`${months} months`}</GrayText>
            </div>
            <div style={{display:'flex', textAlign:'right', justifyContent: 'flex-end'}}>
                <GrayText style={{fontSize:30,textAlign: "right", marginRight:10}}>{`Plan:`}</GrayText>
                <GrayText style={{fontSize:30,textAlign: "right"}}>{`${GB} GB`}</GrayText>
            </div></>}
        </div>
    ) : null
}

export default TotalPrice;