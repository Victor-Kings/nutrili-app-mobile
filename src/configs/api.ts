import axios from 'axios';

export const apiRecognize = axios.create({
  baseURL: 'http://192.168.0.104:8090',
});

export const apiBackend = axios.create({
  baseURL: 'http://192.168.0.104:5000'
})