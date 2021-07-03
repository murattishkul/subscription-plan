import React, { useState } from "react";
import Cards from "react-credit-cards";
import {TextField} from '@material-ui/core';
import { Button } from '../Subscription/Subscription';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-credit-cards/es/styles-compiled.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const toastMeta = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const CreditCard = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const history = useHistory();

  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  const noCVV = () => toast.error("Please provide proper CVV!",toastMeta);
  const noNumber = () => toast.error("Please provide 16 character number!",toastMeta);
  const noName = () => toast.error("Please provide First and Last names!",toastMeta);

  const onSubmit = (e) => {
    if(number?.length!==16) noNumber();
    else if(cvc?.length!==3) noName();
    else if( name.split(' ').length!==2) noCVV();
    else history.push('/confirmation')
    e.preventDefault();
  }

  return (
    <>
      <div clasName="rccs__card rccs__card--unknown">
        <ToastContainer/>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>

      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm-5">
            <TextField 
              required
              type="number"
              label='Card Number'
              value={number}
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onInput={ e => e.target.value = e.target.value.toString().slice(0,16)}
              onChange={ e => SetNumber(e.target.value) }
              onFocus={ e => SetFocus(e.target.name)} />
          </div>
          <div className="col-sm-0">
             <TextField 
              required
              label='Card Name'
              id="outlined-size-small"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => SetName(e.target.value)}
              onFocus={(e) => SetFocus(e.target.name)}
              inputProps={{ maxLength: 23 }}
              onInput = {e => e.target.value = e.target.value.toString().split(' ').slice(0,2).join(' ')}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col=sm-8"
            style={{
              ...{ "padding-right": "12em" },
              ...{ "padding-left": "1em" }
            }}
          >
            <label for="month">Expiration Date</label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleDate}
              required
            >
              <option selected="selected" disabled="disabled" value=''>Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
          &nbsp;
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleExpiry}
              required
            >
              <option selected="selected" disabled="disabled" value="">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
          </div>
          <div className="col-sm-3">
            <TextField 
                required
                label="CVV"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                type="number"
                name="cvc"
                maxlength="3"
                className=" form-control card"
                value={cvc}
                pattern="\d*"
                onChange={e => SetCvc(e.target.value)}
                onFocus={e => SetFocus(e.target.name)}
                onInput = {e => e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)}
            />
          </div>
        </div>
        <br />
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
};

export default CreditCard;
