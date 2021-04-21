## How to use/import

First of all, download this package with `yarn` or `npm`:

```js
//yarn
yarn add use_referred_state
//or npm
npm i use_referred_state
```

To use this package just import it to your project:

```js
import useReferredState from "use_referred_state";
//or
const useReferredState = require("use_referred_state");
```

And then call the hook in your functionnal component:
In javascript:

```js
const [notes, notesRef, setNotes] = useReferredState();
```

```ts
const [notes, notesRef, setNotes] = useReferredState<string[]>();
```

This will set a variable `notes` which will be a `state` variable and a `notesRef` variable which wil be a `ref` variable.

You will need to access the `notesRef` value by access `current` property:

```js
notesRef.current === notes;
```

This `setNotes` method will update both `notesRef` and `notes` variable.

## Usage example

```tsx
import React, { useEffect } from "react"
import axios from "axios"
import useReferredState from "use_referred_state"

const NoteList: React.FC = () => {
    const [notes, notesRef, setNotes] = useReferredState<string[]>([ 'hi', 'bye' ]);
    useEffect(() => {
        axios.get<string[]>('./notes').then((res) => setNotes([ ...notesRef.current, ...res.data]));
    }, []);

    return (
        <>
            <h1>Notes: </h1>
            <ol>
                {notes.map((note) => (
                    <li>{note}</li>
                ))}
            </ol>
        </>
    )
}

```
