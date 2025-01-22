import productData from "../../ProductData/data.js";

// price 
export const getProductsByPrice = (req, res) => {
    const { maxPrice } = req.query;  // Use maxPrice to filter based on the maximum price

    if (!maxPrice) {
        return res.status(400).json({ error: "Maximum price is required" });
    }

    const maxPriceNum = parseFloat(maxPrice);

    if (isNaN(maxPriceNum)) {
        return res.status(400).json({ error: "Invalid price format" });
    }

    // Create a copy of the product data to avoid direct manipulation
    const productDataCopy = [...productData];

    // Filter the copied data based on maxPrice
    const filteredProducts = productDataCopy.filter(product =>
        parseFloat(product.price.replace(/[^\d.-]/g, '')) <= maxPriceNum
    );

    res.json(filteredProducts);
};

// Brand name 
export const getProductsByBrandName = (req, res) => {
    const { brandName } = req.query;

    if (!brandName) {
        return res.status(400).json({ error: "Brand name is required" });
    }

    // Create a copy of the product data to avoid direct manipulation
    const productDataCopy = [...productData];

    // Filter the copied data by brand name
    const filteredProducts = productDataCopy.filter(product =>
        product.brandName.toLowerCase().includes(brandName.toLowerCase())
    );

    res.json(filteredProducts);
};

// Brand category
export const getProductsByBrandCategory = (req, res) => {
    const { brandCategory } = req.query;

    if (!brandCategory) {
        return res.status(400).json({ error: "Brand category is required" });
    }

    // Create a copy of the product data to avoid direct manipulation
    const productDataCopy = [...productData];

    // Filter the copied data by category
    const filteredProducts = productDataCopy.filter(product =>
        product.category.toLowerCase() === brandCategory.toLowerCase()
    );

    res.json(filteredProducts);
};
