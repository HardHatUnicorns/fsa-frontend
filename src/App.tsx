import "./App.css";
import { useStyles } from "./App.styles";

function App() {
  const classes = useStyles();

  return <div className={classes.app}>test</div>;
}

export default App;
