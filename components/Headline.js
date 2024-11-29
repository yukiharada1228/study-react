export function Headlines(props) { // propsは親から渡された情報
    return (
        <ol>
          <li>
            Get started by editing <code>{props.path}</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
  );
}
