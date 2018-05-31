const uuid = require("uuid");

import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function handler(event, context, callback) {
    const data = JSON.parse(event.body);
    console.log(data);
    const compId = uuid.v1();
    const params = {
        TableName: "competitions",
        Item: {
            ...data,
            userId: event.requestContext.identity.cognitoIdentityId,
            compId: `${data.compName.replace(" ", "_")}-${compId}`,
            createdAt: new Date().getTime()
        }
    };

    try {
        await dynamoDbLib.call("put", params);
        callback(null, success(params.Item));
    } catch (e) {
        console.log(e);
        callback(null, failure({status: false}));
    }
}