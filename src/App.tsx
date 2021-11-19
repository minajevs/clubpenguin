// routes
import Router from './routes';
// theme
//@ts-ignore
import ThemeConfig from './theme';
//@ts-ignore
import GlobalStyles from './theme/globalStyles';
// components
//@ts-ignore
import ScrollToTop from './components/ScrollToTop';
//@ts-ignore
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}