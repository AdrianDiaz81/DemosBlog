import {ISharePoint} from "./class/ISharePoint";
import {ISPList} from "./class/IList";
import styles from './PnpRest.module.scss';

export class Render{

SharePoint:ISharePoint;
RenderPrint: Element;
public constructor(sharePoint:ISharePoint, renderPrint:Element)
{
  this.SharePoint=sharePoint;
  this.RenderPrint=renderPrint;
}

public RenderList() {

    this.SharePoint.getList().then(
      (response) => {
      this._renderList(response.value);
        });


}
private _renderList(items: ISPList[]): void {
    let html: string = "";
    items.forEach((item: ISPList) => {
        html += `
        <ul >
            <li class="${styles.listItem}">
                <span class="ms-font-l">${item.Title}</span>
            </li>
        </ul>`;
    });
    this.RenderPrint.innerHTML = html;
}

}