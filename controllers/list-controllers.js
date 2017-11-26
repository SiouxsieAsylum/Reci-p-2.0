const List = require('../models/List')
const Recipe = require('../models/Recipe')
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
      data:{ list }
    })
  })
  .catch(next)
}

ListController.create = (req,res,next) => {
  List.create({
    user_id: req.body.user_id,
    name: req.body.name
  })
  // will be req.user.id
  .then(list => {
    res.json({
      message: "list created",
      data: { list }
    })
  })
  .catch(next)
}

ListController.update = (req,res,next)=> {
  List.update({
    name: req.body.name
  })
  .then(list => {
    res.json({
      message: "list edited",
      data: { list }
    })
  })
  .catch(next)
}

ListController.delete = (req,res,next) => {
  List.delete(req.params.id)
  .then(() => {
    res.json({
      message: "list deleted"
    })
  })
  .catch(next);
}

module.exports = ListController;
