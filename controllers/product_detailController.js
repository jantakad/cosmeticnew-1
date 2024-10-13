const Product_detail = require('../models/Product_detail');
const Product = require('../models/Product');

// สร้างรายละเอียดสินค้าใหม่
exports.createProductDetail = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const productDetail = await product.createProduct_detail(req.body);
        res.status(201).json(productDetail);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// แสดงรายละเอียดสินค้าทั้งหมดของสินค้าหนึ่งรายการ
exports.getProductDetails = async (req, res) => {
    try {
        const productDetails = await Product_detail.findAll({ where: { productId: req.params.productId } });
        if (!productDetails.length) {
            return res.status(404).json({ message: 'No product details found for this product' });
        }
        res.status(200).json(productDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ค้นหารายละเอียดสินค้าตาม ID
exports.getProductDetailById = async (req, res) => {
    try {
        const productDetail = await Product_detail.findByPk(req.params.id);
        if (!productDetail) {
            return res.status(404).json({ message: 'Product detail not found' });
        }
        res.status(200).json(productDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// แก้ไขรายละเอียดสินค้า
exports.updateProductDetail = async (req, res) => {
    try {
        const [updated] = await Product_detail.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ message: 'Product detail not found' });
        }
        const updatedProductDetail = await Product_detail.findByPk(req.params.id);
        res.status(200).json(updatedProductDetail);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ลบรายละเอียดสินค้า
exports.deleteProductDetail = async (req, res) => {
    try {
        const deleted = await Product_detail.destroy({
            where: { id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Product detail not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
