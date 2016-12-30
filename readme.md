# Mapped type issue
The scenario is creating a styleguide for react components with nice type safety.

## To run
`npm run build`

then `node dist/index.js`

## Expected
```
const rendered = Example({
    title: 'Thing!',
    propTypeDescription:{
        prop1: 'Ok'
    }
})
```

Should fail to compile saying `prop2` has not been defined
