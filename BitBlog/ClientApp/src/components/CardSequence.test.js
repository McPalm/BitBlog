import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomeCard from "./HomeCard";
import CardSequence from "./CardSequence";

configure({ adapter: new Adapter() });

describe("<CardSequence />", () => {
  it("should have no cards if none are sent in.", () => {
    const wrapper = shallow(<CardSequence />);
    expect(wrapper.find(<HomeCard />)).toHaveLength(0);
  });

  it("should have no three cards if three are sent in.", () => {
    const cards = [];
    cards.push(<HomeCard />);
    cards.push(<HomeCard />);
    cards.push(<HomeCard />);
    const wrapper = shallow(<CardSequence cards={cards} />);
    expect(wrapper.find(<HomeCard />)).toHaveLength(3);
  });
});
