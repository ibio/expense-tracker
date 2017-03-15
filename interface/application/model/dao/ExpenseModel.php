<?php
namespace application\model\dao;
use org\weemvc\core\DAO;

class ExpenseModel extends DAO{
  /**
   * Every model needs a database connection, passed to the model
   * @param object $db A PDO database connection
   */
  function __construct($db) {
    $fields = array(
      'id' => 'INT',
      'uid' => 'INT',
      'description' => 'TEXT',
      'amount' => 'FLOAT',
      'date' => 'DATETIME',
    );
    $this->assembleDateBase($db, 'expense', $fields);
  }

  
  public function add($uid, $description, $amount){
    $fields = array(
      'uid' => intval($uid),
      'description' => $description,
      'amount' => floatval($amount),
      'date' => 'now()'
    );
    return $this->insert($fields, array('description' => true));
  }
  
  public function updateById($id, $uid, $description, $amount){
    $id = $this->filterXSS($id);
    $fields = array(
      'description' => $description,
      'amount' => floatval($amount),
    );
    return $this->update($fields, '`id`='.intval($id).' AND `uid`='.intval($uid), array('description' => true));
  }

  public function deleteById($id, $uid){
    $id = $this->filterXSS($id);
    $fields = array(
      'description' => $description,
      'amount' => $amount,
    );
    return $this->delete('`id`='.intval($id).' AND `uid`='.intval($uid));
  }

  public function getByUid($uid){
    return $this->query(null, '`uid`='.intval($uid), '`id` DESC');
  }

  // for admin only
  public function getAll(){
    $tableA = DB_PREFIX . $this->tableName;
    $tableB = DB_PREFIX . 'user';
    //
    $sql = "SELECT a.id, a.uid, a.description, a.amount, a.date, b.email FROM $tableA AS a INNER JOIN $tableB AS b ON a.uid = b.id";
    //
    $query = $this->db->prepare($sql);
    $query->execute();

    $result = array();
    if($query->rowCount() > 0) {
      foreach($query->fetchAll() as $row) {
        $item = $this->formatOutput($row);
        $item['email'] = $row['email'];
        array_push($result, $item);
      }
    }
    return $result;
  }

}
