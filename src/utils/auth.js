
const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.getItem('gatsbyUser')
    ? JSON.parse( window.localStorage.getItem('gatsbyUser'))
    : ''

export const isLoggedIn = () => {
  if (!isBrowser) return false
console.log("Is Browser",isBrowser)
  const user = getUser()
  console.log("user :::>",user)
  return user
  
}
export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
 
  callback()
}
