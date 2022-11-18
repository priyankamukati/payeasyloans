const Loan = require('./../model/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getLandingPage = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getAllLoans =   async (req, res) => {
  
  try {
    
    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;
    res.status(200).render('loans', {
      title: `Get Loans`,
      status: 'success',
      results: loans.length,
      data: loans
    });
  } catch (err) {
    res.status(404).render({
      status: 'fail',
      message: err
    });
  }
};

exports.createNewLoan = async (req, res) => {
  res.status(200).render('newLoan', {
    title: `Create New Loan`
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Login | Enter User Credentials'
  });
};
