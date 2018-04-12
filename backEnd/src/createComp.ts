import {IDBAttribute} from "../libs/dynamodb-lib";

const uuid = require("uuid");

import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";

export async function handler(event, context, callback) {
    const data = JSON.parse(event.body);
    const compId = uuid.v1();
    const params = {
        TableName: "competitions",
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            compId: compId,
            compName: data.compName,
            createdAt: new Date().getTime()
        }
    };

    const compAttr: IDBAttribute[] = [
        {
            AttributeName: "competitorId",
            AttributeType: "S",
            KeyType: "HASH"
        }
    ];

    try {
        await dynamoDbLib.createTable(`${data.compName}-${compId}`, compAttr);
        await dynamoDbLib.call("put", params);
        callback(null, success(params.Item));
    } catch (e) {
        console.log(e);
        callback(null, failure({status: false}));
    }
}