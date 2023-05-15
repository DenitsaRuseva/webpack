import '../styles/index.scss';
import {onLoadEventHandler, newTodoEventHandler, removeTodoEventHandler,confirmRemoveEventHandler, toggleTodoEventListener} from './event-handllers';


export function renderApp() {
    onLoadEventHandler()
}

window.addEventListener('load', renderApp)
document.addEventListener('change', function (event) {
    if (event.target.classList.contains('new-todo')) {
        newTodoEventHandler(event)
    }
})
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        removeTodoEventHandler(event)
    }
    if (event.target.dataset.element === 'real-checkbox') {
        toggleTodoEventListener(event)
    }
    if (event.target.id === 'modal-delete-button') {
        confirmRemoveEventHandler(event)
    }
})