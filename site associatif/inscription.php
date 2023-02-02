    <?php
    $bdb = new PDO('mysql:host=8O;dbname=chagato espace membres;charset=utf-8;','root','root');
    if (isset($_POST['valider'])){
    if(!empty($_POST['nom']) AND !empty($_POST['pseudo']) AND !empty($_POST['mot de passe'])){
    }
    else{
        echo "veuillez compléter tous les champs...";
        }
    }    
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>formulaire de connexion membre</title>
    </head>
    <body>
        <h1>Inscription membre</h1>
        <form method="post" action="" align="center">

        <input type="text" name="nom" autocomplete="off">
        <br>
        <input type="text" name="pseudo" autocomplete="off">
        <br>        
        <input type="text" name="mot de passe" autocomplete="off">
        <br>
        <br>
        <input type="submit" name="valider">
            
        </form>
        
    </body>
    </html>