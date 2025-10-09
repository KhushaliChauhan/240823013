const express= require('express');
const router= express.Router();
const studentcontroller= require('../Controllers/studentcontroller');

router.get('/index',studentcontroller.index);
router.get('/show/:id',studentcontroller.show);
router.post('/create',studentcontroller.store);
router.put('/update/:id',studentcontroller.update);
router.delete('/delete/:id',studentcontroller.destroy);

module.exports= router;
