import { bindSubmit } from "./components/input";
import { render } from "./components/list";
import { render as todoRenderer } from "./components/todoItem";
import "./style.css";
import { emitter } from "./utils/emit";

bindSubmit();

await render(todoRenderer);

emitter.on("render", () => {
  render(todoRenderer);
});
