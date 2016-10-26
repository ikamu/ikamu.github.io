<?php
$servername = "localhost";
$username = "baaxpeec_rdp";
$password = "valjean";
$dbname = "baaxpeec_data";

$age = $_POST['age'];
$clan = $_POST['clan'];
$courriel = $_POST['courriel'];
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



$result = $conn->query("SELECT nom FROM RDP16 WHERE courriel='.$courriel.';");

if ($result->num_rows > 0)
{
   echo "Une inscription a déjà été faite avec ce courriel.";
}
else
{

     // Insert données
        $sql = "INSERT INTO RDP16 (age, clan, courriel,nom,prenom)
     VALUES ('$age','$clan','$courriel','$nom','$prenom');";

     if ($conn->query($sql) === TRUE) {
         echo "Votre inscription pour la route de Pâques a été enregisitrée avec succès.";
     } else {
         echo "Error: " . $sql . "<br>" . $conn->error;
     }
}



$conn->close();
?>
