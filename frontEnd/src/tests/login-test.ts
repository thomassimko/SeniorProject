import { expect } from 'chai';
import 'mocha';
import {CognitoController} from '../js/models/CognitoController';



describe('Login Controller', () => {

    const validUser = {
        username: 'Test_User',
        password: 'Banana11'
    };
    const invalidUser = {
        username: 'admin',
        password: 'incorrect password'
    };

    var isLoggedIn = false;

    const login = new CognitoController(() => {isLoggedIn = true}, () => {isLoggedIn = false}, () => {return isLoggedIn});
    describe('check login', function() {
        it('should fail to auth', async function() {
            const result = await login.attemptLogIn(invalidUser.username, invalidUser.password);
            console.log(result);
            expect(result).to.be.false;
        });
        it('should properly auth', async function() {
            const result = await login.attemptLogIn(validUser.username, validUser.password);
            expect(result).to.be.true;
        });
    });
    describe('isLoggedIn Function', function() {
        before(async function() {
            await login.attemptLogIn(validUser.username, validUser.password);
        });
        it('user is logged in', () => {
           const result = login.isLoggedIn();
           expect(result).is.true;
        });
        it('user is logged out', async function() {
            await login.attemptLogOut();
            const result = login.isLoggedIn();
            expect(result).is.false;
        });
    });

});

