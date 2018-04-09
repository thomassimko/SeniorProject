const uuid = require("uuid");

import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context, callback) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: "competitions",
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            compId: uuid.v1(),
            compName: data.name,
            createdAt: new Date().getTime()
        }
    };

    try {
        await dynamoDbLib.call("put", params);
        callback(null, success(params.Item));
    } catch (e) {
        callback(null, failure({ status: false }));
    }
}