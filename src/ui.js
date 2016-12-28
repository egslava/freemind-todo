'use strict';
/**
 * Created by egslava on 27/12/2016.
 */

let inquirer = require('inquirer');

// {
//     "CREATED":"1482734890708",
//     "ID":"ID_1056967150",
//     "LINK":"http://www.fonetiks.org/dictations/",
//     "MODIFIED":"1482834538269",
//     "TEXT":"fonetiks.org > Dictations"
// }

function checkTasksPrompt(tasks) {
    const labels = tasks.map( (it) => {
        return { "name": it.TEXT, "ID": it.ID}
    });
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Select toppings',
            name: 'toppings',
            choices: labels
            //     [
            //     new inquirer.Separator(' = The Meats = '),
            //     {name: 'Pepperoni'},
            //     {name: 'Ham'},
            //     {name: 'Ground Meat'},
            //     {name: 'Bacon'},
            //     new inquirer.Separator(' = The Cheeses = '),
            //     {name: 'Mozzarella'},
            //     {name: 'Cheddar'},
            //     {name: 'Parmesan'},
            //     new inquirer.Separator(' = The usual ='),
            //     {name: 'Mushroom'},
            //     {name: 'Tomato'},
            //     new inquirer.Separator(' = The extras = '),
            //     {name: 'Pineapple'},
            //     {name: 'Olives', disabled: 'out of stock'},
            //     {name: 'Extra cheese'}
            // ],
            // validate: function (answer) {
            //     if (answer.length < 1) {
            //         return 'You must choose at least one topping.';
            //     }
            //     return true;
            // }
        }
    ]).then(function (answers) {
        console.log(JSON.stringify(answers, null, '  '));
    });
}

module.exports.checkTasksPrompt = checkTasksPrompt;


// var Sparkline = require('clui').Sparkline;
// var reqsPerSec = [10, 12, 3, 7, 12, 9, 23, 10, 9, 19, 16, 18, 12, 12];
//
//
// console.log(Sparkline(reqsPerSec, 'reqs/sec'));
