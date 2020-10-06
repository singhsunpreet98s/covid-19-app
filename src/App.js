import React, { useEffect, useState } from 'react';
import { fetchData } from './API/index';
import Cards from './cards/cards';
//import CountyPicker from './countryPicker/countryPicker';
//import PieHolder from './chart/chart.js';
import List from './list/list';
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetch = async () => {
      setData(await fetchData())
    }
    fetch()
  }, [])
  /*state = {
    data: "",
    country: "global"
  }
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }*/
  /*handleCountryChange = async (e) => {
    if (e === "global") {
      const data = await fetchData();
      this.setState({ data: data })
    }
    else {
      const data = await fetchOtherData();
      data.map(item => {
        if (e === item.Country) {
          const newdata = {

            confirmed: { value: item.TotalConfirmed },
            recovered: { value: item.TotalRecovered },
            deaths: { value: item.TotalDeaths },
            lastUpdate: item.Date

          }

          this.setState({ data: newdata });
        }
      })
    }
  }*/

  return (
    <div>
      <Cards data={data} />
      <List />

    </div>
  )
}

export default (App)