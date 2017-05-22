import * as React from "react";

export interface InputBarProps { compiler: string; framework: string; }

export const InputBar = (props: InputBarProps) => 
<div id="input-bar">
	<input type="text" placeholder="Type a message..."/>
	<i className="fa fa-paper-plane" aria-hidden="true"></i>
	<i className="fa fa-phone" aria-hidden="true"></i>
	<i className="fa fa-video-camera" aria-hidden="true"></i>
</div>;