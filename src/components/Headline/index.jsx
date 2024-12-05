export const Headlines = (props) => { // propsは親から渡された情報
    return (
        <ol>
          <li>
          Get started by editing {props.children}.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
  );
}
