import React, { useEffect, useState } from 'react';
import { fetchOtherData } from '../API/index';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './list.css';

function List(props) {
   const [data, setData] = useState("");
   useEffect(() => {
      const fun = async () => {
         setData(await fetchOtherData())
      }
      fun();
   }, [setData])
   const AddConfi = (props) => {
      if (props.data > 0) {
         return <span className="addConfig" ><ArrowUpwardIcon style={{ fontSize: "12px" }} />{`${props.data}`}</span>
      }
      else {
         return null
      }
   }
   const AddRec = (props) => {
      if (props.data > 0) {
         return <span className="addRec" ><ArrowUpwardIcon style={{ fontSize: "12px" }} />{`${props.data}`}</span>
      }
      else {
         return null;
      }
   }
   const AddActive = (props) => {
      if (props.data > 0) {
         return <span className="addActive" style={{ color: 'red' }}> <ArrowUpwardIcon style={{ fontSize: "12px" }} />{`${props.data}`}</span>
      }
      else if (props.data === 0) {
         return null;
      }
      else {
         const item = props.data * -1
         return <span className="addActive" style={{ color: 'purple' }}><ArrowDownwardIcon style={{ fontSize: "12px" }} />{`${item}`}</span>
      }
   }
   const AddDeaths = (props) => {
      if (props.data > 0) {
         return <span className="addActive" style={{ color: 'black' }}><ArrowUpwardIcon style={{ fontSize: "12px" }} />{`${props.data}`}</span>
      }
      else {
         return null
      }
   }
   const Tabledata = () => {
      if (data !== "" || data === undefined || data === null) {
         return (<tbody>
            {
               data.map((item, index) => {
                  const totalActive = item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths;
                  const newActive = item.NewConfirmed - item.NewRecovered - item.NewDeaths;
                  return (<tr key={index}>
                     <td>{index + 1}</td>
                     <td>{item.Country}</td>
                     <td style={{ color: 'black' }}>{item.TotalConfirmed}
                        <AddConfi data={item.NewConfirmed} />
                     </td>
                     <td style={{ color: 'black' }}>{item.TotalRecovered}
                        <AddRec data={item.NewRecovered} />
                     </td>
                     <td>{totalActive}
                        <AddActive data={newActive} />
                     </td>
                     <td style={{ color: 'red' }}>{item.TotalDeaths}
                        <AddDeaths data={item.NewDeaths} />
                     </td>
                  </tr>)
               })
            }
         </tbody>)
      }
      else {
         return null;
      }
   }
   return (
      <table >
         <thead>
            <tr>
               <th>S no</th>
               <th >Country</th>
               <th style={{ color: 'purple' }}>Total Cases</th>
               <th style={{ color: 'green' }}>Recovered</th>
               <th style={{ color: 'purple' }}>Active Cases</th>
               <th style={{ color: 'red' }}>deceased</th>

            </tr>
         </thead>
         <Tabledata />
      </table>
   )
}
export default (List);