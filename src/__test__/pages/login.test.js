import LoginPage from "@/pages/login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
//describe : function untuk ngelompokin test code yang berhubungan dengan suatu komponen
describe("LoginPage", () => {
  //it() function untuk nulis/mendefinisikan suatu testcase
  it("render halaman login bro", () => {
    //render() fungsi buat ngerender komponen ke DOM virtual
    const page = render(<LoginPage />);
    //ecpect() fungsi buat bikin assertion(bandinginhasil yang diharapkan dengan hasil sebenarnya/lagi dieksekusi)
    //toMatchSnapshot : function buat snapshot hasil render
    expect(page).toMatchSnapshot();
  });
});
