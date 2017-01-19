import React, { PropTypes } from 'react';
import GameCard from './GameCard';

export default function GamesList({ games }) {
    const emptyMessage = (
      <p>There are no games in your collection</p>
    );
    const gamesList = (
        <div className="ui four cards">
            { games.map(game => <GameCard game={game} key={game._id} />)}
        </div>
    );
    return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList }
        </div>
    );
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
};
