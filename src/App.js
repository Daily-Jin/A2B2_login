import React from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, TwitterLoginButton } from 'react-social-login-buttons';


function App() {
  return (
    <Form className="login-form">
      <h1>
        <span className="font-weight-bold">FANDING</span>
      </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label>이메일</Label>
        <Input type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <Label>비밀번호</Label>
        <Input type="password" placeholder="Password"/>
      </FormGroup>
      <Button className="btn-lg btn-block" color="warning">
        <b>로그인</b>
      </Button>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <TwitterLoginButton className="mt-3 mb-3"/>
      <div className="text-center">
        <a href="/sign-up">회원가입</a>
        <span className="p-2">|</span>
        <a href="/forgot-password">비밀번호 찾기</a>
      </div>
    </Form>
  );
}

export default App;
