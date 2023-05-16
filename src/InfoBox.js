import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import "./InfoBox.css";

function InfoBox({title, cases, active, total, isRed, ...props}) {
  return (
    <Card 
    onClick={props.onClick} 
    className={`infoBox ${active && "infoBox--selected"} ${
      isRed && "infoBox--red"
    }`}
    >
        <CardContent>
            {/* Title i.e. Coronavirus cases*/}
            <Typography classname='infoBox_title' color='textSecondary'>
                {title}
            </Typography>

            {/* +120k Number of cases */}
            <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

            {/* 1.2M Total */}
            <Typography className='infoBox__total' color='textSecondary'>
                {total} Total
            </Typography>
        </CardContent>
    </Card>
  )
}

export default InfoBox