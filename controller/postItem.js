const postItem = require("../models/postItem.Schema");
const postItemValidationSchema = require("../Validation/postItem.validate");

const postingItems = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  const ImageFile = req.file?.path;

  const { error, value } = postItemValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Error processing request",
      error: error.message,
    });
  }

  try {
    const verifyItem = await postItem.findOne({ name: value.itemName });
    if (verifyItem) {
      return res.status(400).json({
        message: "Item already exist",
      });
    }

    const addedItem = new postItem({
      itemName: value.itemName,
      description: value.description,
      price: value.price,
      image: ImageFile,
      available: value.available,
    });

    await addedItem.save();

    res.status(200).json({
      message: "Item added Successfully",
      addedItem,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error adding Item",
      error: error.message,
    });
  }
};

module.exports = postingItems;
