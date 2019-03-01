import React from "react"
import { MiniProfileMenuBlock } from "./Block"
import { MiniProfileMenuItem } from "./Item"
import { MiniProfileMenuLine } from "./Line"

export const MiniProfileMenu = ({ isOpen }) => (
  <MiniProfileMenuBlock isOpen={isOpen} onClick={() => {}}>
    <MiniProfileMenuItem>My profile</MiniProfileMenuItem>
    <MiniProfileMenuLine />
    <MiniProfileMenuItem href="/logout">Logout</MiniProfileMenuItem>
  </MiniProfileMenuBlock>
)
