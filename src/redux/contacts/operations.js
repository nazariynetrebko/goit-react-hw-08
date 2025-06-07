import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No valid token");
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No valid token");
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No valid token");
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
