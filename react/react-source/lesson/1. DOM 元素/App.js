/*
<button class="btn btn-blue">
<em>Confirm</em>
</button>
*/
{
  type:'button',
  props: {
    className: "btn btn-bue",
    children: [{
      type: 'em',
      props: {
        children: 'Confirm'
      }
    }]
  }
}

// TODO: 2. 组件元素
const Button = ({ color, text }) => {
  return {
      type: 'button',
      props: {
        className: `btn btn-${color}`,
        children: {
          type: 'em',
          props: {
            children: text
          }
        }
      }
  }
}

// TODO: Botton
{
  type: Button,
  props: {
    color: 'blue',
    children: 'Confirm'
  }
}

const DangerButton = ({ text }) => ({
  type: Button,
  props: {
    color: 'red',
    children: text
  }
});

// TODO:直观地看， DangerButton 从视觉上为我们定义了“危险的按钮”这样一种新的组件元素。接着，我们可以很轻松地运用它，继续封装新的组件元素：
const DeleteAccount = () => ({
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props; {
          children: 'Are you sure?'
        }
    },
    {
      type: DangerButton,
      props: {
        children: 'Confirm'
      }
    },
    {
      type: Button,
      props: {
        color: 'blue',
        children: 'Cancel'
      }
    }
  ]
  }
});


// TODO: DeleteAccount 清晰地表达了一个功能模块、一段提示语、一个表示确认的警示按钮和一个表示取消的普通按钮。不过在表达还不怎么复杂的结构时，它就力不从心了。这让我们想起使用HTML 书写结构时的畅快感受，JSX 语法为此应运而生。假如我们使用 JSX 语法来重新表达上述组件元素，只需这么写
const DeleteAccount = () => (
  <div>
    <p>Are you sure?</p>
    <Deletebutton>Confirm</Deletebutton>
    <Buttom color="blue"></Button>
  </div>
);

// TODO: 我们试着将 DeleteAccount 组件通过 Babel 转译成 React 可以执行的代码：
var DeleteAccount = function DeleteAccount(){
  return React,createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'are you sure?'
    ),
    React.createElement(
      DangerButton,
      null,
      'confirm'
    ),
    React.createElement(
      Button,
      { color: 'blue' },
      'Cancel'
    )
  );
}
