import {
  CHANGE_FONT,
  TOGGLE_SHOW_ITEM,
  CHANGE_RESUME_ORDER,
  UPDATE_EDITOR_STATUS,
  TOGGLE_EDITOR,
} from '../actions/app.actions';
import { EDITOR_STATUS, saveTools, loadTools } from '../helpers/tools.helper';
import { defaultResumeOrder } from '../helpers/resume.helper';


const storedTools = loadTools();
const initialState = {
  font: 'Open Sans, sans-serif',
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: false,
  order: defaultResumeOrder,
  showTechSkills: true,
  showProjects: true,
  showEducation: true,
  showCertification: true,
  showExperience: true,
  showLinkedIn: false,
  showWebsite: true,
  editorStatus: EDITOR_STATUS.WAITING,
};

const getItemToToggle = (state, action) => ({
  [action.item]: !state[action.item],
});

const changeFont = (state, action) => ({
  ...state,
  font: action.font,
});

const toggleShowItem = (state, action) => ({
  ...state,
  ...getItemToToggle(state, action),
});

const changeResumeOrder = (state, action) => ({
  ...state,
  order: action.order,
});

const updateResumeEditorStatus = (state, action) => ({
  ...state,
  editorStatus: action.status,
});

const toggleEditor = state => ({
  ...state,
  editorStatus: EDITOR_STATUS.WAITING,
});

export default (state = storedTools || initialState, action) => {
  switch (action.type) {
    case CHANGE_FONT:
      return saveTools(changeFont(state, action));
    case TOGGLE_SHOW_ITEM:
      return saveTools(toggleShowItem(state, action));
    case CHANGE_RESUME_ORDER:
      return saveTools(changeResumeOrder(state, action));
    case UPDATE_EDITOR_STATUS:
      return updateResumeEditorStatus(state, action);
    case TOGGLE_EDITOR:
      return toggleEditor(state);
    default:
      return state;
  }
};