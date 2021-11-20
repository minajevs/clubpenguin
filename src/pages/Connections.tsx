import { Grid, Typography, List, ListItem, ListItemText, IconButton, Card, CardContent } from "@mui/material"
import { Page } from "../components/Page"
import info from '@iconify/icons-eva/info-outline'
import { Icon } from "@iconify/react";

export const Connections = () => {

  return <Page>
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
        <Typography variant="h3" gutterBottom>Connected devices</Typography>
      </Grid>
      <Grid item xs={12} sx={{ p: '0 !important' }} />
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <List>
              {[
                ['Hydractiva Shower', 'Last used: 7 days ago'],
                ['Kitchen Optima Faucet', 'Last used: 1 hour ago'],
                ['Optima Faucet', 'Last used: 5 hours ago'],
                ['Washing Machine', 'Last used: yesterday'],
                ['Dishwasher', 'Last used: last week'],
              ].map(([title, subtitle], i) => <ListItem
                key={i}
                secondaryAction={
                  <IconButton edge="end">
                    <Icon icon={info} />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={title}
                  secondary={subtitle}
                />
              </ListItem>)}
            </List>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </Page>
}
export default Connections