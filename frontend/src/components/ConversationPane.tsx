import * as React from "react";

export interface ConversationPaneProps { compiler: string; framework: string; }

export const ConversationPane = (props: ConversationPaneProps) => 
<div id="conversation-pane">
	<div id="conversation">
		<div className="message message-theirs">Hey</div>
		<div className="message message-mine">Hey!</div>
		<div className="message message-theirs">How do you feel about taking the tube tomorrow?</div>
		<div className="message message-theirs">At 8</div>
		<div className="message message-mine">Yeah sounds good.</div>
	</div>
</div>;