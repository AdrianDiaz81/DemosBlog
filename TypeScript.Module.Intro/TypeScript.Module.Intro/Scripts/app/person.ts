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

    export class University {
        getStudends(): Array<Person> {
            var persona1 = new Person("Adrian", "Diaz", 1981);
            var persona2 = new Person("Alberto", "Diaz", 1979);
            var persona3 = new Person("Santiago", "Porras", 1980);

            var result: Array<Person> = new Array<Person>();
            result.push(persona1);
            result.push(persona2);
            result.push(persona3);

            return result;

        }
    }
}