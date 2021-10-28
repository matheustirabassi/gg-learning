let editor;

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/python");
}

function changeLanguage() {

    let language = $("#languages").val();

    if (language == 'c') {
        editor.session.setMode("ace/mode/c_cpp");
    }
    else if (language == 'cpp') {
        editor.session.setMode("ace/mode/c_cpp");
    }
    else if (language == 'php') {
        editor.session.setMode("ace/mode/php");
    }
    else if (language == 'py') {
        editor.session.setMode("ace/mode/python");
    }
    else if (language == 'js') {
        editor.session.setMode("ace/mode/javascript");
    }
}

function executeCode() {

    $.ajax({

        url: "/ide/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function (response) {
            $(".output").text(response)
        }
    })
}