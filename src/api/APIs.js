import API from "./interceptors";

//Auth
export const login = (loginData) => API.post("/auth/login", loginData);
export const signup = (signupData) => API.post("/auth/register", signupData);

//Blog
export const getAllBlogs = (query = "") => API.get(`/blog/all?${query}`);
export const getBlogById = (id) => API.get(`/blog/get/${id}`);
export const getBlogByUserId = (id, query = "") =>
  API.get(`/blog/user/${id}?${query}`);
export const updateBlog = (id, data) => API.put(`/blog/update/${id}`, data);
export const getDashboardData = () => API.get("/blog/dashboard");
export const addBlog = (blogData) => {
  return API.post("blog/add", blogData);
};

//User
export const getAllUser = (query) => API.get(`/user/all?${query}`);
export const getUserById = (userId) => API.get(`user/get/${userId}`);
export const updateUser = (id, data) => API.put(`user/update/${id}`, data);

//Category
export const getAllCategories = () => API.get("/category/all");
export const addCategory = (data) => API.post("/category/add", data);
