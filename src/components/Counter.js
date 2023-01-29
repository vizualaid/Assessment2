import React, { useState } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    
    <Segment >
      <Grid columns={2} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px'
                }}>
      <Grid.Row>
          <Grid.Column>
            <div style={{textAlign: "center"}}><h3>Count: {count}</h3></div>
          </Grid.Column>
        </Grid.Row>
        {/* <div  style={{textAlign:'center'}}>Count: {count}</div> */}
        <Grid.Row style={{display: 'flex',  alignItems: 'center',  justifyContent: 'center',  marginTop:'5%' , marginBottom:'5%'  }}>

          <Grid.Column>
            <Button color='green' onClick={handleIncrement}>Increment</Button>
          </Grid.Column>

          <Grid.Column>
            <Button color='red' disabled={count === 0} onClick={handleDecrement}>Decrement</Button>
          </Grid.Column>
        </Grid.Row>

        
      </Grid>
      <div>
       <h3> Name: ISHA KUNWAR</h3>
        
        <h3>Registration No. : 12011399</h3>
      </div>
    </Segment>
  )
}

export default Counter
