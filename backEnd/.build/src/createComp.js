"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const dynamoDbLib = require("../libs/dynamodb-lib");
const response_lib_1 = require("../libs/response-lib");
function handler(event, context, callback) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const compAttr = [
            {
                AttributeName: "competitorId",
                AttributeType: "S",
                KeyType: "HASH"
            },
            {
                AttributeName: "email",
                AttributeType: "S",
                KeyType: "RANGE"
            }
        ];
        try {
            yield dynamoDbLib.createTable(`${data.compName}-${compId}`, compAttr);
            yield dynamoDbLib.call("put", params);
            callback(null, response_lib_1.success(params.Item));
        }
        catch (e) {
            console.log(e);
            callback(null, response_lib_1.failure({ status: false }));
        }
    });
}
exports.handler = handler;
//# sourceMappingURL=createComp.js.map