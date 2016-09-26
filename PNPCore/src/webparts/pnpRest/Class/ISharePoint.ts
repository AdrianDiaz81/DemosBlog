import { ISPLists} from "./IList";

export interface ISharePoint {
    getList(): Promise<ISPLists>;
}