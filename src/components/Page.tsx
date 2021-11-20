import { BottomNavigation, BottomNavigationAction, Container, Paper } from "@mui/material";
import { Link } from 'react-router-dom'
import faucet from '@iconify/icons-si-glyph/faucet'
import home from '@iconify/icons-eva/home-fill'
import settings from '@iconify/icons-eva/settings-fill'
import { Icon } from "@iconify/react";

export const Page: React.FC = ({ children }) => {
  return (<>
    <Container maxWidth="xl" sx={{ pt: 3, pb: 12, flexGrow: 1 }}>
      {children}
    </Container>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      >
        <BottomNavigationAction label="Home" to='/app' component={Link} icon={<Icon icon={home} width={16} height={16} />} />
        <BottomNavigationAction label="Connections" to='/connections' component={Link} icon={<Icon icon={faucet} width={16} height={16} />} />
        <BottomNavigationAction label="Settings" to='/' component={Link} icon={<Icon icon={settings} width={16} height={16} />} />
      </BottomNavigation>

    </Paper>
  </>)
}

export default Page