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
    })(Person = exports.Person || (exports.Person = {}));
});
