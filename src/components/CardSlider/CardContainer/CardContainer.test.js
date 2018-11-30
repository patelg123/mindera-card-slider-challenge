import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '.';

const data = [
  {
    "id": 1,
    "title": "We are Humans",
    "subtitle": "And we love humans",
    "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
    "image_url": "https://picsum.photos/300/150/?random",
    "href": "https://mindera.com/people-and-culture/we-are-humans/",
    "is_liked": true
  },
  {
    "id": 2,
    "title": "We work together",
    "subtitle": "Would you like to join us?",
    "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
    "image_url": "https://picsum.photos/300/150/?image=190",
    "href": "https://mindera.com/people-and-culture/we-work-together/",
    "is_liked": false
  },
  {
    "id": 3,
    "title": "We change",
    "subtitle": "And we embrace change",
    "text": "Nothing is sacred, from our habits to our rituals, to our enviroment. Change is a natural part of the human life, and we prefer to embrace it.",
    "image_url": "https://picsum.photos/300/150/?random",
    "href": "https://mindera.com/people-and-culture/we-change/",
    "is_liked": true
  }
]

describe('CardContainer', () => {
  it('It should render without crashing', () => {
    const component = shallow(<CardContainer data={data}/>);
    expect(component).toMatchSnapshot();
  });

  it('It renders 3 cards', () => {
    const wrapper = mount(<CardContainer data={data}/>);
    expect(wrapper.find('#card-container')).toBeDefined();
    expect(wrapper.find('#card')).toHaveLength(data.length);
    wrapper.unmount();
  });

});
