<?php
namespace application\router;
use org\weemvc\core\Router;
use org\weemvc\Pager;
use application\helper\HeaderFinder;

class Expense extends Router{
  
  public function save(){
    $this->_controller->prepareDatabase();
    $userModel = $this->_controller->getDAO('UserModel');
    $token = HeaderFinder::token(HeaderFinder::get('Authorization'));
    $uid = $userModel->check($token);
    if(!isset($_POST['description']) || !isset($_POST['amount'])){
      Pager::output(998, 'description or amount is null', null, $this);
    }else if(!$uid){
      Pager::output(998, 'you need to login', $userModel->error(), $this);
    }else{
      //get
      $model = $this->_controller->getDAO('ExpenseModel');
      if(isset($_POST['id'])){
        $result = $model->updateById($_POST['id'], $uid, $_POST['description'],$_POST['amount']);
      }else{
        $result = $model->add($uid,$_POST['description'],$_POST['amount']);
      }
      Pager::output(0, $result, $model->error(), $this);
    }
  }

  public function delete(){
    $this->_controller->prepareDatabase();
    $userModel = $this->_controller->getDAO('UserModel');
    $token = HeaderFinder::token(HeaderFinder::get('Authorization'));
    $uid = $userModel->check($token);
    if(!isset($_POST['id'])){
      Pager::output(998, 'id is null', null, $this);
    }else if(!$uid){
      Pager::output(998, 'you need to login', $userModel->error(), $this);
    }else{
      //get
      $model = $this->_controller->getDAO('ExpenseModel');
      $result = $model->deleteById($_POST['id'], $uid);
      Pager::output(0, $result, $model->error(), $this);
    }
  }

  public function getByUser(){
    $this->_controller->prepareDatabase();
    $userModel = $this->_controller->getDAO('UserModel');
    $token = HeaderFinder::token(HeaderFinder::get('Authorization'));
    $uid = $userModel->check($token);
    //
    if(!$uid){
      Pager::output(998, 'you need to login', $userModel->error(), $this);
    }else{
      $model = $this->_controller->getDAO('ExpenseModel');
      $result = $model->getByUid($uid);
      Pager::output(0, $result, $model->error(), $this);  
    }
  }

  public function getByAdmin(){
    $this->_controller->prepareDatabase();
    $userModel = $this->_controller->getDAO('UserModel');
    $token = HeaderFinder::token(HeaderFinder::get('Authorization'));
    $uid = $userModel->check($token);
    $userResult = $userModel->getRole($uid);
    // 1 admin; 2 user
    if($uid && $userResult['role'] == 1){
      $model = $this->_controller->getDAO('ExpenseModel');
      $result = $model->getAll();
      Pager::output(0, $result, $model->error(), $this);        
    }else{
      Pager::output(998, 'you need to login as admin', $userModel->error(), $this);
    }
  }

}
