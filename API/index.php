<?php 

include "data.php";
require_once "Celebrity.php";

$celebrities = [];

foreach($data as $item){
  $celebrity = new Celebrity;
  $celebrity->loadFromArray($item); //why did the arrow work
  $celebrities[] = $celebrity; // it will be inserted into the array celebrities 
}

//var_dump($celebrities);
// i have made a new variable that is an empty array, celebrities, and then i made a loop that went through each element of the array $data and it took each element and called it $item 
// then i made a new variable that was a new class Celebrity, and in this variable i called the function that would be using the information from $item, so it will be using each piece of the information from the $data array 
// after making celebrity now hold the information from data as individual Celebrity, i am pushing it onto the main array of celebrities 


header('Content-type: application/json'); //now i have told the browser to read it as json
header('Access-Control-Allow-Origin: *'); //making it so that the browser can access the information from my API
echo json_encode($celebrities);