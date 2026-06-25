# GitHub login using 0Auth 2.0
**OAuth 2.0** is the industry-standard authorization framework that enables third-party applications to obtain limited access to a user’s resources on an HTTP service without exposing the user’s credentials

## How to setup github oauth app service

### 1. You need to create OAuth App:
```txt
1. Open GitHub Account Setting
2. Open Developer Setting
3. Click OAuth Apps
4. Create One: fill details such as your client url, server callback url, 
5. Get 'ClientId' Credential of your OAuth app
```

#### Sample details which you require for create GitHub OAuth app.
```
Application name: anything
Homepage URL: http://localhost:5173/
Authorization callback URL: http://localhost:3000/oauth/github/callback
Application description: can be empty 
click 'register app"
```

### 2. SetUp Button Click event on react-app
on button click your browser should redirect you to the server route **GET '/oauth/github/login'**, this your custom route not from github!

### 3. Update controller for your route GET '/oauth/github/login'
now this controller redirect your to the github auth page using github client id you got when you created your oauth app.


### 4. Github auth do authentication and return code to the callback url you provide when creating oauth app
for example your server have route **GET '/oauth/github/callback'**
github send code to the callback url

### 5. Exchange code with Access Token
- github return a code to your callback route when any user attempt to get login using github!
- send the github code to access token url for exchange code with access token, use your clientId, clientSecret also

```env
await axios.post(
    'https://github.com/login/oauth/access_token',
    { clientId, clientSecret, Code },
    { headers: { Accept: "application/json" }, },
);
```
### 6. Fetch user using Access Token
- send access token with GET request to below github url to get user info
```
await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
});
```
- After geting a user from the response store it to the database!
