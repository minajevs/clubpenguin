
import { alpha, Card, CardContent, CardHeader, Container, Grid, styled, Typography } from "@mui/material"
import { RouteComponentProps } from "react-router-dom"
import tree from '@iconify/icons-emojione/deciduous-tree'
import car from '@iconify/icons-emojione/oncoming-automobile'
import book from '@iconify/icons-emojione/books'
import { IconifyIcon } from "@iconify/react"
import { ProgressIcon } from "../components/app/ProgressIcon"
import { CAR_FACTS, TIME_FACTS, TREE_FACTS } from "../components/app/AppAchievements"
import sample from 'lodash/sample'
import { FC } from 'react'

type Types = 'tree' | 'car' | 'book'

const IconWrapperStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(10),
  height: theme.spacing(10),
  justifyContent: 'center',
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}))

const headers: Record<Types, string> = {
  'tree': '🌳 Trees grown',
  'car': '🚘 Cars charged',
  'book': '📚 Books',
}

const icons: Record<Types, IconifyIcon> = {
  'tree': tree,
  'car': car,
  'book': book,
}

const counts: Record<Types, number> = {
  'tree': 11,
  'car': 102,
  'book': 23,
}

const margins: Record<Types, string> = {
  'tree': 'auto',
  'car': '0 0 10px 0',
  'book': 'auto',
}

const facts: Record<Types, string> = {
  'tree': '11',
  'car': '102',
  'book': '23',
}

export const Achievements: FC<RouteComponentProps<{ type: Types }>> = ({ match: { params: { type } } }) => {
  const facts = type === 'tree' ? TREE_FACTS : type === 'car' ? CAR_FACTS : TIME_FACTS

  if (type === undefined) return <>Redirect</>
  const _type = (type as Types)
  return <>
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
          <Typography variant="h3" gutterBottom>Achievements</Typography>
        </Grid>
        <Grid item xs={12} sx={{ p: '0 !important' }} />
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader
              title={headers[_type]}
              subheader={
                <>
                  🤓 <strong>Did you know?</strong> {sample(facts)}
                </>
              }
            />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={4} sm={3}>
                  <ProgressIcon progress={42} showProgress={false} icon={icons[_type]} count={0} size={1.5} iconMargin={margins[_type]} />
                </Grid>
                {new Array(counts[_type]).fill(void (0)).map((_, i) => <Grid key={i} item xs={4} sm={3}>
                  <ProgressIcon progress={100} icon={icons[_type]} count={0} size={1.5} iconMargin={margins[_type]} />
                </Grid>)}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  </>
}
