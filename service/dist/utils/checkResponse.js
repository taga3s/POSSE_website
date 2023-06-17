// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkResponse = (responseData) => {
  if (Array.isArray(responseData) && responseData.length) {
    return true
  } else {
    return false
  }
}
