export interface translatorType {
  text: string;
  direction: "to_korean" | "to_pangyo";
}

export interface termType {
  term: string;
  meaning: string;
  original: string;
}

export interface responseType {
  original: string;
  translated: string;
  direction: "to_korean" | "to_pangyo";
  terms: termType[];
}