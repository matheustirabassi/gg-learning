<?php
$language = strtolower($_POST['language']);
$code = $_POST['code'];

$random = substr(md5(mt_rand()), 0, 7);

$filePath = "temp/" . $language . "/" . $random . "." . $language;
$programFile = fopen($filePath, "w");
fwrite($programFile, $code);
fclose($programFile);

if ($language == "php") {
    $output = shell_exec("php $filePath 2>&1");
    echo $output;
    if (file_exists($filePath)) {
        unlink($filePath);
    }
} else if ($language == "py") {
    $output = shell_exec("python $filePath 2>&1");
    echo $output;
    if (file_exists($filePath)) {
        unlink($filePath);
    }
} else if ($language == "js") {
    $output = shell_exec("node $filePath 2>&1");
    echo $output;
    if (file_exists($filePath)) {
        unlink($filePath);
    }
} else if ($language == "c") {

    $outputExe = "temp/" . $language . "/" . $random . ".exe";
    $error = shell_exec("gcc $filePath -o $outputExe");
    $output = shell_exec($outputExe);
    echo $output;
    if (file_exists($filePath)) {
        unlink($filePath);
        unlink($outputExe)
    }
} else if ($language == "cpp") {

    $outputExe = "temp/" . $language . "/" . $random . ".exe";
    shell_exec("g++ $filePath -o $outputExe");
    $output = shell_exec($outputExe);
    echo $output;
    if (file_exists($filePath)) {
        unlink($filePath);
        unlink($outputExe)
    }
}
