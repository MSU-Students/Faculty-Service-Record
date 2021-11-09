import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { FacultyStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const facultyModule: Module<FacultyStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default facultyModule;
