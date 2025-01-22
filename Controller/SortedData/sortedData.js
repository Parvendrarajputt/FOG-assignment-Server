import productData from "../../ProductData/data.js";

export const getSortedProductsByLowtoHighPrice = (req, res) => {
    const { sort } = req.query;  

    if (!sort || (sort !== 'high-to-low' && sort !== 'low-to-high')) {
        return res.status(400).json({ error: "Invalid sort parameter. Use 'high-to-low' or 'low-to-high'" });
    }
    const productDataCopy = [...productData];

    const sortedProducts = productDataCopy.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));

        if (sort === 'high-to-low') { 
            return priceB - priceA; 
        } else {
            return priceA - priceB; 
        }
    });

    res.json(sortedProducts);
};

export const getSortedProductsByAtoZBrandName = (req, res) => {
    const { order } = req.query;

    if (!order) {
        return res.status(400).json({ error: "Sort order (A-Z or Z-A) is required" });
    }

    let sortedProducts;

    const productDataCopy = [...productData];

    if (order === 'A-Z') {
        sortedProducts = productDataCopy.sort((a, b) => a.brandName.localeCompare(b.brandName));
    } else if (order === 'Z-A') {
        sortedProducts = productDataCopy.sort((a, b) => b.brandName.localeCompare(a.brandName));
    } else {
        return res.status(400).json({ error: "Invalid order. Use 'A-Z' or 'Z-A'" });
    }

    res.json(sortedProducts);
};
