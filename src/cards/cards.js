import React from 'react';
import { Card, Typography, Grid, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './cards.module.css';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

   if (!confirmed) {
      return 'loading .....'

   }
   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={11} md={3} className={styles.card} style={{ borderBottom: '9px solid #b911b9' }}>
               <CardContent style={{ color: '#b911b9' }}>
                  <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                  <Typography variant="h5">
                     <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={1.3}
                        separator=","
                     />
                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of confirmed casses</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card} xs={11} md={3} className={styles.card} style={{ borderBottom: '9px solid #21b321' }}>
               <CardContent style={{ color: '#21b321' }}>
                  <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                  <Typography variant="h5">
                     <CountUp
                        start={0}
                        end={recovered.value}
                        duration={1.3}
                        separator=","
                     />
                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Recovered casses</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card} xs={11} md={3} className={styles.card} style={{ borderBottom: '9px solid #f15f5f' }}>
               <CardContent style={{ color: '#f15f5f' }} >
                  <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                  <Typography variant="h5">
                     <CountUp
                        start={0}
                        end={deaths.value}
                        duration={1.3}
                        separator=","
                     />
                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of deceased casses</Typography>
               </CardContent>
            </Grid>

         </Grid>
      </div>
   )

}
export default (Cards)