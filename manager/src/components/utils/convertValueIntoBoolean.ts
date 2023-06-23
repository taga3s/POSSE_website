export const convertValueIntoBoolean = (val: number | boolean) => {
  return typeof val === 'number' ? val === 1 : val
}
