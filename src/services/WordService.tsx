import axios from "axios";
import { BaseService } from "./BaseService";
import { BaseModel } from "../models/BaseModel";


export class WordService implements BaseService{
    async getİnfo(word:string): Promise<BaseModel[]> {
        let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let res: BaseModel[] = response.data;
        return res;
    }
}