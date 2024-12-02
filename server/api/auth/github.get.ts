export default defineOAuthGitHubEventHandler({
    async onSuccess(event, { user }) {
        await setUserSession(event, { user })
        console.log(user)
        return sendRedirect(event, '/')
    }
})
