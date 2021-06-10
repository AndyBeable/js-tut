setTimeout(() => {
  console.log('inside');
  setTimeout(() => {
    console.log('inside 2');
    setTimeout(() => {
      console.log('inside 3');
    }, 100);
  }, 100);
}, 1000);

const button = document.querySelector('button');

addClickEventListener(button, () => {
  console.log('Clicked');
});

console.log('outside');

// Callbacks - func that gets passed to another func in order to executed at a later time based on some condition (time, event etc)

function addClickEventListener(element, callback) {
  element.addEventListener('click', callback);
}
