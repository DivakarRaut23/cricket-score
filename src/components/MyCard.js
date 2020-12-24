import { Card, CardContent,Typography,CardActions,Button, Grid, Dialog, DialogTitle, DialogContentText ,DialogContent, DialogActions} from '@material-ui/core';
import React, { useState } from 'react';
import { getMatchDetails } from '../api/Api';


const MyCard = ({match}) => {

    const [detail,setDetail] = useState({});
    const [open,setOpen] = useState(false);

    const handleClick = (id)=> {
        getMatchDetails(id).then(data=> {console.log('Match data',data)
        setDetail(data);
        handleOpen();
    })
    .catch(error=> console.log(error))
    }


    const getMatchCard = () => {
        return (
            <Card style={{marginTop:15}}>
                <CardContent>
                   <Grid container justify='center'alignItems='center' spacing={4}>
                       <Grid item>
                        <Typography variant='h5'> {match['team-1']}</Typography>
                       </Grid>
                       <Grid item>
                       
                       <img 
                       style={{width:85}}
                       src={require('../img/vs.png')} 
                       alt=''
                       />               
                        </Grid>
                       <Grid item>
                       <Typography variant='h5'> {match['team-2']}</Typography>

                       </Grid>

                   </Grid>
                </CardContent>
                <CardActions>
                   <Grid container justify='center' spacing={3}>
                   <Button onClick={() => {
                      handleClick(match.unique_id); 
                   }}item variant='contained' color='primary'>
                        Show Details
                    </Button>
                    <Button style={{marginLeft:5}} item variant='contained' color='primary'>
                       Start time {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                   </Grid>
                </CardActions>
            </Card>
        )
    };

    const handleClose = () => {
        setOpen(false)

    }

    const handleOpen = () => {
        setOpen(true)
        
    }

    const getDialog =() => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{'Match Detail..'}

            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>
                    Match <span style={{fontStyle: 'italic', fontWeight:'bold'}}> 
                    {detail.matchStarted ? 'Started' : 'Match not yet started'}{" "}
                    </span>
                    </Typography>
                    <Typography>
                       Score <span style={{fontStyle: 'italic', fontWeight:'bold'}}> {detail.score}</span>
                    </Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>
    )
    
    return (
        <>
        {getMatchCard()}
        {getDialog()}
        </>
    )

};

export default MyCard ;