const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const title= document.getElementById ('title');
const daysList = document.getElementById ('daysList');
const selectDays = document.getElementById ('daysSelect');
/*
const itemList = document.createElement ('li');
itemList.textContent = 'Lunes';

daysList.appendChild (itemList);
*/

title.innerHTML = `DOM - Crear e insertar elementos `;

const fragment = document.createDocumentFragment (); 

/*
for (const daysList of days) {
    const itemList = document.createElement ('li');
    itemList.textContent = daysList;
    fragment.appendChild (itemList);
}
 */

        for (const day of days) {
            const option = document.createElement ('option');
            option.textContent = day;
            selectDays.appendChild (option);



            
        }
        selectDays.appendChild (fragment);
