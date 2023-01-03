const isProduction = process.env.NODE_ENV === "production" ? true : false;

export const server = !isProduction
  ? "https://staging-backend.kodexolabs.com"
  : "https://backend.kodexolabs.com";

  