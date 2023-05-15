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
  it('ログインボタンを押下すると、一般的ユーザーでログイン', async () => {
    render(<User />)
    const loginButton = await screen.findByText('Log in')
    act(() => {
      loginButton.click()
    })
    expect(await screen.findByText('Hello, User!')).toBeInTheDocument()
  })
})
