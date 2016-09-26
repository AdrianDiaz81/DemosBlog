import { ISPList} from "./IList";

export default class MockHttpClient {

    private static _items: ISPList[] = [{ Title: 'Mock List', Id: '1' }];

    public static get(restUrl: string, options?: any): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}