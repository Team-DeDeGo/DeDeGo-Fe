import { http } from "@/api";
import { responseType, translatorType } from "@/types";

export const requestTranslate = async (params: translatorType): Promise<responseType> => {
  const { data } = await http.post("/translate", params);
  return data;
};