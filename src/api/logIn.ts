export const logIn = async (email: string, password: string) => {
  return new Promise<void>((resolve) => {
    console.log(`logIn: ${email} ${password}`);
    resolve();
  });
};
