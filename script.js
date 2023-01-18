function ageChecker() {
  let age = prompt('What is your age?');

  if (age <= 19) {
    alert('You are not eligible to play gambling');
  } else {
    alert('You can play gambling');
  }
}
