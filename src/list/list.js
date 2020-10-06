import React, { useEffect, useState } from 'react';
import { fetchOtherData } from '../API/index';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Pagination from '@material-ui/lab/Pagination';

import './list.css';


function List(props) {

   const [data, setData] = useState("");
   const [page, setPage] = useState("");
   const [limit, setLimit] = useState(15);
   const [pageNo, setPageNo] = useState(1);
   const [noOfPages, setNoOfPages] = useState('');
   const tableHeading = [{ name: 'Country', color: 'black' }, { name: 'Total Cases', color: 'purple' }, { name: 'Recovered', color: 'green' }, { name: 'Active Cases', color: 'purple' }, { name: 'deceased', color: 'red' }]
   useEffect(() => {
      const fun = async () => {
         const newdata = await fetchOtherData()
         setData(newdata)
         const n = parseInt((newdata.length) / limit)
         setNoOfPages(n)
         const startIndex = (pageNo - 1) * limit
         const endIndex = pageNo * limit
         const newPage = (newdata.slice(startIndex, endIndex))
         setPage(newPage)
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
      if (page !== "" || page === undefined || page === null) {
         return (<tbody>
            {
               page.map((item, index) => {
                  const totalActive = item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths;
                  const newActive = item.NewConfirmed - item.NewRecovered - item.NewDeaths;
                  return (<tr key={index}>
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

   const Line = () => {
      return (
         <div style={{ display: 'flex', flexDirection: 'row' }}>

            {
               /*Array.from(Array(noOfPages), (e, i) => {
                  return <div style={{ width: '20px', height: '20px', padding: '10px', color: 'white', textAlign: 'center', backgroundColor: 'blue', borderRadius: '50%', marginRight: '10px', cursor: 'pointer' }} key={i} onClick={() => pagination(i)}>{i + 1}</div>
               })*/
            }
         </div>
      )
   }
   const handlePage = (e, v) => {
      setPageNo(v)
      const startIndex = (v) * limit
      const endIndex = (v + 1) * limit
      const newPage = (data.slice(startIndex, endIndex))
      setPage(newPage)
   }

   return (
      <>

         <table >
            <thead>
               <tr>
                  {tableHeading.map((item, index) => {
                     return <th key={index} style={{ color: item.color }} >{item.name}</th>
                  })
                  }
               </tr>
            </thead>
            <Tabledata />

         </table>
         <div style={{ marginLeft: '35%' }}>
            <Pagination count={noOfPages} color="primary" page={pageNo} onChange={handlePage} />
         </div>
      </>
   )
}
export default (List);