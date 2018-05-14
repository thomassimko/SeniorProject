import { API } from "aws-amplify";
import {IUserRegistration} from "../models/IUserRegistration";


export interface ICompetitorController {
    updateCompetitor(competitionId:string, registrationId:string, competitor:IUserRegistration)
    getCompetitors(competitionId:string)
    createCompetitor(competitionId:string, competitor:IUserRegistration)

}

export class CompetitorController implements ICompetitorController {

    async updateCompetitor(competitionId:string, registrationId:string, competitor:IUserRegistration) {
        await API.put('competitions', `/competitions/${competitionId}/register/${competitor.registrationId}`, {
            body: competitor
        });
    }

    async getCompetitors(competitionId:string) {
        return await API.get('competitions', `/competitions/${competitionId}/register`, {})
    }

    async createCompetitor(competitionId:string, competitor:IUserRegistration) {
        await API.post('competitions', `/competitions/${competitionId}/register`, {
            body: competitor
        });
    }

}