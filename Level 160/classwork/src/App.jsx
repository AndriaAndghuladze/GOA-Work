import React, { useState, useEffect, Component} from 'react';


class WeatherBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

 
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  componentDidCatch(error, errorInfo) {
    console.error('Boundary-მ დაიჭირა ასინქრონული შეცდომა: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2> მონაცემების ჩატვირთვა ვერ მოხერხდა</h2>
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
        throw new Error('დააბრუნდა სტატუსი: 500');
      } catch (err) {
        

        throwErrorInRender(() => {
          throw err;
        });
      }
    }, 3000);

    return () => clearTimeout(fetchWeather);
  }, []);

  if (loading) {
    return <p>ამინდის მონაცემები იტვირთება სერვერიდან...</p>;
  }

  return <div>Temp:15 c</div>;
}

export default function App() {
  return (
    <div className='Site'>
      <h1>Site</h1>
      
      <WeatherBoundary>
        <WeatherWidget />
      </WeatherBoundary>
    </div>
  );
}