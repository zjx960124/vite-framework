import Request from "../request/request";
import { HttpResponse } from "../types";

interface LoginParams {
  username: string;
  password: string;
}

export class UserService {
  static async login(params: LoginParams): Promise<HttpResponse> {
    return Request("/rest/report/project/list", {
      method: "get",
      responseType: "json",
      params: {
        ...params,
      },
    });
  }

  static async resgister(params: LoginParams): Promise<HttpResponse> {
    return Request("/rest/report/project/list", {
      method: "get",
      responseType: "json",
      params: {
        ...params,
      },
    });
  }
}
