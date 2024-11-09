import axios from 'axios';

const API_URL = 'http://localhost:5000/students';  // Change to your backend URL if different

// Create a new student
export const createStudent = async (studentData) => {
  try {
    const response = await axios.post(API_URL, studentData);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error.message);
    throw error;
  }
};

// Get all students
export const getAllStudents = async (paginationData) => {
  try {

    console.log('levi with ', paginationData)
    const response = await axios.get(API_URL,{ params:paginationData});
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error.message);
    throw error;
  }
};

// Get a single student by ID
export const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error.message);
    throw error;
  }
};

// Update a student by ID
export const updateStudent = async (id, studentData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, studentData);
    return response.data;
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error.message);
    throw error;
  }
};

// Delete a student by ID
export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting student with ID ${id}:`, error.message);
    throw error;
  }
};
