<?php
require('db_connection.php');
$stmt = $conn->query("SELECT * FROM calc_tb");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    
    
   ?>
    <div> <?php echo  $row["input_value"] . " = " . $row["output_value"]; ?></div>
<?php
  }
?>