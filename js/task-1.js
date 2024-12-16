const categoriesList = document.querySelector('.categories');

const itemsList = categoriesList.querySelectorAll('.item');
console.log(`Number of categories : ${itemsList.length}`);

const items = document.querySelectorAll('ul.categories li.item');

items.forEach(item => {
    const title = item.querySelector('h2').textContent;

const elementCount = item.querySelectorAll('li').length;
 console.log(`Category: ${title}, Elements: ${elementCount}`);
});

