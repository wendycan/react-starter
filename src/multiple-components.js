var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic />
        <ProfileLink article={this.props.article} />
      </div>
    );
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={'http://yuetai.wendycan.org/assets/logo-cfffdfb0eebbce9dea0a81f0603f7faf.png'} />
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'http://yuetai.wendycan.org/articles/' + this.props.article}>
        {this.props.article}
      </a>
    );
  }
});

React.render(
  <Avatar article="24" />,
  document.getElementById('content')
);
