import * as React from "react";
import { UserItem } from "./UserItem";

export interface UsersListProps { compiler: string; framework: string; }

export const UsersList = (props: UsersListProps) => <div id="users-list"><ul><UserItem compiler="TypeScript" framework="React"></UserItem><UserItem compiler="TypeScript" framework="React"></UserItem></ul></div>;