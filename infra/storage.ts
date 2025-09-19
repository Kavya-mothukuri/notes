// Create the DynamoDB table
export const table = new sst.aws.Dynamo("Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { hashKey: "userId", rangeKey: "noteId" },
  });
  new sst.aws.Bucket("Uploads", {
    cors: {
      allowMethods: ["GET"]
    }
  });

  export const bucket = new sst.aws.Bucket("Uploads");
  // Create a secret for Stripe
export const secret = new sst.Secret("StripeSecretKey");
