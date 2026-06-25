

function Login(){

  function loginWithGithub(){
    window.location.href =
    "http://localhost:5000/gitAuth/login";
  }

    return (
        <>
            <h1> 0Auth 2.0 </h1>
            {/* login Btn  */}
            <button type='button' onClick={loginWithGithub} className='card'>
                <img src='/github.png' alt="github" />
                <span> Login with GitHub </span>
                
            </button>
        </>
    )
}

export default Login;