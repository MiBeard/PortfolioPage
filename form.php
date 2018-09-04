<?php
if (isset($_POST['name']) && isset($_POST['email'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = 'matthew.isaiah8@gmail.com';
    $subject = 'Contact';
    $body = '<html>
            <body>
            <h2>Feedback</h2>
            <br/>
            <p>Name:<br/>'.$name.'</p>
            <p>Email:<br/>'.$email.'</p>
            </body>
            </html>';

            $headers = "From: ".$name." <".email.">\r\n";
            $headers .= "Reply-To: ".$email."\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset-utf-8";

            $send = mail($to, $subject, $body, $headers);
            if ($send){
                echo '<br/>';
                echo 'Thanks for contacting me! I look forward to speaking with you!';
            }else{
                echo 'error';
            }
}
?>

<!DOCTYPE html>
<html>
    <head>

</head>
    <body>
        <form name="contactForm" style="color: black" method="post" action="">

        <label for="first_name">First Name *</label>
        <input type="text" name="name" maxlength="50" size="30">
        <br/>
        <label for="email">Email Address *</label>
        <input type="text" name="email" maxlength="80" size="30">
        <br/>
        <label for="comments">Comments *</label>
        <textarea name="comments" maxlength="1000" cols="25" rows="6"></textarea>
        <br/>
        <input type="submit" class="btn btn-default" value="Submit"> 

        </form>
    </body>
</html>
