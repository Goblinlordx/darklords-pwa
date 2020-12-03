import { Switch, Route, useRouteMatch } from "react-router-dom";
import GameList from "./GameList";
import GameUI from "./GameUI";

/* eslint-disable react-hooks/rules-of-hooks */
const GameSystemUI = (system) => () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${url}`}
        exact={true}
        render={(props) => <GameList {...props} system={system} />}
      />
      <Route
        path={`${url}/:id`}
        render={(props) => <GameUI {...props} system={system} />}
      />
    </Switch>
  );
};
/* eslint-enable react-hooks/rules-of-hooks */

export default GameSystemUI;
