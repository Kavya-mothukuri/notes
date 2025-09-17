import { table } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api");

api.route("GET /", {
  link: [table],
  handler: "packages/functions/src/api.handler",
});