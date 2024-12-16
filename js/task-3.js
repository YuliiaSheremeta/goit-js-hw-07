const input = document.querySelector('.input-task-tree');
        const output = document.querySelector('#name-output');

        input.addEventListener('input', () => {
            const trimmedValue = input.value.trim(); 
            output.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous'; 
        });