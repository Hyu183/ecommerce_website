class ValidatorHelper {
    constructor(body) {
        this.body = body;
        this.error = {};
    }

    addError = (newError) => {
        const newErrorKey = Object.keys(newError)[0];
        if (!this.error[newErrorKey]) {
            this.error[newErrorKey] = [newError[newErrorKey]];
        } else {
            this.error[newErrorKey].push(newError[newErrorKey]);
        }
    };

    validateEmail = () => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

        if (!this.body.email) {
            this.addError({ email: 'email required' });
        } else if (regex.test(this.body.email) === false) {
            this.addError({ email: 'email invalid' });
        }
    };

    validateName = () => {
        const regex = /^([a-zA-Z ]){2,50}$/;
        if (!this.body.name) {
            this.addError({ name: 'name required' });
        } else if (regex.test(this.body.name) === false) {
            this.addError({ name: 'name invalid' });
        }
    };

    validatePassword = () => {
        if (!this.body.password) {
            this.addError({ password: 'password required' });
        } else if (this.body.password.length <= 6) {
            this.addError({ password: 'password invalid' });
        }
    };

    hasError = () => {
        const numError = Object.keys(this.error); //array of error key: name,email,...
        if (numError.length === 0) {
            return false;
        }
        return true;
    };
}

export default ValidatorHelper;
