<?php
$fp = fopen('data.txt', 'a');//opens file in append mode  
fwrite($fp, 'this is additional text'."\t");  
fwrite($fp, 'appending data'."\n");  
fclose($fp);  

echo "File appended successfully"; 

// if(isset($_POST) && !empty($_POST)){
/*  
$jsonReceiveData = json_encode($_POST);
$json_output = json_decode($jsonReceiveData);
$task = $json_ouput->text;
$uniquekey = $json_output->unk;
*/
// echo $_POST;
?>