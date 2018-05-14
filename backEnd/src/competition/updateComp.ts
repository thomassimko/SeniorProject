import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function handler(event, context, callback) {
    const data = JSON.parse(event.body);
    console.log(data);
    const params = {
        TableName: "competitions",
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            compId: event.pathParameters.competitionId
        },
        UpdateExpression: "set compDate = :date, showLocation = :location, showName = :name, showSetter = :setter",
        ExpressionAttributeValues: {
            ":date" : data.compDate,
            ":location" : data.showLocation,
            ":name" : data.showName,
            ":setter" : data.showSetter
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        await dynamoDbLib.call("update", params);
        callback(null, success({ status: true }));
    } catch (e) {
        console.error(e);
        callback(null, failure({ status: false }));
    }
}