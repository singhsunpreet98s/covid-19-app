import axios from 'axios';
import dataa from './data'
//const url = "https://covid19.mathdro.id/api";
// https://api.covid19api.com/summary
export const fetchData = async () => {
   try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get('https://covid19.mathdro.id/api');
      return { confirmed, recovered, deaths, lastUpdate };
   }
   catch (err) {
      console.log(err);
   }
}
/*export const fetchDailyData = async () => {
   try {
      const data = await axios.get()
   }
   catch (err) {

   }
}*/
export const countries = async () => {
   try {
      const { data: { Countries } } = await axios.get("https://api.covid19api.com/summary");
      return Countries.map((item) => item.Country)


      //return countries.data.Countries
   }
   catch (err) {

   }
}
export const fetchOtherData = async () => {
   try {
      const data = await axios.get("https://api.covid19api.com/summary")
      /*data.data.Countries.map((item) => {
         // console.log(item.Country)
         if (country === item.Country) {
            console.log(item)
            return item;
         }
      })*/
      return data.data.Countries;
   }
   catch (err) {
      console.log(err)
   }
}
export const fetchDailyData = async () => {
   try {
      const data = dataa
      //await axios.get('https://api.covidtracking.com/v1/us/daily.json')
      const newData = []
      let a = dataa.length - 1;
      dataa.map(item => {
         newData[a] = item
         a--;
      })
      let newRec = []
      let newConf = []
      let newDeat = []
      console.log(newData)
      newData.map((item, index) => {
         newConf.push(item.positiveIncrease)
         newRec.push(item.negativeIncrease)
         newDeat.push(item.deathIncrease)
      })


      return { newRec, newDeat, newConf };
   }
   catch (err) {
      console.log(err)
   }
}