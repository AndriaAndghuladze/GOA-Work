//1
import React, { Component, useState, useEffect } from 'react';


class WeatherErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

 
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary - მ დაიჭირა ასინქრონული შეცდომა: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: '15px', border: '1px solid red', borderRadius: '5px' }}>
          <h3>ამინდის მონაცემების ჩატვირთვა ვერ მოხერხდა. სცადეთ მოგვიანებით</h3>
        </div>
      );
    }

    return this.props.children;
  }
}


function WeatherWidget() {
  const [, throwErrorInRender] = useState(null);
  

  useEffect(() => {
    const fetchWeather = setTimeout(() => {
      try {
        throw new Error('სერვერმა დააბრუნა სტატუსი: 500');
      } catch (err) {
        

        throwErrorInRender(() => {
          throw err;
        });
      }
    }, 2000);

    return () => clearTimeout(fetchWeather);
  }, []);

  if (loading) {
    return <p>ამინდის მონაცემები იტვირთება სერვერიდან...</p>;
  }

  return <div>თბილისი: 25C არის დღეს</div>;
}

export default function App() {
  return (
    <div style={{ fontFamily: 'cursive', maxWidth: '400px', margin: '50px auto' }}>
      <h2>ჩემი აპლიკაცია</h2>
      
      <WeatherErrorBoundary>
        <WeatherWidget />
      </WeatherErrorBoundary>
    </div>
  );
}

