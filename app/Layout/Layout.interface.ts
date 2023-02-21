import type { FunctionComponent, ReactNode } from "react";
import type { MetaProps } from "@/interfaces/Meta.interface";

export interface LayoutProps extends MetaProps {
	children: ReactNode;
}

export interface WithLayoutProps extends MetaProps {
	Component: FunctionComponent;
}
