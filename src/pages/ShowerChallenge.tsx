import { Box, Container, Button, Typography, styled, CardContent, Card, Grid, CardHeader } from "@mui/material"
import Clock from 'react-clock';
//@ts-ignore
import SpotifyPlayer from 'react-spotify-player';
import { useCallback, useEffect, useRef, useState } from "react";
import './clock.scss'
import { prependListener } from "process";


const size = {
  width: '100%',
  height: 175,
};
const view = "list"; // or 'list'
const theme = "white"; // or 'black'

type State = {
  time: number
  date: Date
  liters: number
  temp: number
}

const calcDate = (time: number) => {
  const minutes = parseInt(("0" + Math.floor((time / 60000) % 60)).slice(-2));
  const sec = parseInt(("0" + Math.floor((time / 1000) % 60)).slice(-2));
  return new Date(1995, 11, 17, 0, minutes, sec)
}

const litersPerSeconds = 0.2

export const ShowerChallenge = () => {
  const [state, setState] = useState<State>({
    time: 0,
    date: new Date(1995, 11, 17, 0, 0, 0),
    liters: 0,
    temp: 0
  })
  const [start, setStart] = useState(false)
  const startRef = useRef(false)
  const timerRef = useRef(new Date())

  const stateRef = useRef(state)

  stateRef.current = state

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date()
      const difference = (+current - +timerRef.current)
      const newTime = !timerRef.current ? stateRef.current.time : stateRef.current.time + difference

      timerRef.current = current

      const newLiters = (litersPerSeconds / 1000) * difference

      if (!startRef.current) return
      setState({
        time: newTime,
        date: calcDate(newTime),
        liters: stateRef.current.liters + newLiters,
        temp: stateRef.current.temp >= 38
          ? stateRef.current.temp
          : stateRef.current.temp + Math.random()
      })
    }, 10)

    return () => clearInterval(interval)
  }, [])


  const [toggle, setToggle] = useState(true)

  const toggleStopwatch = useCallback(() => {
    if (toggle) {
      startRef.current = true
    } else {
      startRef.current = false
    }
    setToggle(x => !x)
  }, [toggle])

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
              <Grid container spacing={0} justifyContent='center' sx={{ textAlign: 'center' }}>
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
                    <Clock value={state.date} hourHandLength={0} minuteHandLength={90}
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
                      {(Math.floor((state.time / 60000) % 60)).toFixed(0).padStart(2, '0')}:
                      {(Math.floor((state.time / 1000) % 60)).toFixed(0).padStart(2, '0')},
                      {((state.time) % 100).toFixed(0).padStart(2, '0')}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={6}>
                  <Box>
                    <Typography variant="h4" fontFamily="Quantico" sx={{ textAlign: 'right', mr: 2 }}>
                      {(Math.round(state.liters * 100) / 100).toFixed(2)} ltr
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography variant="h4" fontFamily="Quantico" sx={{ textAlign: 'left', ml: 2 }}>
                      {Math.round(state.temp)} °C
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Button onClick={toggleStopwatch}>[DEV]: Simulate running water </Button>
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