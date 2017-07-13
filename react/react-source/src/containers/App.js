// 1.2.2 JSX 基本语法
const List = () => {
  <div>
    <Title> This is title </Title>
    <ul>
      <li>list item</li>
      <li>list item</li>
      <li>list item</li>
    </ul>
  </div>
};

const Title = (children) => (
  <h3>{children}</h3>
)

const App = () => (
  <MUI.RaiseButton label="Default" />
)


// 注释
const App = (
  <Nav>
    {/* 节点注释 */}
    <Person
      /* 多行注释 */
      name={window.isloggedIn ? window.name : ''}
    />
  </Nav>
);

<!--[if IE]>
  <p>work in IE browser</p>
<![endif]-->



{
  (!!window.ActiveXObject || 'ActiveXObject' in window) ?
  <p>work in IE browser</p>
}

<meta dangerouslySetInnerHTMl={
  _html:`
    <script srcc="//example.org/app.js"></script>
    <![endif]-->
  `
} />
