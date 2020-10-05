function generatePassword () {

    const debug = true;

    // Local variables in from form - all noted as strings

    var passwordLengthString = document.forms["passwordGenerateForm"]["passwordLength"].value;
    var varPasswordLength;
    var includeLowercaseLettersString = document.forms["passwordGenerateForm"]["includeLowercaseLetters"].value;
    var includeUppercaseLettersString = document.forms["passwordGenerateForm"]["includeLowercaseLetters"].value;
    var includeSpecialCharactersString = document.forms["passwordGenerateForm"]["includeLowercaseLetters"].value;
    var includeNumbersString = document.forms["passwordGenerateForm"]["includeLowercaseLetters"].value;
    var potentialPasswordArray = "";

    // Log page input for debugging
    logDebug (debug, "Password Length String:  " + passwordLengthString);
    logDebug (debug, "Lowercase:  " + includeLowercaseLettersString);
    logDebug (debug, "Uppercase:  " + includeUppercaseLettersString);
    logDebug (debug, "Special Characters:  " + includeSpecialCharactersString);
    logDebug (debug, "Numbers:  " + includeNumbersString);

    varPasswordLength = parseInt (passwordLengthString);
    var varIncludeLowercaseLetters = setBoolean (includeLowercaseLettersString);
    var varIncludeUppercaseLetters = setBoolean (includeUppercaseLettersString);
    var varIncludeSpecialCharacters = setBoolean (includeSpecialCharactersString);
    var varIncludeNumbers = setBoolean (includeNumbersString);

    // Validate Password Length
    if (isNaN (passwordLengthString)) {
        alert ("For password length, please enter a number between 8 and 128");
    }

    else if ((varPasswordLength < 8) || (varPasswordLength > 128)) {
        alert ("Password length must be between 8 and 128");
    }

    else if ((!varIncludeLowercaseLetters) && (!varIncludeUppercaseLetters) && (!varIncludeSpecialCharacters) && (!varIncludeNumbers)) {
        alert ("You must select at least one of the include items to continue.");
    }

    else {
        alert ("All checks out.");
    }

    logDebug (debug, "varPasswordLength = " + varPasswordLength);

    debug;

    return false;
}

function logDebug (debugStatus, message) {
    if (debugStatus) {
        console.log (message);
    }
}

function setBoolean (stringVariable) {
    if (stringVariable === "true") {
        return true;
    }

    else if (stringVariable === "false") {
        return false;
    }

    else{
        return null;
    }
}