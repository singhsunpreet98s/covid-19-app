import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { countries } from '../API/index';

const CountryPicker = (props) => {
   const [country, setCountry] = React.useState("");
   React.useEffect(() => {
      const fetchCountries = async () => {
         setCountry(await countries())

      }


      fetchCountries();
   }, [setCountry])
   if (country !== "") {
      return (
         <div style={{ textAlign: "center" }}>
            <FormControl style={{ width: '40%' }} onChange={(e) => { props.handleCountryChange(e.target.value) }}>
               <NativeSelect>
                  <option>global</option>
                  {
                     country.map((item, index) => {
                        return (<option key={index} value={item}>{item}</option>)
                     })
                  }
               </NativeSelect>

            </FormControl>
         </div >
      )
   }
   else {
      return null
   }
}
export default (CountryPicker)