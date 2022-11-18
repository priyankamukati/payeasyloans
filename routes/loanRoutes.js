const express = require('express');
const loanController = require('../controllers/loanController');

const router = express.Router();

router.get('/', loanController.getLandingPage);
router.get('/loans', loanController.getAllLoans);
router.get('/login', loanController.getLoginForm);
router.get('/signup', loanController.getSignInForm);
router.get('/newLoan', loanController.createNewLoan);


module.exports = router;
