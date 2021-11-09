import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FacultyStateInterface } from './state';

const getters: GetterTree<FacultyStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
