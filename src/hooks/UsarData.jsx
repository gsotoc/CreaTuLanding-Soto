import { useContext } from "react";
import { DataContext } from '../context/DataContext';

function UsarData() {
  return useContext(DataContext);
}

export default UsarData;