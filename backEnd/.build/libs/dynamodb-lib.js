"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-west-2" });
function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb[action](params).promise();
}
exports.call = call;
function createTable(tableName, attributes) {
    const dynamodb = new AWS.DynamoDB();
    const params = {
        TableName: tableName,
        KeySchema: attributes.map((attr) => {
            return { AttributeName: attr.AttributeName, KeyType: attr.KeyType };
        }),
        AttributeDefinitions: attributes.map((attr) => {
            return { AttributeName: attr.AttributeName, AttributeType: attr.AttributeType };
        }),
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    };
    dynamodb.createTable(params, function (err, data) {
        if (err) {
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        }
        else {
            console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
        }
    });
}
exports.createTable = createTable;
//# sourceMappingURL=dynamodb-lib.js.map