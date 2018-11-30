import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '.';

const card1 = {
    "id": 1,
    "title": "We are Humans",
    "subtitle": "And we love humans",
    "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
    "image_url": "https://picsum.photos/300/150/?random",
    "href": "https://mindera.com/people-and-culture/we-are-humans/",
    "is_liked": true
  };

const card2 = {
      "id": 2,
      "title": "We work together",
      "subtitle": "Would you like to join us?",
      "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
      "image_url": "https://picsum.photos/300/150/?image=190",
      "href": "https://mindera.com/people-and-culture/we-work-together/",
      "is_liked": false
    }


describe('Card', () => {
    it('It should render without crashing', () => {
      const component = shallow(<Card card={card1}/>);
      expect(component).toMatchSnapshot();
    });

    it('It renders the card id 1', () => {
      const wrapper = mount(<Card card={card1}/>);
      expect(wrapper.find('#card')).toBeDefined();
      expect(wrapper.find('#card__img')).toBeDefined();
      expect(wrapper.find('#card__title')).toBeDefined();
      expect(wrapper.find('#card__subtitle')).toBeDefined();
      expect(wrapper.find('#card__text')).toBeDefined();
      expect(wrapper.find('#card__heart')).toBeDefined();
      expect(wrapper.find('#card__title').text()).toBe('We are Humans');
      expect(wrapper.find('#card__subtitle').text()).toBe('And we love humans');
      expect(wrapper.find('#card__text').text()).toBe('We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.');
      wrapper.unmount();
    });

    it('It renders the card id 2', () => {
      const wrapper = mount(<Card card={card2}/>);
      expect(wrapper.find('#card')).toBeDefined();
      expect(wrapper.find('#card__img')).toBeDefined();
      expect(wrapper.find('#card__title')).toBeDefined();
      expect(wrapper.find('#card__subtitle')).toBeDefined();
      expect(wrapper.find('#card__text')).toBeDefined();
      expect(wrapper.find('#card__heart')).toBeDefined();
      expect(wrapper.find('#card__title').text()).toBe('We work together');
      expect(wrapper.find('#card__subtitle').text()).toBe('Would you like to join us?');
      expect(wrapper.find('#card__text').text()).toBe('We insist on working collaborativelly. No rockstars. No departments. The whole owns the whole project together.');
      wrapper.unmount();
    });

});
