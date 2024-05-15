//Practice: chain of responsability pattern

/// <summary>
/// Class to handle the access
/// param={user, password}. User = user access to the system, password = password.
/// </summary>
class LoginHandler {
    constructor(user, password) {
        this.user = user;
        this.password = password;
        this.next = null;
    }
}

/// <summary>
/// Class to handle Validate if the acccess should be granted
/// </summary>

class ValidationHandler {
    constructor() {
        this.next = null;
    }

    mfa(tocken) {
        if (tocken.user === 'admin') {
            console.log('Your are admin, you can proceed to the home page of the system');
        } else if (tocken.user === 'normal') {
            console.log('You can proceed to the home page of the system');
        } else {
            this.next.mfa(tocken);
        }
    }
}

/// <summary></summary>
/// Class to handle the MFA tocken
/// </summary>

class MFAHandler {
    constructor() {
        this.next = null;
    }

    mfa(tocken) {
        if (tocken.password === 'admin') {
            console.log(`Your are admin, you can proceed to the home page of the system`);
        } else if (tocken.password === '1235') {
            console.log(`Your password is correct, you can proceed to the home page of the system`);
        } else {
            this.next.mfa(tocken);
        }
    }
}

const VALIDATION_HANDLER = new ValidationHandler();
const MFA_HANDLER = new MFAHandler();
VALIDATION_HANDLER.next = MFA_HANDLER;

const LOGIN_HANDLER = new LoginHandler('admin', 'admin');
const LOGIN_HANDLER_2 = new LoginHandler('normal', '09890');
const LOGIN_HANDLER_3 = new LoginHandler('any', 'admin');
VALIDATION_HANDLER.mfa(LOGIN_HANDLER);
VALIDATION_HANDLER.mfa(LOGIN_HANDLER_2);
VALIDATION_HANDLER.mfa(LOGIN_HANDLER_3);

//Practice: Observer pattern
class PasswordUpdated {
    constructor(password) {
        this.password = password;
    }

    notificationUpdate(change) {
        console.log(`Processing ... ${change}`);
    }
}

class Password {
    constructor() {
        this.passwords = [];
    }

    newPassword(passwordTool) {
        this.passwords.push(passwordTool);
    }

    notifyChange(change) {
        for (const PASSWORD of this.passwords) {
            PASSWORD.notificationUpdate(change);
        }
    }
}

const PASSWORD = new Password();
const PASSWORD_UPDATED = new PasswordUpdated('admin');
const PASSWORD_UPDATED_2 = new PasswordUpdated('12345');

PASSWORD.newPassword(PASSWORD_UPDATED); // Processing ... Password updated.
PASSWORD.newPassword(PASSWORD_UPDATED_2); // Processing ... Password updated.

PASSWORD.notifyChange('Password updated.');