export const StorageService = {
  setAccessToken: (value: string) => {
    localStorage.setItem("API_ACCESS_TOKEN", value);
  },
  getAccessToken: () => {
    return localStorage.getItem("API_ACCESS_TOKEN")
  },
  removeAccessToken: () => {},
  setEmailVerificationToken: () => {},
  getEmailVerificationToken: () => {}
}