import { Uploads } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api");

api.route("GET /", {
  link: [Uploads],
  handler: "packages/functions/src/api.handler",
});