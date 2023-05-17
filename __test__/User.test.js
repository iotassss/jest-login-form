// jestのテストコード
import { render, screen } from '@testing-library/react'
import User from '../pages/user/index'
// これを書かないと、jest-domのmatchersが使えない
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

describe('User', () => {
  it('メッセージをレンダリング', () => {
    render(<User />)
    expect(screen.getByText('Please log in.')).toBeInTheDocument()
  })
})

describe('ユーザーのログイン操作', () => {
  it('ログインボタンを押下', async () => {
    render(<User />)
    const loginButton = await screen.findByText('Log in')
    act(() => {
      loginButton.click()
    })
    expect(await screen.findByText('Hello, User!')).toBeInTheDocument()
  })

  it('ログインボタンを押下 -> ログアウトボタン押下', async () => {
    render(<User />)
    const loginButton = await screen.findByText('Log in')
    const logoutButton = await screen.findByText('Log out')
    act(() => {
      loginButton.click()
      logoutButton.click()
    })
    expect(await screen.findByText('Please log in.')).toBeInTheDocument()
  })
})

describe('ユーザーの権限による表示の違い', () => {
  it('管理者ユーザーでログイン', async () => {
    render(<User />)
    const loginButton = await screen.findByText('Log in')
    const adminLoginButton = await screen.findByText('Log in as Admin')
    act(() => {
      loginButton.click()
      adminLoginButton.click()
    })
    expect(await screen.findByText('Hello, Admin!')).toBeInTheDocument()
  })

  it('一般ユーザーでログイン', async () => {
    render(<User />)
    const loginButton = await screen.findByText('Log in')
    const userButton = await screen.findByText('Log in as User')
    act(() => {
      loginButton.click()
      userButton.click()
    })
    expect(await screen.findByText('Hello, User!')).toBeInTheDocument()
  })
})
