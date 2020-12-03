import GameSystemUI from "../GameSystemUI/GameSystemUI";
import Local from "../GameSystem/Local/Local";

const system = new Local();
const LocalGameUI = GameSystemUI(system);

export default LocalGameUI;
