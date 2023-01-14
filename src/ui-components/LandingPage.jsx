/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import NavBarAlt from "./NavBarAlt";
export default function LandingPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1731px"
      height="966px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LandingPage")}
      {...rest}
    >
      <View
        width="1731px"
        height="874px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="9.52%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(174,179,183,1)"
        {...getOverrideProps(overrides, "PageContents")}
      ></View>
      <NavBarAlt
        display="flex"
        gap="30px"
        direction="row"
        width="1731px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        padding="19px 30px 19px 30px"
        backgroundColor="rgba(4,52,149,1)"
        property1="Default"
        {...getOverrideProps(overrides, "NavBarAlt")}
      ></NavBarAlt>
    </View>
  );
}
