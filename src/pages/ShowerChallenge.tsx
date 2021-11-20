import { Box, Container, Button, Typography, styled, CardContent, Card, Grid, CardHeader } from "@mui/material"
import Clock from 'react-clock';
//@ts-ignore
import SpotifyPlayer from 'react-spotify-player';
import { useCallback, useEffect, useState } from "react";
import './clock.scss'


const size = {
    width: '100%',
    height: 175,
};
const view = "list"; // or 'list'
const theme = "white"; // or 'black'

export const ShowerChallenge = () => {
    const [time, setTime] = useState(0)
    const [date, setDate] = useState(new Date())
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval!);
        }

        return () => clearInterval(interval!)
    }, [start])

    useEffect(() => {
        const minutes = parseInt(("0" + Math.floor((time / 60000) % 60)).slice(-2));
        const sec = parseInt(("0" + Math.floor((time / 1000) % 60)).slice(-2));
        setDate(new Date(1995, 11, 17, 0, minutes, sec))
    }, [time])

    const [toggle, setToggle] = useState(false)

    const toggleStopwatch = useCallback(() => {
        if (toggle) {
            setStart(true)
        } else {
            setStart(false)
        }
        setToggle(x => !x)
    }, [toggle, setToggle])

    return <>
        <Container maxWidth="xl">
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={12} sm={6} md={3} sx={{ mt: 2 }}>
                    <Typography variant="h3" gutterBottom>Challenge</Typography>
                </Grid>
                <Grid item xs={12} sx={{ p: '0 !important' }} />
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                    <CardHeader title="🚿 I need a shower" subheader="Take a shower in three songs" />
                        <CardContent>
                            <Grid container spacing={0} justifyContent='center'>
                                <Grid item>
                                    <SpotifyPlayer
                                        uri="spotify:album:1pg8XypcyejiasjfBgGEgL"
                                        size={size}
                                        view={view}
                                        theme={theme}
                                    />
                                </Grid>
                                <Grid item xs={12} />
                                <Grid item>
                                    <Box sx={{ pt: 2 }}>
                                        <Clock value={date} hourHandLength={0} minuteHandLength={90}
                                            minuteHandOppositeLength={16}
                                            minuteHandWidth={6}
                                            minuteMarksWidth={3}
                                            hourMarksLength={15}
                                            secondHandLength={75}
                                            secondHandOppositeLength={25}
                                            secondHandWidth={3} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} />
                                <Grid item>
                                    <Box sx={{ pt: 2 }}>
                                        <Typography variant="h4" fontFamily="Quantico">
                                            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                                            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                                            {("0" + (time / 10) % 1000).slice(-2)}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} />
                                <Grid item>
                                    <Button onClick={toggleStopwatch}>Click</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} />
            </Grid>

        </Container>
    </>
}

export default ShowerChallenge
