import { Switch, Route, Redirect } from "react-router-dom"
import App from "./pages/App"
import CompletedChallenges from "./pages/CompletedChallenges"
import ShowerChallenge from "./pages/ShowerChallenge"
import { Achievements } from "./pages/Achiements"
import SoapChallenge from "./pages/SoapChallenge"
import BrushChallenge from "./pages/BrushChallenge"


export default function Router() {
  return (
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/challenges" component={CompletedChallenges} />
      <Route path="/showerchallenge" component={ShowerChallenge} />
      <Route path="/achievements/:type" component={Achievements} />
      <Route path="/soapchallenge" component={SoapChallenge} />
      <Route path="/brushchallenge" component={BrushChallenge} />
      <Redirect to="/app" />
    </Switch>
  )
}
