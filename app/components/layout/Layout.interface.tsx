import type { ReactNode } from "react";
import type { MetaProps } from "@/interfaces/Meta";

export interface LayoutProps extends MetaProps {
	children: ReactNode;
}
