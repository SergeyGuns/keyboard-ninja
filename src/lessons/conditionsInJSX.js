const conditionsInJSX = `const sampleComponent = () => {
  return isTrue ? <p>True!</p> : <none/>
};

const sampleComponent = () => {
  return isTrue && <p>True!</p>
};

// Y soo many ternary??? :-/
const sampleComponent = () => {
  return (
    <div>
      {flag && flag2 && !flag3
        ? flag4
        ? <p>Blah</p>
        : flag5
        ? <p>Meh</p>
        : <p>Herp</p>
        : <p>Derp</p>
      }
    </div>
  )
};

const sampleComponent = () => {
  return (
    <div>
      {
        (() => {
          if (flag && flag2 && !flag3) {
            if (flag4) {
              return <p>Blah</p>
            } else if (flag5) {
              return <p>Meh</p>
            } else {
              return <p>Herp</p>
            }
          } else {
            return <p>Derp</p>
          }
        })()
      }
    </div>
  )
};

`

export default conditionsInJSX