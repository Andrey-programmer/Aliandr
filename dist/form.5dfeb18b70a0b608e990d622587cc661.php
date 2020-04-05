<?php

$method = $_SERVER['REQUEST_METHOD'];
$messageTelegram = "";

$formdata = ($method === 'POST') ? $_POST : $_GET;

$form_subject = trim($formdata["form_subject"]);
if (!$form_subject) $form_subject = "Заявка с сайта zouk-pro";

$messageTelegram .= "<b>$form_subject</b>\r\n";

foreach ( $formdata as $key => $value ) {
    if ( $value != "" && $key != "form_subject" ) {
        
        if ( $key == "mobil"){
            $messageTelegram .= "<b>$key</b>: <a href='tel:$value'>$value</a>\r\n";
        } else {
            $messageTelegram .= "<b>$key</b>: $value\r\n";
        }
    }
}


// Отправляем почту
$headers = "Content-type: text/html; charset=utf-8\r\n";
@mail('Lak0sta1302@gmail.com', $form_subject, nl2br($messageTelegram), $headers);

// Send Telegram

// бот @zoukpro_bot Андрею
	set_time_limit(0);
    $botToken = "386780196:AAHTfHUbQSdJMyXYNJ7BF1jQoCNh7WRYM5U";
    $website = "https://api.telegram.org/bot".$botToken;
    $chatId = "246418899";
	file_get_contents("https://proxy.anonymster.com/browse.php?u=".urlencode($website."/sendmessage?chat_id=".$chatId."&text=".urlencode($messageTelegram)."&parse_mode=HTML"));

/*
// бот @zoukpro_bot Ирине
	set_time_limit(0);
    $botToken = "386780196:AAHTfHUbQSdJMyXYNJ7BF1jQoCNh7WRYM5U";
    $website = "https://api.telegram.org/bot".$botToken;
    $chatId = "566221190";
	file_get_contents("https://proxy.anonymster.com/browse.php?u=".urlencode($website."/sendmessage?chat_id=".$chatId."&text=".urlencode($messageTelegram)."&parse_mode=HTML"));
*/

?>