<?php

class Celebrity 
{
  public $name = null;
  public $photo = null;
  public $earnings = null;
  public $age = null;
  public $citizenship = null;
  public $events = [];


  public function loadFromArray($array) {
    $this->name        = $array['name'];
    $this->photo       = $array['photo'];
    $this->earnings    = $array['earnings'];
    $this->age         = $array['age'];
    $this->citizenship = $array['citizenship'];
    $this->events      = $array['events'];


    // basically i am making a function that is using the information from an array, and setting the property values to the specific objects of the array by calling its key, whats in the brackets ex: ['name']
    // 
  }

  /*
    // could be done with loop 
    $property_name = 'earnings';
    $this->earnings //same as below
    $this->$property_name // now it is the value of property name

    foreach($array as $key =>$value){
      $this->key = $value
   }
  */


}