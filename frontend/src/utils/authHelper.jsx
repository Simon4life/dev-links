const fetchProtectedRoute = async () => {
  try {
    const response = await fetch(url);
    if(response.status === 200) {
      // process the protected data;
    } else if(response.status === 401) {
      // Access token expired, attempt  to refresh
      refreshToken()

    } else {
      
    }
  } catch (error) {
    
  }
}


const refreshToken = async () => {
  try {
    const response = fetch(url);
    if(response.status === 200) {
      const data = await response;
      document.cookie = `accessToken=${data.newAccessToken}; path/; secure; HttpOnly`;
    } else {
      console.log("token is invalid");
      // redirect to login for show error
    }
    
  } catch (error) {
    console.error("Token reshresh failed: " + error)
  }
}

const getAccessToken = () => {
  const cookieArr = document.cookie.split(";");
  console.log(cookieArr);
  for(const cookie of cookieArr) {
    const [key, value] = cookie.trim().split("=")
    if(key === "accessToken") {
      return value;
    }
  }
}



export default getAccessToken;