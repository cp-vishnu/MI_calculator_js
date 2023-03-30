<?php
require_once realpath(__DIR__ . "/vendor/autoload.php");
// use Dotenv\Dotenv;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();
$servername = $_ENV['HOST'];
$username = $_ENV['DB_USER_NAME'];
$password = $_ENV['DB_PASSWORD'];

try {
  $conn = new PDO("mysql:host=$servername;dbname=mydb", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>