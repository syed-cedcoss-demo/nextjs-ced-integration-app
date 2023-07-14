export const postCall = async (props: any) => {
  const options: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "syed@yopmail.com",
      password: "Test@123",
    }),
    url: "https://83ef-103-97-184-122.ngrok-free.app/auth/login",
  };
  try {
    const res = await fetch(options.url, options);
    const data = await res.json();
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};
