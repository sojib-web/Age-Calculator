const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// @ts-ignore

const calculateAge = () => {
  // @ts-ignore
  const birthdayValue = birthdayEl.value;
  //   console.log(birthdayValue);
  if (birthdayValue === "") {
    alert("please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    // console.log(age);

    // @ts-ignore
    resultEl.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old `;
  }
};

const getAge = (birthdayValue) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    // @ts-ignore
    age--;
  }
  return age;
};

// @ts-ignore
btnEl.addEventListener("click", calculateAge);
calculateAge();
