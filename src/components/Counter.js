import React, { useState } from 'react'
import { Button, Card, Grid, Segment,Icon, Image  } from 'semantic-ui-react'

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

    <div style={{padding:'40px',display: 'flex', justifyContent: 'center' }}>
    <Segment placeholder  >
   
       
      <Grid columns={2} style={{ justifyContent: 'center', margin:'5px' }} >
        <Grid.Row >
          <Grid.Column>
            <div>
            <h2>Count </h2>
            <h2>{count}</h2>
            </div>
          </Grid.Column>
        </Grid.Row>
       
        <Grid.Row
        style={{ marginTop:'5%' , marginBottom:'5%'  }}
        >

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
    

    </div>
  )
}

export default Counter
