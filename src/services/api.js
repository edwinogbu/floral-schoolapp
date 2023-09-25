import axios from 'axios';

// Define your base URL
const BASE_URL = 'https://your-api-url.com';

// Create an instance of axios with custom configuration
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers here, such as authentication tokens
  },
});

// Define API endpoints as functions
export const userApi = {
  getUser: () => api.get('/api/user'),
  loginUser: (email, password) => api.post('/api/login', { email, password }),
  logoutUser: () => api.post('/api/logout'),
  registerUser: (registrationRequest) =>
    api.post('/api/register/save', registrationRequest),
  verifyEmail: (token) => api.get(`/api/register/verifyEmail?token=${token}`),
  viewUserProfile: (userId) =>
    api.get(`/api/register/viewUserProfile/${userId}`),
  updateUserProfile: (userId, updatedUser) =>
    api.put(`/api/register/updateUserProfile/${userId}`, updatedUser),
  deleteUser: (userId) => api.delete(`/api/register/deleteUser/${userId}`),
};

export default api;
