/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import FormInput from 'library/components/FormInput';
import Button from 'library/components/Button';

import 'scss/components/_SignIn.scss';

interface IState {
  email: string;
  password: string;
}

class SignIn extends React.PureComponent {
  readonly state: IState = {
    email: '',
    password: '',
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        email: value,
      };
    });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        password: value,
      };
    });
  };

  render(): React.ReactElement {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleEmailChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handlePasswordChange}
            label="password"
            required
          />
          <Button type="submit"> Sign in </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
