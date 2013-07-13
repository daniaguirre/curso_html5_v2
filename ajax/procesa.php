<?php

//var_dump($_GET);   

while( list( $field, $value ) = each( $_POST )) {	
   if( is_array( $value )) {
   	  
      while( list( $arrayField, $arrayValue ) = each( $value )) {
         echo "<p><strong>" .$arrayField."(POST)</strong>:" . $arrayValue . "</p>\n";
      }
   } else {
      echo "<p><strong>" .$field."</strong>:". $value . "</p>\n";
   }
}


while( list( $field, $value ) = each( $_GET )) {
	echo $field.":".$value.", is array:".is_array( $value )."<br/>";  
   if( is_array( $value )) {      
      while( list( $arrayField, $arrayValue ) = each( $value )) {
         echo "<p><strong>" .$arrayField."(GET)</strong>:" . $arrayValue . "</p>\n";
      }
   } else {
      echo "<p><strong>" .$field."</strong>:". $value . "</p>\n";
   }
}
?>