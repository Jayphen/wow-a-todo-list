import { bindSubmit } from "./components/input";
import { bindComplete, render } from "./components/list";
import { render as todoRenderer } from "./components/todoItem";
import "./style.css";
import { emitter } from "./utils/emit";

bindSubmit();
bindComplete();

await render(todoRenderer);

emitter.on("render", () => {
  render(todoRenderer);
});
