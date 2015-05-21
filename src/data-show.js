var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        现在时间：{this.props.date.toLocaleString()}
      </p>
    );
  }
});

setInterval(function() {
  React.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('content')
  );
}, 100);
