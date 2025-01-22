import productData from "../../ProductData/data.js";

export const getProducts = (req, res) => {
    try {
        // Check if productData exists and is an array
        if (!productData || !Array.isArray(productData)) {
            return res.status(400).json({ error: "Product data is not available or not in the correct format." });
        }

        // If the data is valid, send the product data in the response
        res.status(200).json(productData);
    } catch (error) {
        // Catch and handle any errors that occur
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

export const helloWorld = (req,res)=>{
    return res.json({
    "Response":"Hellow world"
    })
}