const addtoMenu = require("../models/addToMenu.schema");
const postItemValidationSchema = require("../Validation/PostMenuList.Validation");

const addingTomenuList = async (req, rres) => {
  const { error, value } = postItemValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "error Processing request",
    });
  }
  const ImageFile = req.file?.path;

  try {
    const verifyMenuItem = await addtoMenu.findOne({ name: value.name });
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

module.exports = addingTomenuList;
