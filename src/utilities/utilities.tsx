export const passwordValidation = (
  name: string,
  phoneno: string,
  passwordd: string,
) => {
  if (name.length > 0 && phoneno.length >= 10 && passwordd.length >= 8) {
    return true;
  }
  return false;
};
