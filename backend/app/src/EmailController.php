<?php

namespace App\Controller;

use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use SilverStripe\Core\Environment;


class EmailController extends Controller
{
    private static $allowed_actions = [
        'index'
    ];

    public function index(HTTPRequest $request)
    {
        error_log("Enviando email iniciado");

        $data = json_decode($request->getBody(), true);
        $name = $data['name'] ?? null;
        $email = $data['email'] ?? null;
        $message = $data['message'] ?? null;

        error_log("Dados recebidos: Nome: $name, Email: $email, Mensagem: $message");

        if (!$name || !$email || !$message) {
            error_log("Campos obrigatórios ausentes");
            return $this->jsonResponse(['status' => 'error', 'message' => 'Todos os campos são obrigatórios'], 400);
        }

        $emailSent = $this->processEmail($name, $email, $message);

        if ($emailSent) {
            error_log("Email enviado com sucesso.");
            return $this->jsonResponse(['status' => 'success', 'message' => 'Email enviado com sucesso']);
        } else {
            error_log("Erro de envio de e-mail.");
            return $this->jsonResponse(['status' => 'error', 'message' => 'Erro de envio de e-mail'], 500);
        }
    }

   private function processEmail($name, $fromEmail, $message)
   {
       $mail = new PHPMailer(true);

       try {
           $mail->isSMTP();
           $mail->Host = Environment::getEnv('SMTP_HOST');
           $mail->SMTPAuth = true;
           $mail->Username = Environment::getEnv('SMTP_USERNAME');
           $mail->Password = Environment::getEnv('SMTP_PASSWORD');
           $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
           $mail->Port = Environment::getEnv('SMTP_PORT');

           $mail->setFrom(Environment::getEnv('SMTP_USERNAME'), Environment::getEnv('SMTP_FROM_NAME'));
           $mail->addAddress('flaviomartil5@gmail.com', 'Flavio Martil');
           $mail->addReplyTo($fromEmail, $name);

           $mail->isHTML(true);
           $mail->Subject = 'Novo contato do site';
           $mail->Body = '<b>Nome:</b> ' . $name . '<br><b>Email:</b> ' . $fromEmail . '<br><br><b>Mensagem:</b><br>' . $message;
           $mail->AltBody = 'Nome: ' . $name . "\nEmail: " . $fromEmail . "\n\nMensagem:\n" . $message;

           $mail->send();
           error_log('Email enviado com sucesso!');
           return true;
       } catch (Exception $e) {
           error_log('Erro ao enviar email: ' . $mail->ErrorInfo);
           return false;
       }
   }

    private function jsonResponse(array $data, int $status = 200)
    {
        $response = $this->getResponse();
        $response->setStatusCode($status);
        $response->addHeader('Content-Type', 'application/json');
        return json_encode($data);
    }
}
