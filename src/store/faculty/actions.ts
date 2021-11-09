import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FacultyStateInterface, IFacultyInfo } from './state';

const actions: ActionTree<FacultyStateInterface, StateInterface> = {
  newFaculty(context, newFaculty: IFacultyInfo) {
    //call server api
    context.commit('addFaculty', newFaculty);
  },
  editFaculty(context, updatedFaculty: IFacultyInfo) {
    //call server api
    context.commit('updateFaculty', updatedFaculty);
  },
  deleteFaculty(context, targetFaculty: IFacultyInfo) {
    context.commit('removeFaculty', targetFaculty);
  },
};

export default actions;
