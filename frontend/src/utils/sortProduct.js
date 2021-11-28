const sortByPriceHighest = (products) => {};
const sortByPriceLowest = (products) => {};
const sortByName = (products) => {
    return products.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
};
const sortByPopular = (products) => {};

export { sortByPriceHighest, sortByPriceLowest, sortByName, sortByPopular };
