import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className=" flex flex-col">
      404 Not Found
      <Link to="/">Return home</Link>
    </div>
  );
}
