define(["require", "exports", "utils"], function (require, exports, utils) {
    var Person;
    (function (Person_1) {
        var Person = (function () {
            function Person(name, lastName, year) {
                this.logger = new utils.Utils.Logger(utils.Utils.typeLogger.Console);
                this.name = name;
                this.lastName = lastName;
                this.year = year;
                this.logger.info("Estoy en el constructor");
            }
            return Person;
        })();
        Person_1.Person = Person;
        var University = (function () {
            function University() {
            }
            University.prototype.getStudends = function () {
                var persona1 = new Person("Adrian", "Diaz", 1981);
                var persona2 = new Person("Alberto", "Diaz", 1979);
                var persona3 = new Person("Santiago", "Porras", 1980);
                var result = new Array();
                result.push(persona1);
                result.push(persona2);
                result.push(persona3);
                return result;
            };
            return University;
        })();
        Person_1.University = University;
    })(Person = exports.Person || (exports.Person = {}));
});
