const postAd = require("../models/postAdvert.schema");
const postAdvalidate = require("../Validation/PostMenuList.Validation");

const postAds = async (req, res) => {
  // const { error, value } = postAdvalidate.validate(req.body);
  const { name } = req.body;
  const file = req.file?.path;

  // if (error) {
  //   return res.status(400).json({
  //     message: "Error processing request",
  //     error: error.message,
  //   });
  // }
  try {
    const checkAvailability = await postAd.countDocuments();

    if (checkAvailability >= 3) {
      return res.status(400).json({
        message: "An Advert is running, You must delete to post Another one",
      });
    }

    const postedAd = new postAd({
      image: file,
      name,
    });

    await postedAd.save();
    res.status(200).json({
      message: "You have successfully Posted An Advert",
      posted: postedAd,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Posting Advert",
      error: error.message,
    });
  }
};

module.exports = postAds;
