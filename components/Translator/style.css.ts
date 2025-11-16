import { style } from "@vanilla-extract/css";
import { theme } from "@/styles";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  padding: "20px",
});

export const translatorBox = style({
  width: "100%",
  maxWidth: "1200px",
  backgroundColor: theme.background,
  border: `3px solid ${theme.primary}`,
  borderRadius: "16px",
  overflow: "hidden",
});

export const mainContent = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  minHeight: "400px",
});

export const inputSection = style({
  display: "flex",
  flexDirection: "column",
  borderRight: `2px solid ${theme.gray}`,
});

export const outputSection = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
});

export const languageHeader = style({
  padding: "16px 0px",
  borderBottom: `2px solid ${theme.gray}`,
  display: "flex",
  alignItems: "center",
});

export const languageLabel = style({
  padding: "8px 30px 8px 30px",
  fontSize: "16px",
  fontWeight: "500",
  color: "#333",
  lineHeight: 1.5,
});

export const selectWrapper = style({
  position: "relative",
  display: "inline-block",
});

export const select = style({
  padding: "8px 30px 8px 30px",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: 1.5,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  appearance: "none",
  outline: "none",
  color: "#333",
});

export const selectArrow = style({
  position: "absolute",
  right: "5px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  width: "20px",
  height: "20px",
});

export const textArea = style({
  flex: 1,
  border: "none",
  outline: "none",
  fontSize: "16px",
  lineHeight: "1.6",
  resize: "none",
  fontFamily: "inherit",
  padding: "30px",
  "::placeholder": {
    color: "#AAAAAA",
  },
});

export const outputText = style({
  flex: 1,
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  padding: "30px",
});

export const footer = style({
  display: "flex",
  alignItems: "center",
  borderTop: `2px solid ${theme.gray}`,
});

export const translateButton = style({
  width: "50%",
  padding: "20px",
  backgroundColor: theme.primary,
  border: "none",
  fontSize: "18px",
  fontWeight: "600",
  color: "#333",
  cursor: "pointer",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#7BC936",
  },
  ":active": {
    backgroundColor: "#6AB825",
  },
  ":disabled": {
    backgroundColor: "#E0E0E0",
    cursor: "not-allowed",
    color: "#999",
  },
});

export const iconButtons = style({
  display: "flex",
  gap: "15px",
  padding: "0 30px",
  width: "50%",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const iconButton = style({
  width: "40px",
  height: "40px",
  padding: "8px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "opacity 0.2s",
  ":hover": {
    opacity: 0.7,
  },
  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
});

export const icon = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

// 용어 설명 섹션 스타일
export const termsSection = style({
  padding: "24px 30px",
  backgroundColor: "#F9FAFB",
  borderTop: `2px solid ${theme.gray}`,
});

export const termsTitle = style({
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "16px",
  color: "#333",
});

export const termsList = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const termItem = style({
  padding: "16px",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  border: "1px solid #E5E7EB",
  transition: "box-shadow 0.2s",
  ":hover": {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
});

export const termHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "8px",
});

export const termWord = style({
  fontSize: "16px",
  fontWeight: "600",
  color: theme.primary,
});

export const termOriginal = style({
  fontSize: "14px",
  color: "#6B7280",
  fontStyle: "italic",
  fontWeight: "500",
});

export const termMeaning = style({
  fontSize: "14px",
  color: "#4B5563",
  lineHeight: "1.6",
  margin: 0,
});