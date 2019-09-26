import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomeCard from "./HomeCard";

configure({ adapter: new Adapter() });

describe("<HomeCard />", () => {
  it("should have an DOM object with the card-image class.", () => {
    const wrapper = shallow(<HomeCard />);
    expect(wrapper.exists(".card-image")).toEqual(true);
  });
});
