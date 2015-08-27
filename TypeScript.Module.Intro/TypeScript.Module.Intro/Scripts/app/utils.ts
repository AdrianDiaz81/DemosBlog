export module Utils {
    export enum typeLogger { Console, Alert }

    export class Logger {
        type: typeLogger;
        constructor(type: typeLogger) {
            this.type = type;
        }
        info(text: string) {
            switch (this.type) {
                case typeLogger.Console:
                    console.info(text);
                    break;
                case typeLogger.Alert:
                    alert(text);
                    break;
                default:
                    break;
            }
        }

        warning(text: string)
         {
            switch (this.type) {
                case typeLogger.Console:
                    console.warn(text);
                    break;
                case typeLogger.Alert:
                    alert(text);
                    break;
                default:
                    break;
            }
        }

        error(text: string) {
            switch (this.type) {
                case typeLogger.Console:
                    console.error(text);
                    break;
                case typeLogger.Alert:
                    alert(text);
                    break;
                default:
                    break;
            }
        }
    }
}