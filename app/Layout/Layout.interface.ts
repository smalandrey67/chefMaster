import type { FunctionComponent, ReactNode } from "react";
import type { MetaProps } from "@/interfaces/Meta.interface";

export interface LayoutProps extends MetaProps {
	children: ReactNode;
}

export interface WithLayoutProps<T> extends MetaProps {
	Component: FunctionComponent<T>;
}
