import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function handler(event, context, callback) {

    //TODO: Currently security issue where anyone can access anyone else's table with the URL

    const params = {
        TableName: event.pathParameters.compTable,
    };

    try {
        const result = await dynamoDbLib.call("scan", params);
        // Return the matching list of items in response body
        callback(null, success(result.Items));
    } catch (e) {
        callback(null, failure({ status: false, error: e}));
    }
}