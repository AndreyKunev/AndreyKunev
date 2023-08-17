// Powerful pets
/**
 * 
 * @param {Array<{ name: string, pets: Array<{ name: string, power: number }> }>} data 
 */
export default function (data) {
    // your code starts here
    const petArr = [];
    const playerPets = data.map(el => {
        el.pets.filter(pet => petArr.includes(pet.name) ? false : petArr.push(pet.name));
    })

    const getTotalPowers = (data) => {
        return data.reduce((petPowers, person) => {
            person.pets.forEach((pet) => {
                const { name, power } = pet;
                petPowers[name] = (petPowers[name] || 0) + power;
            });
            return petPowers;
        }, {});
    }
    const powerObj = getTotalPowers(data);

    const createPetObj = petArr.map(petName => {
        const detailedPet = {};
        detailedPet.name = petName;
        detailedPet.totalPower = powerObj[petName];
        return detailedPet;
    });

    return createPetObj;
    // your code ends here
}
