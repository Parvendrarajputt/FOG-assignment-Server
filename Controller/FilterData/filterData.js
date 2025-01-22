import productData from "../../ProductData/data.js";

export const getProductsByPrice = (req, res) => {
    const { maxPrice } = req.query; 

    if (!maxPrice) {
        return res.status(400).json({ error: "Maximum price is required" });
    }

    const maxPriceNum = parseFloat(maxPrice);

    if (isNaN(maxPriceNum)) {
        return res.status(400).json({ error: "Invalid price format" });
    }

    const productDataCopy = [...productData];

    const filteredProducts = productDataCopy.filter(product =>
        parseFloat(product.price.replace(/[^\d.-]/g, '')) <= maxPriceNum
    );

    res.json(filteredProducts);
};

export const getProductsByBrandName = (req, res) => {
    const { brandName } = req.query;

    if (!brandName) {
        return res.status(400).json({ error: "Brand name is required" });
    }

    const productDataCopy = [...productData];

    const filteredProducts = productDataCopy.filter(product =>
        product.brandName.toLowerCase().includes(brandName.toLowerCase())
    );

    res.json(filteredProducts);
};

export const getProductsByBrandCategory = (req, res) => {
    const { brandCategory } = req.query;

    if (!brandCategory) {
        return res.status(400).json({ error: "Brand category is required" });
    }

    const productDataCopy = [...productData];

    const filteredProducts = productDataCopy.filter(product =>
        product.category.toLowerCase() === brandCategory.toLowerCase()
    );

    res.json(filteredProducts);
};
