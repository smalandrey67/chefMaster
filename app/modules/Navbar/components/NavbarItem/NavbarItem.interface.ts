import type { NavbarItems } from "../../Navbar.interface";

export interface NavbarItemProps extends Omit<NavbarItems, "id"> {}
