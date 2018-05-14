import {IRoute} from "../../../frontEnd/src/js/models/IRoute";

const uuid = require("uuid");

import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function handler(event, context, callback) {
    const data:IRoute[] = JSON.parse(event.body);
    const puts = data.map(route => {
        return {
            PutRequest: {
                Item: {
                    ...route,
                    routeId: uuid.v1(),
                    competitionId: event.pathParameters.competitionId,
                    userId: event.requestContext.identity.cognitoIdentityId,
                }
            }
        }
    });
    const params = {
        RequestItems: {
            "routes": puts
        }
    };


    try {
        await dynamoDbLib.call("writeBatch", params);
        callback(null, success(params));
    } catch (e) {
        console.log(e);
        callback(null, failure({e}));
    }
}