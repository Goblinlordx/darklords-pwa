class GameSystem {
  async listGames(query) {
    return [{ id: "1", name: "Test game" }];
  }
  async createGame(options) {
    return "1";
  }
  async getGame(id) {
    return {};
  }
}

export default GameSystem;
