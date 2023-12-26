//Practice #1
function getProductsDetails(types, section) {
    const productType = types
    .filter(type => type.section === section)
    .map(type => type.name)
    .join(", ");

    const totalPrice = types
    .filter(type => type.section === section)
    .reduce((total, type) => total + type.price, 0);

    return {
        types: productType,
        totalPrice: totalPrice
    }
};

const products = [
    { name: "M&M", section: "Candy", price: 1.80},
    { name: "Macbook Pro", section: "Computers", price: 1560},
    { name: "Mac mini", section: "Computers", price: 800},
    { name: "Logi Mouse", section: "Electroics", price: 120}
];

console.log(getProductsDetails(products, "Computers"));

//Practice #2
function getChampionStats(roles, type) {
    const championRoles = roles
    .filter(role => role.type === type)
    .map(role => role.name)
    .join(", ");

    const damageDone = roles
    .filter(role => role.type === type)
    .reduce((total, role) => total + role.damage, 0)

    return {
        roles: championRoles,
        damegeDone: damageDone
    }
}

const champions = [
    { name: "Mid", type: "Mage", damage: 700},
    { name: "Top", type: "Tank", damage: 800},
    { name: "Jungle", type: "Tank", damage: 1000},
    { name: "Bot", type: "Marksman", damage: 500},
    { name: "Support", type: "Support", damage: 400}
];

console.log(getChampionStats(champions, "Tank"));