import API from "./interceptors";

//Auth
export const login = (loginData) => API.post("/auth/login", loginData);
export const signup = (signupData) => API.post("/auth/register", signupData);

//Blog
export const getAllBlogs = (query = "") => API.get(`/blog/all?${query}`);
export const getBlogById = (id) => API.get(`/blog/get/${id}`);
export const getBlogByUserId = (id) => API.get(`/blog/user/${id}`);

//User
export const getAllUser = (query) => API.get(`/user/all?${query}`);
export const getUserById = (userId) => API.get(`user/get/${userId}`);
export const updateUser = (id, data) => API.put(`user/update/${id}`, data);
