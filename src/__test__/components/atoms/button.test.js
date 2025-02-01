import Button from "@/components/atoms/Button";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

//describe : function untuk ngelompokin test code yang berhubungan dengan suatu komponen
describe("Button", () => {
  //it() function untuk nulis/mendefinisikan suatu testcase
  it("render button", () => {
    //render() fungsi buat ngerender komponen ke DOM virtual
    const { getByText } = render(
      <Button type="submit" buttonClassName="bg-gradient-hover text-white w-full mt-4">
        Login
      </Button>
    );
    //ecpect() fungsi buat bikin assertion(bandinginhasil yang diharapkan dengan hasil sebenarnya/lagi dieksekusi)
    //toMatchSnapshot : function buat snapshot hasil render
    expect(getByText("Login")).toBeInTheDocument();
  });
  it("render button dengan warna biru", () => {
    //renderer dulu komponennya
    const { getByText } = render(<Button buttonClassName="bg-blue-500">Login</Button>);
    //closest() : fungsi buat ngambil elemen terdekat dengan tag tertentu
    const button = getByText("Login").closest("button");

    //toContain :fungsi buat mastiin elemen punya class tertentu
    expect(button.className).toContain("bg-blue-500");
  });
  it("render button dengan width full", () => {
    const { getByText } = render(<Button buttonClassName="w-full">Login</Button>);

    const button = getByText("Login").closest("button");

    expect(button.className).toContain("w-full");
  });
  it("renderer button with type", () => {
    const { getByText } = render(<Button type="submit">Login</Button>);

    const button = getByText("Login").closest("button");

    expect(button.type).toContain("submit");
  });
  it("tes fungsi onClick", () => {
    //jest.fn() : fungsi buat mockfunction(data/fungsi tiruan)
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Login</Button>);
    const button = getByText("Login").closest("button");
    //fireEvent fungsi buat simulasi event handler di elemen tertentu
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
