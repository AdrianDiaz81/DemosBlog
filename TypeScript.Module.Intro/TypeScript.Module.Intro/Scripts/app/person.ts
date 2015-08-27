import utils = require("utils");
export module Person {
    export class Person {
        name: string;
        lastName: string;
        year: number;
        logger: utils.Utils.Logger = new utils.Utils.Logger(utils.Utils.typeLogger.Console);
        constructor(name: string, lastName: string, year: number) {
            this.name = name;
            this.lastName = lastName;
            this.year = year;
            this.logger.info("Estoy en el constructor");
        }
    }
}