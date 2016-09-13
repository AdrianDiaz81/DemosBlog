declare interface IHelloAngularStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloAngularStrings' {
  const strings: IHelloAngularStrings;
  export = strings;
}
