let isLogin = false
const logBtn = document.querySelector('.log-in')
const userStatus = document.querySelector('.user-status')

logBtn.addEventListener('click', () => {
    if (isLogin) return
    userStatus.classList.add('is-user-logged-in')
    isLogin = !isLogin
})