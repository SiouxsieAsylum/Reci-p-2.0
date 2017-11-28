const List = require('../models/List')
const Recipe = require('../models/Recipe')
const ListController = {};


ListController.index = (req,res,next) => {
  List.findAll(req.params.userid)
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
      data:{list 
      }
    })
  })
  .catch(next)
}

ListController.showNames = (req,res,next) => {
  List.findNames(req.params.id)
  .then(recipes => {
    res.json({
      data:{
        recipes: recipes,
      }
    })
  }).catch(next);
}

ListController.create = (req,res,next) => {
  List.create(req.body.user_id,req.body.name)
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

ListController.deleteRecipe = (req,res,next) => {
  List.deleteRecipe(req.params.recipe_id, req.body.list_id)
  .then(() => {
    res.json({
      message: 'recipe deleted',
    })
  }).catch(next);
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
