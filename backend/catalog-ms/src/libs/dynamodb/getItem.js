import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const DYNAMO_CLIENT = new DynamoDBClient({
  region: process.env.AWS_REGION
});

export const getItemHandler = async (token) => {

  try {
    const result = await DYNAMO_CLIENT.send(
      new GetItemCommand({
        TableName: process.env.DYNAMODB_NAME,
        Key: {
          ProductId: {
            S: token,
          },
        },
      })
    );

    return result;
    
    // return {
    //   statusCode: result["$metadata"].httpStatusCode,
    //   // item: {
    //   //   token: result.Item.id.S,
    //   //   email: result.Item.email.S,
    //   //   userId: result.Item.userId.S,
    //   //   timestamp: result.Item.timestamp.S,
    //   // },
    // };
  } catch (error) {
    throw {
      statusCode: error["$metadata"].httpStatusCode,
      message: error && error.message ? error.message : "Unknown error.",
      type: error && error.__type,
    };
  }
};
