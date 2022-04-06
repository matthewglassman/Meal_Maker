//This app will select out a 3 course meal based on what is available on a menu.

var menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        var dish = {
            name: dishName,
            price: dishPrice
        }

        //logic to push dish object into courses array for based on courseName
        switch (courseName) {
            case 'appetizers':
                menu.courses.appetizers.push(dish);
                break;
            case 'mains':
                menu.courses.mains.push(dish);
                break;
            case 'desserts':
                menu.courses.desserts.push(dish);
                break;
        }
    },
    getRandomDishFromCourse: function (courseName) {
       let randomDishArray = Math.floor(menu.courses[courseName].length * Math.random());
        var dishes = menu.courses[courseName][randomDishArray];
        return dishes;
        // console.log(dishes.price);
        // console.log(randomDishArray);
    },
    generateRandomMeal: function () {   
        appetizer = menu.getRandomDishFromCourse('appetizers');
        main = menu.getRandomDishFromCourse('mains');
        dessert = menu.getRandomDishFromCourse('desserts');

        let totalPrice = appetizer.price + main.price + dessert.price;

        console.log("Meal generated...  Your appetizer is", appetizer.name,". Your main should be",main.name, "and you should finish with", dessert.name, ". The meal will cost $", totalPrice, ".")
    }
}
menu.addDishToCourse('appetizers', 'chips', 1.50);
menu.addDishToCourse('appetizers', 'pretzels', 1.75);
menu.addDishToCourse('appetizers', 'soup', 2.00);
menu.addDishToCourse('mains', 'chicken', 10.50);
menu.addDishToCourse('mains', 'sandwich', 5.25);
menu.addDishToCourse('desserts', 'pie', 2.00);
menu.addDishToCourse('desserts', 'cake', 3.50);
menu.addDishToCourse('dessert', 'ice cream', 3.00);
menu.addDishToCourse('mains', 'steak', 23.00);
//console.log(menu.courses.appetizers);
// menu.getRandomDishFromCourse('appetizers');
var meal = menu.generateRandomMeal();