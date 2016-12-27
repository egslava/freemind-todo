/**
 * Created by egslava on 27/12/2016.
 */

// inquirer = require('inquirer'),

//
// inquirer.prompt([
//     {
//         type: 'checkbox',
//         message: 'Select toppings',
//         name: 'toppings',
//         choices: [
//             new inquirer.Separator(' = The Meats = '),
//             {name: 'Pepperoni'},
//             {name: 'Ham'},
//             {name: 'Ground Meat'},
//             {name: 'Bacon'},
//             new inquirer.Separator(' = The Cheeses = '),
//             {name: 'Mozzarella'},
//             {name: 'Cheddar'},
//             {name: 'Parmesan'},
//             new inquirer.Separator(' = The usual ='),
//             {name: 'Mushroom'},
//             {name: 'Tomato'},
//             new inquirer.Separator(' = The extras = '),
//             {name: 'Pineapple'},
//             {name: 'Olives', disabled: 'out of stock'},
//             {name: 'Extra cheese'}
//         ],
//         validate: function (answer) {
//             if (answer.length < 1) {
//                 return 'You must choose at least one topping.';
//             }
//             return true;
//         }
//     }
// ]).then(function (answers) {
//     console.log(JSON.stringify(answers, null, '  '));
// });


// var Sparkline = require('clui').Sparkline;
// var reqsPerSec = [10, 12, 3, 7, 12, 9, 23, 10, 9, 19, 16, 18, 12, 12];
//
//
// console.log(Sparkline(reqsPerSec, 'reqs/sec'));
