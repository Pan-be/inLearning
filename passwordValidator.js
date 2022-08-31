// one lowercase
// one uppercase
// one digit 
// one special charak
// 8 char long
//
class PasswordValidator {
    passwordCheck(password) {
        let requirements = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
        let isValid = requirements.test(password)

        return isValid ? "Your password is valid" : "Your Password is invalid"
    }
}

const password = new PasswordValidator()
const password2 = new PasswordValidator()

console.log(password.passwordCheck('kupa'));
console.log(password2.passwordCheck('Bkafd45@tj'));

// function passwordCheck(password) {
//     let oneLowerCase = /(?=.+[a-z])/
//     let oneUpperCase = /(?=.+[A-Z])/
//     let oneDigit = /(?=.+[0-9])/
//     let oneSpecialCharacter = /(?=.+[!@#$%^&*])/
//     let minimumEightChar = /(?=.{8,})/
//     let isValid =
//         oneUpperCase.test(password) &&
//         oneLowerCase.test(password) &&
//         oneDigit.test(password) &&
//         oneSpecialCharacter.test(password) &&
//         minimumEightChar.test(password)
//     return isValid ? "Your password is valid" : "Your Password is invalid"
// }

// console.log(passwordCheck("abc123&*B"));