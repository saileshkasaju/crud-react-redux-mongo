import React, { PropTypes } from 'react';

export default function GamesList({ games }) {
    const emptyMessage = (
      <p>There are no games in your collection</p>
    );
    const gamesList = (
        <p>Games List</p>
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
