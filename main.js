window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please fill out the task');
            return;
        } 

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        // task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        const input_el = document.createElement('input');
        input_el.classList.add('text');
        input_el.value = task;
        input_el.type = 'text';
        input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(input_el);

        const actions_el = document.createElement('div');
        actions_el.classList.add('actions');

        const edit_el = document.createElement('button');
        edit_el.classList.add('edit');
        edit_el.innerText = "Edit";

        const delete_el = document.createElement('button');
        delete_el.classList.add('delete');
        delete_el.innerText = "Delete";
        
        actions_el.appendChild(edit_el);
        actions_el.appendChild(delete_el);
        
        task_el.appendChild(actions_el);
        list_el.appendChild(task_el);

        edit_el.addEventListener('click', () => {
            if (edit_el.innerText.toLowerCase() == 'edit') {
                input_el.removeAttribute('readonly');
                input_el.focus();
                edit_el.innerText = "Save";
            } else {
                edit_el.innerText = "Edit";
                input_el.setAttribute('readonly', 'readonly');
            }

        });

        delete_el.addEventListener('click', () => {
            task_el.remove();
        });



    });
});