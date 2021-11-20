import { Switch, Route, Redirect } from "react-router-dom"
import App from "./pages/App"
import CompletedChallenges from "./pages/CompletedChallenges"
import Challenge from "./pages/Challenge"
import { Achievements } from "./pages/Achiements"
import Connections from "./pages/Connections"

export default function Router() {
  return (
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/challenges" component={CompletedChallenges} />
      <Route path="/achievements/:type" component={Achievements} />
      <Route path="/connections" component={Connections} />
      <Route
        path="/showerchallenge"
        render={() => (
          <Challenge
            uri="spotify:album:1pg8XypcyejiasjfBgGEgL"
            title="🚿 I need a shower"
            subtitle="Take a shower in three songs"
            height={175}
          />
        )}
      />
      <Route
        path="/soapchallenge"
        render={() => (
          <Challenge
            uri="spotify:album:64PWtKr0oA7mmKQC3SMDde"
            title="🧼 Don't drop it!"
            subtitle="Soap your hands for 20 seconds"
            height={80}
          />
        )}
      />
      <Route
        path="/brushchallenge"
        render={() => (
          <Challenge
            uri="spotify:track:3g7TPO02MaNESuHC4jer3R"
            title="🦷🪥 Brush brush brush"
            subtitle="Brush your teeth in one song"
            height={80}
          />
        )}
      />
      <Redirect to="/app" />
    </Switch>
  )
}
