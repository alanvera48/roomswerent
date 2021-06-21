<?php 

    error_reporting(0);

    $nombre = $_POST['nombre'];
    $apellido  = $_POST['apellido'];
    $email = $_POST['email'];
    $texto = $_POST['texto'];

    $nombreCompleto = $nombre." ".$apellido; 

    $body = "MENSAJE ENVIADO DESDE ROOMSWERENT<br><br><b>Nombre: </b>".$nombre."<br><b>Apellido:</b> ".$apellido."<br><br><b>Correo:</b> ".$email. "<br><br><b>Texto/Asunto:  </b>".$texto;
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';


    //Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.hostinger.es';                     //Cambiar GMAIL
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'consultas@roomswerent.com';                     //SMTP username usuario de gmail
    $mail->Password   = 'Alterno2';                               //SMTP password
    $mail->SMTPSecure = 'ssl' ;                                 //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('consultas@roomswerent.com', 'RoomsWeRent');
    $mail->addAddress('roomswerent@gmail.com');     //A quien le enviamos el correo

   

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $email;
    $mail->Body    = $body;
    

    if($mail->send()){
        echo json_encode(array('message'=>'Just Send'));
      }

    }catch (Exception $e){

      echo json_encode(array('message'=>'Try Later'));
     }


?>