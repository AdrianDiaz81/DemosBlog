import {ISharePoint} from "./ISharePoint";
import {ISPLists,ISPList} from "./IList";
import MockHttpClient from "./MockHttpClient";

export class MockSharePoint implements ISharePoint
{
  Url:string;
  constructor(url:string){
    this.Url=url;
  }
   getList(): Promise<ISPLists> {
    return MockHttpClient.get(this.Url)
            .then((data: ISPList[]) => {
                var listData: ISPLists = { value: data };
                return listData;
            }) as Promise<ISPLists>;
      }
}
