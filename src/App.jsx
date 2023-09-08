import { Greetings } from "./Greetings";
import { AgeCounter } from "./AgeCounter";
import { Movies } from "./Movies";

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
        isSunny={false}
      >
        <img src="https://picsum.photos/200/300" />
      </Greetings>
      <div>
        <AgeCounter />
      </div>
      <div>
        <Movies />
      </div>
    </>
  );
}
