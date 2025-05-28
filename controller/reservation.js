const reservation = require("../models/reservation.schema");
const reservationValidation = require("../Validation/reservation.validate");

const makeReservation = async (req, res) => {
  const { error, value } = reservationValidation.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "error Processing request",
      error: error.message,
    });
  }
  try {
    const createdReservations = new reservation({
      value,
    });
    await createdReservations.save();
    res.status(200).json({
      message: "You successfully Made a reservation",
      data: value,
    });
  } catch (error) {
    res.status(400).json({
      message: "Unable to make Reservation",
      error: error.message,
    });
  }
};

module.exports = makeReservation;
