const Router = require('express').Router;

const router = Router();
const userRouter = require('./userRouter');
const bookingRouter = require('./bookingRouter')
const newsRouter = require('./newsRouter')

router.use('/users', userRouter);
router.use('/bookings', bookingRouter);
router.use('/news', newsRouter);


module.exports = router;