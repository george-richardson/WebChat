import * as React from "react";

import { UsersList } from "./UsersList";
import { ConversationPane } from "./ConversationPane";
import { InputBar } from "./InputBar";

export interface ChatProps { compiler: string; framework: string; }

export const Chat = (props: ChatProps) => 
<div id="chat-flex">
	<UsersList compiler="TypeScript" framework="React"></UsersList>
	<div id="conversation-column">
		<ConversationPane compiler="TypeScript" framework="React"></ConversationPane>
		<InputBar compiler="TypeScript" framework="React"></InputBar>
	</div>
</div>;