/**
 * 域名 + 端口号 /api/功能类型/具体端口
 * 127.0.0.1:3001/api/users/getUser
 */

var router = require('koa-router')();
var user_controller = require('../../app/controllers/user_controller');

router.get('/getUser', user_controller.getUser);
router.post('/registerUser', user_controller.registerUser);

module.exports = router;