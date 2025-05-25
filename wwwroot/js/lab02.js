const facultyUri = '/api/Faculties';
const departmentUri = '/api/Departments';
const materialUri = '/api/Materials';

let faculties = [];
let departments = [];
let materials = [];

// ==================== FACULTIES ====================

function getFaculties() {
    fetch(facultyUri)
        .then(res => res.json())
        .then(data => {
            faculties = data;
            _displayFaculties();
            _populateFacultyDropdowns();
        })
        .catch(err => console.error('Unable to get faculties.', err));
}

function addFaculty() {
    const name = document.getElementById('add-faculty-name').value.trim();
    fetch(facultyUri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    })
        .then(() => {
            document.getElementById('add-faculty-name').value = '';
            getFaculties();
        })
        .catch(err => console.error('Unable to add faculty.', err));
}

function displayEditFacultyForm(id) {
    const f = faculties.find(x => x.id === id);
    document.getElementById('edit-faculty-id').value = f.id;
    document.getElementById('edit-faculty-name').value = f.name;
    document.getElementById('editFaculty').style.display = 'block';
}

function updateFaculty() {
    const id = parseInt(document.getElementById('edit-faculty-id').value, 10);
    const name = document.getElementById('edit-faculty-name').value.trim();
    fetch(`${facultyUri}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name })
    })
        .then(() => {
            closeFacultyEdit();
            getFaculties();
        })
        .catch(err => console.error('Unable to update faculty.', err));
    return false;
}

function deleteFaculty(id) {
    fetch(`${facultyUri}/${id}`, { method: 'DELETE' })
        .then(() => getFaculties())
        .catch(err => console.error('Unable to delete faculty.', err));
}

function closeFacultyEdit() {
    document.getElementById('editFaculty').style.display = 'none';
}

function _displayFaculties() {
    const tBody = document.getElementById('faculties');
    tBody.innerHTML = '';
    faculties.forEach(f => {
        const tr = tBody.insertRow();
        tr.insertCell().innerText = f.id;
        tr.insertCell().innerText = f.name;
        const cell = tr.insertCell();
        cell.appendChild(_createButton('Edit', () => displayEditFacultyForm(f.id)));
        cell.appendChild(_createButton('Delete', () => deleteFaculty(f.id)));
    });
}

// ==================== DEPARTMENTS ====================

function getDepartments() {
    fetch(departmentUri)
        .then(res => res.json())
        .then(data => {
            departments = data;
            _displayDepartments();
            _populateDepartmentDropdowns();
        })
        .catch(err => console.error('Unable to get departments.', err));
}

function addDepartment() {
    const name = document.getElementById('add-department-name').value.trim();
    fetch(departmentUri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    })
        .then(() => {
            document.getElementById('add-department-name').value = '';
            getDepartments();
        })
        .catch(err => console.error('Unable to add department.', err));
}

function displayEditDepartmentForm(id) {
    const d = departments.find(x => x.id === id);
    document.getElementById('edit-department-id').value = d.id;
    document.getElementById('edit-department-name').value = d.name;
    document.getElementById('editDepartment').style.display = 'block';
}

function updateDepartment() {
    const id = parseInt(document.getElementById('edit-department-id').value, 10);
    const name = document.getElementById('edit-department-name').value.trim();
    fetch(`${departmentUri}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name })
    })
        .then(() => {
            closeDepartmentEdit();
            getDepartments();
        })
        .catch(err => console.error('Unable to update department.', err));
    return false;
}

function deleteDepartment(id) {
    fetch(`${departmentUri}/${id}`, { method: 'DELETE' })
        .then(() => getDepartments())
        .catch(err => console.error('Unable to delete department.', err));
}

function closeDepartmentEdit() {
    document.getElementById('editDepartment').style.display = 'none';
}

function _displayDepartments() {
    const tBody = document.getElementById('departments');
    tBody.innerHTML = '';
    departments.forEach(d => {
        const tr = tBody.insertRow();
        tr.insertCell().innerText = d.id;
        tr.insertCell().innerText = d.name;
        const cell = tr.insertCell();
        cell.appendChild(_createButton('Edit', () => displayEditDepartmentForm(d.id)));
        cell.appendChild(_createButton('Delete', () => deleteDepartment(d.id)));
    });
}

// ==================== MATERIALS ====================

function getMaterials() {
    fetch(materialUri)
        .then(res => res.json())
        .then(data => {
            materials = data;
            _displayMaterials();
        })
        .catch(err => console.error('Unable to get materials.', err));
}

function addMaterial() {
    const name = document.getElementById('add-material-name').value.trim();
    const description = document.getElementById('add-material-description').value.trim();
    const type = document.getElementById('add-material-type').value.trim();
    const author = document.getElementById('add-material-author').value.trim();
    const facultyId = parseInt(document.getElementById('add-material-faculty').value, 10);
    const departmentId = parseInt(document.getElementById('add-material-department').value, 10);

    fetch(materialUri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name, description, type, author, facultyId, departmentId
        })
    })
        .then(() => {
            ['add-material-name', 'add-material-description', 'add-material-type', 'add-material-author']
                .forEach(id => document.getElementById(id).value = '');
            getMaterials();
        })
        .catch(err => console.error('Unable to add material.', err));
}

function displayEditMaterialForm(id) {
    const m = materials.find(x => x.id === id);
    document.getElementById('edit-material-id').value = m.id;
    document.getElementById('edit-material-name').value = m.name;
    document.getElementById('edit-material-description').value = m.description;
    document.getElementById('edit-material-type').value = m.type;
    document.getElementById('edit-material-author').value = m.author;
    document.getElementById('edit-material-faculty').value = m.facultyId;
    document.getElementById('edit-material-department').value = m.departmentId;
    document.getElementById('editMaterial').style.display = 'block';
}

function updateMaterial() {
    const id = parseInt(document.getElementById('edit-material-id').value, 10);
    const name = document.getElementById('edit-material-name').value.trim();
    const description = document.getElementById('edit-material-description').value.trim();
    const type = document.getElementById('edit-material-type').value.trim();
    const author = document.getElementById('edit-material-author').value.trim();
    const facultyId = parseInt(document.getElementById('edit-material-faculty').value, 10);
    const departmentId = parseInt(document.getElementById('edit-material-department').value, 10);

    fetch(`${materialUri}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name, description, type, author, facultyId, departmentId })
    })
        .then(() => {
            closeMaterialEdit();
            getMaterials();
        })
        .catch(err => console.error('Unable to update material.', err));
}

document.addEventListener('DOMContentLoaded', () => {
    getFaculties();
    getDepartments();
    getMaterials();

    document.getElementById('add-faculty-form').addEventListener('submit', function (e) {
        e.preventDefault();
        addFaculty();
    });
    document.getElementById('add-department-form').addEventListener('submit', function (e) {
        e.preventDefault();
        addDepartment();
    });
    document.getElementById('add-material-form').addEventListener('submit', function (e) {
        e.preventDefault();
        addMaterial();
    });

    document.getElementById('edit-faculty-form').addEventListener('submit', function (e) {
        e.preventDefault();
        updateFaculty();
    });
    document.getElementById('edit-department-form').addEventListener('submit', function (e) {
        e.preventDefault();
        updateDepartment();
    });
    document.getElementById('edit-material-form').addEventListener('submit', function (e) {
        e.preventDefault();
        updateMaterial();
    });
});
