import * as React from "react";

export interface UserItemProps { compiler: string; framework: string; }

export const UserItem = (props: UserItemProps) => 
<li className="user-item">
	<img className="user-item-image" src="http://placehold.it/50x50" />
	<div className="user-item-content">
		<div className="user-item-name">Gregg Bell</div>
		<div className="user-item-snippet">An example conversation...</div>
	</div>
	<div className="user-item-time">09:20</div>
</li>;