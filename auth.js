document.getElementById('auth-button').addEventListener('click', function() {
    // Generate random state (you can also do this on the server side for extra security)
    const csrfState = Math.random().toString(36).substring(2);

    // Store the state in localStorage or cookies for later verification
    localStorage.setItem('csrfState', csrfState);

    // Redirect to TikTok's authorization page
    const clientKey = 'YOUR_CLIENT_KEY'; // Replace with your actual client key
    const redirectURI = 'https://milot-morina.github.io/upload-vids/';
    const authURL = `https://www.tiktok.com/v2/auth/authorize/?client_key=${clientKey}&response_type=code&scope=video.upload&redirect_uri=${encodeURIComponent(redirectURI)}&state=${csrfState}`;

    window.location.href = authURL;
});
