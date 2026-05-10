import Bug from "./Bug";
import ErrorBoundary from "./ErrorBund";

export default function App() {
  return (
    <div>
      <h1>Main Page</h1>

      <ErrorBoundary>
        <Bug />
      </ErrorBoundary>
    </div>
  );
}