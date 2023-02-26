import type { NavbarItem } from "../../Navbar.interface";

export interface NavbarItemProps extends Omit<NavbarItem, "id"> {}
