const express = require('express');
const router = express.Router();

const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(storeController.getStores));

// add
router.get('/add', storeController.addStore);
router.post('/add', 
  storeController.upload, 
  catchErrors(storeController.resize), 
  catchErrors(storeController.createStore)
);
router.post('/add/:id', 
  storeController.upload, 
  catchErrors(storeController.resize), 
  catchErrors(storeController.updateStore)
);

// stores
router.get('/stores', catchErrors(storeController.getStores));
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

// store
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug));

// tags
router.get('/tags', catchErrors(storeController.getStoresByTag));
router.get('/tags/:tag', catchErrors(storeController.getStoresByTag));


// login
router.get('/login', userController.loginForm);

router.get('/register', userController.registerForm)
router.post('/register', 

);


module.exports = router;
