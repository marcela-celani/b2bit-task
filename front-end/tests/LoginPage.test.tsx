import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage';


describe('Testando componentes da tela de login', () => {

  beforeEach(() => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
  })

  test('Deve renderizar campos de email e senha para preenchimento', () => {
    const emailInput = screen.getByPlaceholderText('@gmail.com');
    expect(emailInput).toBeDefined();

    const passwordInput = screen.getByPlaceholderText('*************');
    expect(passwordInput).toBeDefined();
  });

  test('Deve mostrar mensagens de erro para inputs que não foram validados', async () => {
    const emailInput = screen.getByPlaceholderText('@gmail.com');
    const passwordInput = screen.getByPlaceholderText('*************');
    const submitButton = screen.getByText('Sign In');


    fireEvent.change(emailInput, { target: { value: 'email-incorreto' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    fireEvent.blur(emailInput);
    fireEvent.blur(passwordInput);
    fireEvent.click(submitButton);

    expect(await screen.findByText('Formato de e-mail inválido')).toBeDefined();
    expect(await screen.findByText('Deve possuir 8 ou mais caracteres')).toBeDefined();
  });
});
