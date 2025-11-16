import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
});

export const main = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
