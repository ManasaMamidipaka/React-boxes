const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  const boxElement = (
    <div className={classname}>
      <h1 className="description"> {name} </h1>
    </div>
  );
  return boxElement;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Boxes </h1>
    <Box className="small" name="Small" />
    <Box className="medium" name="Medium" />
    <Box className="large" name="Large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
