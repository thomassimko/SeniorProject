import {ICompetition} from "../models/ICompetition";
import { API } from "aws-amplify";


export interface ICompetitionController {
    getCompetition(competitionId:string):Promise<ICompetition>
    updateCompetition(competitionId:string, competition:ICompetition)
    createCompetition(competition:ICompetition)
    getCompetitionList():Promise<ICompetition[]>
}

export class CompetitionController implements ICompetitionController {
    async getCompetition(competitionId: string): Promise<ICompetition> {
        const comp = await API.get("competitions", `/competitions/${competitionId}`, {});
        console.log(comp);
        return comp;
    }

    async createCompetition(competition: ICompetition) {
        return API.post("competitions", "/competitions", {
            body: competition
        });
    }

    async updateCompetition(competitionId: string, competition: ICompetition) {
        return API.put("competitions", `/competitions/${competitionId}`, {
            body: competition
        });
    }

    async getCompetitionList() {
        return await API.get("competitions", "/competitions", {})
    }

}