import { config } from "dotenv";
import multer from "multer";
import uploadMdw from "../middlewares/upload.mdw.js";
import Product from "../models/product.model.js";
import {
  mappingProductCategory,
  mappingProductImageUrl,
  mappingProductColors,
  mappingProductSizes,
} from "../helpers/mapping.helper.js";

import * as productDAO from "../dao/product.dao.js";
import * as categoryDAO from "../dao/category.dao.js";

config();

const addProduct = (req, res) => {
  uploadMdw.array("photos", +process.env.FILE_LIMIT)(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(400).json({ success: 0, message: err });
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(400).json({ success: 0, message: err });
    }
    console.log(req.files);
    console.log(req.body);

    // Everything went fine
    const fileNames = req.files;
    //.map((file) => {
    //     return process.env.IMAGE_URL + file.filename;
    // });

    const product = new Product(req.body, fileNames[0]);
    console.log(product);
    //insert product
    const productID = await productDAO.create(product);

    //insert product_category
    const categoryData = mappingProductCategory(
      productID,
      JSON.parse(req.body.categories)
    );

    //insert product_imgUrl
    const imageUrlData = mappingProductImageUrl(productID, fileNames.slice(1));

    //insert product_color
    const colorData = mappingProductColors(
      productID,
      JSON.parse(req.body.colors)
    );

    //insert product_size
    const sizeData = mappingProductSizes(productID, JSON.parse(req.body.sizes));
    Promise.all([
      productDAO.addCategory(categoryData),
      productDAO.addImgUrl(imageUrlData),
      productDAO.addColor(colorData),
      productDAO.addSize(sizeData),
    ])
      .then((result) => {
        return res.status(200).json({ success: 1, message: "Product added" });
      })
      .catch((err) => {
        return res.status(400).json({ success: 0, message: err });
      });
  });
};

const removeProduct = async (req, res) => {
  const prodID = req.body.prodID;

  const isProdIDExist = await productDAO.checkProductIDExist(prodID);

  if (!isProdIDExist) {
    return res
      .status(400)
      .json({ success: 0, message: "Product does not exist" });
  }

  await productDAO.remove(prodID);

  return res.status(200).json({ success: 1, message: "Product is removed" });
};

//get detail, brand, color, size, category, image, --review
const getProduct = async (req, res) => {
  const prodID = req.params.prodID;
  console.log(req.params);
  console.log(prodID);
  const isProdIDExist = await productDAO.checkProductIDExist(prodID);

  if (!isProdIDExist) {
    return res
      .status(400)
      .json({ success: 0, message: "Product does not exist" });
  }

  const product = await productDAO.getProductInfor(prodID);
  console.log(product);
  //brand, color, size, image,
  const anotherInfor = await Promise.all([
    productDAO.getProductBrand(product.brand_id),
    productDAO.getProductImage(prodID),
    productDAO.getProductColor(prodID),
    productDAO.getProductSize(prodID),
    productDAO.getSameBrandProduct(prodID, product.brand_id, 4), //limit 4
    productDAO.getRelateProduct(prodID, 8), //limit 8, random
  ])
    .then((result) => {
      const color = result[2];
      const size = result[3];
      const productDetail = {
        productInfor: product,
        brand: result[0],
        imgUrls: result[1],
        color: color,
        size: size,
      };
      console.log(result[4]);
      console.log(result[5]);
      return res.status(200).json({
        success: 1,
        message: "OK",
        productDetail,
        sameBrandProduct: result[4],
        relateProduct: result[5],
      });
    })
    .catch((err) => {
      return res.status(400).json({ success: 0, message: err });
    });
};

const getProductListBySecondCat = async (req, res) => {
  const catID = req.params.catIDlv1;
  const page = req.query.page || 0;
  const limit = 20;
  const offset = page * limit;
  const isCatIDExist = await categoryDAO.checkCatIDExist(catID);
  if (!isCatIDExist) {
    return res
      .status(400)
      .json({ success: 0, message: "Category does not exist" });
  }
  const total = await productDAO.countProductListBySecondCat(catID);

  const productList = await productDAO.getProductListBySecondCat(
    catID,
    offset,
    limit
  );
  const productDetailList = await Promise.all(
    productList.map(async (product) => {
      const color = await productDAO.getProductColor(product.id);
      const size = await productDAO.getProductSize(product.id);

      return { ...product, color, size };
    })
  );

  return res
    .status(200)
    .json({ success: 1, message: "OK", productDetailList, total: total });
};
const getProductListByThirdCat = async (req, res) => {
  const catID = req.params.catIDlv0;
  const page = req.query.page || 0;
  const limit = 20;
  const offset = page * limit;
  const isCatIDExist = await categoryDAO.checkCatIDExist(catID);
  if (!isCatIDExist) {
    return res
      .status(400)
      .json({ success: 0, message: "Category does not exist" });
  }
  const total = await productDAO.countProductListByThirdCat(catID);

  const productList = await productDAO.getProductListByThirdCat(
    catID,
    offset,
    limit
  );
  const productDetailList = await Promise.all(
    productList.map(async (product) => {
      const color = await productDAO.getProductColor(product.id);
      const size = await productDAO.getProductSize(product.id);

      return { ...product, color, size };
    })
  );
  return res
    .status(200)
    .json({ success: 1, message: "OK", productDetailList, total: total });
};

const getProductList = async (req, res) => {
  const page = req.query.page || 0;
  const limit = 10;
  const offset = page * limit;
  const total = await productDAO.countAll();
  // console.log(total);
  const products = await productDAO.getAll(limit, offset);
  const productWithCatName = await Promise.all(
    products.map(async (product) => {
      const categories = await productDAO.getCatName(product.id);
      // console.log(categories);
      return { ...product, categories };
    })
  );

  return res
    .status(200)
    .json({ success: 1, message: "OK", productWithCatName, total });
};

export {
  addProduct,
  removeProduct,
  getProduct,
  getProductListBySecondCat,
  getProductListByThirdCat,
  getProductList,
};
