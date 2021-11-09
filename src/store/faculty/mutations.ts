import { MutationTree } from 'vuex';
import { FacultyStateInterface, IFacultyInfo } from './state';

const mutation: MutationTree<FacultyStateInterface> = {
  addFaculty(state, newFaculty: IFacultyInfo) {
    state.facultys.push(newFaculty);
  },
  updateFaculty(state, updatedFaculty: IFacultyInfo) {
    const index = state.facultys.findIndex((s) => {
      return s.fname == updatedFaculty.fname;
    });
    if (index >= 0) {
      state.facultys.splice(index, 1, updatedFaculty);
    }
  },
  removeFaculty(state, targetFaculty: IFacultyInfo) {
    const index = state.facultys.findIndex((s) => {
      return s.fname == targetFaculty.fname;
    });
    if (index >= 0) {
      state.facultys.splice(index, 1);
    }
  },
};

export default mutation;
