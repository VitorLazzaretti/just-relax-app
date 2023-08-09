interface Response {
  token: string;
  user: User;
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      token: 'akjdoauhfaojda',
      user: {
        name: 'João',
        email: 'joao@gmail.com',
        avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        created_at: new Date(),
        updated_at: new Date(),
        id: '1',
        password: '123456',
      }
    }), 2000);
  });
}