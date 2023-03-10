/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
import { NavBarAltProps } from "./NavBarAlt";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingPageOverridesProps = {
    LandingPage?: PrimitiveOverrideProps<ViewProps>;
    PageContents?: PrimitiveOverrideProps<ViewProps>;
    NavBarAlt?: NavBarAltProps;
} & EscapeHatchProps;
export declare type LandingPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LandingPageOverridesProps | undefined | null;
}>;
export default function LandingPage(props: LandingPageProps): React.ReactElement;
