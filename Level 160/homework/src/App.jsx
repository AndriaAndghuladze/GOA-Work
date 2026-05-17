//1
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function BrokenChart({ data }) {
  if (!Array.isArray(data)) {
    throw new Error("Chart crashed");
  }

  return (
    <div
      style={{
        padding: "20px",
        background: "green",
        color: "white",
        borderRadius: "10px",
      }}
    >
      Third Party Chart Library
    </div>
  );
}

function FallbackTable() {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Andria</td>
          <td>95</td>
        </tr>

        <tr>
          <td>Luka</td>
          <td>88</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function App() {
  const brokenData = null;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Broken Component Shield</h1>

      <ErrorBoundary fallback={<FallbackTable />}>
        <BrokenChart data={brokenData} />
      </ErrorBoundary>
    </div>
  );
}

//2
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

function Message({ user }) {
  const firstLetter = user.name.toUpperCase();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#2196f3",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        {firstLetter}
      </div>

      <p>{user.message}</p>
    </div>
  );
}

export default function App() {
  const users = [
    {
      name: "A",
      message: "Hello",
    },
    {
      name: null,
      message: "Broken User",
    },
    {
      name: "L",
      message: "React Error Boundary",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Messages Panel</h1>

      {users.map((user, index) => (
        <ErrorBoundary key={index}>
          <Message user={user} />
        </ErrorBoundary>
      ))}
    </div>
  );
}