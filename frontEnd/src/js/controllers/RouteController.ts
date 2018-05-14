import { API } from "aws-amplify";
import {IUserRegistration} from "../models/IUserRegistration";
import {IRoute} from "../models/IRoute";


export interface IRouteController {
    getRoutes(competitionId:string)
    updateRoutes(competitionId:string, routes:IRoute[])
}

export class RouteController implements IRouteController {

    async updateRoutes(competitionId:string, routes:IRoute[]) {
        return await API.put('competitions', `/competitions/${competitionId}/routes`, {
            body: routes
        });
    }

    async getRoutes(competitionId:string) {
        await API.put('competitions', `/competitions/${competitionId}/routes`, {});
        return await API.get('competitions', `/competitions/${competitionId}/register`, {})
    }

}