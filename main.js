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
        // return dishes;
        console.log(dishes);
        // console.log(randomDishArray);
    },
    generateRandomMeal: function () {
        
    }
}
menu.addDishToCourse('appetizers', 'chips', 1.50);
menu.addDishToCourse('appetizers', 'pretzels', 1.75);
//console.log(menu.courses.appetizers);
menu.getRandomDishFromCourse('appetizers');
