import { mount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  it('renders login form inputs', () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find('input#username').exists()).toBe(true);
    expect(wrapper.find('input#Password').exists()).toBe(true);
  });
});
