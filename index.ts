import React, { useState, useRef } from "react";
/**
 * This hook is a combination of states and refs. In React, you can't change a state value inside a function like a setInterval. This hook solves this problem.
 * @param initialValue - The inital value
 * @returns {[T, React.MutableRefObject<T>, React.Dispatch<T>]}
 */
export const useReferredState = <T>(
	initialValue: T
): [T, React.MutableRefObject<T>, React.Dispatch<T>] => {
	const [state, setState] = useState<T>(initialValue);
	const reference = useRef<T>(state);

	const setReferredState = (value: T) => {
		reference.current = value;
		setState(value);
	};

	return [state, reference, setReferredState];
};

export default useReferredState;
