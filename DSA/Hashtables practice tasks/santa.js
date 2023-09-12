let input = [
    '8',
    'AddWish Electric Scooter 2000Z;3500.05;Rayko Petrov',
    'AddWish Fortnite Skin;3000;Rayko Petrov',
    'AddWish AMD Radeon;16400;Hristo',
    'AddWish Apple AirPods;21111.50;Nadya',
    'FindWishesByChild Toshko',
    'DeleteWishes Rayko Petrov',
    'FindWishesByChild Rayko Petrov',
    'FindWishesByPriceRange 5000;30000'
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


class Wish {
    constructor(itemName, estimatedPrice, childName) {
        this.itemName = itemName;
        this.estimatedPrice = estimatedPrice;
        this.childName = childName;
    }
}

class GoodKidsList {
    constructor() {
        this.list = [];
    }

    addWish(wish) {
        if (wish instanceof Wish) {
            this.list.push(wish);
        }
    }

    deleteWishes(childName) {
        let delCount = 0;
        const newArr = this.list.reduce((acc, el) => {
            if (el.childName !== childName) {
                acc.push(el);
            } else {
                delCount++;
            }
            return acc;
        }, []);

        if (delCount !== 0) {
            this.list = newArr;
            return delCount;
        }
        return delCount;
    }

    findByPriceRange(minPrice, maxPrice) {
        const filtered = [];
        for (const wish of this.list) {
            if (Number(wish.estimatedPrice) >= Number(minPrice) && Number(wish.estimatedPrice) <= Number(maxPrice)) {
                filtered.push(wish);
            }
        }

        if (filtered.length > 1) {
            filtered.sort(function (a, b) {
                if ((a.itemName).toLowerCase() < (b.itemName).toLowerCase()) {
                    return -1;
                }
                if ((a.itemName).toLowerCase() > (b.itemName).toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        }
        return filtered;
    }

    findByName(name) {
        const filtered = [];
        for (const wish of this.list) {
            if (wish.childName === name) {
                filtered.push(wish);
            }
        }

        if (filtered.length > 1) {
            filtered.sort(function (a, b) {
                if ((a.itemName).toLowerCase() < (b.itemName).toLowerCase()) {
                    return -1;
                }
                if ((a.itemName).toLowerCase() > (b.itemName).toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        }
        return filtered;
    }
}


const executeCommands = (number) => {
    const list = new GoodKidsList();
    for (let cmds = 0; cmds < n; cmds++) {
        const command = gets();
        if (command.includes('AddWish')) {
            const wishArr = command.replace('AddWish ', '').split(';');
            const itemName = wishArr[0];
            const price = wishArr[1];
            const childName = wishArr[2];
            const wish = new Wish(itemName, price, childName);
            list.addWish(wish);
            print('Wish added');

        } else if (command.includes('DeleteWishes')) {
            const name = command.replace('DeleteWishes ', '');
            const count = list.deleteWishes(name);
            if (count > 0) {
                print(`${count} Wishes deleted`);
            } else {
                print('No Wishes found');
            }

        } else if (command.includes('FindWishesByPriceRange')) {
            const priceRange = command.replace('FindWishesByPriceRange ', '').split(';');
            const minPrice = priceRange[0];
            const maxPrice = priceRange[1];
            const filteredByPrice = list.findByPriceRange(minPrice, maxPrice);
            if (filteredByPrice.length > 0) {
                for (const wish of filteredByPrice) {
                    const output = '{' + `${wish.itemName};${wish.childName};${Number(wish.estimatedPrice).toFixed(2)}` + '}';
                    print(output);
                }
            } else {
                print('No Wishes found');
            }

        } else if (command.includes('FindWishesByChild')) {
            const name = command.replace('FindWishesByChild ', '');
            const filteredByName = list.findByName(name);
            if (filteredByName.length > 0) {
                for (const wish of filteredByName) {
                    const output = '{' + `${wish.itemName};${wish.childName};${Number(wish.estimatedPrice).toFixed(2)}` + '}';
                    print(output);
                }
            } else {
                print('No Wishes found');
            }
        }
    }
}

const n = gets();
executeCommands(n);