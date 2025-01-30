# React useEffect Cleanup Bug

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include necessary state variables in the dependency array. This can lead to memory leaks and unexpected behavior.

## Bug Description

The `MyComponent` component uses `useEffect` to start an interval that increments a counter. However, the dependency array is empty (`[]`), meaning the effect runs only once on mount.  Even when the component unmounts, the interval continues to run because the cleanup function (`clearInterval`) is never called.

## Solution

The solution involves adding the `count` state variable to the dependency array. This ensures that the effect runs whenever the `count` value changes and the cleanup function is called appropriately when the component unmounts. 
