import {ISharePoint} from "./ISharePoint";
import {ISPLists,ISPList} from "./IList";
import pnp from "sp-pnp-js";

export class PnPSharePoint implements ISharePoint {
Url:string;
constructor(url:string){
this.Url=url;
}
  getList(): Promise<ISPLists> {

   return pnp.sp.web.lists.getByTitle("Documents").items.get().then((data: ISPList[]) => {
                var listData: ISPLists = { value: data };
                return listData;
            }) as Promise<ISPLists>;
  }
}