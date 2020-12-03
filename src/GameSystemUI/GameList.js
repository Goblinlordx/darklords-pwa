import useAsync from "../hooks/useAsync";
import Loader from "../Components/Loader";
import { Link, useRouteMatch } from "react-router-dom";

const LoadingList = () => <div>Loading Games...</div>;
const LoadFailed = () => <div>Error Loading Games</div>;

const GameList = ({ system }) => {
  const { url } = useRouteMatch();
  const asyncState = useAsync(system.listGames);
  return (
    <div>
      {system.name ? `${system.name} ` : ""}Game Index
      <Loader asyncState={asyncState} load={LoadingList} error={LoadFailed}>
        {(result) => (
          <ul>
            {result.map(({ id, name }) => (
              <Link key={id} to={`${url}/${id}`}>
                <li>{name}</li>
              </Link>
            ))}
          </ul>
        )}
      </Loader>
    </div>
  );
};

export default GameList;
