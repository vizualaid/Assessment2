import React, { useState } from 'react'
import { Button,  Grid, Segment } from 'semantic-ui-react'

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

      <Grid columns={2} style={{ textAlign:'center', justifyContent:'center'}}> 
       
        <Grid.Row >
          <Grid.Column>
            <div>
            <h2>Count </h2>
            <h2>{count}</h2>
            </div>
          </Grid.Column>
        </Grid.Row>
       
        <Grid.Row >

          <Grid.Column>
            <Button color='green' onClick={handleIncrement}>Increment</Button>
          </Grid.Column>

          <Grid.Column>
            <Button color='red' 
            disabled={count === 0} 
            onClick={handleDecrement}>Decrement</Button>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    </Segment>
    
  )
}

export default Counter
