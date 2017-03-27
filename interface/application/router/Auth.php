<?php
namespace application\router;
use org\weemvc\core\Router;
use org\weemvc\Pager;

class Auth extends Router{

  public function login(){
    $this->_controller->prepareDatabase();
    $model = $this->_controller->getDAO('UserModel');
    // test only
    // $result = $model->login($_GET['email'], $_GET['password']);
    $result = $model->login($_POST['email'], $_POST['password']);

    // set header
    if($result['isLogin']){
      header("Authorization: Bearer $result[token]");
      unset($result['token']);
    }
    Pager::output(0, $result, $model->error(), $this);
  }

  public function logout(){
    $this->_controller->prepareDatabase();
    $model = $this->_controller->getDAO('UserModel');
    // TODO parse header to get token
    $result = $model->logout('');
    Pager::output(0, $result, $model->error(), $this);
  }


}
