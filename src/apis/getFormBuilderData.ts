import { getLocalStorageItem, localStorageKey } from "@/commons/utils";

export const getFormBuilderData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(getLocalStorageItem(localStorageKey));
    }, 1 * 1000);
  });
};
