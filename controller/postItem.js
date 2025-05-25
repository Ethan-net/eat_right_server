const postItem = require("../models/postItem.Schema");
const postItemValidationSchema = require("../Validation/postItem.validate");

const postingItems = async (req, res) => {
  const { error, value } = postItemValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  // const { name, description, price, orderNow } = req.body;
  const ImageFile = req.file?.path;

  try {
    const verifyItem = await postItem.findOne({ name: value.name });
    if (verifyItem) {
      return res.status(500).json({
        message: "Item already Exist",
      });
    }
    const item = new postItem({
      name: value.name,
      description: value.description,
      price: value.price,
      orderNow: value.orderNow,
      image: ImageFile,
    });

    await item.save();
    res.status(200).json({
      message: "You have Successfully Posted a New Item",
      item,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Post Item",
      error: error.message,
    });
  }
};

module.exports = postingItems;
