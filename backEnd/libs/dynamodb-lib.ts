const AWS = require("aws-sdk");

AWS.config.update({ region: "us-west-2" });

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    return dynamoDb[action](params).promise();
}

export interface IDBAttribute {
    AttributeName: string,
    KeyType: "HASH" | "RANGE",
    AttributeType: "N" | "S"
}

export function createTable(tableName: string, attributes: IDBAttribute[]) {
    const dynamodb = new AWS.DynamoDB();

    const params = {
        TableName : tableName,
        KeySchema: attributes.map((attr:IDBAttribute) => {
            return {AttributeName: attr.AttributeName, KeyType: attr.KeyType}
        }),
        AttributeDefinitions: attributes.map((attr:IDBAttribute) => {
            return {AttributeName: attr.AttributeName, AttributeType: attr.AttributeType}
        }),
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    };
    return dynamodb.createTable(params).promise();
}
