import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faPlus, faPenToSquare, faTrash, faShareFromSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(faSpinner, faPlus, faPenToSquare, faTrash);

export { faSpinner, faPlus, faPenToSquare, faTrash, faShareFromSquare, faLink };
