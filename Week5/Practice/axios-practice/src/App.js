import axios from "axios";

function App() {
  axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <>
      <h1>5주차 실습</h1>
    </>
  );
}

export default App;