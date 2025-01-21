import productData from "../../ProductData/data.js"
export const getProducts = (req, res) => {
    try {
        if (!productData || !Array.isArray(productData)) {
            throw new Error("Product data is not available");
        }
        let filteredProducts = productData;
        res.status(200).json(filteredProducts);
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};


export const helloWorld = (req, res) => {
    return res.json({
        "response": "API is working"
    });
};
