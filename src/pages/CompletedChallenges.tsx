import { Card, CardContent, CardHeader, Container, Grid, Typography } from "@mui/material"
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
import { format, formatDistance, subDays } from "date-fns";

type ItemParams = {
  title: string
  subtitle: string
  time: Date
}

type ItemProps = {
  item: ItemParams
  isLast?: boolean
}

const challenges: Array<ItemParams> = [
  {
    title: '🔌 Wirecutters',
    subtitle: 'Consume less than 1 kWh in a day',
    time: new Date()
  },
  {
    title: '🎶 LP Shower',
    subtitle: 'Take shower in a LP duration (5 songs)',
    time: subDays(new Date(), 1)
  },
  {
    title: '🕗 Clean hands',
    subtitle: 'Wash your hands every hour for a day',
    time: subDays(new Date(), 3)
  },
  {
    title: '🥶 North pole shower',
    subtitle: 'Take a shower using only 10% of hot water',
    time: subDays(new Date(), 4)
  },
  {
    title: '📉 Water usage go brrr',
    subtitle: 'Spend less than 30 liters of water in a day',
    time: subDays(new Date(), 15)
  },
]

const Item = ({ item, isLast = false }: ItemProps) => {
  const { title, subtitle, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>{subtitle}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {formatDistance(time, new Date(), { addSuffix: true })}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export const CompletedChallenges = () => {
  return <Container maxWidth="xl" sx={{ py: 3 }}>
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={12} sm={6}>
        <Card sx={{
          "& .MuiTimelineItem-missingOppositeContent:before": {
            display: "none",
          },
        }}>
          <CardHeader title="🏆 Completed Challenges" />
          <CardContent>
            <Timeline>
              {challenges.map((item, index) => (
                <Item key={item.title} item={item} isLast={index === challenges.length - 1} />
              ))}
            </Timeline>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </Container>
}

export default CompletedChallenges