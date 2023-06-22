import Swal from 'sweetalert2/dist/sweetalert2.js'
const socket = io();

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error'
});