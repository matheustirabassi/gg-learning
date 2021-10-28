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
} else if ($language == "py") {
    $output = shell_exec("python $filePath 2>&1");
    echo $output;
} else if ($language == "js") {
    $output = shell_exec("node $filePath 2>&1");
    echo $output;
} else if ($language == "c") {

    putenv("PATH=C:\MinGW\bin");
    $CC = "gcc";
    $out = "a.exe";
    $code = $_POST["code"];
    $filename_code = "main.c";
    $filename_in = "input.txt";
    $filename_error = "error.txt";
    $executable = "a.exe";
    $command = $CC . " -lm " . $filename_code;
    $command_error = $command . " 2>" . $filename_error;

    //if(trim($code)=="")
    //die("The code area is empty");

    $file_code = fopen($filename_code, "w+");
    fwrite($file_code, $code);
    fclose($file_code);
    $file_in = fopen($filename_in, "w+");
    fclose($file_in);
    exec("cacls  $executable /g everyone:f");
    exec("cacls  $filename_error /g everyone:f");

    shell_exec($command_error);
    $error = file_get_contents($filename_error);

    $output = shell_exec($out);

        //echo "<pre>$output</pre>";
        echo "$output";
        //echo "<textarea id='div' class=\"form-control\" name=\"output\" rows=\"10\" cols=\"50\">$output</textarea><br><br>";
    
    exec("del $filename_code");
    exec("del *.o");
    exec("del *.txt");
    exec("del $executable");
} else if ($language == "cpp") {

    putenv("PATH=C:\MinGW\bin");
    $CC = "g++";
    $out = "a.exe";
    $code = $_POST["code"];

    $filename_code = "main.cpp";
    $filename_in = "input.txt";
    $filename_error = "error.txt";
    $executable = "a.exe";
    $command = $CC . " -lm " . $filename_code;
    $command_error = $command . " 2>" . $filename_error;

    //if(trim($code)=="")
    //die("The code area is empty");

    $file_code = fopen($filename_code, "w+");
    fwrite($file_code, $code);
    fclose($file_code);
    $file_in = fopen($filename_in, "w+");
    fclose($file_in);
    exec("cacls  $executable /g everyone:f");
    exec("cacls  $filename_error /g everyone:f");

    shell_exec($command_error);
    $error = file_get_contents($filename_error);

    if (trim($error) == "") {
        $output = shell_exec($out);

        //echo "<pre>$output</pre>";
        echo "$output";
        //echo "<textarea id='div' class=\"form-control\" name=\"output\" rows=\"10\" cols=\"50\">$output</textarea><br><br>";
    } else if (!strpos($error, "error")) {
        echo "<pre>$error</pre>";
        if (trim($input) == "") {
            $output = shell_exec($out);
        } else {
            $out = $out . " < " . $filename_in;
            $output = shell_exec($out);
        }
        echo "$output";
        //echo "<textarea id='div' class=\"form-control\" name=\"output\" rows=\"10\" cols=\"50\">$output</textarea><br><br>";
    } else {
        echo "<pre>$error</pre>";
    }
    exec("del $filename_code");
    exec("del *.o");
    exec("del *.txt");
    exec("del $executable");
}
