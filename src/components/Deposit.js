import { Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles=makeStyles(({
    depositContext:{
        flex:1,
    }
}))
const preventDefault=(event)=>{
    event.preventDefault();
}
const Deposit = () => {
    const classes=useStyles();
    return (
        <>
        <h1>Recent Deposit</h1>
        <Typography component="p" variant="h4">
           $3,024.00
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
           on 15 March, 2019
        </Typography>
        <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              View Balance
            </Link>
        </div>
            
        </>
    )
}

export default Deposit
