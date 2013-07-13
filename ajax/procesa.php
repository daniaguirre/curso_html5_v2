<?php   

while( list( $field, $value ) = each( $_POST )) {
   if( is_array( $value )) {
      while( list( $arrayField, $arrayValue ) = each( $value )) {
         echo "<p><strong>" .$field."</strong>:" . $arrayValue . "</p>\n";
      }
   } else {
      echo "<p><strong>" .$field."</strong>:". $value . "</p>\n";
   }
}

while( list( $field, $value ) = each( $_GET )) {  
   if( is_array( $value )) {      
      while( list( $arrayField, $arrayValue ) = each( $value )) {
         echo "<p><strong>" .$field."</strong>:" . $arrayValue . "</p>\n";
      }
   } else {
      echo "<p><strong>" .$field."</strong>:". $value . "</p>\n";
   }
}
?>