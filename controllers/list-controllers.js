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

ListController.show = (req,res,next) => {
  List.findById(req.params.id)
  .then(list => {
    res.json({
      message: 'list found',
      data: { list }
    })
  })
  .catch(next)
}

module.exports = ListController;
