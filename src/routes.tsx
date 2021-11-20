import { Switch, Route, Redirect } from "react-router-dom"
import App from "./pages/App"
import CompletedChallenges from "./pages/CompletedChallenges"
import Challenge from "./pages/Challenge"
import { Achievements } from "./pages/Achiements"

export default function Router() {
  return (
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/challenges" component={CompletedChallenges} />
      <Route path="/achievements/:type" component={Achievements} />
      <Route
        path="/showerchallenge"
        render={() => (
          <Challenge
            uri="spotify:album:1pg8XypcyejiasjfBgGEgL"
            title="🚿 I need a shower"
            subtitle="Take a shower in three songs"
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
          />
        )}
      />
      <Route
        path="/brushchallenge"
        render={() => (
          <Challenge
            uri="spotify:album:64PWtKr0oA7mmKQC3SMDde"
            title="🦷🪥 Brush brush brush"
            subtitle="Brush your teeth in one song"
          />
        )}
      />
      <Redirect to="/app" />
    </Switch>
  )
}
