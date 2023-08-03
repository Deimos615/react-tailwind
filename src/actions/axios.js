import { serverConfig } from '../config'
import axios from 'axios'

/**
 * axios instance for register - header set as a form data for file upload
 */
export const formAxios = axios.create({
  baseURL: serverConfig.API_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

/**
 * instance for common API - header as an application/json
 */
export const commonAxios = axios.create({
  baseURL: serverConfig.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})