import * as React from "react";
import * as ReactDOM from "react-dom";

import { Chat } from "./components/Chat";

ReactDOM.render(
    <Chat compiler="TypeScript" framework="React" />,
    document.getElementById("chatcontainer")
);