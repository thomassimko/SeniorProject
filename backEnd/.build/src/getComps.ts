export async function handler(event, context, callback) {
    const params = {
        TableName: "competitions",
        // 'KeyConditionExpression' defines the condition for the query
        // - 'userId = :userId': only return items with matching 'userId'
        //   partition key
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':userId': defines 'userId' to be Identity Pool identity id
        //   of the authenticated user
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        // Return the matching list of items in response body
        callback(null, success(result.Items));
    } catch (e) {
        callback(null, failure({ status: false }));
    }
}