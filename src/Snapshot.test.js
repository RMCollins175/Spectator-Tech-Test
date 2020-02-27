import React from "react";
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import News from "./components/News";


Enzyme.configure({ adapter: new Adapter() })
const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('News snapshot test', async () => {
  const wrapper = shallow(<News />);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});