import person = require("person");
import jquery = require("jquery");
import mustache = require("mustache");
export function run() {

    var personCollection: Array<person.Person.Person> = new person.Person.University().getStudends();
    

    
    jquery("#template").load("/templates/person.html", function () {
        
        var template = jquery('#template').html();

        var html = mustache.render(template, personCollection);
        jquery('#message').html(html);
 
    });

}