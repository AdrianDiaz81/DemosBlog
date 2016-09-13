import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import "reflect-metadata";
import "core-js/es6/symbol";
import "core-js/es6/object";
import "core-js/es6/function";
import "core-js/es6/parse-int";
import "core-js/es6/parse-float";
import "core-js/es6/number";
import "core-js/es6/math";
import "core-js/es6/string";
import "core-js/es6/date";
import "core-js/es6/array";
import "core-js/es6/regexp";
import "core-js/es6/map";
import "core-js/es6/set";
import "core-js/es6/reflect";

import "core-js/es7/reflect";
import "zone.js/dist/zone";

import styles from './HelloAngular.module.scss';
import * as strings from 'helloAngularStrings';
import { IHelloAngularWebPartProps } from './IHelloAngularWebPartProps';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export default class HelloAngularWebPart extends BaseClientSideWebPart<IHelloAngularWebPartProps> {

  public constructor(context: IWebPartContext) {
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
    super(context);
  }

  public render(): void {
    this.domElement.innerHTML = `

      <my-app>Loading...</my-app>`;

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
