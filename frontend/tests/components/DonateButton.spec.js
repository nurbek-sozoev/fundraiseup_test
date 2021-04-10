import { shallowMount } from '@vue/test-utils';
import DonateButton from '../../src/components/DonateButton.vue';

describe('DonateButton.vue', () => {
  it('shows DONATE button', () => {
    const wrapper = shallowMount(DonateButton);
    expect(wrapper.text()).toMatch('DONATE')
  })
});
