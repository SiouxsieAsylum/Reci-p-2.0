const List = require('../models/List')
const ListController = {};

ListController.index = (req,res,next) => {
  List.findAll(req.user.id)
  .then(lists => {
    res.json({
      message:'all user lists found',
      data:{ lists }
    })
  })
  .catch(next)
}

module.exports = ListController;
