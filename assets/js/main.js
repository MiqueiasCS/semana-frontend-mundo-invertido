const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");

const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener("click", () => {
  const subscription = {
    email: txtEmail.value,
    name: txtName.value,
    level: txtLevel.value,
    character: txtCharacter.value,
  };

  console.log(subscription);
});
