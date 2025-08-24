import api from "./axios";  // taking axios

const LoginUser = async (credentials) => {
  
    try {
    // Fetching users from the mock API
    const response = await api.get("/users"); // fetching the users

    
    console.log("API response:", response);

    // Find the user by matching email and password
    const user = response.data.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );
        
    // If no user is found, throw an error
    if (!user) {
      throw { error: "Invalid email or password" };
    }

    // Return a fake token and the role from the found user
    return {
      token: "fake-jwt-token",  
      role: user.role,          
      user: {
        email: user.email,
        id: user.id,
      },
    };
  } 
    catch (error) {
    //This is the updated catch block
    console.error("Caught error:", error); 

    // If it's a custom error (like invalid credentials), rethrow it
    if (error?.error) {
      throw error;
    }

    // Otherwise, it's will be network/API error
    throw error.response?.data || { error: "something went wrong" };
  }
};


export default LoginUser;
