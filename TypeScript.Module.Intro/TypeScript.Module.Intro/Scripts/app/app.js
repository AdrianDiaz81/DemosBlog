define(["require", "exports", "person", "jquery", "mustache"], function (require, exports, person, jquery, mustache) {
    function run() {
        var personCollection = new person.Person.University().getStudends();
        jquery("#template").load("/templates/person.html", function () {
            var template = jquery('#template').html();
            var html = mustache.render(template, personCollection);
            jquery('#message').html(html);
        });
    }
    exports.run = run;
});
