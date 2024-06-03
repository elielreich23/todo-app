import React from 'react'
import {Link} from 'react-router'
import  './styles.scss'

const Login = ()  => {
  return (
    <>
     <form method="post" action="/dashboard" >
          <span>Login</span>
          <input className="text" name="username" type="text" />

          <span>Senha</span>
          <input type="password" className="text" name="password" />

          <Link href="/email">
            <label htmlFor="checkbox-1-1">Esqueci a senha</label>
          </Link>

          <br />
          <button className="signin">
            Entrar
          </button>
          <hr />
        </form>
    </>
  )
}

export default Login