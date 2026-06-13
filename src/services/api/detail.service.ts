import { http_client } from "@/services/api-client.ts";
import { ApiResponse } from "@/services/models/general.models.ts";
import { Detail } from "@/services/models/detail.models.ts";

export const DetailService = {
  fetchDetails: (): Promise<ApiResponse<Detail[]>> => {
    return http_client.get("details");
  },
  getDetail: (detailId: string): Promise<ApiResponse<Detail>> => {
    return http_client.get(`details/${detailId}`);
  },
  updateDetail: ({
    detailId,
    detail,
  }: {
    detailId: string;
    detail: Partial<Detail>;
  }): Promise<ApiResponse<Detail>> => {
    return http_client.put(`details/${detailId}`, detail);
  },
  addDetail: (payload: Partial<Detail>): Promise<ApiResponse<Detail>> => {
    return http_client.post("details", payload);
  },
  deleteDetail: (detailId: string): Promise<ApiResponse<unknown>> => {
    return http_client.delete(`details/${detailId}`);
  },
};
