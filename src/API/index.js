import axios from 'axios';
const url = "https://covid19.mathdro.id/api";
export const fetchData = async () => {
   try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
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
      const { data: { Countries } } = await axios.get("http://localhost:5000/countries");
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