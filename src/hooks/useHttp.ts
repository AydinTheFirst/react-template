import { fetcher } from "@/lib/http";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";

export const useHTTP = <T>(
  url: string,
  config?: SWRConfiguration,
): SWRResponse<T> => {
  return useSWR<T>(url, fetcher, config);
};
