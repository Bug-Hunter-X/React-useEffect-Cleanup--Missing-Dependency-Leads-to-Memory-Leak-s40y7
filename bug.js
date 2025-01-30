```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array: missing 'count'
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Missing 'count' here

  return <div>Count: {count}</div>;
}
```