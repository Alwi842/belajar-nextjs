import { login } from "@/services/auth";
import axios from "axios";

//buat data tiruan yang dikirim ke api
jest.mock("axios");
describe("Login", () => {
  it("Login test with correct payload", async () => {
    const payload = {
      username: "alwi",
      password: "123",
    };
    await login(payload);
    expect(axios.post).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API}/auth/login`, payload);
  });
  it("Login with incorrect payload", async () => {
    //data dummy
    const payload = {
      username: "alwi",
      password: "123",
    };
    //simulasi error boongan
    const error = new Error("Login gagal");
    //fungsibuatnambil error
    axios.post.mockRejectedValue(error);
    //ngambil service login
    const res = await login(payload);
    //toEqual fungsi buat bandingin hasil
    expect(res).toEqual({ status: false, error });
  });
  it("token check", async () => {
    //data dummy
    const payload = {
      username: "alwi",
      password: "123",
    };
    //fake token
    const token = "token123";
    //fungsi buat ngambilin status sukses(pura2 sukses)
    axios.post.mockResolvedValue({ data: { token } });
    const res = await login(payload);
    expect(res).toEqual({ status: true, token });
  });
});
