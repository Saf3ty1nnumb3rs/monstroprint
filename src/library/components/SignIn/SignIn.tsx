/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import FormInput from 'library/components/FormInput';
import Button from 'library/components/Button';

import { auth, signInWithGoogle } from 'firebaseutility/firebase.utils';

import 'scss/components/_SignIn.scss';

interface IState {
  email: string;
  password: string;
}

class SignIn extends React.Component {
  readonly state: IState = {
    email: '',
    password: '',
  };

  handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render(): React.ReactElement {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Button type="submit"> Sign In </Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google{' '}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
