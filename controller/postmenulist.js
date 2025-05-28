const addtoMenu = require("../models/addToMenu.schema");
const postItemValidationSchema = require("../Validation/PostMenuList.Validation");

const addingTomenuList = async (req, res) => {
  const { error, value } = postItemValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "error Processing request",
      error: error.message,
    });
  }
  const ImageFile = req.file?.path;

  try {
    const verifyMenuItem = await addtoMenu.findOne({
      itemName: value.name,
    });
    if (verifyMenuItem) {
      return res.status(400).json({
        message: " Item already on the List",
      });
    }
    const postedMenuList = new addtoMenu({
      name: value.name,
      description: value.description,
      price: value.price,
      image: ImageFile,
      available: value.available,
    });

    await postedMenuList.save();
    res.status(200).json({
      message: "Menu List Item Added Successfully",
      postedMenuList,
    });
  } catch (error) {
    res.status(401).json({
      message: "Error Posting",
    });
  }
};

const deletePostItem = async (req, res) => {
  try {
    const deletItem = await addtoMenu.findByIdAndDelete(req.params.id);
    if (!deletItem) {
      return res.status(400).json({
        message: "Failed to delete Item",
      });
    }
    res.status(200).json({
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

const getMenuItem = async (req, res) => {
  try {
    const fetchItems = await addtoMenu.find();
    if (!fetchItems) {
      return res.status(400).json({
        message: "unable to fetch data",
      });
    }
    res.status(200).json({
      message: "Request Successfull",
      Item: fetchItems,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Processing request",
      error: errorS,
    });
  }
};

module.exports = { addingTomenuList, deletePostItem, getMenuItem };
