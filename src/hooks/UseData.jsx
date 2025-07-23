import { useContext } from "react";
import { DataContext } from '../context/DataContext';

function UseData() {
  return useContext(DataContext);
}

export default UseData;