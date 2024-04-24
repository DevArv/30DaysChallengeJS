// Bilder pattern

class EcommerceBuilder {
    constructor() {
        this.name = '';
        this.price = 0;
        this.quantity = 0;
        this.description = '';
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    build() {
        return {
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            description: this.description
        };
    }
}

const PRODUCT =  new EcommerceBuilder()
    .setName('Amazfit')
    .setPrice(28)
    .setQuantity(1)
    .setDescription('This is a smart watch, which has many features that you will love')
    .build();

console.log(PRODUCT);

//Form builder - Builder pattern
class FormBuilder {
    constructor() {
        this.elements = [];
    }

    addInput(type, name, value) {
        this.elements.push ({
            type: 'input',
            name: name,
            value: value
        });
        return this;
    }

    addButton(text) {
        this.elements.push ({
            type: 'button',
            text: text
        });
        return this;
    }

    build() {
        let form = '';

        this.elements.forEach(element => {
            if (element.type === 'input') {
                form += `${element.type}" name="${element.name}" value="${element.value}" >`;
            } else if (element.type === 'button') {
                form += `${element.text}`;
            }
        });
        form += '';
        return form;
    }
}

const FORM = new FormBuilder()
    .addInput('text', 'nickname', '')
    .addInput('password', 'password', '')
    .addButton('Submit')
    .build();

console.log(FORM); //> <input type="text" name="nickname" value=""> <input type="password" name="password" value=""> <button>Submit</button>

// Prototype pattern

function Youtube(name, minutes) {
    this.name = name;
    this.minutes = minutes;
}

Youtube.prototype.upload = function () {
    console.log("Youtube video uploaded");
}

const YOUTUBE = new Youtube('Champion Spotlight', 10);
console.log(YOUTUBE.name); //> Champion Spotlight
console.log(YOUTUBE.minutes); //> 10
YOUTUBE.upload(); //> Youtube video uploaded

// Prototype pattern - templates

function HumanResources(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
}

const HUMAN_RESOURCES_TEMPLATE = new HumanResources('', 0, '');

const EMPLOYEE_ONE = Object.create(HUMAN_RESOURCES_TEMPLATE);
EMPLOYEE_ONE.name = 'Alex';
EMPLOYEE_ONE.age = 25;
EMPLOYEE_ONE.role = 'Developer';

const EMPLOYEE_TWO = Object.create(HUMAN_RESOURCES_TEMPLATE);
EMPLOYEE_TWO.name = 'Nathaly';
EMPLOYEE_TWO.age = 30;
EMPLOYEE_TWO.role = 'Psychologist';

const EMPLOYEE_THREE = Object.create(HUMAN_RESOURCES_TEMPLATE);
EMPLOYEE_THREE.name = 'Bernardo';
EMPLOYEE_THREE.age = 35;
EMPLOYEE_THREE.role = 'Air Trafic Controller';

console.log(EMPLOYEE_ONE.name);
console.log(EMPLOYEE_TWO.age);
console.log(EMPLOYEE_THREE.role);