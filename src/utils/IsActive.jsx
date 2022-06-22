import { useMatch, useResolvedPath } from "react-router-dom";

const IsActive =  (to) => {
  let resolved = useResolvedPath(to);
  return  useMatch({ path: resolved.pathname, end: true });
}

export default IsActive;
