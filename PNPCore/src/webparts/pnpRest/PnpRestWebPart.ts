import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import styles from './PnpRest.module.scss';
import * as strings from 'pnpRestStrings';
import { IPnpRestWebPartProps } from './IPnpRestWebPartProps';

import { EnvironmentType } from '@microsoft/sp-client-base';
import {MockSharePoint}  from "./class/MocksharePoint";
import {PnPSharePoint} from "./class/PnpSharePoint";
import {Render} from "./renderList";

export default class PnpRestWebPart extends BaseClientSideWebPart<IPnpRestWebPartProps> {

fly:Render;
  public constructor(context: IWebPartContext) {
    super(context);


  }

  public render(): void {

   this.domElement.innerHTML = `
<div >
    <div class="${styles.container}">
        <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
                <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
                <p class="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
                <p class="ms-font-l ms-fontColor-white">${this.properties.description}</p>
                <p class='ms-font-l ms-fontColor-white'>Loading from ${this.context.pageContext.web.title}</p>
                <a href="https://github.com/SharePoint/sp-dev-docs/wiki" class="ms-Button ${styles.button}">
                    <span class="ms-Button-label">Learn more</span>
                </a>
            </div>
        </div>
    <div id="spListContainer" />
    </div>
</div>`;
 if (this.context.environment.type === EnvironmentType.Local) {
       this.fly= new Render(new MockSharePoint(this.context.pageContext.web.absoluteUrl),this.domElement.querySelector('#spListContainer'));
    }
    else{
     this.fly= new Render( new PnPSharePoint(this.context.pageContext.web.absoluteUrl),this.domElement.querySelector('#spListContainer'));
    }
 this.fly.RenderList();
  }


  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
