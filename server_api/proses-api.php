<?php

header('Acces-Control-Allow-Origin: *');
header("Acces-Control-Allow-Credentials: true");
header("Acces-Control-Allow-Methods: POST,GET,OPTIONS");
header("Acces-Control-Allow-Headers: Content-Tpe, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "config/config.php";

$postjson = json_decode(file_get_contents('php://input'), true);
$today    = date('Y-m-d');

if($psotjson['aski']=='register'){
    $password = md5($postjson['password']);
    $query =  mysqli_query($mysqli, "INSERT INTO master_user SET
    username = '$postjson[username]',
    password = 'password',
    status = 'y',
    created_at  = '$today'
    ");


    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, porfavor intente de nuevo'));

    echo $result;
}

elseif($psotjson['aski']=='login'){
    $password = md5($postjson['password']);
    $query =  mysqli_query($mysqli, "SELECT * FROM  master_user WHERE username = '$postjson[username]' AND  password = '$password' ");
    $check = mysqli_num_rows($query);

    if(check > 0){
        $data = mysqli_fetch_aray($query);
        $datauser = array(
            'user_id' => $data['user_id'],
            'username' => $data['username'],
            'password' => $data['password'],
        );
        if($data['status']=='y'){
            $result = json_encode(array('success'=> true, 'result' => $datauser));
        }else{
            $result = json_encode(array('success'=> false, 'msg' => 'Cuenta inactiva'));
        }
    }else{
     $result = json_encode(array('success'=>false, 'msg'=>'Cuenta no registrada'));
    }

    echo $result;
}

?>