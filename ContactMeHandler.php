<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['Email'];
    $CompanyName = $_POST['CompanyName'];
    $CompanyNumber = $_POST['CompanyNumber'];
    $PersonalNumber = $_POST['PersonalNumber'];
    $BusinessPosition = $_POST['BusinessPosition'];

    $email_from = 'juddsteiner@icloud.com';

    $email_subject = "New Contact Me Submission from Website";

    $email_body = "Name: $name.\n". 
                    "Surname: $surname.\n".
                        "Email Address: $email.\n". 
                            "Company Name: $CompanyName.\n". 
                                "Company Number: $CompanyNumber.\n".
                                    "Personal Number: $PersonalNumber.\n".  
                                        "Bussiness Position: $BusinessPosition.\n";

    $to = "juddsteiner@gmail.com";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: ContactMe.html")


?>