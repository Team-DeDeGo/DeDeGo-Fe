import { useMutation } from "@tanstack/react-query";
import { requestTranslate } from "./translator.api";
import type { translatorType, responseType } from "@/types";

export const useTranslateMutation = () => {
  return useMutation<responseType, Error, translatorType>({
    mutationFn: (params: translatorType) => requestTranslate(params),
  });
};