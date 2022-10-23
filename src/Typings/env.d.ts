/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    REACT_APP_PHARMA_DATASET_URL: string
    REACT_APP_GOOGLE_PLACES_API_KEY: string
  }
}
