import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function handler(event, context, callback) {
    const params = {
        TableName: "routes",
        KeyConditionExpression: "competitionId = :compId AND userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId,
            ":compId": event.pathParameters.competitionId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        // Return the matching list of items in response body
        callback(null, success(result.Items));
    } catch (e) {
        callback(null, failure({ e }));
    }
}