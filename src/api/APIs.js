import API from "./interceptors";

//Auth
export const login = (loginData) => API.post("/auth/login", loginData);
export const signup = (signupData) => API.post("/auth/register", signupData);

//Blog
export const allBlogs = () => API.get("/blog/all");
export const getBlogById = (id) => API.get(`/blog/get/${id}`);
