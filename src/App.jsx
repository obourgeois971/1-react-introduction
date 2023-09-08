import { Greetings } from "./Greetings";

export function App() {
  return (
    <>
      <input type="text"></input>
      <button>Click</button>
      <Greetings
        firstName={"Rachel"}
        age={30}
        car={{ color: "red", vitess: 300 }}
        doSomething={function () {
          console.log("Hello dans une fonction annonyme");
        }}
      >
        <img src="https://picsum.photos/200/300" />
      </Greetings>
    </>
  );
}
