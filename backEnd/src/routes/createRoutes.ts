import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function handler(event, context, callback) {
    const data = JSON.parse(event.body);
    const batchRequest = data.map(route => {
        return {
            PutRequest: {
                Item: {
                    ...route,
                    competitionId: event.pathParameters.competitionId,
                    userId: event.requestContext.identity.cognitoIdentityId,
                }
            }
        }
    });
    console.log(batchRequest[0].PutRequest.Item);
    try {
        for (var i = 0; i < batchRequest.length / 25; i++) {
            const startIndex = i * 25;
            const params = {
                RequestItems: {
                    "routes": batchRequest.slice(startIndex, startIndex + 25)
                }
            };
            console.log(batchRequest.slice(startIndex, startIndex + 25));
            await dynamoDbLib.call("batchWrite", params);
        }
        callback(null, success(batchRequest));
    } catch (e) {
        console.log(e);
        callback(null, failure({e}));
    }
}