import productData from "../../ProductData/data.js"


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

    const filteredProducts = productData.filter(product =>
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

    // Filter by brand name
    const filteredProducts = productData.filter(product =>
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

    const filteredProducts = productData.filter(product =>
        product.category.toLowerCase() === brandCategory.toLowerCase()
    );

    res.json(filteredProducts);
};