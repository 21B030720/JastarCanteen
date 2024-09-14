import columnMapping from "./columnMapping";

// Helper function to convert keys of each product
const convertKeys = (product) => {
    const convertedProduct = {};
    Object.keys(product).forEach((key) => {
        const mappedKey = columnMapping[key] || key; // Fallback to original if no mapping exists
        convertedProduct[mappedKey] = product[key];
    });
    return convertedProduct;
};


export default convertKeys;