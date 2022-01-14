const Router = require('express').Router;

const router = Router();
const userRouter = require('./userRouter');
const bookingRouter = require('./bookingRouter')

router.use('/users', userRouter);
router.use('/bookings', bookingRouter);


module.exports = router;