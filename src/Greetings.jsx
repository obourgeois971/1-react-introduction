export function Greetings(props) {
  console.log("***", props);
  return (
    <ul>
      <li>Hello {props.firstName}</li>
      <li>your are {props.age} years old</li>
      <li>friend</li>
      <li>{props.children}</li>
    </ul>
  );
}
