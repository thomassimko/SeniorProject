import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function handler(event, context, callback) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: event.pathParameters.compTable,
        // 'Key' defines the partition key and sort key of the item to be updated
        // - 'userId': Identity Pool identity id of the authenticated user
        // - 'noteId': path parameter
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            competitorId: event.pathParameters.id
        },
        // 'UpdateExpression' defines the attributes to be updated
        // 'ExpressionAttributeValues' defines the value in the update expression
        UpdateExpression: "SET firstName = :firstName, " +
            "lastName = :lastName, " +
            "gender = :gender, " +
            "address = :address, " +
            "state = :state, " +
            "zip = :zip, " +
            "phoneNumber = :phoneNumber, " +
            "email = :email, " +
            "birthDate = :birthDate, " +
            "ccsNumber = :ccsNumber, " +
            "signedIn = :signedIn ",
        ExpressionAttributeValues: {
            "fistName" : data.firstName ? data.firstName : null,
            "lastName" : data.lastName ? data.lastName : null,
            "gender" : data.gender ? data.gender : null,
            "address" : data.address ? data.address : null,
            "state" : data.state ? data.state : null,
            "zip" : data.zip ? data.zip : null,
            "phoneNumber" : data.phoneNumber ? data.phoneNumber : null,
            "email" : data.email ? data.email : null,
            "birthDate" : data.birthDate ? data.birthDate : null,
            "ccsNumber" : data.ccsNumber ? data.ccsNumber : null,
            "signedIn" : data.signedIn ? data.signedIn : null,
        },
        ReturnValues: "ALL_NEW"
    };

    try {
        await dynamoDbLib.call("update", params);
        callback(null, success({ status: true }));
    } catch (e) {
        callback(null, failure({ status: false, error: e }));
    }
}